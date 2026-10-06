// let btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//     if (document.body.style.backgroundColor === "black") {
//         document.body.style.backgroundColor = "white";
//     } else {
//         document.body.style.backgroundColor = "black";
//     }
// });

let btn = document.querySelector("#btn");
let box = document.querySelector("#box");

btn.addEventListener("click", () =>  {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});