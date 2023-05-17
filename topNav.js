// let container = document.querySelector("div#container");


export default function topNav () {
    let topNav = document.createElement("div");
    topNav.setAttribute("id", "top-nav");

    let bakeryTitle = document.createElement("div");
    bakeryTitle.setAttribute("id", "bakeryTitle");
    bakeryTitle.textContent = "Kitchen on Selwyn Rd"

    let tabContainer = document.createElement("div");
    tabContainer.setAttribute("id", "tabContainer")

    function homepage () {
        let homepage = document.createElement("div");
        homepage.classList.add("top-nav-tab");
        homepage.setAttribute("id", "homepage-tab");
        homepage.textContent = "Homepage";
        tabContainer.appendChild(homepage);
    }
    
    function menu () {
        let menu = document.createElement("div");
        menu.classList.add("top-nav-tab");
        menu.setAttribute("id", "menu-tab");
        menu.textContent = "Menu";
        tabContainer.appendChild(menu);
    }
    
    function checkout () {
        let checkout = document.createElement("div");
        checkout.classList.add("top-nav-tab");
        checkout.setAttribute("id", "checkout-tab");
        checkout.textContent = "Checkout";
        tabContainer.appendChild(checkout);
    }
    
    homepage();
    menu();
    checkout();

    topNav.appendChild(bakeryTitle);
    topNav.appendChild(tabContainer);

    return topNav;
}