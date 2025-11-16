// create button element
const btn = document.createElement("button");

// set id
btn.id = "btn";

// initial text = 0
btn.innerHTML = 0;

// add click event
btn.onclick = function () {
  btn.innerHTML = Number(btn.innerHTML) + 1;
};

// add button to page
document.body.appendChild(btn);

//css
// #btn{
//     width:96px;
//     height:48px;
//     font-size:24px;

// }

// <!-- Enter your HTML code here -->
// <!DOCTYPE html>
// <html>
//     <head>
//         <meta charset="utf-8">
//         <title> Button</title>
//         <link rel="stylesheet" href="css/button.css" type="text/css">
//     </head>
//     <body>
//         <script src="js/button.js" type="text/javascript"></script>

//         <button >
//     </body>
// </html>
