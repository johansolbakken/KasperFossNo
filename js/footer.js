//
//  footer.js
//  Lager en footer
//

function createFooter() {
    /*
     * FILER
     */
    let filer = ["index", "event", "om", "test", "media", "kontakt"];

    /**
     * Henter footer
     */
    let footer = document.getElementById("footer");

    /**
     * FOOTER CONTENT
     */
    let footer_content = document.createElement("div");
    footer_content.classList.toggle("footer-content");

    /**
     * FOOTER LINKS
     */
    let footer_links = document.createElement("div");
    footer_links.classList.toggle("footer-section-links");

    let ul = document.createElement("ul");

    // Lager linkene til footeren
    for (let i = 0; i < filer.length; i++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        let title =
            filer[i][0].toUpperCase() + filer[i].slice(1, filer[i].length);
        if (title == "Index") {
            title = "Hjem";
        }

        a.innerHTML = title;
        a.setAttribute("href", filer[i] + ".html");

        li.appendChild(a);
        ul.appendChild(li);
    }

    footer_links.appendChild(ul);

    /**
     * FOOTER ABOUT
     */
    let footer_about = document.createElement("div");
    footer_about.classList.toggle("footer-section-about");

    // Lager twitter link
    let twitter_a = document.createElement("a");
    twitter_a.target = "_blank";
    twitter_a.href = "https://twitter.com/kasper_foss";

    let twitter_img = document.createElement("img");
    twitter_img.width = "30";
    twitter_img.src =
        "data:image/png;base64,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";
    twitter_img.alt = "Bilde av twitter";
    twitter_a.appendChild(twitter_img);

    // Lager instagram link
    let instagram_a = document.createElement("a");
    instagram_a.target = "_blank";
    instagram_a.href = "https://www.instagram.com/kasperrfoss/?hl=nb";

    let instagram_img = document.createElement("img");
    instagram_img.width = "30";
    instagram_img.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png";
    instagram_img.alt = "Bilde av instagram";
    instagram_a.appendChild(instagram_img);

    // Lager facebook link
    let facebook_a = document.createElement("a");
    facebook_a.target = "_blank";
    facebook_a.href = "https://www.facebook.com/kasperrfoss";

    let facebook_img = document.createElement("img");
    facebook_img.width = "30";
    facebook_img.src =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU6VZ////81Up0yT5xgc61+jbsvTZyXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5c1UZ1oerKHlcDp6/M9WKHHzeHV2ulxgravt9Td4Ozl6PGDkb7ByN5YbatQZ6j29/q3v9h2hrhMY6aQnMSsAnKHAAAC70lEQVR4nO3caXLiMBRFYdoihhhsQ5jDlPT+F9mdqv7bRrYQ7z7XOQug9BUWHiQzmRARERERERERERERERERqVe0IZQPCtaDHFwo62Yz/VrP3jtbrH0Sy7rYH46/YtpV1oPtX6jCbBel+2npThjq/Taa51AYmrdTH583YdHsP/r5nAnLTa/j05+w+ezv8yRsq/MQoB9hmPeegb6E5eU2DOhFWK4G+rwIw3CgD2G4Dge6ELaboXPQi7CJu4nwK6zvKUAHwvCVBHQgrFMmoQdh4jGqL2wviUB5YRP/uMKnsJ2mAtWF9XLkwjblcs2FsDqMXZh6LpQXhn06UFtYpZ7t5YX1wEczboTF/AlAaWFYP0OovPZU9pmGt9194W79sIq/Jt2uqqrytwbcxJ4NT9e6tR7soEIk8N749E2K7zjgubEe6dAi75yOboGxwrnTQ/RvRZTwIHy6e1SccF5Yj3N4UcJjbT3MhKKEh9J6mAlFCZWvyR4WJXxDqBxChPohRKgfQoT6IUSoH0KE+iFEqB9ChPqNQ1h0vKJcxWwt/aofvelsDFzNOlpECO9dH/DT+8ZUWMYgErNdfXuB8Ga7RPwCofHy2wuE59EfpQvbH9MXCNejF65st2q8QPhtu5Mhv/BmfE2TX/hhvGMqv3BpvBslv/BuvGUqv3A2+nloff+YX3gx3rmYX2j9CCC78Ga9NzO78GS9dTG7cDv679B8c2Z24e/R/9LsRy+8Wm/kzy60nobZhdb3TvmF9u8e5hYaP0p8gfB99PPQ/l2F3MKp+StDuYXWvuxC60eJ+YXm907ZhQJ/NlA+4d9ZOrrbH6WTzbyjmL+D/Oz6BNsl/H8V/y9E7TYpOz7BGveoceyn6QohQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLs0R8aFUYEFLSeAgAAAABJRU5ErkJggg==";
    facebook_img.alt = "Bilde av facebook";
    facebook_a.appendChild(facebook_img);

    // Legger til lenkene i footeren
    footer_about.appendChild(twitter_a);
    footer_about.appendChild(instagram_a);
    footer_about.appendChild(facebook_a);

    /**
     * Lager footer bottom
     */
    let footer_bottom = document.createElement("div");
    footer_bottom.classList.toggle("footer-bottom");
    footer_bottom.innerHTML =
        "&copy; kasperfoss.no | Designed by Johan, Ådne, Eivind, Thomas and Kasper";

    // Setter sammen footer
    footer_content.appendChild(footer_links);
    footer_content.appendChild(footer_about);
    footer.appendChild(footer_content);
    footer.appendChild(footer_bottom);
}

createFooter();
