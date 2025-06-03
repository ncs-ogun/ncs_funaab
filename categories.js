const categoriesList = JSON.parse(localStorage.getItem('categories')) || [
  {
    name: "electronics",
    image: "./public/images/electronics.jpeg",
  },
  {
    name: "fashion",
    image: "./public/images/fashion.jpg",
  },
  {
    name: "beauty",
    image: "./public/images/beauty.jpg",
  },
  {
    name: "sports",
    image: "./public/images/sports.jpg",
  },
  {
    name: "home appliances",
    image: "./public/images/home-appliances.png",
  },
  {
    name: "toys",
    image: "./public/images/toys.jpg",
  },
  {
    name: "cars",
    image: "./public/images/cars.webp",
  },
  {
    name: "books",
    image: "./public/images/books.jpeg",
  },
  {
    name: "home appliances",
    image: "./public/images/home-appliances.png",
  },
];

function saveCategories() {
  localStorage.setItem('categories', JSON.stringify(categoriesList));
}

const categoriesContainer = document.getElementById("categories-container");
const formattedCategories = [...categoriesList, ...categoriesList]
  .map(
    ({ name, image }) =>
      `<div class="w-full">
        <a href="/products.html" class="space-y-2 w-full text-center space-y-1">
          <div
            class="min-h-72 bg-primary rounded-sm w-full p-2 relative duration-200 hover:border-primary overflow-hidden mx-auto group"
          >
            <img
              src="${image}"
              alt="Electronics"
              width="100"
              height="100"
              class="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 duration-300"
            />

            <div
              class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 flex text-white items-end justify-center p-4 duration-300 group-hover:from-black"
            >
              <p class="text-sm font-medium capitalize">${name}</p>
            </div>
          </div>
        </a>
      </div>`
  )
  .join("\n");

categoriesContainer.innerHTML = formattedCategories;
