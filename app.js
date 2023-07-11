// Obtener referencias a los elementos del DOM
const languageSelect = document.getElementById('languageSelect');
const greetingElement = document.getElementById('greeting');
const jobElement = document.getElementById('job');
const aboutMeTitleElement = document.getElementById('about_me_title');
const aboutMeTextElement = document.getElementById('about_me_text');
const resumeElement = document.getElementById('resume');
const pdfLinkElement = document.getElementById('pdfLink');
const projectsElement = document.getElementById('projects');
const project1TitleElement = document.getElementById('project_1_title');
const project1TextElement = document.getElementById('project_1_text');
const contactElement = document.getElementById('contact');
const phoneElement = document.getElementById('phone');
const addressElement = document.getElementById('address');
const linksElement = document.getElementById('links');
const copyrightElement = document.getElementById('copyright');
const imageElement = document.getElementById('image');

// Función para actualizar el saludo según el idioma seleccionado
function update() {
    const selectedLanguage = languageSelect.value;

    if (selectedLanguage === 'es') {
        greetingElement.textContent = '¡Hola!, soy';
        jobElement.textContent = 'Desarrollador web y Diseño UX/UI';
        aboutMeTitleElement.textContent = 'Sobre mí';
        aboutMeTextElement.innerHTML = 'Estudiando Licenciatura en Ciencias Informáticas, he orientado mi desarrollo profesional hacia el campo del Desarrollo Web.<br><br> Como estudiante de Desarrollo Web, me enfoco en la aplicación de buenas prácticas, patrones de diseño, depuración, pruebas, entre otros aspectos relevantes.<br><br> Forman parte de mi rutina como desarrollador de software el uso de tecnologías como <strong>HTML, CSS, Javascript, React.js, Node.js, Python y Django.</strong> Asimismo, estoy constantemente ampliando mis conocimientos en estas áreas y explorando nuevas tecnologías y herramientas.<br><br>';
        resumeElement.textContent = 'Currículum Vitae';
        pdfLinkElement.href = 'images/CV_Marcos_Gonzalez.pdf'; /**/
        projectsElement.textContent = 'Proyectos';
        project1TitleElement.textContent = 'Sistema Ágil de Gestión de Proyectos';
        project1TextElement.innerHTML = 'El producto final es un sistema ágil de gestión de proyectos, centrado en el marco SCRUM para el desarrollo ágil de software. Con gráficos Kanban y Burndown Chart.<br><br><br><u>Más detalles:</u><br>Podrá agregar usuarios con sus respectivos roles dentro de los proyectos.<br>Sprints para gestionar el proyecto por partes con sus respectivas User Stories, que son las tareas del proyecto.<br>Tiene Dashboard: Kanban y Burndown Chart, para ver gráficamente el avance del proyecto y tener una visión general del estado del proyecto.<br><br>'
        imageElement.textContent = 'Imágenes';
        contactElement.textContent = 'Contacto';
        phoneElement.textContent = 'Contacto';
        addressElement.textContent = 'Contacto';
        linksElement.textContent = 'Sitios Web';
        copyrightElement.innerHTML = `&copy; Portfolio Marcos González. Todos los derechos reservados. Diseño: <a href="https://html5up.net">HTML5 UP</a>.`;
    } else if (selectedLanguage === 'en') {
        greetingElement.textContent = 'Hello!, I´m';
        jobElement.textContent = 'Web developer and UX/UI Design';
        aboutMeTitleElement.textContent = 'About me';
        aboutMeTextElement.innerHTML = 'Studying a degree in Computer Science, I have oriented my professional development towards the Web Development field.<br><br> As a Web Development student, I focus on the application of best practices, design patterns, debugging, testing, among other relevant aspects.<br><br> Technologies such as <strong>HTML, CSS, Javascript, React.js, Node.js, Python and Django</strong> are part of my routine as a software developer. I am also constantly expanding my knowledge in these areas and exploring new technologies and tools.<br><br>';
        resumeElement.textContent = 'Resume';
        pdfLinkElement.href = 'images/Resume_Marcos_Gonzalez.pdf'; /**/
        projectsElement.textContent = 'Projects';
        project1TitleElement.textContent = 'Agile Project Management System';
        project1TextElement.innerHTML = 'The final product is an agile project management system, centered on the SCRUM framework for agile software development. With Kanban and Burndown Chart.<br><br><br><u>Further details:</u><br>You will be able to add users with their respective roles within the projects.<br>Sprints to manage the project by parts with their respective User Stories, which are the project tasks.<br>It has Dashboard: Kanban and Burndown Chart, to see graphically the progress of the project and have an overview of the project status.<br><br>'
        imageElement.textContent = 'Imagens';
        contactElement.textContent = 'Contact';
        phoneElement.textContent = 'Phone';
        addressElement.textContent = 'Address';
        linksElement.textContent = 'Web sites';
        copyrightElement.innerHTML = `&copy; Portfolio Marcos González. All rights reserved. Design: <a href="https://html5up.net">HTML5 UP</a>.`;
    } else if (selectedLanguage === 'pt-br') {
        greetingElement.textContent = 'Olá!, sou';
        jobElement.textContent = 'Desenvolvedor web e design UX/UI';
        aboutMeTitleElement.textContent = 'Sobre mim';
        aboutMeTextElement.innerHTML = 'Estudando licenciatura em Ciência da Computação, orientei meu desenvolvimento profissional para o campo do Desenvolvimento Web.<br><br> Como estudante de Desenvolvimento Web, foco na aplicação das melhores práticas, padrões de design, depuração, testes, entre outros aspectos relevantes.<br><br> Tecnologias como <strong>HTML, CSS, Javascript, React.js, Node.js, Python e Django</strong> fazem parte da minha rotina como desenvolvedor de software. Além disso, estou constantemente expandindo meus conhecimentos nessas áreas e explorando novas tecnologias e ferramentas.<br><br>';
        resumeElement.textContent = 'Currículo';
        pdfLinkElement.href = 'images/Curriculo_Marcos_Gonzalez.pdf'; /**/
        projectsElement.textContent = 'Projetos';
        project1TitleElement.textContent = 'Sistema Ágil de Gerenciamento de Projetos';
        project1TextElement.innerHTML = 'O produto final é um sistema ágil de gerenciamento de projetos, centrado na estrutura SCRUM para desenvolvimento ágil de software. Com Kanban e Burndown Chart.<br><br><br><u>Mais detalhes:</u><br>Você poderá adicionar usuários com suas respectivas funções nos projetos.<br>Sprints para gerenciar o projeto por partes com suas respectivas User Stories, que são as tarefas do projeto.<br>Possui Dashboard: Kanban e Burndown Chart, para ver graficamente o progresso do projeto e ter uma visão geral do status do projeto.<br><br>'
        imageElement.textContent = 'Imagens';
        contactElement.textContent = 'Contato';
        phoneElement.textContent = 'Telefone';
        addressElement.textContent = 'Endereço';
        linksElement.textContent = 'Sites da Web';
        copyrightElement.innerHTML = `&copy; Portfolio Marcos González. Todos os direitos reservados. Design: <a href="https://html5up.net">HTML5 UP</a>.`;
    }
}

// Escuchar el evento de cambio en el select de idiomas
languageSelect.addEventListener('change', update);

// Actualizar el saludo inicial
update();