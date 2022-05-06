async function getPhotographers() {
    // TODO : Replace with data from the JSON file
    
    const response = await fetch('/data/photographers.JSON', {
        mode: 'no-cors'
    }) 
    const json = response.json()
    return json
}

function setClassBySize(image) {
    if (image.naturalHeight > image.naturalWidth) {
        image.classList.add("tall");
    
    } else if (image.naturalHeight < image.naturalWidth) {
        image.classList.add("large");
    } else {
        image.classList.add("square");
    }
}

function getTheLink() {
    let params = (new URL(document.location)).searchParams;
    let id = params.get('id');
    return id
}

async function media (photographers, idPhotograph) {
    const medias = photographers.media.filter( media => media.photographerId === idPhotograph );
    return {
        idPhotograph,
        medias,
        get (id) {
            return this.medias[id]
        }
    }
}

async function gallery (currentIndex, idPhotograph) {
    const jsonData = await getPhotographers();
    const medias = jsonData.media.filter( media => media.photographerId === idPhotograph );

    return {
        medias, 
        currentIndex,
        displayItems () {
            const presentationGallery = document.getElementById( 'gallery-pictures' );
            this.medias.forEach((media, index) => {
                let mediaFile
        
                let divUnder = document.createElement( 'div' );
                divUnder.classList.add("div-img-" + media.id);
        
                presentationGallery.appendChild(divUnder);
                if (media.image) {
                    mediaFile = document.createElement( 'img' );
                    const url_img = `assets/images/${media.image}`;
                    mediaFile.setAttribute("src", url_img)
                } else {
                    mediaFile = document.createElement( 'video' );
                    const urlVideo = `assets/images/${media.video}`;
                    mediaFile.setAttribute("src", urlVideo)
                }
                mediaFile.addEventListener('click', () => {
                    this.currentIndex = index;
                    console.log(this.currentIndex)
                    this.displayPopup();
                });
        
                divUnder.appendChild(mediaFile);
        
                setClassBySize(mediaFile);
        
                let divText = document.createElement( 'div' );
                divText.classList.add("desc-img");
                let mediaTitle = document.createElement( 'p' );
                let mediaLikes = document.createElement( 'p' );
        
                divUnder.appendChild(divText);
                divText.appendChild(mediaTitle);
                divText.appendChild(mediaLikes);
        
                mediaTitle.textContent = media.title;
                mediaLikes.textContent = media.likes;
                // mediaLikes.appendChild(media.likes);
            });
        },
        getMedia (currentIndex) {
            return this.medias[currentIndex]
        },        
        displayPopup () {     
            const popup = document.getElementById("gallery_modal");
            popup.style.display = "flex";
            this.displayMedia();
        },
        displayMedia () {
            
            const mediaShowing = this.getMedia(this.currentIndex); 
            const popup = document.getElementById("gallery_modal");
            const mediaDisplayed = popup.querySelector('.media-displayed');
            if (mediaDisplayed) {
                mediaDisplayed.remove();
            }
            let mediaFile

            if (mediaShowing.image) {
                mediaFile = document.createElement( 'img' );
                const url_img = `assets/images/${mediaShowing.image}`;
                mediaFile.setAttribute("src", url_img)
            } else {
                mediaFile = document.createElement( 'video' );
                const urlVideo = `assets/images/${mediaShowing.video}`;
                mediaFile.setAttribute("src", urlVideo)
            }
            mediaFile.classList.add("media-displayed");
            mediaFile.classList.add("img-" + this.currentIndex);
            setClassBySize(mediaFile);

            popup.appendChild(mediaFile);
        },
        nextMedia () {
            this.currentIndex = this.currentIndex + 1 > medias.length - 1 ? 0 : this.currentIndex + 1;
            console.log(this.currentIndex)
            this.displayMedia();
        },
        prevMedia () {
            this.currentIndex = this.currentIndex - 1 < 0 ? medias.length - 1 : this.currentIndex - 1;
            console.log(currentIndex)
            this.displayMedia();
        },
        orderItems (type_of) {
            const galleryItems = document.querySelectorAll('#gallery-pictures > div');
            console.log(galleryItems)
            if (galleryItems) {
                galleryItems.forEach(item => {
                    item.remove();
                });
            }
            if (type_of === "popularity") {
                this.medias.sort(function(a, b) {
                    return parseFloat(a.likes) - parseFloat(b.likes);
                });
                this.displayItems();
            } else if (type_of === "date") {
                this.medias.sort(function(a, b) {
                    return new Date(a.date) - new Date(b.date)
                });
                this.displayItems();
            } else if (type_of === "title") {
                this.medias.sort(function(a, b) {
                    if ( a.title < b.title ){
                      return -1;
                    }
                    if ( a.title > b.title ){
                      return 1;
                    }
                    return 0;
                  });
                  this.displayItems();
            }
            
        }
    }
}
 
export {gallery, getTheLink, media, getPhotographers, setClassBySize}