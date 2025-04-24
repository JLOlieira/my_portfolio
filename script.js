const sectionLinks = document.querySelectorAll('.section-link');
const sections_area = document.querySelectorAll('section');
const projects = document.querySelector('section#projects');
const about = document.querySelector('section#about');
const main = document.querySelector('main');

let details_btn = document.querySelectorAll('.details');
const project_details = document.querySelector('.project-details');

details_btn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        project_details.classList.add('active');
        window.scrollTo(0, 0);
    });
});
project_details.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('project-details')) {
        project_details.classList.add('closing');
        setTimeout(() => {
            project_details.classList.remove('active');
            project_details.classList.remove('closing');
        }, 450);
    }
});

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
