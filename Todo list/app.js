


const addText = document.getElementById ('addText');
const main = document.querySelector ('.main')



addText.addEventListener ('click', function () {
    
    const searchText = document.getElementById ('SearchText');
    const textValue = searchText.value

    if (textValue === '') {

        alert ('please add task')
    } else {

    let container = document.createElement ('div')

    container.classList.add ('container')
    main.appendChild(container)

    let inputValue = document.createElement ('div')
    inputValue.classList.add ('inputValue')

    container.appendChild(inputValue)

    let writeText = document.createElement ('input')

    writeText.classList.add ('writeText')
    writeText.type = 'text';
    writeText.value = textValue
    writeText.setAttribute ('readonly', 'readonly')
    
    inputValue.appendChild (writeText)
    searchText.value = '';


    let addAndDelete = document.createElement ('div')
    addAndDelete.classList.add ('addAndDelete')

    container.appendChild (addAndDelete)


// create edit button

    let edit = document.createElement ('button')
    edit.classList.add ('edit')
    edit.innerHTML = 'edit'
    
    addAndDelete.appendChild (edit)


// create delete button

    let deleteBtn = document.createElement ('button');
    deleteBtn.classList.add ('delete');
    deleteBtn.innerHTML = 'delete';
    
    addAndDelete.appendChild (deleteBtn);



    writeText.addEventListener ('click', () => {

        writeText.classList.toggle ('active')
    })

// edit click event

    edit.addEventListener ('click', function () {

        edit.classList.toggle ('active')
        if (edit.innerHTML.toLowerCase () == 'edit') {

            
            writeText.removeAttribute ('readonly');
            writeText.focus();
            edit.innerHTML = 'save';

        } else {

            writeText.setAttribute ('readonly', 'readonly');
            edit.innerHTML = 'edit'
            
        }
    })


// delete click event

    deleteBtn.addEventListener ('click', function () {
        container.remove ()
    })
    }
    

    
})