const li = document.querySelectorAll(".bx>div>ul>li");

const bx = document.querySelectorAll(".bx>div>ul");

const span = document.querySelectorAll(".bx>div>ul>li>span");

li.forEach((val, i) => {
  console.log(i);

  if (i <= 2) {
    val.addEventListener("mousedown", () => {
      val.addEventListener("mousemove", younes);
    });
    val.addEventListener("mouseup", () => {
      val.removeEventListener("mousemove", younes);
    });
  } else {
    val.addEventListener("mousedown", () => {
      val.addEventListener("mousemove", younes1);
    });
    val.addEventListener("mouseup", () => {
      val.removeEventListener("mousemove", younes1);
    });
  }
});

function younes(e) {
  if (e.target.nodeName == "LI") {
    if (e.clientX < 600) {
      e.target.classList.add("abs");
      e.target.style.top = e.clientY + "px";
      e.target.style.left = e.clientX + "px";
    } else {
      let temp = e.target.innerHTML;
      let myli = document.createElement("li");
      myli.innerHTML = temp;
      bx[1].appendChild(myli);
      e.target.remove();
    }
  }
}

function younes1(e) {
  if (e.target.nodeName == "LI") {
    if (e.clientX > 300) {
      e.target.classList.add("abs");
      e.target.style.top = e.clientY + "px";
      e.target.style.left = e.clientX + "px";
    } else {
      let temp = e.target.innerHTML;
      let myli = document.createElement("li");
      myli.innerHTML = temp;
      bx[0].appendChild(myli);
      e.target.remove();
    }
  }
}
