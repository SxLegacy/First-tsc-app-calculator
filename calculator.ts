const operations = ["multiply", "add", "divide"];

// const multiplicator = (a: number, b: number, printText: string ) => {
//     console.log(printText, a * b)
// }
// const sum = (a: number, b: number, printText: string ) => {
//     console.log(printText, a + b)
// }
// const divide = (a: number, b: number, printText: string ) => {
//     console.log(printText, a / b)
// }

const calculator = (a: number, b: number, op: string, printText: string) => {
  if (!operations.includes(op)) {
    console.log("This operation is not defined");
  }
  if (op == "multiply") return console.log(printText, a * b);
  if (op == "add") return console.log(printText, a + b);
  if (op == "divide") {
    if (b == 0) {
      return console.log("We cant divide by 0! please check");
    }
    return console.log(printText, a / b);
  }
};

const parseArguments = (args): Array<number> => {
  console.log(process.argv);
  // console.log(args)
  if (args.length !== 5) {
    throw new Error("Wrong number of arguments");
  }

  const firstNumber = Number(args[2]);
  const secondNumber = Number(args[3]);

  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    return [firstNumber, secondNumber];
  }
  throw new Error("Provided values were not numbers!");
};

const cleanArguments = parseArguments(process.argv);

const a: number = Number(cleanArguments[0]);
const b: number = Number(cleanArguments[1]);
const op: string = process.argv[4];

calculator(a, b, op, `${op} ${a} and ${b} and the result is: `);
