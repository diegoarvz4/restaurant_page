export const contact = (() =>{
  let create = () => { 
    let contactContent = document.createElement('p');
    contactContent.innerHTML = "Lorem ipsum contact"
    return contactContent;
  }
  return { create }
})();