const form = document.getElementById("form");

const btn1 = document.getElementById("btn1");
const div1 = document.getElementById("div1");

const handleOnSubmit = (event) => {
  event.preventDefault();
  console.log("on submit");
};

// btn1.addEventListener("click", () => {
//   console.log("btn 1clicked");
// });

div1.addEventListener("click", function (event) {
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
  console.log("this: ", this);
});
