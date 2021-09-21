const spin = [ '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']
let delay= 0;
for (let item of spin) {
  setTimeout(() => {
    process.stdout.write((item));
  }, delay);
  delay += 200;
};
setTimeout(() => {
  process.stdout.write("\n");
 }, delay,);

