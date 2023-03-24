
const addLesons = document.querySelector('.Add');
const removeLesons = document.querySelector('.remove');
const allTr = document.querySelectorAll('tr');
const data = document.getElementById('data');
const allLi = document.querySelectorAll('.list');

addLesons.addEventListener('click', function () {
    let th = document.createElement('th');
    th.textContent = 'Mon 5 March';
    data.appendChild(th);

    for (let i = 0; i < allTr.length; i++) {
        if (i > 0) {
            var td = document.createElement('td');
            td.textContent = '0';
            allTr[i].appendChild(td);

            td.addEventListener('click', function (e) {
                const newNumber = prompt('Enter a new number');
                if (newNumber) {
                    e.target.textContent = Number(newNumber);
                }
                updateAverages(); // moved call to updateAverages()
            });
        }
    }

    updateAverages();
});

removeLesons.addEventListener('click', function () {
    allTr.forEach((element) => {
        element.lastChild.remove();
    });

    updateAverages();
});

function updateAverages() {
    for (let colIndex = 1; colIndex < allTr[0].cells.length; colIndex++) {
        let sum = 0;
        let count = 0;
        for (let rowIndex = 1; rowIndex < allTr.length; rowIndex++) {
            let cell = allTr[rowIndex].cells[colIndex];
            if (cell) {
                sum += Number(cell.textContent);
                count++;
            }
        }
        let average = sum / count;
        allLi[colIndex - 1].textContent = `Average: ${average.toFixed(2)}`;
    }
}
