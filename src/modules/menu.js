export const menu = (() =>{

  let appendPizzas = () =>{
    let sources = ['hawaiian', 'margheritta', 'mexican', 'pepperoni', 'shrimps', 'vegetarian'];
    let pizzaContent = "";
    sources.forEach( src => {
      pizzaContent += `<div class="content-body-menu-item">
                        <h1 class="content-body-menu-item-title"> ${src.toUpperCase()} </h1>
                        <img class="content-body-menu-item-img" src='assets/img/${src}.jpg' >
                      </div>`;
    })
    return pizzaContent;
  }

  let create = () => { 
    let menuContent = document.createElement('div');
    menuContent.classList.add('content-body-menu');
    menuContent.innerHTML = appendPizzas();
    return menuContent;
  }
  return { create }
})();