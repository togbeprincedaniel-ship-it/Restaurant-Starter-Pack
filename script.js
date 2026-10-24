
//    1. AFFICHER L'ANNÉE AUTOMATIQUEMENT


const anneeActuelle = document.getElementById("current-year");

if (anneeActuelle) {
    anneeActuelle.textContent = new Date().getFullYear();
}



//    2. GÉRER LE MENU SUR TÉLÉPHONE


const boutonMenu = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

if (boutonMenu && navigation) {
    boutonMenu.addEventListener("click", function () {
        navigation.classList.toggle("active");

        const menuOuvert = navigation.classList.contains("active");

        boutonMenu.setAttribute("aria-expanded", menuOuvert);
    });

    // Fermer le menu après un clic sur un lien
    const liensMenu = navigation.querySelectorAll("a");

    liensMenu.forEach(function (lien) {
        lien.addEventListener("click", function () {
            navigation.classList.remove("active");
            boutonMenu.setAttribute("aria-expanded", "false");
        });
    });
}



//    3. CONFIGURATION DE WHATSAPP


// Remplacez ce numéro par votre numéro WhatsApp.
// Format : indicatif du pays + numéro, sans espace.
// Exemple fictif pour le Bénin : 229XXXXXXXX

const numeroWhatsApp = "229XXXXXXXX";



//    4. FONCTION POUR COMMANDER SUR WHATSAPP


function commanderSurWhatsApp(nomDuPlat) {
    if (numeroWhatsApp.includes("X")) {
        alert(
            "Configure d'abord ton numéro WhatsApp dans le fichier script.js."
        );
        return;
    }

    const message = `Bonjour Saveurs d'Or ! Je souhaite commander : ${nomDuPlat}.`;

    const messageEncode = encodeURIComponent(message);

    const lienWhatsApp =
        `https://wa.me/${numeroWhatsApp}?text=${messageEncode}`;

    window.open(lienWhatsApp, "_blank");
}



//    5. BOUTON PRINCIPAL DE COMMANDE


const boutonWhatsApp = document.getElementById("whatsapp-button");

if (boutonWhatsApp) {
    boutonWhatsApp.addEventListener("click", function (evenement) {
        evenement.preventDefault();

        commanderSurWhatsApp("Je souhaite consulter le menu");
    });
}



//    6. COMMANDER UN PLAT PARTICULIER


const boutonsCommande = document.querySelectorAll("[data-order]");

boutonsCommande.forEach(function (bouton) {
    bouton.addEventListener("click", function (evenement) {
        evenement.preventDefault();

        const nomDuPlat = bouton.getAttribute("data-order");

        commanderSurWhatsApp(nomDuPlat);
    });
});