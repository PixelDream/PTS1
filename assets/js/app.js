/*
 * PTT - IUT Laval
 * http://iut-laval.univ-lemans.fr/
 *
 * Date: 2021-01-01
*/

(() => {
    // Création d'un objet "hamburger"
    const hamburger = {
        // Récupère l'élément avec la classe ".nav-toggle"
        navToggle: document.querySelector('.nav-toggle'),
        // Récupère l'élément avec la balise "nav"
        nav: document.querySelector('nav'),
        // Exécute une fonction
        doToggle: function (e) {
            // Annule l'action par défaut
            e.preventDefault();
            // Ajoute/Supprime la classe "expanded" aux deux éléments récupèrés précèdament
            this.navToggle.classList.toggle('expanded');
            this.nav.classList.toggle('expanded');
        }
    };

    // Ajout d'un évènement lors d'un clique à l'objet "hamburger" sur l'élément "navToggle"
    hamburger.navToggle.addEventListener('click', (e) => hamburger.doToggle(e));
})();