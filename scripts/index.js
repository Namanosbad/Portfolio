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
    'header.description': 'Sou um desenvolvedor back-end em busca da minha primeira oportunidade profissional para demonstrar minhas habilidades. Tenho conhecimento em C#, Java, Node.js, bancos de dados e muito mais. Sou apaixonado por resolver problemas complexos e pronto para contribuir com soluções eficientes e inovadoras. Entre em contato!',
    'header.cta': 'Fale comigo!',
    'about.title': 'Sobre mim',
    'about.socialText': 'Fique à vontade para falar comigo nas redes sociais!',
    'about.subtitle': 'Desenvolvedor apaixonado por tecnologia',
    'about.paragraph1': 'Olá, eu sou Matheus Lima, desenvolvedor apaixonado por tecnologia desde sempre. Com conhecimento em diferentes tecnologias e plataformas, consigo criar soluções robustas e escaláveis para atender às suas necessidades.',
    'about.paragraph2': 'Gosto de me sentir desafiado para encontrar soluções para problemas complexos e estou sempre buscando aprender mais para me tornar um profissional melhor.',
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
    'projects.subtitle': 'Aqui estão alguns dos meus projetos!',
    'projects.corvo.description': 'Corvo Advogados é um projeto que desenvolvi para o renomado escritório de advocacia onde trabalho. Motivado pelo desejo de aprofundar minhas habilidades em front-end e pela necessidade do escritório de ter um novo site moderno, aproveitei a oportunidade para criar uma solução que atendesse às duas demandas. O resultado foi um site com design contemporâneo e responsivo, que reflete a excelência do escritório e melhora a experiência dos usuários em todos os dispositivos.',
    'projects.corvo.link': 'Acessar projeto →',
    'projects.comingSoon.title': 'Em breve',
    'projects.comingSoon.text': 'Em breve',
    'projects.comingSoon.link': 'Mais informações →',
    'footer.title': 'Vamos conversar?',
    'footer.description': 'Tenho muito interesse em conhecer seus projetos e entender como podemos trabalhar juntos para transformá-los em realidade.',
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
    'header.description': 'I am a backend developer looking for my first professional opportunity to showcase my skills. With knowledge in C#, Java, Node.js, databases, and more, I am passionate about solving complex problems and ready to contribute with efficient and innovative solutions. Contact me!',
    'header.cta': 'Get in touch!',
    'about.title': 'About me',
    'about.socialText': 'Feel free to connect with me on social media!',
    'about.subtitle': 'Developer passionate about technology',
    'about.paragraph1': "Hello, I'm Matheus Lima, a developer passionate about technology for as long as I can remember. With knowledge in different technologies and platforms, I can create robust and scalable solutions to meet your needs.",
    'about.paragraph2': "I enjoy being challenged to solve complex problems, and I'm always learning to become an even better professional.",
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
    'projects.subtitle': 'Here are some of my projects!',
    'projects.corvo.description': 'Corvo Advogados is a project I developed for the prestigious law firm where I work. Motivated by my desire to deepen my front-end skills and the firm’s need for a new modern website, I took the opportunity to create a solution that met both goals. The result is a contemporary, responsive website that reflects the firm’s excellence and improves user experience across devices.',
    'projects.corvo.link': 'View project →',
    'projects.comingSoon.title': 'Coming soon',
    'projects.comingSoon.text': 'Coming soon',
    'projects.comingSoon.link': 'More info →',
    'footer.title': "Let's talk?",
    'footer.description': "I'm very interested in hearing about your projects and how we can work together to make them a reality.",
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