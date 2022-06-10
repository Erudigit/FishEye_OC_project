//Add JavaScript code linked to the photographer.html page
import { gallery, getTheLink, media, getPhotographers, setClassBySize} from './utils.js';

function displayData(photograph) {
    const presentationPhotograph = document.getElementById( 'img-photograph' );
    const presentationTextPhotograph = document.getElementById( 'prsentation-photograph' );

    const picture = `assets/photographers/${photograph.portrait}`;
    const img = document.createElement( 'img' );
    img.setAttribute("src", picture)
    img.setAttribute("alt", photograph.name);


    const h1 = document.createElement( 'h1' );
    h1.textContent = photograph.name;
    const primaryText = document.createElement( 'p' );
    primaryText.textContent = photograph.city + ', ' + photograph.country;
    primaryText.className = "primary-text";
    const secondaryText = document.createElement( 'p' );
    secondaryText.textContent = photograph.tagline;
    secondaryText.className = "secondary-text";

    presentationPhotograph.appendChild(img);
    setClassBySize(img);

    presentationTextPhotograph.appendChild(h1);
    presentationTextPhotograph.appendChild(primaryText);
    presentationTextPhotograph.appendChild(secondaryText);


    // Modal Contact-me 

    const modalHeader = document.getElementById( 'modal-form' );
    const firstDivInForm = document.querySelector('#modal-form > div')
    const h2Modal = document.createElement( 'h2' );
    h2Modal.textContent = photograph.name;
    h2Modal.classList.add("title-name");

    modalHeader.appendChild(h2Modal);
    h2Modal.parentNode.insertBefore(h2Modal, firstDivInForm);


    // Rate box

    const rateBox = document.getElementById('rate-box');
    const likes = document.createElement( 'p' );
    const rate = document.createElement( 'p' );
    likes.textContent = galleryPhotographer.getNumberLikes();
    likes.classList.add("likes");
    rate.textContent = photograph.price;
    rate.classList.add("rate");

    rateBox.appendChild(likes);
    rateBox.appendChild(rate);

}

const photographers = await getPhotographers();
const idPhotograph = parseInt(getTheLink());
const photograph = photographers.photographers.find( photographers => photographers.id === idPhotograph );
// const dataMedia = await media(photographers, idPhotograph);
const galleryPhotographer = await gallery(0, idPhotograph);

displayData(photograph);
galleryPhotographer.displayItems();

const closePopup = document.getElementById('close-gallery');
closePopup.addEventListener('click', () => {
    galleryPhotographer.closeModalGallery()
})

const nextMedia = document.getElementById('right')
nextMedia.addEventListener('click', () => {
    galleryPhotographer.nextMedia()
})

const prevMedia = document.getElementById('left')
prevMedia.addEventListener('click', () => {
    galleryPhotographer.prevMedia()
})



/* Order by */

var orderChosed = document.getElementById("ordering-select");
orderChosed.addEventListener('change', (event) => {
    galleryPhotographer.orderItems(event.target.value)
})

// galleryPhotographer.orderItems(type_of);
