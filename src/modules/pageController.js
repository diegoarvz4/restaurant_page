import navbar from './navbar';
import header from './header';
import body from './body';
import footer from './footer';
import about from './about';
import menu from './menu';
import contact from './contact';

export default (() => {
  const content = document.getElementById('content');
  const headerNode = () => header.create();
  const navbarNode = () => navbar.create();
  const bodyNode = () => body.create();
  const footerNode = () => footer.create();
  const unselectPreviousNavItem = () => {
    const previous = document.getElementsByClassName('content-nav-list-item__selected')[0];
    previous.classList.remove('content-nav-list-item__selected');
  };
  const removeFromBody = (node) => {
    const bodyContent = document.getElementById('content-body');
    bodyContent.removeChild(node);
  };
  const unappendPreviousBodyContent = () => {
    const previousBody = document.getElementById('content-body').firstElementChild;
    removeFromBody(previousBody);
  };
  const selectNavItem = (node) => {
    node.classList.add('content-nav-list-item__selected');
  };
  const appendToBody = (node) => {
    const bodyContent = document.getElementById('content-body');
    bodyContent.appendChild(node);
  };
  const initializeNode = (node) => {
    node.classList.add('content-init');
    return node;
  };
  const appendNewBodyContent = (id) => {
    switch (id) {
      case 'Menu':
        appendToBody(initializeNode(menu.create()));
        break;
      case 'Contact':
        appendToBody(initializeNode(contact.create()));
        break;
      default:
        appendToBody(initializeNode(about.create()));
        break;
    }
  };
  const addEventListeners = () => {
    const navButtons = document.getElementsByClassName('content-nav-list-item');
    for (let i = 0; i < navButtons.length; i += 1) {
      navButtons[i].addEventListener('click', (e) => {
        unselectPreviousNavItem();
        unappendPreviousBodyContent();
        selectNavItem(document.getElementById(e.target.id));
        appendNewBodyContent(e.target.id);
      });
    }
  };
  const load = () => {
    content.appendChild(headerNode());
    content.appendChild(navbarNode());
    content.appendChild(bodyNode());
    content.appendChild(footerNode());
  };
  const init = () => {
    const navItem = document.getElementById('About');
    selectNavItem(navItem);
    const node = initializeNode(about.create());
    appendToBody(node);
    addEventListeners();
  };
  return { load, init };
})();