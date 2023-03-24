const start = document.querySelector ('.btnStart')
const allBox = document.querySelectorAll ('.box')
const resalt = document.querySelector ('.btnRbg')
const Winer = document.querySelector ('.btnResalt')


function generatRandomNumber (start = 0 , end = 256) {

    return Math.floor (Math.random () * (end - start + 1) + start)
}

function generatRandomColor() {

     return `rbg ( ${generatRandomNumber ()}, ${generatRandomNumber ()}, ${generatRandomNumber ()} )`
}


function getLuckcolor (colorList) {
 
    return colorList [generatRandomNumber (0, colorList.length - 1)];
}

function getRandomColorList () {
    let colorList = [];

    for (let i = 0; i < 6; i++) {
        colorList.push (generatRandomColor() )
    }

    return colorList
}

function startGame() {

    Winer.textContent = 'waiting for your answer'
}

function setColorBox (colorList) {
    allBox.forEach((box, index) => {
        box.style.backgroundColor = colorList [index];
    });
}

start.addEventListener ('click',  () => {
    colorCollection = getRandomColorList ();
    Color = getLuckcolor (colorCollection);

    setColorBox(colorCollection)
   
    resalt.textContent = Color
    startGame ()

    
})


