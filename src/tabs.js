import createRestaurantHomePage from "./resturant";
import createMenuPage from './menu';
import createContact from "./contact";

const createTabs = () => {
    const content = document.querySelector("#content");

    // Create the container for the tabs
    const tabsContainer = document.createElement("div");
    tabsContainer.classList.add("nav-bar");
    
    // Create the three divs for the tabs
    const home = document.createElement("div");
    const menu = document.createElement("div");
    const contact = document.createElement("div");

    // Set ids for the divs
    home.setAttribute("id","home-btn");
    menu.setAttribute("id","menu-btn");
    contact.setAttribute("id","contact-btn");

    // Set classes for the divs
    home.classList.add("nav-item");
    menu.classList.add("nav-item");
    contact.classList.add("nav-item");

    // Set text content for the tabs
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    // Append the divs to the tabs container
    tabsContainer.appendChild(home);
    tabsContainer.appendChild(menu);
    tabsContainer.appendChild(contact);

    // Append the tabs container to content
    content.appendChild(tabsContainer);
   
    home.addEventListener('click',() => {
        const pageCont = document.querySelector('#page-content')
        clearContent(pageCont);
        createRestaurantHomePage()
    });

    menu.addEventListener('click',() => {
        const pageCont = document.querySelector('#page-content')
        clearContent(pageCont);
        createMenuPage()
        
    });

    contact.addEventListener('click',() => {
        const pageCont = document.querySelector('#page-content')
        clearContent(pageCont);
        createContact()
       
});
}

function clearContent(pageContainer) {
    if (pageContainer){    
        pageContainer.remove()
    }
}

export default createTabs;
