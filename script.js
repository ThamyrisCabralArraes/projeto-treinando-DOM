const buttom = document.getElementById('bnt-click');
const section = document.getElementById('section');

const addEvent = () => {
  let eventClick = document.createElement('div');
  eventClick.id = 'container-numbers';
  eventClick.innerHTML = Math.floor(Math.random() * 11);
  section.appendChild(eventClick);
};
const eventClick = buttom.addEventListener('click', addEvent);
