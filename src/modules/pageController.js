import navbar from './navbar.js';
import header from './header.js';
import body from './body.js';
import footer from './footer.js';
import about  from './about.js';
import menu from './menu.js';
import contact from './contact.js';

export default (() => {
  const content = document.getElementById("content");
  const headerNode = () => {
    return header.create();
  };
  const navbarNode = () => {
    return navbar.create();
  };
  const bodyNode = () => {
    return body.create();
  };
  const footerNode = () => {
    return footer.create();
  };
  const addEventListeners = () => {
    const navButtons = document.getElementsByClassName('content-nav-list-item');
    for(let i = 0; i < navButtons.length; i += 1){
      navButtons[i].addEventListener('click', (e) => {
        unselectPreviousNavItem();
        unappendPreviousBodyContent();
        selectNavItem(document.getElementById(e.target.id));
        appendNewBodyContent(e.target.id);
      });
    }
  };
  const unselectPreviousNavItem = () => {
    const previous = document.getElementsByClassName('content-nav-list-item__selected')[0];
    previous.classList.remove('content-nav-list-item__selected');
  };
  const removeFromBody = (node) => {
    let bodyContent = document.getElementById('content-body');
    bodyContent.removeChild(node);
  };
  const unappendPreviousBodyContent = () => {
    const previous_body = document.getElementById('content-body').firstElementChild;
    removeFromBody(previous_body);
  };
  const initializeNode = (node) => {
    node.classList.add('content-init');
    return node;
  };
  const appendNewBodyContent = (id) => {
    switch (id)
    {
      case 'Menu':
          appendToBody(initializeNode(menu.create()));
          break;
      case 'Contact':
          appendToBody(initializeNode(contact.create()));
          break;
      case 'About':
          appendToBody(initializeNode(about.create()));
          break;
    }
  };
  const selectNavItem = (node) => {
    node.classList.add('content-nav-list-item__selected');
  };
  const appendToBody = (node) => {
    let bodyContent = document.getElementById('content-body');
    bodyContent.appendChild(node);
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