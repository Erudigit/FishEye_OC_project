function photographerFactory(data) {

    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        // Create link to each photographers
        const a = document.createElement( 'a' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        a.title = "link to " + name;
        a.href = "photographer.html?id=" + id;

        // Element to finish the card
        const primaryText = document.createElement( 'p' );
        primaryText.textContent = city + ', ' + country;
        primaryText.className = "primary-text";
        const secondaryText = document.createElement( 'p' );
        secondaryText.textContent = tagline;
        secondaryText.className = "secondary-text";
        const mutedText = document.createElement( 'p' );
        mutedText.textContent = '$' + price + '/day';
        mutedText.className = "muted-text";

        article.appendChild(a);
        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(primaryText);
        article.appendChild(secondaryText);
        article.appendChild(mutedText);
        return (article);
    }
    return { 
        name, 
        picture, 
        getUserCardDOM,
        getRate (photograph) {
            this.price;
        }
    }
}