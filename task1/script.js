const faceValue = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 25, 10, 5, 2, 1];
let quantity;

function change() {
  quantity = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const sum = document.getElementById("sum").value;
  const price = document.getElementById("price").value;
  let change = sum - price;
  change < 0
    ? (document.getElementById("error").innerHTML = "Ваша сума є нижчою за ціну товару!")
    : (document.getElementById("change").innerHTML = change.toFixed(2));
  change *= 100;
  for (let i = 0; i < faceValue.length - 1; i++) {
    while (change >= faceValue[i]) {
      change -= faceValue[i];
      quantity[i]++;
    }
  }
  render();
}

function render() {
  document.getElementById("banknotes").innerHTML = "";

  for (let i = 0; i < 13; i++) {
    if (quantity[i] != 0) {
      showBankNotes(i);
    }
  }
}

function showBankNotes(i) {
  const firstChild = document.createElement("div");
  firstChild.classList.add("content");
  const image = document.createElement("img");
  image.setAttribute("src", `images/${i}.png`);
  image.setAttribute("height", "50");
  if (i < 7) {
    image.setAttribute("width", "75");
  } else {
    image.setAttribute("width", "50");
  }

  firstChild.appendChild(image);
  const span = document.createElement("span");
  span.appendChild(document.createTextNode(`x ${quantity[i]}`));
  firstChild.appendChild(span);
  document.getElementById("banknotes").appendChild(firstChild);
}


function reloadPage() {
    location.reload();
}