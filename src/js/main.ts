class Main {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private uploadHtmlButtonElement: HTMLInputElement;
    private image: HTMLImageElement;
    private reader: FileReader;
    private rotateHtmlButtonElement: HTMLLinkElement;
    private rotationAngle: number;
    private imageUploaded: boolean;
    private filters: { name: string, value: number, unit: string, HtmlInput: HTMLInputElement, HtmlLabel: HTMLLabelElement }[];

    constructor() {
        this.canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.uploadHtmlButtonElement = document.querySelector('#upload-img');
        this.rotateHtmlButtonElement = document.querySelector('#rotate-img');
        this.ctx = this.canvas.getContext('2d');
        this.image = new Image();
        this.reader = new FileReader();
        this.rotationAngle = 0;
        this.imageUploaded = false;
        this.filters = [];
        this.loadFilters();
        console.log(this.filters);
        this.draw();
        this.addEventListeners();
    }

    addEventListeners() {
        // We listen to the change of the input
        this.uploadHtmlButtonElement.addEventListener('change', (event) => {
            // @ts-ignore
            const img = event.currentTarget.files;
            if (img && img.length > 0) {
                this.reader.readAsDataURL(img[0])
            }
        });
        this.canvas.addEventListener('click', (event) => {
            if (!this.imageUploaded) {
                this.uploadHtmlButtonElement.click();
                this.imageUploaded = true;
            }
        });
        // We listen to the loading of reader
        this.reader.addEventListener('loadend', (event) => {
            this.image.src = this.reader.result as string;

        })
        // And finally, we listen to the loading of the image
        this.image.addEventListener('load', () => {
            this.canvas.width = this.image.width;
            this.canvas.height = this.image.height;
            this.draw();
        });

        this.rotateHtmlButtonElement.addEventListener('click', (event) => {
            event.preventDefault();
            [this.canvas.width, this.canvas.height] = [this.canvas.height, this.canvas.width];
            this.rotationAngle += Math.PI / 2;
            this.draw();
        });
        this.filters.forEach((filter) => {
            document.getElementById(filter.name).addEventListener('change', (event) => {
                // @ts-ignore
                filter.value = parseFloat(event.currentTarget.value);
                this.draw();
            });
        });
    }

    loadFilters() {
        document.querySelectorAll('input[type="range"]').forEach((input: HTMLInputElement) => {
            const label: HTMLLabelElement = document.querySelector(`label[for="${input.id}"]`);
            this.filters.push(
                {
                    name: input.id, value: parseFloat(input.value),
                    unit: input.dataset.unit,
                    HtmlInput: input,
                    HtmlLabel: label
                });
            label.textContent = `${label.dataset.text} : ${input.value}${input.dataset.unit}`
        });
    }

    drawBackground() {
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawImage() {
        this.ctx.save();
        this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.rotate(this.rotationAngle);
        this.ctx.drawImage(this.image, -this.canvas.width / 2, -this.canvas.height / 2);
        this.ctx.restore();
    }

    draw() {
        this.ctx.filter = this.filters.map((filter) => {
            return `${filter.name}(${filter.value}${filter.unit})`;
        }).join(' ');
        console.log(this.ctx.filter);
        this.drawBackground();
        this.drawImage();
    }
}

new Main();