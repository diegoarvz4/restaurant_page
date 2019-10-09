import { navbar }  from './navbar.js'
import { header }  from './header.js'
import { body }  from './body.js'
import { about } from './about.js'
import { menu } from './menu.js'
import { contact } from './contact.js'

const page = (() => {
  
  let content = document.getElementById("content")
  
  const headerNode = () => {
    return header.create();
  }
  const navbarNode = () => {
    return navbar.create();
  };
  const bodyNode = () => {
    return body.create();
  }

  const addEventListeners = () =>{
    let navButtons = document.getElementsByClassName('content-nav-list-item');
    for(let i = 0; i < navButtons.length; i += 1){
      navButtons[i].addEventListener('click', (e) =>{
        unselectPreviousNavItem();
        unappendPreviousBodyContent();
        selectNavItem(document.getElementById(e.target.id))
        appendNewBodyContent(e.target.id);
      });
    };
  };

  const unselectPreviousNavItem = () => {
    let previous = document.getElementsByClassName('content-nav-list-item__selected')[0];
    previous.classList.remove('content-nav-list-item__selected');
  }

  const unappendPreviousBodyContent = () =>{
    let previous_body = document.getElementById('content-body').firstElementChild;
    removeFromBody(previous_body);
  }

  const initializeNode = (node) => {
    node.classList.add('content-init');
    return node;
  }

  const appendNewBodyContent = (id) => {
    switch (id)
    {
      case 'Menu':
          let node_menu = initializeNode(menu.create());
          appendToBody(node_menu);
          break;
      case 'Contact':
          let node_contact = initializeNode(contact.create());
          appendToBody(node_contact);
          break;
      case 'About':
          let node_about = initializeNode(about.create());
          appendToBody(node_about);
          break;
    }
  }

  const selectNavItem = (node) => {
    node.classList.add('content-nav-list-item__selected');
  }

  const appendToBody = (node) => {
    let bodyContent = document.getElementById('content-body');
    bodyContent.appendChild(node)
  }

  const removeFromBody = (node) =>{
    let bodyContent = document.getElementById('content-body');
    bodyContent.removeChild(node)
  }

  let load = () => {    
    content.appendChild(headerNode());                    
    content.appendChild(navbarNode());
    content.appendChild(bodyNode());
  };

  let init = () => {
    let navItem = document.getElementById('About');    
    selectNavItem(navItem);
    let node = initializeNode(about.create());
    appendToBody(node);
    addEventListeners();
  }

  return { load, init };
})();

export { page }