export function DOM_listing (DOM_element, DOM_object) {
    console.log(DOM_object);
    DOM_element.innerHTML +=`<div class="col-sm-6 col-md-5 col-lg-4 mb-3">
    <div class="card m-1 w-100 h-100" style="width: 18rem;">
      <img src="${DOM_object.media}" onerror="this.src = 'https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png';" class="card-img-top" alt="Auction Item 2">
      <div class="card-body d-flex flex-column justify-content-between">
      <div>
        <h5 class="card-title">${DOM_object.title}</h5>
        <p class="card-text">${DOM_object.description}</p>
        </div>
        <a href="spesific.html?id=${DOM_object.id}" class="btn btn-primary">VIEW ITEM</a>
      </div>
    </div>
  </div>`;
  console.log(DOM_object.id);
    console.log(DOM_object.title);
};