

//  All Products Fetch

const allProductShow = async () => {
  const url = "https://fakestoreapi.com/products";
  const res = await fetch(url);
  const data = await res.json();
  displayProduct(data);
};


//  Categories Fetch

const allCategorise = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();
  categoriesContainer(data);

  // Default: All button active
  const allBtn = document.getElementById("all-categories-button");
  setActiveButton(allBtn);
};

// Call categories on page load
allCategorise();
allProductShow();


//  Categories Container

const categoriesContainer = (cat) => {
  const container = document.getElementById("categories-container");
  container.innerHTML = ""; // Clear old buttons

  // 🔹 All button
  const allBtn = document.createElement("button");
  allBtn.id = "all-categories-button";
  allBtn.className = "btn btn-outline px-6 text-lg rounded-full text-gray-700";
  allBtn.innerText = "All";

  allBtn.addEventListener("click", () => {
    allProductShow();
    setActiveButton(allBtn); // Active color
  });

  container.append(allBtn);

  // 🔹 Category buttons
  cat.forEach((item, index) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline px-6 text-lg rounded-full text-gray-700";
    btn.innerText = item;

    btn.addEventListener("click", () => {
      categoriesLesson(item); // Show clicked category product
      setActiveButton(btn); // Active color
    });

    container.append(btn);
  });
};


//  Set Active Button Function

const setActiveButton = (clickedBtn) => {
  const allButtons = document.querySelectorAll("#categories-container button");

  allButtons.forEach((btn) => {
    btn.classList.remove("active"); // Remove previous active
  });

  clickedBtn.classList.add("active"); // Add active to clicked
};


//  Display Products

const displayProduct = (products) => {
  const container = document.getElementById("all-product");
  container.innerHTML = ""; // Clear previous products

  products.forEach((element) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("border", "rounded-xl", "border-gray-300");

    newDiv.innerHTML = `
      <img class="h-96 w-full p-10 rounded-xl bg-gray-400" src="${element.image}" alt="">
      <div class="p-6">
        <div class="flex justify-between mt-4">
          <button class="text-blue-500 bg-blue-200 p-1 rounded-full">${element.category}</button>
          <p><i class="fa-solid fa-star text-yellow-400"></i> <span class="text-gray-400">${element.rating.rate}</span> <span class="text-gray-400">${element.rating.count}</span></p>
        </div>
        <h1 class="text-2xl pt-2">${element.title.slice(0, 30)}...</h1>
        <h1 class="text-2xl font-bold py-3">$${element.price}</h1>
        <div class="flex justify-between">
          <button onclick="productDetails(${element.id})" class="btn bg-white border-[#e5e5e5]"><i class="fa-regular fa-eye"></i> Details</button>
          <button class="btn btn-primary"><i class="fa-solid fa-cart-arrow-down"></i> Add</button>
        </div>
      </div>
    `;

    container.append(newDiv);
  });
};

// Product Details show

const productDetails = async (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  showDetails(data);
};

// details product function
const showDetails = (details) => {
  const modalContent = document.getElementById("modal-content");

  modalContent.innerHTML = `
    

    <h2 class="text-2xl font-bold mt-4">${details.title}</h2>

    <p class="py-3 text-gray-600">${details.description}</p>

    <h3 class="text-xl font-bold">$${details.price}</h3>

    <p class="mt-4 flex justify-between">
    <span><i class="fa-solid fa-star text-yellow-400"></i> ${details.rating.rate}</span> <span>(${details.rating.count}) </span>
    </p>

    <div class="modal-action">
      <form method="dialog">
        <button class="btn">Close</button>
      </form>
    </div>
  `;

  document.getElementById("my_modal_2").showModal();
};


// Categories Click

const categoriesLesson = async (name) => {
  const url = `https://fakestoreapi.com/products/category/${encodeURIComponent(name)}`;
  const res = await fetch(url);
  const data = await res.json();
  displayProduct(data);
};
