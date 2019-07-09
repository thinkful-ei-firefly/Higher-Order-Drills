const repeat = (n, fn) => {
  for (let i = 0; i < n; i++) {
    fn(i);
  }
};

repeat(5, n => {
  console.log(n * 5);
});

const hello = () => console.log("Hello world");
const goodbye = () => console.log("Goodbye world");

repeat(5, hello);
repeat(5, goodbye);
