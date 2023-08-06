const createContact= () =>{
    
    // const contact = document.createElement('div')
    // contact.classList.add('contact')

    const content = document.querySelector("#content");
    let pageContent = document.createElement("div");
    pageContent.setAttribute("id", "page-content")
  
    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '📞 123 456 789'
  
    const address = document.createElement('p')
    address.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA'
  
    const restaurantLocation = document.createElement('img')
   
    pageContent.appendChild(phoneNumber)
    pageContent.appendChild(address)
    pageContent.appendChild(restaurantLocation)
  
    content.appendChild(pageContent)
  }
  
  
  export default createContact;
