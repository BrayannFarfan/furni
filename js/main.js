const container_products = document.querySelector('#container_products');

const cart = [];

for (let index = 0; index < data_product.length; index++) {

    const element = data_product[index];

    const div = document.createElement('div');
    div.classList.add('col-12', 'col-md-4' ,'col-lg-3', 'mb-5' , 'mb-md-0' )

    div.innerHTML = `
        <a class="product-item">
            <img src="${element.image}" class="img-fluid product-thumbnail">
            <h3 class="product-title">${element.name}</h3>
            <strong class="product-price">$ ${element.price}</strong>

            <span class="icon-cross" data-id="${element.id}">
                <img src="images/cross.svg" class="img-fluid">
            </span>
        </a>    
    `;

    container_products.appendChild(div)

}

const getIds = document.querySelectorAll(".icon-cross");

getIds.forEach(element => {
    element.addEventListener('click', () =>{
        const getAtributte =  getIds.getAttribute('data-id')
    })
});

