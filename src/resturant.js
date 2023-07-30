
//resturant.js
const createResturantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement("div");
    pageContent.classList.add('page-content');


    //Create and append image element
    const image = document.createElement('img');
    image.src = "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800";
    image.height = 3000;
    pageContent.appendChild(image);

    //Create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our resturant';
    pageContent.appendChild(headline)

    //Create and append copy element
    const copy = document.createElement('p');
    copy.textContent = "We serve the best food in town. Why dont you head on over to our resturant and show us some love while we make your stomachs happier than ever"
    pageContent.appendChild(copy);

    content.append(pageContent);
}

export default createResturantHomePage;
