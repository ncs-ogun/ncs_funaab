let results = JSON.parse(localStorage.getItem('categories')) || [
  {
    id: 1,
    name: "Toyiba",
    price: 500.0,
    image: "./public/images/homepod.png",
    rating: 4.8,
    buyer_count: 10,
    description:
      "This is a smart speaker that is very useful for listening to music and controlling smart home devices",
  },
  {
    id: 2,
    name: "Merline Holmes: The Case of the Missing Marquess",
    price: 500.0,
    image: "./public/images/books.jpeg",
    rating: 4.8,
    buyer_count: 10,
    description:
      '"Merline Holmes: The Case of the Missing Marquess" is a mystery novel by Nancy Springer. It is the first book in the Enola Holmes series, which follows the adventures of Enola Holmes, the younger sister of Sherlock Holmes. In this book, Enola must solve the case of her missing mother while also dealing with her famous brother and his expectations. The book is set in Victorian England and features',
  },
  {
    id: 3,
    price: 500.0,
    image: "./public/images/cars.webp",
    rating: 4.8,
    buyer_count: 10,
    name: "Mercedes Benz G-Class",
    description:
      "Mercedes Benz G-Class is a luxury SUV that is known for its off-road capabilities and high-end features. It is a popular choice among celebrities and wealthy individuals.",
  },
  {
    id: 4,
    price: 500.0,
    image: "./public/images/duffel.png",
    rating: 4.8,
    buyer_count: 10,
    name: "Duffel Bag",
    description: "This is a duffel bag that is very useful for carrying items",
  },
];

function saveCategories() {
  localStorage.setItem('categories', JSON.stringify(categoriesList));
}

function renderResults() {
  const resultsContainer = document.getElementById("results");
  if (!resultsContainer) {
    console.error('Could not find element with id "results"');
    return;
  }

  resultsContainer.innerHTML = "";

  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <li class="text-center py-8 text-gray-500">
        We can't find what you're looking for. Try another search term.
      </li>
    `;
    return;
  }

  results.forEach((item) => {
    const resultItem = document.createElement("li");
    resultItem.id = `result_item_${item.id}`;
    resultItem.className = "rounded-md p-2";

    // Generate stars based on rating
    const fullStars = Math.floor(item.rating);
    const hasHalfStar = item.rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    let starsHTML = "";

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      starsHTML += '<img src="./public/icons/orange-star.svg" class="size-4" alt="Full Star" />';
    }

    // Add half star
    if (hasHalfStar) {
      starsHTML += '<img src="./public/icons/half-star.svg" class="size-4" alt="Half Star" />';
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      starsHTML += '<img src="./public/icons/gray-star.svg" class="size-4" alt="Empty Star" />';
    }

    resultItem.innerHTML = `
      <div class="flex gap-2 justify-between items-center">
        <div class="flex gap-2">
          <div class="size-12 overflow-hidden relative rounded-full flex-shrink-0"><img id="item_image" src="${
            item.image
          }" class="w-full rounded-full w-full h-full object-cover" alt="${item.name}" width="50" height="50" />
          </div>
          <div>
            <h3 id="item_name" class="font-bold text-ellipsis line-clamp-2">${item.name}</h3>
            <p class="font-medium text-sm">$999.99 <span class="line-through text-gray-500 font-normal text-xs">$${item.price.toFixed(
              2
            )}</span></p>
            <div class="flex gap-0 items-center">
              ${starsHTML}
              <p class="ml-2">(${item.buyer_count})</p>
            </div>
          </div>
        </div>
        <button class="flex-shrink-0 size-8 rounded-full border flex items-center justify-center duration-300 hover:bg-primary/40 hover:text-white"><img src="./public/icons/add-to-cart.svg" class="size-5" /></button>
      </div>
    `;

    resultsContainer.appendChild(resultItem);
  });
}

const form = document.getElementById("search_form");
const resultsContainer = document.getElementById("results");
const searchContainer = document.getElementById("search_container");

document.addEventListener("DOMContentLoaded", () => {
  if (!form || !resultsContainer) {
    console.error('Could not find form with id "search_form"');
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    resultsContainer.classList.remove("hidden");
    resultsContainer.classList.add("p-3");
    renderResults();
  });
});

form.addEventListener("focusin", () => {
  resultsContainer.classList.remove("hidden");
  resultsContainer.classList.add("p-3");
});

// form.addEventListener("focusout", () => {
//   resultsContainer.classList.add("hidden");
//   resultsContainer.classList.remove("p-3");
// });
