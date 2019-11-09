const Home = ({ name }) => {
    // automatic Inference works and say it is of type { name: string }
    console.log(name);
};
Home({ name: "hey" });
// interface Next {
//   <T>(name: T): T | void;
// }
// function nextPage<T>(params: T) {
//   console.log(params);
// }
// const Home: Next = nextPage;
// Home<{ name: string }>({ name: "go to hell" });
// nextPage({ name: "hey" });
