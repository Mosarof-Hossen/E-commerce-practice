const trandingProduct = async () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayLesson(data.slice(0, 3)));
}
const displayLesson = (lesson) => {
  console.log(lesson)
  const threeCard = document.getElementById("three-crad");
  lesson.forEach((element) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `


        <img  class="h-96 w-full p-10 rounded-xl bg-gray-400" src="${element.image}" alt="">
                    <div class="p-6">
                    <div class="flex justify-between mt-4">
                        <button class="text-blue-500 bg-blue-200 p-1 rounded-full">${element.category}</button>
                        <p><i class="fa-solid fa-star text-yellow-400"></i> <span class="text-gray-400">${element.rating.rate}</span> <span class="text-gray-400">${element.rating.count}</span></p>
                    </div>
                    <h1 class="text-2xl pt-2">${element.title.slice(0, 30) + "..."}</h1>
                    <h1 class="text-2xl font-bold py-3">$${element.price}</h1>
                    <div class="flex justify-between">
                        <button onclick="productDetails(${element.id})" class="btn bg-white border-[#e5e5e5]"><i class="fa-regular fa-eye"></i> Details</button>
                        <button class="btn btn-primary"><i class="fa-solid fa-cart-arrow-down"></i> Add</button>
                    </div>
                    
                    </div>
        
        `;

    threeCard.append(newDiv);
  });
};
trandingProduct();

// menu section active function
const links = document.querySelectorAll(".menu-link");
const currentPage = window.location.pathname.split("/").pop();

links.forEach((get) => {
  const anyPage = get.getAttribute("href").replace("./", "");
  if (anyPage === currentPage) {
    get.classList.add("menu-active");
  }
});

// product showDetails function


const productDetails = async (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  showDetails(data);
};


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





