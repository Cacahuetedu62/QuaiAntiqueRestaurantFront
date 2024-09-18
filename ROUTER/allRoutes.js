import Route from "./Route.js";

export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",[]),
    new Route("/galerie", "La galerie", "/pages/galerie.html",[]), 
    new Route("/account", "Mon compte", "/pages/auth/account.html",["client","admin"]),
    new Route("/signin", "Connexion", "/pages/auth/signin.html",["disconnected"],"/js/auth/signin.js"),   
    new Route("/signup", "Inscription", "/pages/auth/signup.html",["disconnected"],"/js/auth/signup.js"),
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html",["client","admin"]),
    new Route("/reserver", "Réserver","/pages/reservations/reserver.html",["client"]),
    new Route("/AnnulationReservation", "Annulation de la réservation", "/pages/reservations/AnnulationReservation.html",["client"]),    
    new Route("/AllResa","Vos réservations", "/pages/reservations/AllResa.html",["client"]),

];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";