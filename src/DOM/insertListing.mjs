export function DOM_listing (DOM_element, DOM_object) {
    console.log(DOM_object);
    DOM_element.innerHTML +=`<div class="card-items rounded m-1">
    <div class="listed-user d-flex">
        <img src="${DOM_object.seller.avatar}" onerror="this.src = '/images/profile.jpg'"; class="card-profileIMG">
        <p>${DOM_object.seller.name}</p>
    </div>
    <div class="listed-img">
        <img class="rounded" src="${DOM_object.media}" id="img_listed">
    </div>
    <div class="listed-description">
        <h3>${DOM_object.title}</h3>
        <p>${DOM_object.description}</p>
    </div>
    <a href="spesific.html?id=${DOM_object.id}"><button id="btn_view">VIEW ITEM</button></a>
</div>`;
    console.log(DOM_object.title);
};