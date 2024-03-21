export const StandardButton = {
    props: ['buttonLabel', 'buttonColor'],
    template: `<button class="standartButton" :style="{backgroundColor : buttonColor}">{{ buttonLabel }}</button>`
};