import {Canvas} from "../../../canvas-framework-23/src/ts/Canvas";
import {settings} from "./settings";
import {Filter} from "./Filter";

let file;

const canvasElement: HTMLCanvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
const canvas: Canvas = new Canvas(canvasElement, {width: settings.canvas.width, height: settings.canvas.height});
const input: HTMLInputElement = document.getElementById('upload-img') as HTMLInputElement;
const opacityInput: HTMLInputElement = document.getElementById('opacity') as HTMLInputElement;
const reader = new FileReader();
const image = new Image();
let imageLoaded = false;
const filters: Filter[] = [];

function loadImage(event: Event) {
    const target = event.currentTarget as HTMLInputElement;
    if (target.files.length === 1) {
        file = target.files[0];
        reader.readAsDataURL(file);
    } else {
        alert("Vous devez charger au moins une image");
    }
}

function addEventListeners() {
    input.addEventListener('change', loadImage);
    reader.addEventListener('loadend', (event: ProgressEvent) => {
        console.log(reader.result);
        image.src = reader.result as string;
    });

    image.addEventListener('load', () => {
        if (image.width > settings.canvas.maxWidth || image.height > settings.canvas.maxHeight) {
            alert(`L'image est trop grande max(l${settings.canvas.maxWidth},h${settings.canvas.maxHeight})`);
            imageLoaded = false;
        } else {
            canvas.height = image.height;
            canvas.width = image.width;

        }
        drawImage();
        imageLoaded = true;
    });
    canvas.canvasElement.addEventListener('click', () => {
        if (!imageLoaded) {
            input.click();
        }
    });

    opacityInput.addEventListener('input', (event) => {
        if (imageLoaded) {
            canvas.clear();
            const target = event.currentTarget as HTMLInputElement;
            for (const filter of filters) {
                if (filter.name === target.id) {
                    filter.value = target.value;
                }
            }
            drawImage();
        }
    });

}

function loadFilters() {
    for (const rangeInput of document.getElementsByClassName('form-range')) {
        // @ts-ignore
        filters.push({name: rangeInput.id, unit: rangeInput.dataset.unit, value: rangeInput.value});
    }
}

function drawImage() {
    canvas.ctx.filter = filters.map((filter) => {
        return `${filter.name}(${filter.value}${filter.unit})`;
    }).join(' ');
    canvas.ctx.drawImage(image, 0, 0);
}

function main() {
    addEventListeners();
    loadFilters();
    drawImage();
}

main();