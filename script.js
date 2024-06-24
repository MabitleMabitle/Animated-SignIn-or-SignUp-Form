const formWrapperBg = document.querySelector(".form-wrapper-bg");
const formWrapperLeft = document.querySelector(".form-wrapper-left");
const imageLeft = document.querySelector(".img-left");
const imageRight = document.querySelector(".img-right");
const signUplink = document.querySelector(".signup-link");
const signInlink = document.querySelector(".signin-link");

signUplink.addEventListener("click", () => {
  formWrapperBg.classList.add("navigate");
  formWrapperLeft.classList.add("navigate");
  imageLeft.classList.add("navigate");
  imageRight.classList.add("navigate");
});

signInlink.addEventListener("click", () => {
  formWrapperBg.classList.remove("navigate");
  formWrapperLeft.classList.remove("navigate");
  imageLeft.classList.remove("navigate");
  imageRight.classList.remove("navigate");
});
