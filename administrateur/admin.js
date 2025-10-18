function toggleMobileMenu() {
    const menu = document.getElementById('MobileMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block'
}



// CODE POUR VERIFIER LE FORMULAIRE ET ETRE REDIRIGER DANS UNE NOUVELLE PAGE
function verifierConnexion() {
    const nom = document.getElementById("nom").value;
    const mdp = document.getElementById("mdp").value;

    if (nom === "BROWN" && mdp === "1234") {
        alert("CONNEXION REUSSI");
        // REDIRECTION VERS UNE NOUVELLE PAGE
        window.location.href = "../Espace administrateur/EspaceAdmin.html";
    } else {
        alert("IDENTIFIANT INCORRECT");
    }

    return false; // empeche le chargement de la page 
}
