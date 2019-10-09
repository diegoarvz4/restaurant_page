const navbar = (() => {

  const items = ['About', 'Menu', 'Contact']

  let create = () => {
    let nav = `<ul class='content-nav-list'>`
    items.forEach((item) => {
      nav += `<li class='content-nav-list-item' id='${item}'>${item}</li>`
    })
    nav += "</ul>"
    let navbar = document.createElement('nav');
    navbar.classList.add('content-nav');
    navbar.innerHTML = nav;
    return navbar;
  }

  return { create }
})();

export { navbar }