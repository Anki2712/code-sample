let fibonacci: number[] = [0, 1];

//Below fibonacci method will accept the number and print the fibonaccai array.
function fibSequence(num: number) {
  for (let i = 1; i < num; i++) {
    fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
  }
  return console.log(fibonacci);
}
fibSequence(5);
fibSequence(10);
fibSequence(1);
