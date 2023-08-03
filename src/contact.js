const createContact= () =>{
    const content = document.querySelector("#content");
    const contact = document.createElement('div')
    contact.classList.add('contact')
  
    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '📞 123 456 789'
  
    const address = document.createElement('p')
    address.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA'
  
    const restaurantLocation = document.createElement('img')
    restaurantLocation.src = 'https://goo.gl/maps/kWGHidZTYqVZJvAd8'
    restaurantLocation.alt = 'Mozzafiato restaurant location'
  
    contact.appendChild(phoneNumber)
    contact.appendChild(address)
    contact.appendChild(restaurantLocation)
  
    content.appendChild(contact)
  }
  
  
  export default createContact;