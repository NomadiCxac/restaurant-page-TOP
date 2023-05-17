import './style.css';
import topNav from './jsComponents/topNav';
// import homepage from './jsComponents/homepage';
import {content, contentContainer} from './jsComponents/contentContainer';
import bottomNav from './jsComponents/bottomNav';
import stylizeMenuItems from './jsComponents/menuContent';
import imageOfEnsaymada from '/Users/christiancordero/Repos/restaurant-page-TOP/src/images/ensaymada.jpg';
import imageOfChocolateCake from '/Users/christiancordero/Repos/restaurant-page-TOP/src/images/ferreroRocherCake.jpeg';
import imageOfRumCake from '/Users/christiancordero/Repos/restaurant-page-TOP/src/images/rumCake.jpeg';

let container = document.querySelector("div#container");

// Functions: 

// Function to Attach Menu Item to Corresponding Container
function appendMenuItem (container, menuItem) {
    container.appendChild(menuItem);
}

// Function to Invoke Content within the Container
function invokeContent (element) {
    let _content = content();
    _content.setAttribute("id", `${element}`)
    _contentContainer.appendChild(_content);
}

// Function that clears page 

function clearPage () {
    let contentContainer = document.querySelector("#contentContainer");

    if (contentContainer.className != "") {
        contentContainer.classList.remove(`${contentContainer.className}`)
    }
    contentContainer.textContent = "";
    
}


// Create Top Nav
let _topNav = topNav();
container.appendChild(_topNav);

// Create Content Container
let _contentContainer = contentContainer();
container.appendChild(_contentContainer);


function generateHomepage () {

    let contentContainer = document.querySelector("#contentContainer");
    contentContainer.classList.add("homepageContainer");
    invokeContent("homepage-content");
    let homePageContainer = document.querySelector("#homepage-content");
    homePageContainer.textContent = "Chef Paula is the best pastry chef in the world";
    contentContainer.appendChild(homePageContainer);
}

// Component Function that stores Menu

function generateMenuPage () {

// Invoke Menu Item Containers:
invokeContent("ensaymada");
invokeContent("chocolate-cake");
invokeContent("rum-cake")

// Create Menu Item Containers
let ensaymadaContainer = document.querySelector("#ensaymada");
let chocolateCakeContainer = document.querySelector("#chocolate-cake");
let rumCakeContainer = document.querySelector("#rum-cake");

// Create Menu Item Descriptions
let ensaymadaDescription = "Indulge in the irresistible homemade goodness of ensaymada pastries, crafted with love and years of baking expertise, topped with generous amounts of cheese and icing - the perfect pairing with a morning coffee OR as an afternoon snack";
let chocolateCakeDescription = ("Enjoy the heavenly richness of our chocolate mousse cake, topped with luscious whipped cream, delectable chocolate chips, and resting on a velvety smooth chocolate base - the ultimate chocolate lover's dream come true!");
let rumCakeDescription = "This is a delicious Rum Cake";

// Create Menu Item Images
let ensaymadaImage = imageOfEnsaymada;
let chocolateCakeImage = imageOfChocolateCake;
let rumCakeImage = imageOfRumCake;

// Style and Generate Menu Item Element
let ensaymada = stylizeMenuItems(ensaymadaDescription, ensaymadaImage, "ensaymada");
let chocolateCake = stylizeMenuItems(chocolateCakeDescription, chocolateCakeImage, "chocolate-cake");
let rumCake = stylizeMenuItems(rumCakeDescription, rumCakeImage, "rum-cake");

appendMenuItem(ensaymadaContainer, ensaymada);
appendMenuItem(chocolateCakeContainer, chocolateCake);
appendMenuItem(rumCakeContainer, rumCake);
}

function generateCheckoutPage () {
    let contentContainer = document.querySelector("#contentContainer");
    let form = document.createElement("form");
    contentContainer.classList.add("checkoutContainer");
    contentContainer.appendChild(form);

    // Form Element
    form.id = 'checkout-form';
    form.action = '/process-order';
    form.method = 'POST';

    let heading = document.createElement('h1');
    heading.classList.add("form-header");
    heading.textContent = 'Kitchen on Selywn Rd - Checkout';
    form.appendChild(heading);

// Helper function to create form fields
    function createFormField(labelText, inputType, inputName, isRequired) {
    let fieldContainer = document.createElement('div');
    fieldContainer.classList.add("form-field");

    let label = document.createElement('label');
    label.textContent = labelText;
    label.for = inputName;
    fieldContainer.appendChild(label);

    let input = document.createElement('input');
    input.type = inputType;
    input.id = inputName;
    input.name = inputName;
    if (isRequired) {
        input.required = true;
    }
    fieldContainer.appendChild(input);

    return fieldContainer;
}

// Create form fields
form.appendChild(createFormField('Name:', 'text', 'name', true));
form.appendChild(createFormField('Email:', 'email', 'email', true));
form.appendChild(createFormField('Delivery Address:', 'textarea', 'address', true));
form.appendChild(createFormField('Phone Number:', 'tel', 'phone', true));

// let items = createFormField('Select Items:', 'select', 'items', true);
// let

// const itemsContainer = createFormField('Select Items:', 'select', 'items', true);
// const itemsSelect = itemsContainer.querySelector('select');
// const items = ['Ensaymada', 'Chocolate Cake', 'Rum Cake']; // Add more items as needed
// items.forEach(item => {
//   const option = document.createElement('option');
//   option.value = item.toLowerCase();
//   option.textContent = item;
//   itemsSelect.appendChild(option);
// });
// form.appendChild(itemsContainer);

form.appendChild(createFormField('Delivery Date:', 'date', 'delivery-date', true));
form.appendChild(createFormField('Delivery Time:', 'time', 'delivery-time', true));

// Create the submit button
let submitButton = document.createElement('input');
submitButton.classList.add("form-submitButton");
submitButton.type = 'submit';
submitButton.value = 'Place Order';
form.appendChild(submitButton);

// Append the form to the document body
contentContainer.appendChild(form);


}


// Default Load: 
generateHomepage();

// Create Bottom Nav
let _bottomNav = bottomNav();
container.appendChild(_bottomNav);

let homepage = document.querySelector("#homepage-tab")
homepage.addEventListener("click", function () {
    clearPage();
    generateHomepage();
})

let menu = document.querySelector("#menu-tab")
menu.addEventListener("click", function () {
    clearPage();
    generateMenuPage();
})

let checkout = document.querySelector("#checkout-tab")
checkout.addEventListener("click", function (e) {
    clearPage();
    generateCheckoutPage();
})