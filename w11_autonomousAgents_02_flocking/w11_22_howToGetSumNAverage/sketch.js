let numbers = [1, 2, 3, 4, 5, 10, 15, 20, 34, 50, 32];


function setup() {
  let sum = 0;
  let count = 0;
  let avg = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
      sum += numbers[i];
      count++;
    }
  }
  if (count > 0) {
    avg = sum / count;
  }

  print(sum + "   " + avg);
}