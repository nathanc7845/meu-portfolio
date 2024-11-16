document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu-item-v');


    const openSound = new Audio('./audios/abrir.mp3');
    const closeSound = new Audio('./audios/fechar.mp3');
    openSound.volume = 0.1;
    closeSound.volume = 0.1;

    menuToggle.addEventListener('click', () => {
        const isMenuOpen = menu.classList.contains('active');

        if (isMenuOpen) {
            closeSound.play();
            menu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuItems.forEach((item) => {
                item.classList.remove('show');
            });
        } else {
            openSound.play();
            menu.classList.add('active');
            menuToggle.classList.add('active');
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.transitionDelay = `${index * 0.1}s`;
                    item.classList.add('show');
                }, index * 100);
            });
        }
    });

    menuItems.forEach(item => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = item.getAttribute('data-text');
        document.body.appendChild(tooltip);

        item.addEventListener('mouseenter', (e) => {
            const rect = item.getBoundingClientRect();
            tooltip.style.left = `${rect.left - tooltip.offsetWidth - 8}px`;
            tooltip.style.top = `${rect.top + rect.height / 2 - tooltip.offsetHeight / 2}px`;
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translateX(0)';
        });

        item.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translateX(-10px)';
        });
    });

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                menuToggle.classList.remove('active');
                menuItems.forEach((item) => {
                    item.classList.remove('show');
                });
            }
        }
    });
});
const imagens = document.querySelectorAll('.zoom');

imagens.forEach(function(imagem) {
    imagem.addEventListener('click', function() {
        this.classList.toggle('ativo'); 
    });
});

const menuItems = document.querySelectorAll('.menu-item');


function applyGlowEffect() {
    menuItems.forEach(item => {
        if (item !== this) { 
            item.classList.add('escurecer');
        } else {
            item.classList.add('brilho');
        }
    });
}


function removeGlowEffect() {
    menuItems.forEach(item => {
        item.classList.remove('escurecer', 'brilho');
    });
}


menuItems.forEach(item => {
    item.addEventListener('mouseover', applyGlowEffect);
    item.addEventListener('mouseout', removeGlowEffect);
});
