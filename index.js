const repeat = (n, fn) => {
  for (let i = 0; i < n; i++) {
    fn(i);
  }
};

repeat(5, n => {
  console.log(n * 5);
});
