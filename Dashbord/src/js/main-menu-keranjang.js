const product = [
    {
        id: 0,
        image: 'image/gg-1.jpg',
        title: 'a',
        price: 120,
    },
    {
        id: 1,
        image: 'image/hh-2.jpg',
        title: 'b',
        price: 60,
    },
    {
        id: 2,
        image: 'image/ee-3.png',
        title: 'c',
        price: 230,
    },
    {
        id: 3,
        image: 'image/aa-1.jpg',
        title: 'd',
        price: 100,
    },
    {
        id: 4,
        image: 'image/bb-1.jpg',
        title: 'e',
        price: 230,
    },
    {
        id: 5,
        image: 'image/cc-1.jpg',
        title: 'f',
        price: 100,
    },
    {
        id: 6,
        image: 'image/gg-1.jpg',
        title: 'g',
        price: 120,
    },
    {
        id: 7,
        image: 'image/hh-2.jpg',
        title: 'h',
        price: 60,
    },
    {
        id: 8,
        image: 'image/ee-3.png',
        title: 'i',
        price: 230,
    },
    {
        id: 9,
        image: 'image/aa-1.jpg',
        title: 'j',
        price: 100,
    },
    {
        id: 10,
        image: 'image/bb-1.jpg',
        title: 'k',
        price: 230,
    },
    {
        id: 11,
        image: 'image/cc-1.jpg',
        title: 'l',
        price: 100,
    },
];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, price } = item;
        return (
            `<div class='container-content-image'>
                    <div class='img-box'>
                        <img class='images' src=${image}></img>
                    </div> 
                    <div class='list'>
                        <p>${title}</p>
                        <h2>Rp.${price}.000</h2>
                    <button class='tbl-beli' onclick="Cache()"> beli </button>
                    </div>
                </div>`
        )
    }).join('')
};
displayItem(categories);

//   waktu 

setInterval(myTimer, 1000);

function myTimer() {
    const d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}