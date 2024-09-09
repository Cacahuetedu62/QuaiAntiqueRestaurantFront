import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/sigin", "connexion", "/pages/sigin.html"),
    new Route("/sigup", "Inscription", "/pages/auth/sigup.html","/js/auth/sigup.js"),
]


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";