(() => {
    
    const hamburger = {
        navToggle: document.querySelector('.nav-toggle'),
        nav: document.querySelector('nav'),
        doToggle: function (e) {
            e.preventDefault();
            this.navToggle.classList.toggle('expanded');
            this.nav.classList.toggle('expanded');
        }
    };

    hamburger.navToggle.addEventListener('click', (e) => hamburger.doToggle(e));

    try {
        const card = {
            techList: [...document.querySelector('.card__tech')?.children],
            activeTech: 'android',
            doToggle: function (e) {
                e.preventDefault();
                let el = e.target.parentElement;
                document.getElementsByClassName('active__item')[0].classList.remove('active__item');
                this.activeTech = el.dataset.item;
                document.getElementsByClassName('card__active')[0].classList.remove('card__active');
                el.classList.add('active__item');
                document.getElementById(this.activeTech).classList.add('card__active');
            }
        }

        card.techList.map((el) => el.addEventListener('click', (e) => card.doToggle(e)));
    } catch (error) {
        //Not in the page
    }

})();