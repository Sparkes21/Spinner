process.stdout.write('hello from spinner1.js... \rheyyy\n');
const newArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|'];
let delay = 0;
for (let i = 0; i < newArray.length; i++) {
  setTimeout(() => {
    process.stdout.write(newArray[i])}, delay += 200);
};



