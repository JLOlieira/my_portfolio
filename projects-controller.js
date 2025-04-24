document.addEventListener('DOMContentLoaded', () => {
    loadArticles();
    load_study_Cards();
});

let currentTab;
document.addEventListener('click', (e) => {
    if (e.target.parentElement.parentElement.classList.contains('project')) {
        let target = e.target.closest('div.grid').classList[0];
        
        currentTab = target.replace('-', '_');
    }
});

function loadArticles() {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const realProjects_grid = document.querySelector('.real-projects');
        realProjects_grid.innerHTML = '';
        data.real_projects.forEach(project => {
            const projectElement = `
            <article class="project" data-id="${project.id}">
                <div class="top-info">
                    <div>
                        ${project.compatible_devices.map(device => {
                            if (device == 'Desktop') {
                                return `<i class="fa-solid fa-display" title="Compatível com desktop"></i>`
                            }
                            if (device == 'Mobile') {
                                return `<i class="fa-solid fa-mobile-screen" title="Compatível com mobile"></i>`
                            }
                            return '';
                        }).join('')}
                    </div>
                    <ul>
                        ${project.tools.map(tool => {
                            if (tool == 'HTML') {
                            return `<li class="html">
                                <i class="fa-brands fa-html5" title="HTML"></i>
                            </li>`
                            }
                            if (tool == 'CSS') {
                            return `<li class="css">
                                <i class="fa-brands fa-css" title="CSS"></i>
                            </li>`
                            }
                            if (tool == 'Javascript') {
                            return `<li class="js">
                                <i class="fa-brands fa-square-js" title="Javascript"></i>
                            </li>`
                            }
                        }).join('')}
                    </ul>
                </div>
                <img src="${project.image}" alt="${project.name}">
                <div class="links">
                     <button class="details">Mais detalhes</button>
                </div>
            </article>
            `;
            realProjects_grid.innerHTML += projectElement;
        });
        addClickEventsToCards();
    })
    .catch(error => console.error('Erro ao carregar os cards:', error));
}

function addClickEventsToCards() {
    const details_btn = document.querySelectorAll('.details');
    details_btn.forEach(btn => {
        btn.addEventListener('click', () => {
            project_details.classList.add('active');
            window.scrollTo(0, 0);
            openDetails();
        });
    });
}

function openDetails(event) {
    let projectId = '';
    document.addEventListener('click', (e) => {
        const element = e.target.closest('.project');
        if (element) {
            projectId = element.getAttribute('data-id');
        }
    });
    const projectDetails = document.querySelector('.project-details');

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const usedToolsWrapper = document.querySelector('.project-details .wrapper .used-tools');
            usedToolsWrapper.innerHTML = '';

            const project = data[currentTab]?.find(project => project.id == projectId);
            if (project) {
                document.querySelector('.project-details .wrapper .img').src = project.image;
                document.querySelector('.project-details .wrapper .name').textContent = project.name;
                document.querySelector('.project-details .wrapper .description').textContent = project.description;
                document.querySelector('.project-details .wrapper .used-tools');
                
                const usedTools = `
                <span>Tecnologias utilizadas:</span>
                <ul>
                    ${project.tools.map(tool => {
                        if (tool == 'HTML') {
                            return `<li class="html">
                                <i class="fa-brands fa-html5" title="HTML"></i>
                            </li>`
                        }
                        if (tool == 'CSS') {
                            return `<li class="css">
                                <i class="fa-brands fa-css" title="CSS"></i>
                            </li>`
                        }
                        if (tool == 'Javascript') {
                            return `<li class="js">
                                <i class="fa-brands fa-square-js" title="Javascript"></i>
                            </li>`
                        }
                    }).join('')}
                </ul>
                `;
                usedToolsWrapper.innerHTML += usedTools;
                
                document.querySelector('.project-details .wrapper .status-text').textContent = project.status;
                document.querySelector('.project-details .wrapper .links').innerHTML = `
                ${project.links.map(link => {
                    if (link.name == 'Ver site') {
                        return `<a href="${project.links[0].url}" target="_blank" class="site-btn">${project.links[0].name}<i class="fa-solid fa-arrow-up-right-from-square"></i></a>`
                    }
                    if (link.name == 'Ver código') {
                        return `<a href="${project.links[1].url}" target="_blank" class="code-btn">${project.links[1].name}<i class="fa-solid fa-arrow-up-right-from-square"></i></a>`
                    }
                }).join('')}`;
                projectDetails.classList.add('active');
                window.scrollTo(0, 0);
            }
        })
        .catch(error => console.error('Erro ao carregar os cards:', error));
}

function load_study_Cards() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const studylistContainer = document.querySelector('.study-projects');
            studylistContainer.innerHTML = '';
            data.study_projects.forEach(project => {
                const cardElement = `
                <article class="project" data-id="${project.id}">
                <div class="top-info">
                    <div>
                        ${project.compatible_devices.map(device => {
                            if (device == 'Desktop') {
                                return `<i class="fa-solid fa-display" title="Compatível com desktop"></i>`
                            }
                            if (device == 'Mobile') {
                                return `<i class="fa-solid fa-mobile-screen" title="Compatível com mobile"></i>`
                            }
                            return '';
                        }).join('')}
                    </div>
                    <ul>
                        ${project.tools.map(tool => {
                            if (tool == 'HTML') {
                            return `<li class="html">
                                <i class="fa-brands fa-html5" title="HTML"></i>
                            </li>`
                            }
                            if (tool == 'CSS') {
                            return `<li class="css">
                                <i class="fa-brands fa-css" title="CSS"></i>
                            </li>`
                            }
                            if (tool == 'Javascript') {
                            return `<li class="js">
                                <i class="fa-brands fa-square-js" title="Javascript"></i>
                            </li>`
                            }
                        }).join('')}
                    </ul>
                </div>
                <img src="${project.image}" alt="${project.name}">
                <div class="links">
                     <button class="details">Mais detalhes</button>
                </div>
            </article>
            `;
                studylistContainer.innerHTML += cardElement;
            });
            addClickEventsToCards();
        })
        .catch(error => console.error('Erro ao carregar os cards:', error));
}