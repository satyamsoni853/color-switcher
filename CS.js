const btn = document.querySelectorAll(".button");

const body = document.querySelector("body");

btn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e.target);
    console.log(e);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'red') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'khaki') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'pink') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'turquoise') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'white') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'skyblue') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'blue') {
        body.style.backgroundColor = e.target.id;
      }


  });
});
