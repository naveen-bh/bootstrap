// var data = fetch("data/cars.json").then(response => response.json());
var data = [
    {
       "name": "plymouth fury iii",
       "miles_per_gallon": 14,
       "cylinders": 8,
       "displacement": 440,
       "horsepower": 215,
       "weight_in_lbs": 4312,
       "acceleration": 8.5,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-225841.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "chevrolet chevelle malibu",
       "miles_per_gallon": 18,
       "cylinders": 8,
       "displacement": 307,
       "horsepower": 130,
       "weight_in_lbs": 3504,
       "acceleration": 12,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-810357.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "buick skylark 320",
       "miles_per_gallon": 15,
       "cylinders": 8,
       "displacement": 350,
       "horsepower": 165,
       "weight_in_lbs": 3693,
       "acceleration": 11.5,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-892522.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "amc rebel sst",
       "miles_per_gallon": 16,
       "cylinders": 8,
       "displacement": 304,
       "horsepower": 150,
       "weight_in_lbs": 3433,
       "acceleration": 12,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-794435.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "ford torino",
       "miles_per_gallon": 17,
       "cylinders": 8,
       "displacement": 302,
       "horsepower": 140,
       "weight_in_lbs": 3449,
       "acceleration": 10.5,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-746684.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "ford galaxie 500",
       "miles_per_gallon": 15,
       "cylinders": 8,
       "displacement": 429,
       "horsepower": 198,
       "weight_in_lbs": 4341,
       "acceleration": 10,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-253096.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "buick skylark 320",
       "miles_per_gallon": 15,
       "cylinders": 8,
       "displacement": 350,
       "horsepower": 165,
       "weight_in_lbs": 3693,
       "acceleration": 11.5,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-892522.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "pontiac catalina",
       "miles_per_gallon": 14,
       "cylinders": 8,
       "displacement": 455,
       "horsepower": 225,
       "weight_in_lbs": 4425,
       "acceleration": 10,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-210019.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "plymouth satellite",
       "miles_per_gallon": 18,
       "cylinders": 8,
       "displacement": 318,
       "horsepower": 150,
       "weight_in_lbs": 3436,
       "acceleration": 11,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-116675.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "amc ambassador dpl",
       "miles_per_gallon": 15,
       "cylinders": 8,
       "displacement": 390,
       "horsepower": 190,
       "weight_in_lbs": 3850,
       "acceleration": 8.5,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-193021.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "chevrolet impala",
       "miles_per_gallon": 14,
       "cylinders": 8,
       "displacement": 454,
       "horsepower": 220,
       "weight_in_lbs": 4354,
       "acceleration": 9,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-244206.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "ford torino (sw)",
       "miles_per_gallon": 13,
       "cylinders": 8,
       "displacement": 351,
       "horsepower": 153,
       "weight_in_lbs": 4034,
       "acceleration": 11,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-164654.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "citroen ds-21 pallas",
       "miles_per_gallon": 9,
       "cylinders": 4,
       "displacement": 133,
       "horsepower": 115,
       "weight_in_lbs": 3090,
       "acceleration": 17.5,
       "year": "1970-01-01",
       "origin": "Europe",
       "url": "images/small/cars/pexels-170811.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "chevrolet chevelle concours (sw)",
       "miles_per_gallon": 6,
       "cylinders": 8,
       "displacement": 350,
       "horsepower": 165,
       "weight_in_lbs": 4142,
       "acceleration": 11.5,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-170811.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "ford torino (sw)",
       "miles_per_gallon": 13,
       "cylinders": 8,
       "displacement": 351,
       "horsepower": 153,
       "weight_in_lbs": 4034,
       "acceleration": 11,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-164654.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "plymouth satellite (sw)",
       "miles_per_gallon": 10,
       "cylinders": 8,
       "displacement": 383,
       "horsepower": 175,
       "weight_in_lbs": 4166,
       "acceleration": 10.5,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-136872.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "citroen ds-21 pallas",
       "miles_per_gallon": 9,
       "cylinders": 4,
       "displacement": 133,
       "horsepower": 115,
       "weight_in_lbs": 3090,
       "acceleration": 17.5,
       "year": "1970-01-01",
       "origin": "Europe",
       "url": "images/small/cars/pexels-170811.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "amc rebel sst (sw)",
       "miles_per_gallon": 15,
       "cylinders": 8,
       "displacement": 360,
       "horsepower": 175,
       "weight_in_lbs": 3850,
       "acceleration": 11,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-120049.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "plymouth 'cuda 340",
       "miles_per_gallon": 14,
       "cylinders": 8,
       "displacement": 340,
       "horsepower": 160,
       "weight_in_lbs": 3609,
       "acceleration": 8,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-2365572.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "ford mustang boss 302",
       "miles_per_gallon": 17,
       "cylinders": 8,
       "displacement": 302,
       "horsepower": 140,
       "weight_in_lbs": 3353,
       "acceleration": 8,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-1638459.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "plymouth duster",
       "miles_per_gallon": 22,
       "cylinders": 6,
       "displacement": 198,
       "horsepower": 95,
       "weight_in_lbs": 2833,
       "acceleration": 15.5,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-1054211.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "chevrolet monte carlo",
       "miles_per_gallon": 15,
       "cylinders": 8,
       "displacement": 400,
       "horsepower": 150,
       "weight_in_lbs": 3761,
       "acceleration": 9.5,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-1429775.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "buick estate wagon (sw)",
       "miles_per_gallon": 14,
       "cylinders": 8,
       "displacement": 455,
       "horsepower": 225,
       "weight_in_lbs": 3086,
       "acceleration": 10,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-1335077.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "toyota corona mark ii",
       "miles_per_gallon": 24,
       "cylinders": 4,
       "displacement": 113,
       "horsepower": 95,
       "weight_in_lbs": 2372,
       "acceleration": 15,
       "year": "1970-01-01",
       "origin": "Japan",
       "url": "images/small/cars/pexels-1209774.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "dodge challenger se",
       "miles_per_gallon": 15,
       "cylinders": 8,
       "displacement": 383,
       "horsepower": 170,
       "weight_in_lbs": 3563,
       "acceleration": 10,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-116675.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    },
    {
       "name": "amc hornet",
       "miles_per_gallon": 18,
       "cylinders": 6,
       "displacement": 199,
       "horsepower": 97,
       "weight_in_lbs": 2774,
       "acceleration": 15.5,
       "year": "1970-01-01",
       "origin": "USA",
       "url": "images/small/cars/pexels-1035108.jpg",
       "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo reprehenderit laboriosam esse ipsa expedita eius. Non soluta quia ut dolore, quaerat iste nulla ullam veniam voluptate sequi saepe amet deserunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quia hic perspiciatis repudiandae sunt laborum."
    }
 ]

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