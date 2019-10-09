export const menu = (() =>{
  let create = () => { 
    let menuContent = document.createElement('p');
    menuContent.innerHTML = "Lorem ipsum menu"
    return menuContent;
  }
  return { create }
})();