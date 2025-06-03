// Categories List
const deptList = document.getElementById("dept-list");
const categories = [
  "Fashion",
  "Education Product",
  "Frozen Food",
  "Beverages",
  "Organic Grocery",
  "Office Supplies",
  "Beauty Products",
  "Books",
  "Electronics & Gadget",
  "Travel Accessories",
  "Fitness",
  "Sneakers",
  "Toys",
  "Furniture",
];

const formattedDeps = categories
  .map(
    (category) =>
      `<li><a href="#" class="hover:border-gray-400 duration-300 border-b border-transparent capitalize w-fit">${category}</a></li>`
  )
  .join("\n");

deptList.innerHTML = formattedDeps;

// About List
const formattedAbout = [
  "About shopcart",
  "Careers",
  "News & Blog",
  "Help",
  "Press Center",
  "Shop by location",
  "Shopcart brands",
  "Affiliate & Partners",
  "Ideas & Guides",
]
  .map(
    (item) =>
      `<li><a href="#" class="hover:border-gray-400 duration-300 border-b border-transparent capitalize w-fit">${item}</a></li>`
  )
  .join("\n");
document.getElementById("about-list").innerHTML = formattedAbout;

// Services List
const formattedService = ["Gift Card", "Mobile App", "Shipping & Delivery", "Order Pickup", "Account Signup"]
  .map(
    (item) =>
      `<li><a href="#" class="hover:border-gray-400 duration-300 border-b border-transparent capitalize w-fit">${item}</a></li>`
  )
  .join("\n");
document.getElementById("services-list").innerHTML = formattedService;

// Help List
const formattedHelp = ["Shopcart Help", "Returns", "Track Orders", "Contact Us", "Feedback", "Security & Fraud"]
  .map(
    (item) =>
      `<li><a href="#" class="hover:border-gray-400 duration-300 border-b border-transparent capitalize w-fit">${item}</a></li>`
  )
  .join("\n");
document.getElementById("help-list").innerHTML = formattedHelp;

// User Section Update
const userSection = document.querySelector(".nav-list3"); // Reference to the user section div in the white background

function updateUserSection() {
  const isLoggedIn = localStorage.getItem("login") === "true";
  const regUsername = localStorage.getItem("username") || "Matthew"; // Default name if not set

  if (isLoggedIn) {
    // Show user avatar and name
    userSection.innerHTML = `
      <div class="flex items-center gap-2">
        <img src="./public/icons/user.svg" alt="User Avatar" width="18" height="18" />
        <span class="text-green-900 font-semibold">${regUsername}</span>
      </div>
    `;
  } else {
    // Show login button
    userSection.innerHTML = `
      <a href="Login.html" class="flex items-center gap-1">
        <img src="./public/icons/user.svg" alt="Login Icon" width="18" height="18" />
        <span>Login</span>
      </a>
    `;
  }
}

// Redirect to login page
function redirectToLogin() {
  window.location.href = "login.html";
}

// Initialize user section on page load
document.addEventListener("DOMContentLoaded", updateUserSection);
