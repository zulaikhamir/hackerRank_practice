// /* container: 30% of body width and centered */
// #btns {
//   width: 30%;
//   margin: 0 auto;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 2%;
//   box-sizing: border-box;
// }

// /* All buttons share these styles */
// #btns button {
//   width: 30%;
//   height: 48px;
//   font-size: 24px;
//   box-sizing: border-box;
// }

// create container div
const container = document.createElement("div");
container.id = "btns";
document.body.appendChild(container);

// create 9 buttons with ids btn1..btn9 and labels 1..9
for (let i = 1; i <= 9; i++) {
  const btn = document.createElement("button");
  btn.id = "btn" + i;
  btn.innerHTML = String(i);
  container.appendChild(btn);
}

// clockwise order of the outer buttons (top-left, top-middle, top-right, right-middle, bottom-right, bottom-middle, bottom-left, left-middle)
const outerIds = [
  "btn1",
  "btn2",
  "btn3",
  "btn6",
  "btn9",
  "btn8",
  "btn7",
  "btn4",
];

// rotate the labels clockwise by one step
function rotateClockwiseOnce() {
  // read current labels
  const values = outerIds.map((id) => document.getElementById(id).innerHTML);
  // rotate right by one (so each label moves to the next clockwise position)
  values.unshift(values.pop());
  // write back rotated labels
  outerIds.forEach((id, idx) => {
    document.getElementById(id).innerHTML = values[idx];
  });
}

// attach click handler to middle button btn5
document.getElementById("btn5").addEventListener("click", rotateClockwiseOnce);
