//page for the menu


const createMenuPage = () =>{
    const content = document.querySelector("#content");
    let pageContent = document.createElement("div");
    pageContent.setAttribute("id", "page-content")

    const heading = document.createElement("h1");
    heading.textContent = "Our menu";
    pageContent.appendChild(heading);

   const menuList = document.createElement("div");
    const menuItem1 = document.createElement("h1");
    menuItem1.textContent = "Jollof and fried chicken";
    const menuItem1desc = document.createElement("p");
    menuItem1desc.textContent="grilled and braised turkey, coated in our signature pepper sauce, served with our famous smoky jollof rice";
    const menuImg1 = document.createElement("img");
    menuImg1.src ="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/42788e49474248dba75fdfd47114024a/BFV43575_PartyRiceAroundAfrica-FB-V2.jpg?resize=1200:*"
    menuImg1.height = 300;
    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem1desc);
    menuList.appendChild(menuImg1);


    const menuItem2 = document.createElement("h1");
    menuItem2.textContent = "Ofada Rice Bowl";
    const menuItem2desc = document.createElement("p");
    menuItem2desc.textContent="traditional assorted meat ofada sauce served with ofada rice, plantain pieces and boiled egg";
    const menuImg2 = document.createElement("img");
    menuImg2.src ="https://www.bananaislandrestaurants.com/wp-content/uploads/2019/12/ofada-rice-ayamase-stew-1-1051x788.jpg";
    menuImg2.height = 300;
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem2desc);
    menuList.appendChild(menuImg2);


    const menuItem3 = document.createElement("h1");
    menuItem3.textContent = "Àbùlà and Assorted Meat";
    const menuItem3desc = document.createElement("p");
    menuItem3desc.textContent="àmàlà served with three traditional sauces:gbegìrì, ewédú ati omi obe";
    const menuImg3 = document.createElement("img");
    menuImg3.src ="https://www.bananaislandrestaurants.com/wp-content/uploads/2019/12/ofada-rice-ayamase-stew-1-1051x788.jpg";
    menuImg3.height = 300;
    menuList.appendChild(menuItem3);
    menuList.appendChild(menuItem3desc);
    menuList.appendChild(menuImg3);


    const menuItem4 = document.createElement("h1");
    menuItem4.textContent = "Ofada Rice Bowl";
    const menuItem4desc = document.createElement("p");
    menuItem4desc.textContent="traditional assorted meat ofada sauce served with ofada rice, plantain pieces and boiled egg";
    const menuImg4 = document.createElement("img");
    menuImg4.src ="https://9jafoods.com/wp-content/uploads/2021/06/How-to-Make-Lump-Free-and-Fluffy-Amala-Recipe.jpg";
    menuImg4.height = 300;
    menuList.appendChild(menuItem4);
    menuList.appendChild(menuItem4desc);
    menuList.appendChild(menuImg4);

    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
}

export default createMenuPage;