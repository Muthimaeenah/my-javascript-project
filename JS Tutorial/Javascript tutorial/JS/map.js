let items = document.getElementById("items");
console.log(items);

let itemList = [
    {
        id: 1,
        name: "Ford Mustang",
        img: "./img/Mustang.jpg",
        desc: "Solid and Bold",
        color: "Black",
        price: 45460
    }, 
    {
        id: 2,
        name: "BMW",
        img: "./img/BMW.jpg",
        desc: "Luxury and Class",
        color: "Grey",
        price: 53460
    }, 
    {
        id: 3,
        name: "Bettle",
        img: "./img/bettle.jpg",
        desc: "Classic and Timeless",
        color: "Orange",
        price: 20460
    }, 
    {
        id: 4,
        name: "Lambo",
        img: "./img/lambo.jpg",
        desc: "Crazy Fast",
        color: "White",
        price: 100460
    }];
    console.log(items);

let basket = [];

let displayItems = () => {
    items.innerHTML = itemList
    .map((carLot) => {
            let { id, name, img, desc, color, price } = carLot; 
        return 
        `   <div id=car-id-${id} class="item">
                <img src="${img}" alt="Ford" height="200" width="250">
                <h3>${name}</h3>
                <p>${desc}</p>
                <p>${color}</p>

                <div class="price">
                <h4>${price}</h4>
                <div class=""order>
                    <i onclick="decrement(${id})" class="bi bi-dash"></i>
                    <div id="${id}">0</div>
                    <i onclick="increment(${id})" class="bi bi-plus"></i>
                </div>
            </div>
        </div>`
    })
    .join("");
};


displayItems();

let increment = (id) => {
    // let i = document.getElementById("car-id-" + id);
    let selectedCar = id;
    let search = basket.find((carFind) => carFind.id === selectedCar)

    // console.log(search);
    console.log(selectedCar);
    basket.push({
        id: selectedCar,
        item: 1,
    })
};
let decrement = (id) => {
    let selectedCar = id;
    let search = basket.find((carFind) => carFind.id === selectedCar)
};
let counter = () => {};