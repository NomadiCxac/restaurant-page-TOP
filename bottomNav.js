export default function bottomNav () {
    let bottomNav = document.createElement("div");
    bottomNav.setAttribute("id", "bottom-nav");
    
    let contactContainer = document.createElement("div");

    let addressLine = document.createElement("div");
    addressLine.textContent = "123 Fake Rd, RichmondHill ON";

    let phoneLine = document.createElement("div");
    phoneLine.textContent = "(416)-123-5678";

    let emailAddressLine = document.createElement("div");
    emailAddressLine.textContent = "contactKitchenSelwynRd@gmail.com";

    contactContainer.appendChild(addressLine);
    contactContainer.appendChild(phoneLine);
    contactContainer.appendChild(emailAddressLine);

    let signUpEmailContainer = document.createElement("div");

    let getNewsLetter = document.createElement("input");
    getNewsLetter.placeholder = ("Enter Email Address Here");
    getNewsLetter.style.width = "20em";

    signUpEmailContainer.appendChild(getNewsLetter);

    bottomNav.appendChild(contactContainer);
    bottomNav.appendChild(signUpEmailContainer);
    
    return bottomNav;
}