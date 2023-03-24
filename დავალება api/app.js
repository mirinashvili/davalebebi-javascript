
const container = document.querySelector ('.container')
const prev = document.querySelector ('.prev')
const next = document.querySelector ('.next')

const userFirstName = document.querySelector ('.userFirstName')
const userLastName = document.querySelector ('.userLastName')
const user_Email = document.querySelector ('.userEmail')
const userProfilURl = document.querySelector ('.userURl')
const useBtn = document.querySelector ('.userBtn')


let currentPage = 1;
let totalPages;

function clearCard () {
    container.innerHTML = ''

}

function getUser (page) {
    clearCard ()
    const data = fetch ('https://reqres.in/api/users?page='+ page)

.then((Response) => Response.json())
.then((data) => {
    console.log(data);
    data.data.forEach(element => {
        
        createUser(element)
        
        totalPages = data.total;

        
    });
    
});
  
}



function createUser(user) {
   
        const {first_name, last_name, email, avatar} = user
        let card = document.createElement ('div')
        card.classList.add ('card')

        container.appendChild (card)

        let img = document.createElement ('img')
        img.src = avatar

        card.appendChild (img)

        let fullname = document.createElement ('div')
        fullname.classList.add ('fullName')

        card.appendChild (fullname)

        let firstName = document.createElement ('p')
        firstName.textContent = first_name

        fullname.appendChild (firstName)

        let lasttName = document.createElement ('p')
        lasttName.textContent = last_name

        fullname.appendChild (lasttName)

        let userEmail = document.createElement ('div')
        userEmail.classList.add ('email')

        card.appendChild (userEmail)

        let emails = document.createElement ('p')
        emails.textContent = email

        userEmail.appendChild (emails)


}


useBtn.addEventListener ('click', function () {
    
    const users = {
        first_name: userFirstName.value,
        last_name: userLastName.value,
        email: user_Email.value,
        avatar: userProfilURl.value

    }


    fetch('https://reqres.in/api/users', {
    method: 'POST',
 
    body: JSON.stringify(users)
})
  .then(response => response.json())
  .then(user => createUser(user) )

  .catch(error => console.error(error));
})



prev.addEventListener('click', function() {
    if ( currentPage === 1){
        return;
    }
    currentPage -= 1;
    
    getUser (currentPage);
})

next.addEventListener ('click', function () {
    if (currentPage === totalPages){
        return;
    }

    currentPage += 1;
    getUser (currentPage);
})

getUser (currentPage);