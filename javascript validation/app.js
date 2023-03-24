
const btn = document.querySelector ('.btn')
const container = document.querySelector ('.container')

const radio = document.querySelectorAll ('.radioValue')





btn.addEventListener ('click', function () {

    const fullname = document.getElementById ('fullName')
    const address = document.getElementById ('address')
    const age = document.getElementById ('age')
    

    let fullnameValue = fullname.value
    let addressValue = address.value
    let ageValue = age.value
    

    

    let card = document.createElement ('div');
    card.classList.add ('card')

    container.appendChild (card)
// ------------------------------
    let fullNames = document.createElement ('div');
    fullNames.classList.add ('fullNames')
    
    card.appendChild (fullNames)


    let h3 = document.createElement ('h3');
    h3.innerHTML = 'fullname:'

    let p = document.createElement ('p');
    p.innerHTML = fullnameValue
    
    fullname.value = ''

    
    fullNames.appendChild (h3)
    fullNames.appendChild (p)

    
    // -------------------
    let fullNamesAge = document.createElement ('div');
    fullNamesAge.classList.add ('fullNames')

    card.appendChild (fullNamesAge)

    let h3Age = document.createElement ('h3');
    h3Age.innerHTML = 'Age:'

    let pAge = document.createElement ('p');
    pAge.innerHTML = ageValue

    age.value = ''
    
    
    fullNamesAge.appendChild (h3Age)
    fullNamesAge.appendChild (pAge)

// ------------------------------
    let fullNamesAddress = document.createElement ('div');
    fullNamesAddress.classList.add ('fullNames')

    card.appendChild (fullNamesAddress)

    let h3Address = document.createElement ('h3');
    h3Address.innerHTML = 'address:'

    let pAddress = document.createElement ('p');
    pAddress.innerHTML = addressValue

    address.value = ''
    
    fullNamesAddress.appendChild (h3Address)
    fullNamesAddress.appendChild (pAddress)

    // --------------------------------------

    let fullNamesRadio = document.createElement ('div');
    fullNamesRadio.classList.add ('genders')

    card.appendChild (fullNamesRadio)

    let h3Radio = document.createElement ('h3');
    h3Radio.innerHTML = 'Gender:'

    let pRadio = document.createElement ('p');

    radio.forEach ((radios) => {

            if (radios.checked) {


                pRadio.innerText = radios.value

                radios.value = ''
                radios.checked = false
                
            } else {
                

            }
            
           
    })
    

    
    fullNamesRadio.appendChild (h3Radio)
    fullNamesRadio.appendChild (pRadio)
    
   
})