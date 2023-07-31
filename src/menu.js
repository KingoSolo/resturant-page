//page for the menu

const createMenuPage = () =>{
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add = ("page-content");

    const heading = document.createElement("h1");
    heading.textContent = "Our menu";
    pageContent.appendChild(heading);

   
    const menuItem1 = document.createElement("h1");
    menuItem1.textContent = "Jollof and fried chicken";
    const menuItem1desc = document.createElement("p");
    menuItem1desc.textContent="grilled and braised turkey, coated in our signature pepper sauce, served with our famous smoky jollof rice";
    const menuImg1 = document.createElement("img");
    menuImg1.src =
}
