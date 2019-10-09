export default (() =>{
  const create = () => {
    const contactContent = document.createElement('div');
    contactContent.classList.add('content-body-contact');
    contactContent.innerHTML = `<div content-body-contact-email>
                                  <h1>EMAIL</h1>
                                  <h2>pizza@pizza.com</h2>
                                </div>
                                <div content-body-contact-phone>
                                  <h1>PHONE</h1>
                                  <h2>+52777625189</h2>
                                </div>`;
    return contactContent;
  };
  return { create };
})();