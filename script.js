
const fabMain = document.getElementById('fabMain');
const fabWrapper = document.getElementById('fabWrapper');

fabMain.addEventListener('click', () => {
    fabWrapper.classList.toggle('active');
});


document.addEventListener('click', (e) => {
    if (!fabWrapper.contains(e.target)) {
        fabWrapper.classList.remove('active');
    }
});


function showDetails(type) {
    if (type === 'SOS') {
        alert('Részletek: Másnapos SOS takarításunk mindent tartalmaz a romtalanítástól a felmosásig.');
    } else if (type === 'corporate') {
        alert('Részletek: Céges és VIP események utáni takarítás diszkréten és precízen.');
    } else if (type === 'extreme') {
        alert('Részletek: Extrém szennyeződések és foltok szakszerű eltávolítása kárpitokból is.');
    }
}


const cards = document.querySelectorAll('.card');

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = '0.6s all ease-out';
    observer.observe(card);
});