// body {
//   width: 33%;
// }

// #res {
//   background-color: lightgray;
//   border: solid;
//   height: 48px;
//   font-size: 20px;
// }

// #btns button {
//   width: 25%;
//   height: 36px;
//   font-size: 18px;
//   margin: 0px;
//   float: left;
// }

// #btn0, #btn1 {
//   background-color: lightgreen;
//   color: brown;
// }

// #btnClr, #btnEql {
//   background-color: darkgreen;
//   color: white;
// }

// #btnSum, #btnSub, #btnMul, #btnDiv {
//   background-color: black;
//   color: red;
// }

// create result display
const res = document.createElement("div");
res.id = "res";
document.body.appendChild(res);

// create button container
const btns = document.createElement("div");
btns.id = "btns";
document.body.appendChild(btns);

// button definitions
const buttons = [
  { id: "btn0", text: "0" },
  { id: "btn1", text: "1" },
  { id: "btnClr", text: "C" },
  { id: "btnEql", text: "=" },
  { id: "btnSum", text: "+" },
  { id: "btnSub", text: "-" },
  { id: "btnMul", text: "*" },
  { id: "btnDiv", text: "/" },
];

// create buttons
buttons.forEach((b) => {
  const btn = document.createElement("button");
  btn.id = b.id;
  btn.innerHTML = b.text;
  btns.appendChild(btn);
});

// button listeners
document.getElementById("btn0").onclick =
  document.getElementById("btn1").onclick =
  document.getElementById("btnSum").onclick =
  document.getElementById("btnSub").onclick =
  document.getElementById("btnMul").onclick =
  document.getElementById("btnDiv").onclick =
    function () {
      res.innerHTML += this.innerHTML;
    };

// clear button
document.getElementById("btnClr").onclick = function () {
  res.innerHTML = "";
};

// equals button
document.getElementById("btnEql").onclick = function () {
  const expr = res.innerHTML;

  // split by operator → we get [binaryA, operator, binaryB]
  const operator = expr.match(/[+\-*/]/)[0];
  const [a, b] = expr.split(/[+\-*/]/);

  const A = parseInt(a, 2);
  const B = parseInt(b, 2);

  let result;

  switch (operator) {
    case "+":
      result = A + B;
      break;
    case "-":
      result = A - B;
      break;
    case "*":
      result = A * B;
      break;
    case "/":
      result = Math.floor(A / B);
      break;
  }

  res.innerHTML = result.toString(2); // convert back to binary
};
