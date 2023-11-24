


 fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
        fillHTML(data)
    })



function fillHTML(datas){
    let result = ' ';
    const List = document.getElementById("card") ;
    console.log(datas);
    datas.forEach(element=>{
        result +=
        `
         <img src="${element.flags.png}" style="display:flex;flex-wrap:wrap; " class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.name.common}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">${element.cca2}</a>
        </div>`
    })
    List.innerHTML = result;
}