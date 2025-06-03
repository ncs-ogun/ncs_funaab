const productsList = JSON.parse(localStorage.getItem("categories")) || [
  {
    name: "Adidas",
    image: "./public/images/adidas.png",
    description: "This is a nice Adidas shoe that is very useful for running",
  },
  {
    name: "Airpods Max",
    image: "./public/images/airpods-max.png",
    description: "Airpods Max is a game changing headphone that makes you feel the music",
  },
  {
    name: "Canin Bag",
    image: "./public/images/canin-luggage.png",
    description: "Canin Bag is a full size luggage that is very useful for carrying items",
  },
  {
    name: "Ipad Mini",
    image: "./public/images/ipad-mini.png",
    description: "The Ipad Mini is a small tablet that is very useful for reading books and watching movies",
  },
  {
    name: "Laptop Sleeve",
    image: "./public/images/laptop-sleeve.png",
    description: "This laptop sleeve is very useful for protecting your laptop from scratches and dust",
  },
  {
    name: "Macbook Pro",
    image: "./public/images/macbook-pro.png",
    description: "Macbook Pro is a powerful laptop that is very useful for video editing and gaming",
  },
  {
    name: "Pendleton Water Bottle",
    image: "./public/images/pendleton-water-bottle.png",
    description: "This is a water bottle that is very useful for carrying water and staying hydrated",
  },
  {
    name: "Supreme Water Bottle",
    image: "./public/images/supreme-water.png",
    description:
      "Supreme Water Bottle is a high quality water bottle that is very useful for carrying water and staying hydrated",
  },
  {
    name: "home appliances",
    image: "./public/images/home-appliances.png",
    description:
      "This is a smart speaker that is very useful for listening to music and controlling smart home devices",
  },
];

const addToCart = () => {
  alert("Product added to cart");
};

const productsContainer = document.getElementById("products-container");
const formattedProducts = [...productsList, ...productsList, ...productsList, ...productsList]
  .map(
    ({ name, image }) =>
      `<div class="group">
        <div class="w-full rounded-lg overflow-hidden bg-gray-100">
        <a href="/products.html" class="space-y-2 w-full text-center space-y-1">
          <div
            class="min-h-64 rounded-sm w-full p-2 relative duration-200 hover:border-primary overflow-hidden mx-auto group"
          >
            <img
              src="${image}"
              alt="Electronics"
              width="100"
              height="100"
              class="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 duration-300"
            />
          </div>
        </a>
      </div>

       <div class="py-2 space-y-1">
        <div class="flex items-center justify-between">
          <p class="text-lg font-bold capitalize">${name}</p>
          <p class="text-sm font-medium text-gray-500">$${Math.floor(Math.random() * 1000)}</p>
        </div>
        <button class="w-w-fit group-hover:opacity-100 opacity-0 duration-300 bg-orange-600 text-xs font-bold text-white rounded-full py-2 px-4" onclick={addToCart()}>Add to Cart</button>
       </div>
      </div>`
  )
  .join("\n");

productsContainer.innerHTML = formattedProducts;
