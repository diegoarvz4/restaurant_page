const page = () => {
  let content = document.getElementById("content")
  let load = () => {
    let header = document.createElement('div');
    header.classList.add('content-header')
    header.innerHTML = `<h1 class="content-heade-title">PIZZA RESTUARANT</h1>`
    let navbar = document.createElement('nav');
    navbar.classList.add('content-nav');
    navbar.innerHTML = `
                        <ul class='content-nav-list'>
                          <li class='content-nav-list-item'>About</li>
                          <li class='content-nav-list-item'>Menu</li>
                          <li class='content-nav-list-item'>Contact</li>
                        </ul>`;
    content.appendChild(header);                    
    content.appendChild(navbar);
    console.log(content)
  };

  return { load };
};

export { page }