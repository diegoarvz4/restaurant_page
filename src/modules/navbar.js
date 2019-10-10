export default (() => {
  const items = ['About', 'Menu', 'Contact'];
  const create = () => {
    let nav = '<ul class="content-nav-list">';
    items.forEach((item) => {
      nav += `<li class='content-nav-list-item' id='${item}'>${item}</li>`;
    });
    nav += '</ul>';
    const navbar = document.createElement('nav');
    navbar.classList.add('content-nav');
    navbar.innerHTML = nav;
    return navbar;
  };
  return { create };
})();