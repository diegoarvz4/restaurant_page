const header = (() => {

  let create = () => {
    let headerNode = document.createElement('div')
    headerNode.classList.add('content-header')
    headerNode.innerHTML = `<h1 class="content-heade-title">PIZZA RESTAURANT</h1>`
    return headerNode;
  }

  return { create }
})();

export { header }