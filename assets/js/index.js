const order = document.querySelector(".btn-order");
const nname = document.querySelector(".nname");
const address = document.querySelector(".address");
const phone = document.querySelector(".phone");
const product = document.querySelector(".product");
// sing up
const btns = document.querySelector(".btn-sign");
const btnout = document.querySelector(".btn-out");
const sname = document.querySelector(".sname");
const suser = document.querySelector(".suser");
const sads = document.querySelector(".sads");
const spass = document.querySelector(".spass");

// user info
const uname = document.querySelector(".uname");
const uuser = document.querySelector(".uuser");
const uads = document.querySelector(".uads");
const upass = document.querySelector(".upass");

// confirm order
const cname = document.querySelector(".cname");
const cads = document.querySelector(".cads");
const cphone = document.querySelector(".cphone");
const cpro = document.querySelector(".cpro");

//modal
const corder = document.querySelector("#corder");
const cnorder = document.querySelector(".btn-cnorder");

function orderUser() {
  if (
    nname.value == "" &&
    address.value == "" &&
    phone.value == "" &&
    product.value == ""
  ) {
    alert("please input");
  } else {
    cname.innerHTML = nname.value;
    cads.innerHTML = address.value;
    cphone.innerHTML = phone.value;
    cpro.innerHTML = product.value;
  }
}
order.addEventListener("click", orderUser);

function signu() {
  uname.innerHTML = sname.value;
  uuser.innerHTML = suser.value;
  uads.innerHTML = sads.value;
  upass.innerHTML = spass.value;
}
btns.addEventListener("click", signu);

function logout() {
  uname.innerHTML = "";
  uuser.innerHTML = "";
  uads.innerHTML = "";
  upass.innerHTML = "";
}
btnout.addEventListener("click", logout);

function confirmorder() {
  alert("successfully order pleade wait" + " " + nname.value);
}
cnorder.addEventListener("click", confirmorder);
