/*https://github.com/mdn/js-examples/tree/master/modules/basic-modules*/
import { getPhotographers, setClassBySize} from './utils.js';

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Retreive photographer data
        const photographers = await getPhotographers();
        displayData(photographers.photographers);
    };
    
    init();
    