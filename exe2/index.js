let counter = document.querySelector(".countdown");
let jack = document.querySelector(".jack-hiding");

const myFunction = () => {
  let num = Number(counter.innerText);
  let randNum = Math.floor(Math.random()*8) + 1;
  let a = setInterval(() => {
    counter.innerText = `${num}`;
    num--;
    if(num === randNum){
      clearInterval(a);
      jack.classList.remove("jack-hiding");
      jack.classList.add("jack-showing");
      counter.innerText = 10;
    }
  }, 1000);

  jack.classList.remove("jack-showing");
  jack.classList.add("jack-hiding");
}
