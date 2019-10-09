export const about = (() =>{

  let aboutText = () =>{
    let text = `Welcome to he best pizzas from Cuernavaca, México. 
                Explore the italian tradition with new mixes of our
                own culture. New flavors are new experiences.
                This is all about enforcing the pizza culture.
                Take a look at our menu and please enjoy!`
    return text;
  }

  let create = () => { 
    let aboutContent = document.createElement('div');
    aboutContent.classList.add('content-body-about')
    aboutContent.innerHTML = `<p class="content-body-about-copy">${aboutText()}</p>`;
    return aboutContent;
  }
  return { create }
})();