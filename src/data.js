import p1 from "./assets/p1.jpg"
import p2 from "./assets/p2.jpg"
import p3 from "./assets/p3.jpg"
import p4 from "./assets/p4.jpg"
import p5 from "./assets/p5.jpg"
import p6 from "./assets/p6.jpg"

// random num
const rand = Math.floor(Math.random() * 10 + 3);
const rands = Math.floor(Math.random() * 11 + 3);
const rand_price = Math.floor(Math.random() * 100000);
const rand_sqft = Math.floor(Math.random() * 500);

const AllProducts = [
    {
        id: 1,
        img: p1,
        bedroom: rands,
        bathroom: rand,
        sqft: rand_sqft,
        price: rand_price,
        Location: "Mogadishu"
    },
    {
        id: 2,
        img: p2,
        bedroom: rands,
        bathroom: rand,
        sqft: rand_sqft,
        price: rand_price,
        Location: "Hargeysa"
    },
    {
        id: 3,
        img: p3,
        bedroom: rands,
        bathroom: rand,
        sqft: rand_sqft,
        price: rand_price,
        Location: "Boosaaso"
    },
    {
        id: 4,
        img: p4,
        bedroom: rands,
        bathroom: rand,
        sqft: rand_sqft,
        price: rand_price,
        Location: "Kismaayo"
    },
    {
        id: 5,
        img: p5,
        bedroom: rands,
        bathroom: rand,
        sqft: rand_sqft,
        price: rand_price,
        Location: "Baydhabo"
    },
    {
        id: 6,
        img: p6,
        bedroom: rands,
        bathroom: rand,
        sqft: rand_sqft,
        price: rand_price,
        Location: "Jowhar"
    }
]

export default AllProducts;