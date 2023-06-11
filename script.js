function init() {
    fetch('https://diwserver.vps.webdock.cloud/products')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        let str = ''
        data = data.products
        for (let i = 0; i < 10; i++) {
          let product = data[i]
          console.log(product)
          str +=
            `<div class="row">          
              <div class="col-7">
                <p>${product.title}</p>
              </div>
              <div class="col-3">
                <img src="${product.image}"  alt="..." class="img-thumbnail" style="max-width:100px;">
              </div>
              <div class="col-2">
                <a class="btn btn-primary" href="detalhes.html?id=${product.id}" role="button">detalhes</a>
              </div>
            </div>`
        }
        console.log(str)
        $('#tela').html(str)
  
      })
      .catch(error => console.log(error));
    }
