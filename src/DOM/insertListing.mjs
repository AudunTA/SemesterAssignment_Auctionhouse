export function DOM_listing (DOM_element, DOM_object) {
    console.log(DOM_object.description);
    const description = descriptionError(DOM_object.description);
  console.log(description);
    const endDate = convertDate(DOM_object.endsAt);
    DOM_element.innerHTML +=`<div class="col-sm-6 col-lg-4 mb-3">
    <div class="card w-100 h-100">
    <div class="end position-absolute bg-info rounded">
    <p  class="m-1  p-1">ending: ${endDate}</p>
  </div>
      <img src="${DOM_object.media[0]}" onerror="this.src = 'https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png';" class="card-img-top" alt="Auction Item 2">
      <div class="card-body d-flex flex-column justify-content-between">
      <div>
        <h5 class="card-title">${DOM_object.title}</h5>
        ${description}
        </div>
        <a href="spesific.html?id=${DOM_object.id}" class="btn btn-primary">VIEW ITEM</a>
      </div>
    </div>
  </div>`;
  console.log(DOM_object.id);
    console.log(DOM_object.title);
};

function convertDate(isoString) {
  const date = new Date(isoString.slice(0, -1));
  const todaysDate = new Date();
  if(todaysDate > date) {
    return "Expired";
  } else {
      const stringDate = date.toString();
  return stringDate.slice(0,25);

  }

}

export function descriptionError(description) {
  if(description) {
    return `<p class="card-text">${description}</p>`
  }
  else {
    return `<p class="text-secondary">this listing does not have a description</p>`;
  }

}