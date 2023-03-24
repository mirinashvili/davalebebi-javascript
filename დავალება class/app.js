class Contact {
    firstName;
    lastName;
    email;
    phoneNumber;
    contactImageUrl;
  
    constructor(firstName, lastName, email, phoneNumber, contactImageUrl) {
      
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.contactImageUrl = contactImageUrl;
    }
  }
  
  const contactCards = document.querySelector(".contact-cards");
  
  // class ViewController {
  //   generateContactCard(contactItem) {
  //     return `<div class="card">
  //       <img
  //         src="${contactItem.contactImageUrl}"
  //         alt=""
  //         class="card-img-top"
  //       />
  //       <div class="card-body">
  //         <h5 class="card-title">${contactItem.firstName} ${contactItem.lastName}</h5>
  //       </div>
  //       <ul class="list-group list-group-flush">
  //         <li class="list-group-item">
  //           Number: <strong>${contactItem.phoneNumber}</strong>
  //         </li>
  //         <li class="list-group-item">
  //           Email: <strong>${contactItem.email}</strong>
  //         </li>
  //       </ul>
  //     </div>
  //   `;
  //   }
  //   insertContactCard(contactItem) {
  //     contactCards.innerHTML += this.generateContactCard(contactItem);
  //   }
  // }
  
  function generateContactCard(contactItem) {
    return `<div class="card">
      <img
        src="${contactItem.contactImageUrl}"
        alt=""
        class="card-img-top"
      />
      <div class="card-body">
        <h5 class="card-title">${contactItem.firstName} ${contactItem.lastName}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Number: <strong>${contactItem.phoneNumber}</strong>
        </li>
        <li class="list-group-item">
          Email: <strong>${contactItem.email}</strong>
        </li>
      </ul>
    </div>
  `;
  }
  
  function insertContactCard(contactItem) {
    contactCards.innerHTML += generateContactCard(contactItem);
  }
  
  const firstNameInput = document.querySelector("#firstName");
  const lastNameInput = document.querySelector("#lastName");
  const emailInput = document.querySelector("#email");
  const phoneNumberInput = document.querySelector("#phoneNumber");
  const contactImageUrlInput = document.querySelector("#imageUrl");
  const addContactButton = document.querySelector("#addContactButton");
  const errore = document.querySelector(".error");
  // const viewController = new ViewController();
  
  
  addContactButton.addEventListener("click", () => {
    const contact = new Contact(
      contactImageUrlInput.value,
      firstNameInput.value,
      lastNameInput.value,
      emailInput.value,
      phoneNumberInput.value,
      

   
    );


    if (firstNameInput.value === '') {
        
    }
    
    
    insertContactCard(contact);
    
  
 });