import createRestaurantHomePage from "./resturant";
import createMenuPage from './menu';
import createContact from "./contact";

const createTabs = () => {
    const content = document.querySelector("#content");

    // Create the container for the tabs
    const tabsContainer = document.createElement("div");
    tabsContainer.classList.add("nav-bar");
    
    // Create the three divs for the tabs
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");

    // Set ids for the divs
    div1.setAttribute("id","home-btn");
    div2.setAttribute("id","menu-btn");
    div3.setAttribute("id","contact-btn");

    // Set classes for the divs
    div1.classList.add("nav-item");
    div2.classList.add("nav-item");
    div3.classList.add("nav-item");

    // Set text content for the tabs
    div1.textContent = "Home";
    div2.textContent = "Menu";
    div3.textContent = "Contact";

    // Append the divs to the tabs container
    tabsContainer.appendChild(div1);
    tabsContainer.appendChild(div2);
    tabsContainer.appendChild(div3);

    // Append the tabs container to content
    content.appendChild(tabsContainer);

    // Create a container for the page content
    // const pageContainer = document.createElement("div");
    // // pageContainer.classList.add("page-content-1");
    // content.appendChild(pageContainer);

   
    div1.addEventListener('click',() => {
        const c = document.querySelector('#page-content')
        clearContent(c);
        createRestaurantHomePage()
    });

    div2.addEventListener('click',() => {
        const c = document.querySelector('#page-content')
        clearContent(c);
        createMenuPage()
        // pageContainer.appendChild(createMenuPage());
    });

    div3.addEventListener('click',() => {
        const c = document.querySelector('#page-content')
        clearContent(c);
        createContact()
        // pageContainer.appendChild(createContact());
    });
};

function clearContent(pageContainer) {
    if (pageContainer){
        
        pageContainer.remove()
    }
}


export default createTabs;
