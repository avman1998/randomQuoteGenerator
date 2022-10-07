const qouteEle = document.getElementById("qoute");
const authorEle = document.getElementById("author");
const qouteBtn = document.getElementById("btn");
qouteEle.innerHTML =
  "There is no right time and right place for love... it can happen any time.";
authorEle.innerHTML = "Shah Rukh Khan";
qouteBtn.addEventListener("click", function () {
  fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const randomNumber = Math.trunc(Math.random() * data.length) + 1;

      qouteEle.innerHTML = data[randomNumber].text;
      authorEle.innerHTML = data[randomNumber].author;
    });
});
