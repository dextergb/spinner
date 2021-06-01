const spinners = ['\r|   ', "\r/   ",'\r-   ', '\r\\   ', '\r|   ']
let spinner = (spinners) => {
  let seconds = 100;
  for (let spin of spinners) {
    setTimeout(() => {
      process.stdout.write(spin);
    }, seconds);
    seconds += 200;
  }
};

spinner(spinners);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|    ');
// }, 900);