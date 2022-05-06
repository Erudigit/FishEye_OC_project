//Add JavaScript code linked to the photographer.html page
import { gallery, getTheLink, media, getPhotographers, setClassBySize} from './utils.js';

function displayData(photograph) {
    const presentationPhotograph = document.getElementById( 'img-photograph' );
    const presentationTextPhotograph = document.getElementById( 'prsentation-photograph' );

    const picture = `assets/photographers/${photograph.portrait}`;
    const img = document.createElement( 'img' );
    img.setAttribute("src", picture)

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

}

// function displayMedias(gallery) {
//     const presentationGallery = document.getElementById( 'gallery-pictures' );
    
//     gallery.medias.forEach((media, index) => {
//         console.log(media)
//         console.log(index)
//         let mediaFile

//         let divUnder = document.createElement( 'div' );
//         divUnder.classList.add("div-img-" + media.id);

//         presentationGallery.appendChild(divUnder);
//         if (media.image) {
//             mediaFile = document.createElement( 'img' );
//             const url_img = `assets/images/${media.image}`;
//             mediaFile.setAttribute("src", url_img)
//         } else {
//             mediaFile = document.createElement( 'video' );
//             const urlVideo = `assets/images/${media.video}`;
//             mediaFile.setAttribute("src", urlVideo)
//         }
//         mediaFile.addEventListener('click', function() {
//             gallery.displayPopup(gallery.medias.indexOf(media));
//             gallery.currentIndex = index;
//         });

//         divUnder.appendChild(mediaFile);

//         setClassBySize(mediaFile);

//         let divText = document.createElement( 'div' );
//         divText.classList.add("desc-img");
//         let mediaTitle = document.createElement( 'p' );
//         let mediaLikes = document.createElement( 'p' );

//         divUnder.appendChild(divText);
//         divText.appendChild(mediaTitle);
//         divText.appendChild(mediaLikes);

//         mediaTitle.textContent = media.title;
//         mediaLikes.textContent = media.likes;
//         // mediaLikes.appendChild(media.likes);
//     });
// }

/* POPUP */

// function displayGalleryModal(imgId) {


//     // const myGallery = gallery(imgId, dataMedia.medias);
//     // const btnLeft = document.getElementById('left');
//     // const btnRight = document.getElementById('right');

//     // btnLeft.addEventListener('click', function () {
//     //     const actualMedia = document.querySelector('#gallery_modal .media-displayed');
//     //     actualMedia.remove();
//     //     const currentIndex = myGallery.prevMedia();
//     //     displayGalleryModal(currentIndex);
//     // })
//     // btnRight.addEventListener('click', function () {
//     //     const actualMedia = document.querySelector('#gallery_modal .media-displayed');
//     //     actualMedia.remove();
//     //     const currentIndex = myGallery.nextMedia();
//     //     displayGalleryModal(currentIndex);
//     // })
// }

// 22/04/2022
// Create gallery on the loading of the page :
// const myGallery = gallery(imgId, dataMedia.medias);

// Create the events listener here after initialize gallery : 
// btnLeft.addEventListener('click', function () {
//     const actualMedia = document.querySelector('#gallery_modal .media-displayed');
//     actualMedia.remove();
//     const currentIndex = myGallery.prevMedia();
//     displayGalleryModal(currentIndex);
// })
// btnRight.addEventListener('click', function () {
//     const actualMedia = document.querySelector('#gallery_modal .media-displayed');
//     actualMedia.remove();
//     const currentIndex = myGallery.nextMedia();
//     displayGalleryModal(currentIndex);
// })


const photographers = await getPhotographers();
const idPhotograph = parseInt(getTheLink());
const photograph = photographers.photographers.find( photographers => photographers.id === idPhotograph );
// const dataMedia = await media(photographers, idPhotograph);
const galleryPhotographer = await gallery(0, idPhotograph);

displayData(photograph);
galleryPhotographer.displayItems();
// displayMedias(galleryPhotographer);

const nextMedia = document.getElementById('right')
nextMedia.addEventListener('click', () => {
    galleryPhotographer.nextMedia()
})

const prevMedia = document.getElementById('left')
prevMedia.addEventListener('click', () => {
    galleryPhotographer.prevMedia()
})





/* Order by */

// var orderChosed = document.getElementById("ordering-select");
// orderChosed.addEventListener("click", function() {
//     var options = orderChosed.querySelectorAll("option");
//     if (options === "popularity") {
//     } else if (options === "date") {
     
//     } else (options === "title") {
        
//     }
// });

// galleryPhotographer.orderItems(type_of);
