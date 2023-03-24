

const persone = document.querySelector ('.person')
const containerLesson = document.querySelector('.containerLesson')
const addUserbutton = document.querySelector ('.addUserBtn')
const user = document.querySelector ('.user')
const score = document.querySelector ('.score')
const addBtn = document.querySelector ('.Add')
const removeBtn = document.querySelector ('.remove')




// მომხმარებლის დამატება



    

addUserbutton.addEventListener ('click', function() {

    let userInput = document.querySelector ('.userInput');
    let userunputValue = userInput.value
    userInput.value = ''
   
        let personName = document.createElement ('div');
        personName.classList.add ('personname')

        persone.appendChild (personName)

        let scoreList = document.createElement('div')
        scoreList.classList.add('scoreList')

        score.appendChild (scoreList)

        let list = document.createElement ('li');
        list.innerText = '0.00'

        scoreList.appendChild (list)

        
    if (userunputValue === '') {
        persone.removeChild (personName)
        score.removeChild (scoreList)
        
    } else {
        let li = document.createElement ('li')
        li.innerText = userunputValue
        personName.appendChild (li)
    

    let span = document.createElement ('span')
        span.innerText = 'X'
        
        personName.appendChild (span)

        span.addEventListener ('click', function () {
            persone.removeChild (personName)
            score.removeChild (scoreList)
            
        })

    }
  
  
})

// გაკვეთილების დამატება


// console.log(persone.children.length);

let table = document.createElement ('table')
    containerLesson.appendChild(table)


    
// ------------------------------------------------
    var tr = document.createElement ('tr')
    tr.classList.add ('data')

  
    

 addBtn.addEventListener ('click', function () {

    
    table.appendChild(tr)
    

    var th = document.createElement ('th')
    th.textContent = 'mon 5 march'
    tr.appendChild (th)

    for (let i = 0; i < persone.children.length; i++){
        
        var trScore = document.createElement ('tr')
        trScore.classList.add ('scores')
        var td = document.createElement ('td')
        td.textContent = '0.00'
        table.appendChild (trScore)
        trScore.appendChild (td);
        
        
    }

    
    
   
    
    
    
    
  
    
    
        
            
    
    
    
        
            
    
    // for (let i = 0; i < persone.children.length; i++) {
    
        
    //     let table = document.createElement ('table')
    //     lesson.appendChild (table)
 
    //     let td = document.createElement ('td')
    //     td.innerText = '0.00'
    //     table.appendChild (td)

    //     td.addEventListener ('click', function () {

            const currentNumber = Number(td.textContent);
            const newNumber = prompt("Enter a new number");
            if (newNumber) {
                td.textContent = Number(newNumber);
    //           }
    //     })
         
    //  }
    

    
})

removeBtn.addEventListener('click', function() {
    containerLesson.lastChild.remove()
    
 })

