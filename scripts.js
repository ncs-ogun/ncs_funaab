/* eslint-disable no-unused-vars */
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

// Load Footer Component
function loadFooter() {
  const footerContent = `
    <div class="space-y-5">
      <div class="container flex md:flex-row flex-col justify-between gap-8">
        <div class="space-y-7">
          <div>
            <a href="/" class="flex items-center gap-2" id="logo">
              <img src="./public/images/logo.png" alt="AgroPlus Logo" width="34" height="34" />
              <span class="font-bold text-2xl">AgroPlus</span>
            </a>
          </div>

          <p class="text-sm text-gray-500 max-w-md">
            Connecting farmers with buyers and providing innovative financial solutions for agricultural growth. Your trusted partner in agricultural commerce and finance.
          </p>

          <div class="space-y-3">
            <p class="md:text-lg font-semibold">Payment Methods</p>
            <div class="flex items-center gap-2 flex-wrap max-w-lg">
              <div class="border rounded-md flex items-center justify-center px-4 min-h-10">
                <img src="./public/images/payments/stripe.png" alt="" />
              </div>
              <div class="border rounded-md flex items-center justify-center px-4 min-h-10">
                <img src="./public/images/payments/paystack.png" alt="" />
              </div>
              <div class="border rounded-md flex items-center justify-center px-4 min-h-10">
                <img src="./public/images/payments/flutterwave.png" alt="" />
              </div>
              <div class="border rounded-md flex items-center justify-center px-4 min-h-10">
                <img src="./public/images/payments/bank-transfer.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="sm:flex flex-grow grid grid-cols-2 justify-between gap-4">
          <div class="space-y-4">
            <p class="font-semibold text-lg">Products</p>
            <ul class="text-sm space-y-2">
              <li><a href="#" class="hover:text-primary">Crops & Grains</a></li>
              <li><a href="#" class="hover:text-primary">Livestock</a></li>
              <li><a href="#" class="hover:text-primary">Farm Equipment</a></li>
              <li><a href="#" class="hover:text-primary">Agro-Chemicals</a></li>
            </ul>
          </div>
          <div class="space-y-4">
            <p class="font-semibold text-lg">Services</p>
            <ul class="text-sm space-y-2">
              <li><a href="#" class="hover:text-primary">Agricultural Loans</a></li>
              <li><a href="#" class="hover:text-primary">Farm Insurance</a></li>
              <li><a href="#" class="hover:text-primary">Financial Advisory</a></li>
              <li><a href="#" class="hover:text-primary">Market Analysis</a></li>
            </ul>
          </div>
          <div class="space-y-4">
            <p class="font-semibold text-lg">Company</p>
            <ul class="text-sm space-y-2">
              <li><a href="./about.html" class="hover:text-primary">About Us</a></li>
              <li><a href="#" class="hover:text-primary">Partners</a></li>
              <li><a href="#" class="hover:text-primary">Careers</a></li>
              <li><a href="./faq.html" class="hover:text-primary">FAQs</a></li>
            </ul>
          </div>
          <div class="space-y-4">
            <p class="font-semibold text-lg">Support</p>
            <ul class="text-sm space-y-2">
              <li><a href="#" class="hover:text-primary">Help Center</a></li>
              <li><a href="#" class="hover:text-primary">Contact Us</a></li>
              <li><a href="#" class="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      <p class="text-center font-medium md:text-sm text-xs">&copy; 2025 AgroPlus. All rights reserved.</p>
    </div>
  `;

  const footerElement = document.querySelector('footer');
  if (footerElement) {
    footerElement.innerHTML = footerContent;
  }
}

// Initialize footer on page load
document.addEventListener("DOMContentLoaded", () => {
  updateUserSection();
  loadFooter();
});
