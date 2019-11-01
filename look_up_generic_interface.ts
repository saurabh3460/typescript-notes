interface Next<T = {}> {
  (name: T): T | void;
}

interface name {
  name: string;
}
const Home: Next<{ name: string }> = ({ name }) => {
  // automatic Inference works and say it is of type { name: string }
  console.log(name);
};

Home({ name: "hey" });
