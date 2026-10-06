// ==========================================
// AUREVONA - GLAVNI JAVASCRIPT
// ==========================================


// ==========================================
// 1. MOBILNI MENI
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });

    });
}


// ==========================================
// 2. KATALOG
// ==========================================

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const noProducts = document.getElementById("noProducts");

let aktivnaKategorija = "izdvojeno";
let trenutnaStranica = 1;
const proizvodaPoStranici = 10;

const pagination = document.getElementById("pagination");

// ==========================================
// 3. PRIKAZ PROIZVODA
// ==========================================

function prikaziProizvode(lista) {
        // PAGINACIJA
    const pocetak = (trenutnaStranica - 1) * proizvodaPoStranici;
    const kraj = pocetak + proizvodaPoStranici;
    const proizvodiZaPrikaz = lista.slice(pocetak, kraj);

    if (!productGrid) return;

    productGrid.innerHTML = "";

    if (lista.length === 0) {

        if (noProducts) {
            noProducts.style.display = "block";
        }

        return;
    }

    if (noProducts) {
        noProducts.style.display = "none";
    }


    proizvodiZaPrikaz.forEach(proizvod => {

        const kartica = document.createElement("article");

        kartica.classList.add("product-card");


        kartica.innerHTML = `

            <div class="product-image">

                <img
                    src="${dohvatiSliku(proizvod)}"
                    alt="${proizvod.naziv}"
                >

                <span class="image-placeholder">
                    AUREVONA
                </span>

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${proizvod.kategorijaNaziv}
                </span>

                <h3>
                    ${proizvod.naziv}
                </h3>

                <p>
                    ${proizvod.opis}
                </p>

                <button
                    class="details-btn"
                    onclick="otvoriProizvod(${proizvod.id})"
                >
                    Saznaj više
                </button>

            </div>
        `;


        const slika = kartica.querySelector("img");
        const placeholder =
            kartica.querySelector(".image-placeholder");


        slika.addEventListener("load", () => {
            placeholder.style.display = "none";
        });


        slika.addEventListener("error", () => {

            slika.style.display = "none";

            placeholder.style.display = "block";

        });


        productGrid.appendChild(kartica);

    });     prikaziPaginaciju(lista);
}
function prikaziPaginaciju(lista) {
    if (!pagination) return;

    pagination.innerHTML = "";

    const brojStranica = Math.ceil(
        lista.length / proizvodaPoStranici
    );

    // Ako postoji samo jedna stranica, ne prikazuj paginaciju
    if (brojStranica <= 1) {
        return;
    }

    // Gumb PRETHODNA
    if (trenutnaStranica > 1) {
        const prethodna = document.createElement("button");
        prethodna.textContent = "‹";
        prethodna.classList.add("page-btn");

        prethodna.addEventListener("click", () => {
            trenutnaStranica--;
            prikaziProizvode(lista);

            document.getElementById("proizvodi").scrollIntoView({
                behavior: "smooth"
            });
        });

        pagination.appendChild(prethodna);
    }

    // BROJEVI STRANICA
    for (let i = 1; i <= brojStranica; i++) {
        const button = document.createElement("button");

        button.textContent = i;
        button.classList.add("page-btn");

        if (i === trenutnaStranica) {
            button.classList.add("active");
        }

        button.addEventListener("click", () => {
            trenutnaStranica = i;
            prikaziProizvode(lista);

            document.getElementById("proizvodi").scrollIntoView({
                behavior: "smooth"
            });
        });

        pagination.appendChild(button);
    }

    // Gumb SLJEDEĆA
    if (trenutnaStranica < brojStranica) {
        const sljedeca = document.createElement("button");
        sljedeca.textContent = "›";
        sljedeca.classList.add("page-btn");

        sljedeca.addEventListener("click", () => {
            trenutnaStranica++;
            prikaziProizvode(lista);

            document.getElementById("proizvodi").scrollIntoView({
                behavior: "smooth"
            });
        });

        pagination.appendChild(sljedeca);
    }
}


// ==========================================
// 4. IZDVOJENI PROIZVODI
// ==========================================
function dohvatiSliku(proizvod) {
    if (proizvod.kategorija === "zenski") {
        return "slike/zenski-parfem.png";
    }

    if (proizvod.kategorija === "muski") {
        return "slike/muski-parfem.png";
    }

    if (proizvod.kategorija === "unisex") {
        return "slike/unisex-parfem.png";
    }

    return proizvod.slika;
}
function prikaziIzdvojene() {

    aktivnaKategorija = "izdvojeno";

    const izdvojeni = proizvodi
        .filter(proizvod => proizvod.izdvojeno === true)
        .slice(0, 4);

    prikaziProizvode(izdvojeni);

}


// ==========================================
// 5. FILTRIRANJE
// ==========================================

