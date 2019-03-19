// solution 0
function lonelyNum(input) {
  output = [];
  input.forEach(num =>
    output.indexOf(num) > -1
      ? output.splice(output.indexOf(num), 1)
      : output.push(num)
  );

  console.log("Input: ", input);
  console.log("Output: ", output.join(","));
}

lonelyNum([3, 3, 1]);
lonelyNum([4, 6, 9, 6, 9]);

// solution 1
function uncommon(a, b) {
  const input = `${a} ${b}`.split(" ");
  found = [];
  output = input.filter((g, index) => {
    let temp = input.slice(index + 1);
    if (temp.indexOf(g) > -1 || found.indexOf(g) > -1) {
      found.push(g);
      return false;
    } else {
      return true;
    }
  });

  console.log("Input: ", `\nA= ${a} \nB= ${b}`);
  console.log("Output: ", output.join(","));
}

uncommon("i love express it is awesome", "i love express it is cool");
uncommon("ruby ruby", "rails");
