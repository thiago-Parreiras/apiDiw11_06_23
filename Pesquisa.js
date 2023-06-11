function pesquisar_produto() {
    const palavra = $('#palavra').val()
  
    fetch(`https://diwserver.vps.webdock.cloud/products`)
      .then(res => res.json())
      .then(data => {
        let str = ''
        for (let i = 0; i < 10; i++) {
          let product = data[i]
          let text = product.description
          let position = text.search(palavra);
          if (position > 0) {
            str +=
              `<div class="row">          
              <div class="col-7">
                <p>${product.description}</p>
              </div>
              <div class="col-3">
                <img src="${product.image}"  alt="..." class="img-thumbnail" style="max-width:100px;">
              </div>
              <div class="col-2">
                <a class="btn btn-primary" href="detalhes.html?id=${product.id}" role="button">detalhes</a>
              </div>
            </div>`
          }
        }
  
        $('#tela_pesquisa').html(str)
      })
      .catch(error => console.log(error));
  }
