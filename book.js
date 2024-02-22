const book = [
    {
        id: 1,
        category: "Self-help",
        title: "Atomic habit",
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
const urlParams = new URLSearchParams(window.location.search)
const bookId = parseInt(urlParams.get('id'))
console.log(urlParams)
console.log(bookId)

const selectedbook = book.find((book) => book.id === bookId);

if (selectedbook) {
    const titleElement = document.querySelector("#title");
    const priceElement = document.querySelector("#price");
    const textElement = document.querySelector("#text");
    const imgElement = document.querySelector("#image");

    titleElement.textContent = selectedbook.title;
    priceElement.textContent = `Price:$${selectedbook.price}`;
    textElement.textContent = selectedbook.text;
    imgElement.src = selectedbook.img;
    imgElement.alt = selectedbook.title;
}