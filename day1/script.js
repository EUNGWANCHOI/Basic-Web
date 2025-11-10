let result = document.getElementById("result");
let plusBtn = document.getElementById("plusBtn");
let minusBtn = document.getElementById("minusBtn");
let numInput = document.getElementById("numInput");
let plusInputBtn = document.getElementById("plusInput");
let minusInputBtn = document.getElementById("minusInput");

let count = 0;

const inputValue = () => {
  const value = Number(numInput.value);
  return isNaN(value) ? 0 : value;
};

const increment = () => {
  setCount(count + 1);
};

const decrement = () => {
  setCount(count - 1);
};

const incrementByInput = () => {
  setCount(count + inputValue());
};

const decrementByInput = () => {
  setCount(count - inputValue());
};

const setCount = (newValue) => {
  count = newValue;
  result.innerText = count;
};

plusBtn.addEventListener("click", increment);
minusBtn.addEventListener("click", decrement);
plusInputBtn.addEventListener("click", incrementByInput);
minusInputBtn.addEventListener("click", decrementByInput);
