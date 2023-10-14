import ShoppingCart from "./../assets/portfolioImages/shopping-cart.png";
import BookSearch from "./../assets/portfolioImages/book-search.png";
import UdemyClone from "./../assets/portfolioImages/udemy-clone.png";

const ProjectsData = [
  {
    id: "1",
    img: ShoppingCart,
    name: "Shopping Cart",
    stack: ["React Js", "Javascript", "CSS"],
    live: "https://main--shopping-cart-demo-new.netlify.app/",
    source: "https://github.com/nehaljain09/Shopping-Cart",
    description:
      "This project is an e-commerce website with a shopping cart that offers Add to Cart functionality, advanced product filtering based on availability, sorting, and delivery options and an integrated rating system. It also includes a user-friendly Cart page for efficient management of selected items.",
  },
  {
    id: "2",
    img: BookSearch,
    name: "Book search",
    stack: ["React Js", "Javascript", "CSS"],
    live: "https://book-search-demo.netlify.app/",
    source: "https://github.com/nehaljain09/Book-search",
    description:
      "A simple book search website with a search bar on the homepage. Users can enter search terms, and upon searching, the project calls the OpenLibrary API over the network to retrieve a list of books related to the search term. It provides an easy way to discover and explore a wide range of books.",
  },

  {
    id: "3",
    img: UdemyClone,
    name: "Udemy clone",
    stack: ["React Js", "React Redux", "Javascript", "CSS"],
    live: "https://udemy-clone-demo.netlify.app/",
    source: "https://github.com/nehaljain09/Udemy-clone",
    description:
      "This Udemy Clone replicates the core features of Udemy using React and Redux. Users can explore courses, access course details, add them to a cart, and find categories in the sidebar. The homepage highlights top categories & courses, & the cart page allows users to view their selected courses.",
  },
];

export default ProjectsData;
