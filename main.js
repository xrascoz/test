

let togs = document.querySelectorAll(".tog");

togs.forEach((element) => {
  element.addEventListener("click", function () {
    if (element.classList.contains("active")) {
      let higt =
        element.parentElement.getElementsByTagName("ul")[0].scrollHeight;
      element.parentElement.getElementsByTagName(
        "ul"
      )[0].style.height = `${0}px`;
      element.classList.remove("active");
    } else {
      let higt =
        element.parentElement.getElementsByTagName("ul")[0].scrollHeight;
      element.parentElement.getElementsByTagName(
        "ul"
      )[0].style.height = `${higt}px`;
      element.classList.add("active");
    }
  });
});

let togphone = document.querySelectorAll(".tog-phone");

togphone.forEach((element) => {
  element.addEventListener("click", function () {
    if (element.classList.contains("active")) {
      let higtphone =
        element.parentElement.getElementsByTagName("ul")[0].scrollHeight;
      element.parentElement.getElementsByTagName(
        "ul"
      )[0].style.height = `${0}px`;
      element.classList.remove("active");
    } else {
      let higtphone =
        element.parentElement.getElementsByTagName("ul")[0].scrollHeight;
      element.parentElement.getElementsByTagName(
        "ul"
      )[0].style.height = `${higtphone}px`;
      element.classList.add("active");
    }
  });
});

let xclose = document.querySelector(".fa-x");
let toogle = document.querySelector(".toogle");
let phonemnue = document.querySelector(".phone-mnue");



toogle.addEventListener("click" , function () {
    phonemnue.classList.add("active")
})


xclose.addEventListener("click" , function () {
    phonemnue.classList.remove("active")
})
