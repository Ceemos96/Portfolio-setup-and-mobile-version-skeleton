const bars = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('#close-menu');
const navLinks = document.querySelectorAll('ul > li.nav-link');

// open menu when nav toggler is clicked and disabe vertical scroll
bars.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
  document.body.style.overflowY = 'hidden';
});

// close menu when the close icon is clicked and allow vertical scroll
closeMenu.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
  document.body.style.overflowY = 'scroll';
});

// close the menu when item is clicked and allow vertical scroll
for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', () => {
    menu.classList.toggle('show-menu');
    document.body.style.overflowY = 'scroll';
  });
}

const projectsDetails = [
  {
    title: 'weather app',
    popup_title: 'Keeping track of hundreds of components',
    featured_image: '#',
    long_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    link_to_Source: '#',
    link_to_live_version: '#',
    mobile_popup_technologies: ['Ruby on rail', 'css', 'Javascript'],
    desktop_popup_technologies: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },

  {
    title: 'landing page',
    popup_title: 'Keeping track of hundreds of components',
    featured_image: '#',
    long_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    link_to_Source: '#',
    link_to_live_version: '#',
    mobile_popup_technologies: ['Ruby on rail', 'css', 'Javascript'],
    desktop_popup_technologies: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },

  {
    title: 'Tribute page',
    popup_title: 'Keeping track of hundreds of components',
    featured_image: '#',
    long_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    link_to_Source: '#',
    link_to_live_version: '#',
    mobile_popup_technologies: ['Ruby on rail', 'css', 'Javascript'],
    desktop_popup_technologies: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },

  {
    title: 'mobile application',
    popup_title: 'Keeping track of hundreds of components',
    featured_image: '#',
    long_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    link_to_Source: '#',
    link_to_live_version: '#',
    mobile_popup_technologies: ['Ruby on rail', 'css', 'Javascript'],
    desktop_popup_technologies: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },

  {
    title: 'e-commerce website',
    popup_title: 'Keeping track of hundreds of components',
    featured_image: '#',
    long_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    link_to_Source: '#',
    link_to_live_version: '#',
    mobile_popup_technologies: ['Ruby on rail', 'css', 'Javascript'],
    desktop_popup_technologies: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },

  {
    title: 'calculator',
    popup_title: 'Keeping track of hundreds of components',
    featured_image: '#',
    long_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release",
    technologies: ['Ruby on rails', 'css', 'javascript', 'html'],
    link_to_Source: '#',
    link_to_live_version: '#',
    mobile_popup_technologies: ['Ruby on rail', 'css', 'Javascript'],
    desktop_popup_technologies: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
  },

];

const projectsContainer = document.getElementById('projects-container');

function showModal() {
  if (!!document.querySelector('.popup-wrapper') === true) {
    document.querySelector('.popup-wrapper').remove();
  }
  document.querySelector('.popup-wrapper').style.display = 'block';
}

// dynamically create the project section

for (let i = 0; i < projectsDetails.length; i += 1) {
  const projectFile = document.createElement('div');
  projectFile.classList.add('project-file');

  const projectImage = document.createElement('div');
  projectImage.classList.add('project-image');

  const imagePlaceholder = document.createElement('div');
  imagePlaceholder.classList.add('image-placeholder');

  projectImage.appendChild(imagePlaceholder);

  projectFile.appendChild(projectImage);

  const projectText = document.createElement('div');
  projectText.classList.add('project-text');

  const projectTitle = document.createElement('p');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = projectsDetails[i].title;

  projectText.appendChild(projectTitle);

  const projectLangs = document.createElement('div');
  projectLangs.classList.add('project-langs');

  const langList = document.createElement('ul');
  langList.classList.add('lang-list');

  for (let j = 0; j < projectsDetails[i].technologies.length; j += 1) {
    const lang = document.createElement('li');
    lang.textContent = projectsDetails[i].technologies[j];
    langList.appendChild(lang);
  }

  projectLangs.appendChild(langList);

  projectText.appendChild(projectLangs);

  const projectButton = document.createElement('div');
  projectButton.classList.add('project-button');

  const seeProjectButton = document.createElement('button');
  seeProjectButton.classList.add('seeModal');
  seeProjectButton.type = 'button';
  seeProjectButton.textContent = 'See Project';

  projectButton.appendChild(seeProjectButton);

  projectText.appendChild(projectButton);

  projectFile.appendChild(projectText);

  projectsContainer.appendChild(projectFile);

  seeProjectButton.addEventListener('click', showModal);
}

function closeModal() {
  document.querySelector('.popup-wrapper').style.display = 'none';
}

// dynamically create popup elements

for (let i = 0; i < projectsDetails.length; i += 1) {
  const popupWrapper = document.createElement('div');
  popupWrapper.classList.add('popup-wrapper');

  const popup = document.createElement('div');
  popup.classList.add('popup');

  const popupContent = document.createElement('div');
  popupContent.classList.add('popup-content');

  const closePopup = document.createElement('p');
  closePopup.classList.add('close-popup');
  closePopup.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
  popupContent.appendChild(closePopup);

  const popupImage = document.createElement('div');
  popupImage.classList.add('popup-image');
  popupContent.appendChild(popupImage);

  const popupText = document.createElement('div');
  popupText.classList.add('popup-text');

  const popupHeader = document.createElement('h2');
  popupHeader.classList.add('popup-header');
  popupHeader.textContent = projectsDetails[1].popup_title;
  popupText.appendChild(popupHeader);

  const technologies = document.createElement('ul');
  technologies.classList.add('technologies');
  for (let j = 0; j < projectsDetails[i].mobile_popup_technologies.length; j += 1) {
    const list = document.createElement('li');
    list.textContent = projectsDetails[i].mobile_popup_technologies[j];
    technologies.appendChild(list);
  }
  popupText.appendChild(technologies);

  const technologiesDesktop = document.createElement('ul');
  technologiesDesktop.classList.add('technologies-desktop');
  for (let j = 0; j < projectsDetails[i].desktop_popup_technologies.length; j += 1) {
    const lang = document.createElement('li');
    lang.textContent = projectsDetails[i].desktop_popup_technologies[j];
    technologiesDesktop.appendChild(lang);
  }
  popupText.appendChild(technologiesDesktop);

  const popupDesc = document.createElement('p');
  popupDesc.textContent = projectsDetails[i].long_description;
  popupText.appendChild(popupDesc);

  const popupButtons = document.createElement('div');
  popupButtons.classList.add('popup-buttons');

  const button1 = document.createElement('button');
  button1.type = 'button';
  button1.innerHTML = '<a href="https://ceemos96.github.io/Portfolio-setup-and-mobile-version-skeleton/" target="_blank"> See Live <i class="fa fa-link" ></i>';
  popupButtons.appendChild(button1);

  const button2 = document.createElement('button');
  button2.type = 'button';
  button2.innerHTML = '<a href="https://github.com/Ceemos96/Portfolio-setup-and-mobile-version-skeleton" target="_blank"> See Source  <i class="fab fa-github"></i></a>';
  popupButtons.appendChild(button2);

  popupText.appendChild(popupButtons);

  popupContent.appendChild(popupText);

  popup.appendChild(popupContent);

  popupWrapper.appendChild(popup);

  projectsContainer.appendChild(popupWrapper);

  closePopup.addEventListener('click', closeModal);
}

// validate contact form

const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const formButton = document.getElementById('form-button');
const emailError = document.getElementById('email-error');

form.addEventListener('submit', (e) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    emailError.textContent = 'Email-ID must be in lowercase!';
    formButton.reportValidity();
    e.preventDefault();
  }
});