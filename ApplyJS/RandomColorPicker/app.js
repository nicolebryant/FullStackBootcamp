// new random rgb color for background color
// H1 changes to display rgb value

const btn = document.querySelector('#colorPick');
const h1 = document.querySelector('h1');
/* const checkH1Vis = (r, g, b) => {
    if (r + g + b < 100) {
        h1.style.color = 'white';
        console.log('I ran!');
    }
} */
const pickAColor = () => {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    // checkH1Vis(red, green, blue);
    return `rgb(${red}, ${blue}, ${green})`;
}

btn.addEventListener('click', function () {
    // h1.style.color = 'black';
    const rgbVal = pickAColor();
    document.body.style.backgroundColor = rgbVal;
    h1.innerText = rgbVal;
});