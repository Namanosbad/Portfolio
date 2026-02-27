const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');
const mobileLinks = document.querySelectorAll('.mobile__links a');
const languageButtons = document.querySelectorAll('.language-switch__button');
const i18nElements = document.querySelectorAll('[data-i18n]');

const translations = {
  pt: {
    'brand.role': 'Desenvolvedor Back-end',
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'header.title': 'Matheus Lima, Desenvolvedor Back-end',
    'header.description': 'Sou desenvolvedor back-end e estou em busca da minha primeira oportunidade profissional para colocar minhas habilidades em prática. Tenho experiência com C#, Java, Node.js e bancos de dados, sempre com foco em criar soluções eficientes, escaláveis e alinhadas ao negócio. Vamos conversar?',
    'header.cta': 'Fale comigo!',
    'about.title': 'Sobre mim',
    'about.socialText': 'Fique à vontade para entrar em contato pelas redes sociais.',
    'about.subtitle': 'Desenvolvedor back-end apaixonado por tecnologia',
    'about.paragraph1': 'Olá! Eu sou Matheus Lima, desenvolvedor apaixonado por tecnologia. Com experiência em diferentes tecnologias e plataformas, desenvolvo soluções robustas e escaláveis para atender às necessidades de cada projeto.',
    'about.paragraph2': 'Gosto de desafios e de resolver problemas complexos. Estou em constante evolução para entregar soluções cada vez melhores.',
    'skills.title': 'Minhas habilidades',
    'skills.description': 'Sou um desenvolvedor back-end dedicado a criar soluções criativas e funcionais. Tenho habilidades em várias linguagens de programação e frameworks, além de experiência com bancos de dados relacionais e não relacionais. Meu foco é desenvolver aplicações que ofereçam excelente experiência ao usuário, atendendo requisitos técnicos e de negócio.',
    'skills.web.title': 'Desenvolvimento Web',
    'skills.web.text': 'Especializado na criação de interfaces modernas e funcionais, garantindo design eficiente e excelente experiência em aplicações web.',
    'skills.db.title': 'Banco de dados',
    'skills.db.text': 'Especializado em modelagem, otimização e integração de bancos de dados para suportar aplicações escaláveis e eficientes.',
    'skills.api.title': 'Desenvolvimento de APIs',
    'skills.api.text': 'Especializado em desenvolvimento back-end para criar sistemas robustos e escaláveis, incluindo gerenciamento de bancos de dados e construção de APIs.',
    'skills.version.title': 'Controle de versão',
    'skills.version.text': 'Proficiência em sistemas de versionamento, com experiência em gerenciamento de branches, resolução de conflitos e colaboração em repositórios remotos.',
    'projects.title': 'Projetos',
    'projects.subtitle': 'Confira alguns dos projetos que desenvolvi.',
    'projects.OharaAPI.description': 'A OharaAPI é inspirada em um sistema real desenvolvido para um escritório com cerca de 30 advogados, voltado à gestão interna de documentos e fluxos de trabalho. O nome e o design fazem referência ao anime One Piece, especialmente à ilha de Ohara, conhecida por abrigar a maior biblioteca do mundo e por preservar o conhecimento até sua destruição. O projeto carrega esse simbolismo ao propor a organização, exploração e preservação do conhecimento, permitindo catalogar autores e suas obras e mantendo vivo o espírito de descoberta e aprendizado.',
    'projects.OharaAPI.link': 'Acessar projeto →',
    'projects.comingSoon.title': 'Em breve',
    'projects.comingSoon.text': 'Em breve',
    'projects.comingSoon.link': 'Mais informações →',
    'footer.title': 'Vamos conversar?',
    'footer.description': 'Se você procura alguém comprometido, colaborativo e focado em resultados, será um prazer conversar sobre como posso contribuir no seu projeto.',
    'footer.copyright': '©2024 Matheus Lima. Todos os direitos reservados.'
  },
  en: {
    'brand.role': 'Backend Developer',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'header.title': 'Matheus Lima, Backend Developer',
    'header.description': 'I am a backend developer looking for my first professional opportunity to apply my skills in real projects. I have experience with C#, Java, Node.js, and databases, always focused on building efficient, scalable, and business-oriented solutions. Let\'s talk?',
    'header.cta': 'Get in touch!',
    'about.title': 'About me',
    'about.socialText': 'Feel free to reach out to me on social media.',
    'about.subtitle': 'Backend developer passionate about technology',
    'about.paragraph1': "Hi! I'm Matheus Lima, a developer passionate about technology. With experience across different technologies and platforms, I build robust and scalable solutions tailored to each project's needs.",
    'about.paragraph2': "I enjoy challenges and solving complex problems. I'm constantly improving to deliver even better solutions.",
    'skills.title': 'My skills',
    'skills.description': 'I am a backend developer dedicated to creating creative and functional solutions. I have skills in several programming languages and frameworks, as well as experience with relational and non-relational databases. My focus is on developing applications that deliver an excellent user experience while meeting technical and business requirements.',
    'skills.web.title': 'Web Development',
    'skills.web.text': 'Specialized in creating modern and functional interfaces, ensuring efficient design and an excellent web application experience.',
    'skills.db.title': 'Database',
    'skills.db.text': 'Specialized in database modeling, optimization, and integration to support scalable and efficient applications.',
    'skills.api.title': 'API Development',
    'skills.api.text': 'Specialized in backend development to build robust and scalable systems, including database management and API creation.',
    'skills.version.title': 'Version Control',
    'skills.version.text': 'Proficient in version control systems, with experience managing branches, resolving conflicts, and collaborating in remote repositories.',
    'projects.title': 'Projects',
    'projects.subtitle': 'Take a look at some of the projects I have built.',
    'projects.OharaAPI.description': 'OharaAPI is inspired by a real system developed for a law firm with about 30 lawyers, focused on internal document and workflow management. Its name and design reference the One Piece anime, especially the island of Ohara, known for housing the world’s largest library and preserving knowledge until its destruction. The project carries this symbolism by proposing the organization, exploration, and preservation of knowledge, enabling users to catalog authors and their works while keeping the spirit of discovery and learning alive.',
    'projects.OharaAPI.link': 'View project →',
    'projects.comingSoon.title': 'Coming soon',
    'projects.comingSoon.text': 'Coming soon',
    'projects.comingSoon.link': 'More info →',
    'footer.title': "Let's talk?",
    'footer.description': "If you're looking for someone committed, collaborative, and results-driven, I'd be glad to discuss how I can contribute to your project.",
    'footer.copyright': '©2024 Matheus Lima. All rights reserved.'
  }
};

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', function (event) {
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement && !isVisible(targetElement)) {
      mobileNavbar.classList.remove('active');
    } else {
      event.preventDefault();
    }
  });
});

languageButtons.forEach((langButton) => {
  langButton.addEventListener('click', function () {
    setLanguage(langButton.dataset.lang);
  });
});

function setLanguage(language) {
  const selectedTranslations = translations[language] || translations.pt;

  i18nElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (selectedTranslations[key]) {
      element.textContent = selectedTranslations[key];
    }
  });

  languageButtons.forEach((langButton) => {
    const isActive = langButton.dataset.lang === language;
    langButton.classList.toggle('active', isActive);
    langButton.setAttribute('aria-selected', isActive);
  });

  document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  localStorage.setItem('portfolio-language', language);
}

function isVisible(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});

const savedLanguage = localStorage.getItem('portfolio-language') || 'pt';
setLanguage(savedLanguage);
