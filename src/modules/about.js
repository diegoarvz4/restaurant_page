export const about = (() =>{
  let create = () => { 
    let aboutContent = document.createElement('div');
    aboutContent.innerHTML = "Lorem ipsum about"
    return aboutContent;
  }
  return { create }
})();