const book = [
  {
    id: 1,
    category: "Self-help",
    name: "Atomic habit",
    price: 15.25,
    img: "./images/atomichabit.jpg",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quos facere, sed obcaecati rem in minus 
        voluptatum at voluptate, quo impedit magnam minima hic reiciendis earum vitae maxime? Earum, laudantium.`,
  },
  {
    id: 2,
    category: "Self-help",
    name: "not giving a F",
    price: 14,
    img: "./images/subtleartofnotgivingafuck2.png",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim ut corporis aspernatur
        accusantium beatae est animi fugia accusantium beatae animi fugiat aliquid`,
  },
  {
    id: 3,
    category: "History",
    name: "the art of war",
    price: 8,
    img: "./images/theartofwar.jpg",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim ut corporis aspernatur
        accusantium beatae est animi fugiat aliquid molestias modi exercitationem eum, voluptate
        incidunt ex,`,
  },
  {
    id: 4,
    category: "Self-help",
    name: "mindset",
    price: 6,
    img: "./images/mindset.jpg",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim ut corporis aspernatur
        accusantium beatae est animi fugiat aliquid exercitationem`,
  },
  {
    id: 5,
    category: "History",
    name: "moonwalking",
    price: 12,
    img: "./images/moonwalking.jpg",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum velit, doloribus culpa iste maxime placeat quidem reprehenderit modi nisi. Eius nam velit molestiae voluptate commodi!`,
  },
  {
    id: 6,
    category: "Personal-Finance",
    name: "Think and grow rich",
    price: "17$",
    img: "./images/thinkandgrowrich.png",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim ut corporis aspernatur
        accusantium beatae est animi fugiat aliquid molestiasaccusantium beatae est animi fugiat aliquid molestias
        aliquid molestias modi exercitationem eum`,
  },
  {
    id: 7,
    category: "Personal-Finance",
    name: "Psychology Money",
    price: 10,
    img: "./images/psymoney.jpg",
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quos facere, sed obcaecati rem in minus
         voluptatum at voluptate, quo impedit magnam minima hic reiciendis earum vitae maxime? Earum, laudantium`,
  },
  {
    id: 8,
    category: "Self-help",
    name: "12 rules of life",
    price: 8,
    img: "./images/12rulesoflife.png",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim ut corporis aspernatur
        accusantium beatae est animi fugiat aliquid molestias modi exercitationem eum,`,
  },
  {
    id: 9,
    category: "Human-behavior",
    name: "48 power of law",
    price: 25,
    img: "./images/48poweroflaw.png",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim ut corporis aspernatur
        accusantium beatae est animi fugiat aliquid molestias modi exercitationem eum, voluptate
        incidunt ex, molestiae quas officiis sed`,
  },
  {
    id: 10,
    category: "Fiction",
    name: "Alchemist",
    price: 15.25,
    img: "./images/alchemist.jpg",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim ut corporis aspernatur
        accusantium beatae est animi fugiat aliquid molestias modi exercitationem eum,`,
  },
  {
    id: 11,
    category: "Personal-Finance",
    name: "Rich dad Poor Dad",
    price: 4.25,
    img: "./images/richdadpoordad.jpg",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa enim ut corporis aspernatur
        accusantium beatae est animi fugiat aliquid molestias modi`,
  },
  {
    id: 12,
    category: "Self-help",
    name: "How to make friends",
    price: 13,
    img: "./images/howtomakefriends.jpg",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quidem cumque officia laborum voluptatum, 
        nemo veniam temporibus sit error doloremque itaque dolorum, modi animi repellat mollitia
         placeat minus culpa, deleniti optio possimus? Recusandae, fuga itaque.`,
  },
  {
    id: 13,
    category: "Productivity",
    name: "Hyper Focus",
    price: 13,
    img: "./images/hyperfocus.jpg",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quidem cumque officia laborum voluptatum, 
        nemo veniam temporibus sit error doloremque itaque dolorum, modi animi, fuga itaque.`,
  },
  {
    id: 14,
    category: "Productivity",
    name: "7 habit of highly effective",
    price: 13,
    img: "./images/7habit.jpg",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quidem cumque officia laborum voluptatum, 
        nemo veniam temporibus sit error doloremque itaque dolorum, modi animi repellat mollitia
         placeat cupiditate suscipit maiores atque debitis minus culpa, deleniti optio possimus? Recusandae, fuga itaque.`,
  },
  {
    id: 15,
    category: "Productivity",
    name: "The 80/20 principle",
    price: 13,
    img: "./images/ouput80.jpg",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quidem cumque officia laborum voluptatum, 
        nemo veniam temporibus sit error doloremque itaque dolorum, modi animi repellat mollitia
         placeat cupiditate suscipit maiores atque debitis minus culpa, deleniti optio possimus? Recusandae, fuga itaque.`,
  },
];

const hello = document.querySelector(".hello");
const containerGrid = document.querySelector(".container-grid");
const containerbtns = document.querySelector(".btns-container");

window.addEventListener("DOMContentLoaded", function () {
  showDisplayBook(book);
  displaybuttons();
});

function showDisplayBook(bookItem) {
  let displaybook = bookItem.map(function (item) {
    // console.log("item")
    return `<div class="haaye" data-id="${item.id}">
         <div class="books-col">
             <img class='img' width="180" src=${item.img} alt=${item.name}>
             <h3>${item.name} <span>$${item.price}</span></h3>
             </div>
     </div>`;
  });
  displaybook = displaybook.join("");
  containerGrid.innerHTML = displaybook;

  /* redirect to details  */
  const imgs = document.querySelectorAll(".img");

  imgs.forEach((img) => {
    img.addEventListener("click", (event) => {
      event.stopPropagation();
      const bookItem = event.target.closest(".haaye");
      const bookId = bookItem.dataset.id;
      console.log(bookId);
      const detailsPageUrl = `singlebook.html?id=${bookId}`;
      window.location.href = detailsPageUrl;
    });
  });
  /* redirect to details end */
}

function displaybuttons() {
  const categories = book.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
        console.log(values);
        console.log(item);
      }
      return values;
    },
    ["All"]
  );

  const categoriesbtn = categories
    .map(function (category) {
      return `<button class="btn-sosar" 
        data-id=${category}> ${category} </button>`;
    })
    .join("");
  console.log(categoriesbtn);

  containerbtns.innerHTML = categoriesbtn;

  const filterBtnsosar = document.querySelectorAll(".btn-sosar");
  // filterbtns
  filterBtnsosar.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const bookcategory = book.filter(function (bookItem) {
        if (bookItem.category === category) {
          return bookItem;
        }
      });
      if (category === "All") {
        showDisplayBook(book);
      } else {
        showDisplayBook(bookcategory);
      }
    });
  });
}

const menuBtn = document.querySelector("#menu-btn");
const navmenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
  navmenu.classList.toggle("active");
});

/* 
Sure! Let's break it down in simpler terms.

The `reduce` function is used to create a list of unique categories from the `book` array. Imagine you have a bunch of books, and each book belongs to a specific category.

Here's how the code works step by step, using a simpler example:

1. Imagine you have an empty box called `values`. We want to put all the unique categories of books into this box.

2. Initially, we put a special category called "All" into the `values` box. This category represents the option to show all books.

3. Now, we start going through the books one by one.

4. For each book, we check its category.

5. If the `values` box doesn't already contain that category, we add it to the box.

6. We repeat this process for each book, checking its category and adding it to the `values` box if it's not already there.

7. Finally, when we've checked all the books, the `values` box contains all the unique categories.

In the code, the initial value of `values` is `["All"]`. It's like starting with an empty `values` box and putting the "All" category into it right at the beginning.

So, when we go through each book in the `book` array, if a category is not already in the `values` box, we add it using `values.push(item.category)`. This ensures that we only add unique categories to the `values` box.

At the end, the `values` box contains all the unique categories from the `book` array, including the initial "All" category.

I hope this explanation makes it easier to understand the relationship between `values` and "All" in the `reduce` function. Let me know if you have any more questions!



*/

/* 
function displayButtons() {
  Step 1: Get unique categories from the books array
  const categories = book.reduce(function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, ["All"]);

  Step 2: Generate buttons HTML based on categories
  const categoriesBtn = categories
    .map(function (category) {
      return `<button class="btn-sosar" data-id="${category}">${category}</button>`;
    })
    .join("");

   Step 3: Render the buttons in the btns-container element
  const containerBtns = document.querySelector(".btns-container");
  containerBtns.innerHTML = categoriesBtn;

  Step 4: Add event listeners to the buttons
  const filterBtnsosar = document.querySelectorAll(".btn-sosar");
  filterBtnsosar.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
       Step 5: Get the selected category from the button's data attribute
      const category = e.currentTarget.dataset.id;

     Step 6: Filter the books based on the selected category
      const bookCategory = book.filter(function (bookItem) {
        if (bookItem.category === category) {
          return bookItem;
        }
      });

     Step 7: Display the filtered books
      if (category === "All") {
        showDisplayBook(book);
      } else {
        showDisplayBook(bookCategory);
      }
    });
  });
}

























*/
