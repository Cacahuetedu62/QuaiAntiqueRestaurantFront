import Route from "./Route.js";

export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"), 
    new Route("/account", "Mon compte", "/pages/auth/account.html"),
 
//route au dessus ok

    new Route("/signin", "Connexion", "/Pages/auth/signin.html","/js/auth/signin.js"),
   
    new Route("/signup", "Inscription", "/pages/auth/signup.html","/js/auth/signup.js"),
    new Route("/editPassword", "Changement de mot de passe", "/Pages/auth/editPassword.html"),
//Arrive bien à la page connexion mais pas de mise en forme, navbar, photos etc...
 

   new Route("/reserver", "Réserver","/pages/reservations/reserver.html"),
   //Mise en page ok, bouton annuler pas ok, il ne redirige pas vers "annulion de la reservation" AnnulationReservation.html
    new Route("/AnnulationReservation", "Annulation de la réservation", "/Pages/reservations/AnnulationReservation.html"),
    
    new Route("/AllResa","Vos réservations", "/Pages/reservations/AllResa.html"),
    //Ne trouve pas la route
]


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";