function filtrirajProizvode() {

    const pojam = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";


    let lista = proizvodi;


    // Ako smo na naslovnom prikazu
    if (aktivnaKategorija === "izdvojeno") {

        lista = proizvodi
            .filter(proizvod => proizvod.izdvojeno === true)
            .slice(0, 4);

    }


    // Ako je odabrana konkretna kategorija
    else if (aktivnaKategorija !== "sve") {

        lista = proizvodi.filter(
            proizvod =>
                proizvod.kategorija === aktivnaKategorija
        );

    }


    // Pretraga
    if (pojam !== "") {

        lista = proizvodi.filter(proizvod => {

            return (

                proizvod.naziv
                    .toLowerCase()
                    .includes(pojam)

                ||

                proizvod.opis
                    .toLowerCase()
                    .includes(pojam)

                ||

                proizvod.kategorijaNaziv
                    .toLowerCase()
                    .includes(pojam)

            );

        });

    }


    prikaziProizvode(lista);

}


// ==========================================
// 6. TRAŽILICA
// ==========================================

if (searchInput) {

    searchInput.addEventListener("input", () => {
    trenutnaStranica = 1;
        const pojam =
            searchInput.value.trim();


        // Kad korisnik počne tražiti,
        // tražimo kroz SVE proizvode.

        if (pojam !== "") {

            aktivnaKategorija = "sve";

        } else {

            aktivnaKategorija = "izdvojeno";

        }


        filtrirajProizvode();

    });

}


// ==========================================
// 7. FILTER GUMBI
// ==========================================

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        aktivnaKategorija = button.dataset.category;

        // Svaka nova kategorija kreće od stranice 1
        trenutnaStranica = 1;

        if (searchInput) {
            searchInput.value = "";
        }

        filtrirajProizvode();

    });

});

// ==========================================
// 8. OTVARANJE KATEGORIJE
// ==========================================

function otvoriKategoriju(kategorija) {

    // Postavi novu kategoriju
    aktivnaKategorija = kategorija;

    // UVIJEK vrati na prvu stranicu
    trenutnaStranica = 1;

    // Očisti tražilicu
    if (searchInput) {
        searchInput.value = "";
    }

    // Označi odgovarajući filter
    filterButtons.forEach(button => {
        button.classList.remove("active");

        if (button.dataset.category === kategorija) {
            button.classList.add("active");
        }
    });

    // Ponovno filtriraj proizvode
    filtrirajProizvode();

    // Pomakni na proizvode
    const proizvodiSekcija =
        document.getElementById("proizvodi");

    if (proizvodiSekcija) {
        proizvodiSekcija.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}
// ==========================================
// 9. OTVARANJE PROIZVODA
// ==========================================

function otvoriProizvod(id) {

    const proizvod = proizvodi.find(
        proizvod => proizvod.id === id
    );


    if (!proizvod) return;


    const modal =
        document.getElementById("productModal");

    const modalImage =
        document.getElementById("modalImage");

    const modalPlaceholder =
        document.getElementById("modalPlaceholder");

    const modalCategory =
        document.getElementById("modalCategory");

    const modalName =
        document.getElementById("modalName");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalWhatsapp =
        document.getElementById("modalWhatsapp");


    if (!modal) return;


    if (modalCategory) {
        modalCategory.textContent =
            proizvod.kategorijaNaziv;
    }


    if (modalName) {
        modalName.textContent =
            proizvod.naziv;
    }


    if (modalDescription) {
        modalDescription.textContent =
            proizvod.opis;
    }


    // SLIKA

    if (modalImage && modalPlaceholder) {

        modalImage.style.display = "block";

        modalPlaceholder.style.display = "none";

         modalImage.src = dohvatiSliku(proizvod);

        modalImage.alt = proizvod.naziv;


        modalImage.onload = function () {

            modalImage.style.display = "block";

            modalPlaceholder.style.display = "none";

        };


        modalImage.onerror = function () {

            modalImage.style.display = "none";

            modalPlaceholder.style.display = "block";

        };

    }


    // WHATSAPP

    if (modalWhatsapp) {
const modalEmail = document.getElementById("modalEmail");
        const poruka =
            `Pozdrav! Zanima me proizvod ${proizvod.naziv}. Molim više informacija o cijeni i dostupnosti.`;


       modalWhatsapp.href =
    `https://wa.me/385953073251?text=${encodeURIComponent(poruka)}`;
modalEmail.href =
    `mailto:aurevonashop@gmail.com?subject=${encodeURIComponent("Upit za " + proizvod.naziv)}&body=${encodeURIComponent(poruka)}`;
}



    // OTVORI MODAL

    modal.classList.add("active");

    document.body.classList.add("modal-open");

}


// ==========================================
// 10. ZATVARANJE PROIZVODA
// ==========================================

function zatvoriProizvod() {

    const modal =
        document.getElementById("productModal");


    if (modal) {
        modal.classList.remove("active");
    }


    document.body.classList.remove("modal-open");

}


// ESC TIPKA

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        zatvoriProizvod();
    }

});


// ==========================================
// 11. PRVI PRIKAZ STRANICE
// ==========================================

prikaziIzdvojene();