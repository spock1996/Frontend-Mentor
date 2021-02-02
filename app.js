const slider = document.getElementById("slider");

const viewsEl = document.getElementById("views");

const priceEl = document.getElementById("price");

const discountEl = document.getElementById("discount-input");

let discount = 0
let price = 16;
let views;


class UI {
    changeViewsPrice(value, views) {
        if (value === 1) {
            viewsEl.innerHTML = `10K pageviews`;
            priceEl.innerHTML = `$${price = 8}.00 <span class="month"> / month</span>`;
        }
        else if((Number(slider.value) === 2)) {
            viewsEl.innerHTML = `50K pageviews`;
            priceEl.innerHTML = `$${price = 12}.00 <span class="month"> / month</span>`;
        }
        if (value === 3) {
            viewsEl.innerHTML = `100K pageviews`;
            priceEl.innerHTML = `$${price = 16}.00 <span class="month"> / month</span>`;
        }
        else if((Number(slider.value) === 4)) {
            viewsEl.innerHTML = `500K pageviews`;
            priceEl.innerHTML = `$${price = 24}.00 <span class="month"> / month</span>`;
        }
        else if((Number(slider.value) === 5)) {
            viewsEl.innerHTML = `1M pageviews`;
            priceEl.innerHTML = `$${price = 36}.00 <span class="month"> / month</span>`;
        }

    }

    AddDiscount() {
        if(discount === 25) {
            priceEl.innerHTML = `$${(price/100) * discount}.00 <span class="month"> / month</span>`;
        }
        
    }



}


discountEl.addEventListener("change", e => {
    if(discount === 0) {
        discount = 25;
        priceEl.innerHTML = `$${(price/100) * discount}.00 <span class="month"> / month</span>`;
    } else {
        discount = 0;
        priceEl.innerHTML = `$${price}.00 <span class="month"> / month</span>`;
    }
})



slider.addEventListener("input", e => {
    let ui = new UI();
    let addDiscount = new UI();
    ui.changeViewsPrice(Number(slider.value), views);
    addDiscount.AddDiscount()
    
   
})








/*  if(Number(slider.value) === 1 ) {
        views.innerHTML = `<p class="views">10K pageviews</p>`;
        priceEl.innerHTML = `<h2 class="price" id="price">$${price = 8}.00 <span class="month"> / month</span></h2>`;
    }
    else if((Number(slider.value) === 2)) {
        views.innerHTML = `<p class="views">50K pageviews</p>`;
        priceEl.innerHTML = `<h2 class="price" id="price">$${price = 12}.00 <span class="month"> / month</span></h2>`;
    }
    else if((Number(slider.value) === 3)) {
        views.innerHTML = `<p class="views">100K pageviews</p>`;
        priceEl.innerHTML = `<h2 class="price" id="price">$${price = 16}.00 <span class="month"> / month</span></h2>`;
    }
    else if((Number(slider.value) === 4)) {
        views.innerHTML = `<p class="views">500k pageviews</p>`;
        priceEl.innerHTML = `<h2 class="price" id="price">$${price = 24}.00 <span class="month"> / month</span></h2>`;
    }
    else if((Number(slider.value) === 5)) {
        views.innerHTML = `<p class="views">1M pageviews</p>`;
        priceEl.innerHTML = `<h2 class="price" id="price">$${price = 36}.00 <span class="month"> / month</span></h2>`;
    }*/