import createRestaurantHomePage from "./resturant";
import createMenuPage from './menu';
import createContact from "./contact";

const createTabs = () => {
    const content = document.querySelector("#content");
    
    //create the three divs
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");

    //set ids for the divs
    div1.setAttribute("id","home-btn");
    div2.setAttribute("id","menu-btn");
    div3.setAttribute("id","contact-btn");

    //set classes for the divs
    div1.classList.add("home");
    div2.classList.add("menu");
    div3.classList.add("contact");

    //set text content for the tabs
    div1.textContent = "Home";
    div2.textContent = "Menu";
    div3.textContent = "Contact";

    //append the divs to content
    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

    div1.addEventListener('click',() => {
        clearContent();
        createRestaurantHomePage();
    })
    div2.addEventListener('click',() => {
        clearContent();
        createMenuPage();
    })
    div3.addEventListener('click',() => {
        clearContent();
        createContact();
    })

    function clearContent () {
        const content = document.querySelector("#content");
        const pageContent = document.querySelector(".page-content");
        if(pageContent){
            content.removeChild(pageContent)
        }
    
    }
}



export default createTabs;