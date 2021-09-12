function getDigitElement(digit) {
    const element = document.createElement('button');
    element.innerText = digit;
    return element;
}

function getDigitComponent(digit, onSelected) {
    const element = getDigitElement(digit);
    element.addEventListener('click', onSelected)
    return {
        element
    }
}

export function getDigitsListComponent(wrapper, onSelected) {
    const listComponent = {element: wrapper, currentDigit: undefined}
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    numbers
        .map((number) => getDigitComponent(number, () => {
            listComponent.currentDigit = number;
            onSelected(number);
        }))
        .map((component) => wrapper.appendChild(component.element));
    return listComponent; 
}