const clickLog = (event) => {
  console.log("clicked");
};

const handleInput = (event) => {
  console.log("event is : ", event.target.value);
};

const initApp = () => {
  const button = document.querySelector("button");
  const input = document.querySelector("input");

  //   button.addEventListener("click", debounce(clickLog, 2000));
  button.addEventListener("click", () => {
    clickLog();
    button.disabled = true;
    setTimeout(() => (button.disabled = false), 2000);
  });
  input.addEventListener("input", debounce(handleInput, 500));
};

document.addEventListener("DOMContentLoaded", initApp);

const debounce = (fn, delay) => {
  let id;
  //   console.log("id at immediate load:", id);

  return (...args) => {
    // console.log("previous id: ", id);
    if (id) clearTimeout(id);
    id = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
