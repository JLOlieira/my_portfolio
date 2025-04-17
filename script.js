const sectionLinks = document.querySelectorAll('.section-link');
const sections_area = document.querySelectorAll('section');
const projects = document.querySelector('section#projects');
const about = document.querySelector('section#about');
const main = document.querySelector('main');

sectionLinks.forEach(section => {
    section.addEventListener('click', (e) => {
        let tabs = document.querySelectorAll('.section-link');
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        e.target.classList.add('active');
    });
});

main.addEventListener('scroll', () => {
    const scrollPosition = main.scrollTop;
    const offsetThreshold = about.offsetTop - 250;

    // Função auxiliar para atualizar a aba ativa
    const setActiveTab = (index) => {
        sectionLinks.forEach(link => link.classList.remove('active'));
        if (sectionLinks[index]) {
            sectionLinks[index].classList.add('active');
        }
    };

    // Verifica a posição do scroll e define a aba ativa
    if (scrollPosition > offsetThreshold) {
        setActiveTab(1);
    } else {
        setActiveTab(0);
    }
});
