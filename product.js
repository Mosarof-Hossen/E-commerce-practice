const allProductShow = () => {
  const url = "https://fakestoreapi.com/products";
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayProduct(data))
};

const allCategorise = async () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => categoriesContainer(data));
};
allCategorise();

// categories display function

const categoriesContainer = (cat) => {
  const categoriseContainerDiv = document.getElementById(
    "categories-container",
  );

  const allButton = document.createElement("div");
  allButton.innerHTML = `<button onclick="allProductShow()" class="btn btn-outline px-6 text-lg rounded-full text-gray-700">All</button>`;
  categoriseContainerDiv.append(allButton);

  //   every lesson forEach loop
  cat.forEach((items) => {
    const newButtonDiv = document.createElement("div");
    newButtonDiv.innerHTML = `<button onclick="categoriesLesson('${items.replace(/'/g, "\\'")}')" class="btn btn-outline px-6 text-lg rounded-full text-gray-700">${items}</button>`;
    categoriseContainerDiv.append(newButtonDiv);
  });
};

// all product display
const displayProduct = (lesson) => {
  const allProductBtn = document.getElementById("all-product");
  allProductBtn.innerHTML=""

  lesson.forEach((element) => {
    const newDive = document.createElement("div");
    newDive.classList.add("border","rounded-xl","border-gray-300")
    newDive.innerHTML = `


        <img  class="h-96 w-full p-10 rounded-xl bg-gray-400" src="${element.image}" alt="">
                    <div class="p-6">
                    <div class="flex justify-between mt-4">
                        <button class="text-blue-500 bg-blue-200 p-1 rounded-full">${element.category}</button>
                        <p><i class="fa-solid fa-star text-yellow-400"></i> <span class="text-gray-400">${element.rating.rate}</span> <span class="text-gray-400">${element.rating.count}</span></p>
                    </div>
                    <h1 class="text-2xl pt-2">${element.title.slice(0, 30) + "..."}</h1>
                    <h1 class="text-2xl font-bold py-3">$${element.price}</h1>
                    <div class="flex justify-between">
                        <button class="btn bg-white border-[#e5e5e5]"><i class="fa-regular fa-eye"></i> Details</button>
                        <button class="btn btn-primary"><i class="fa-solid fa-cart-arrow-down"></i> Add</button>
                    </div>
                    
                    </div>
        
        `;

    allProductBtn.append(newDive);
  });
};

// categories click dynamic
const categoriesLesson =async (name) => {
   
  const url=`https://fakestoreapi.com/products/category/${name}
  `
 const res=await fetch(url)
 const data=await res.json()
 displayProduct(data)
};


allProductShow()





