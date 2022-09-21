var data = fetch("data/cars.json").then(response => response.json());

function image_put(json) {
    for (var i = 0; i < json.length; i++) {
        var card = document.createElement("div");
        var card_image = document.createElement("img");
        var card_body = document.createElement("div");
        var card_title = document.createElement("h5");
        var card_text = document.createElement("p");
        var card_button = document.createElement("a");
        card.setAttribute("class", "card");
        card.setAttribute("data-id", i);
        if (window.screen.width < 800) {
            card.setAttribute("style", "width:100%; justify-content:space-between;margin:10px 0px;");
        }
        else {
            card.setAttribute("style", "width:18rem; justify-content:space-between;margin:10px 10px;");
            card.setAttribute("onclick", "sidebar_ch(this)");
        }
        card_image.setAttribute("class", "card-img-top");
        card_image.setAttribute("alt", "car_image");
        card_image.setAttribute("src", json[i].url);
        card_body.setAttribute("class", "card_body");
        card_body.setAttribute("style", "padding:5px 10px;");
        card_title.setAttribute("class", "card_title");
        card_title.innerText = json[i].name;
        card_text.setAttribute("class", "card_text");
        card_text.setAttribute("class", "height");
        card_text.innerText = json[i].discription.substring(0, 100) + '...';
        card_button.setAttribute("class", "btn btn-primary");
        card_button.setAttribute("style", "width:100%");
        card_button.setAttribute("href", "#");
        card_button.innerText = "Buy Now";

        card.appendChild(card_image);
        card.appendChild(card_body);
        card_body.appendChild(card_title);
        card_body.appendChild(card_text);
        card_body.appendChild(card_button);

        document.getElementById("main").appendChild(card);
    }
}
image_put(data);

function sidebar_ch(element) {
    var data_id = element.getAttribute("data-id");
    var name = data[parseInt(data_id)].name;
    var url = data[parseInt(data_id)].url;
    var discription = data[parseInt(data_id)].discription.substring(0, 200) + "...";
    var origin = data[parseInt(data_id)].origin;
    var year = data[parseInt(data_id)].year;
    var average = data[parseInt(data_id)].miles_per_gallon;

    document.querySelector("aside img").setAttribute("src", url);
    document.querySelector("aside h5").innerHTML = `<b>Name: </b> ${name}`;
    document.querySelector("aside p").innerHTML = `<b>Detail: </b> ${discription}`;
    document.querySelectorAll("aside li")[0].innerHTML = `<b>Country: </b> ${origin}`;
    document.querySelectorAll("aside li")[1].innerHTML = `<b>Model: </b> ${year}`;
    document.querySelectorAll("aside li")[2].innerHTML = `<b>Average: </b> ${average}`;

}

if (window.screen.width < 800) {
    document.getElementsByTagName("aside")[0].style.display = "none";
    document.getElementsByClassName
}else{
    sidebar_ch(document.querySelector("main .card"))
}