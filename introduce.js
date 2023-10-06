const navbar_items = document.querySelector(".navbar-items");
const moveTop_btn = document.querySelector(".moveTop");

function showTopBtn() {
  if (window.scrollY >= 417) moveTop_btn.style.visibility = "visible";
  else moveTop_btn.style.visibility = "hidden";
}

function moveTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
function showDetail(event) {
  const num = event.currentTarget.className.at(-1);
  window.open(`member${num}.html`, "memberDetail", "width = 520, height = 670");
}

function scrolldown(event) {
  const move = event.target.innerText.toLowerCase();
  const element = document.querySelector(`.${move}`);
  element.scrollIntoView();
}

navbar_items.addEventListener("click", scrolldown);
window.addEventListener("scroll", showTopBtn);
moveTop_btn.addEventListener("click", moveTop);

//---------------------------------------------------------------- 멤버1 모달 생성 코드----
const member1_modalOpenButton_1 = document.getElementById(
  "member1_modalOpenButton_1"
);
const member1_modalCloseButton_1 = document.getElementById(
  "member1_modalCloseButton_1"
);
const member1_modal_1 = document.getElementById("member1_modalContainer_1");

member1_modalOpenButton_1.addEventListener("click", () => {
  member1_modal_1.classList.remove("hidden");
});

member1_modalCloseButton_1.addEventListener("click", () => {
  member1_modal_1.classList.add("hidden");
});
member1_modalCloseButton_2.addEventListener("click", () => {
  member1_modal_1.classList.add("hidden");
});

//--------------------------------------------------------------------------------- 멤버2 모달
const member2_modalOpenButton_1 = document.getElementById(
  "member2_modalOpenButton_1"
);
const member2_modalCloseButton_1 = document.getElementById(
  "member2_modalCloseButton_1"
);
const member2_modal_1 = document.getElementById("member2_modalContainer_1");

member2_modalOpenButton_1.addEventListener("click", () => {
  member2_modal_1.classList.remove("hidden");
});

member2_modalCloseButton_1.addEventListener("click", () => {
  member2_modal_1.classList.add("hidden");
});
member2_modalCloseButton_2.addEventListener("click", () => {
  member2_modal_1.classList.add("hidden");
});
//------------------------------------------------------------------------------------------- 멤버 3모달
const member3_modalOpenButton_1 = document.getElementById(
  "member3_modalOpenButton_1"
);
const member3_modalCloseButton_1 = document.getElementById(
  "member3_modalCloseButton_1"
);
const member3_modal_1 = document.getElementById("member3_modalContainer_1");

member3_modalOpenButton_1.addEventListener("click", () => {
  member3_modal_1.classList.remove("hidden");
});

member3_modalCloseButton_1.addEventListener("click", () => {
  member3_modal_1.classList.add("hidden");
});
member3_modalCloseButton_2.addEventListener("click", () => {
  member3_modal_1.classList.add("hidden");
});

//----------------------------------------------------------------------------------------------- 멤버4 모달

const member4_modalOpenButton_1 = document.getElementById(
  "member4_modalOpenButton_1"
);
const member4_modalCloseButton_1 = document.getElementById(
  "member4_modalCloseButton_1"
);
const member4_modal_1 = document.getElementById("member4_modalContainer_1");

member4_modalOpenButton_1.addEventListener("click", () => {
  member4_modal_1.classList.remove("hidden");
});

member4_modalCloseButton_1.addEventListener("click", () => {
  member4_modal_1.classList.add("hidden");
});
member4_modalCloseButton_2.addEventListener("click", () => {
  member4_modal_1.classList.add("hidden");
});

//----------------------------------------------------------------------------------------------- 멤버5 모달

const member5_modalOpenButton_1 = document.getElementById(
  "member5_modalOpenButton_1"
);
const member5_modalCloseButton_1 = document.getElementById(
  "member5_modalCloseButton_1"
);
const member5_modal_1 = document.getElementById("member5_modalContainer_1");

member5_modalOpenButton_1.addEventListener("click", () => {
  member5_modal_1.classList.remove("hidden");
});

member5_modalCloseButton_1.addEventListener("click", () => {
  member5_modal_1.classList.add("hidden");
});
member5_modalCloseButton_2.addEventListener("click", () => {
  member5_modal_1.classList.add("hidden");
});

//----------------------------------------------------------------------------------------------- 방명록 기능

function addcheck() {
  //------------------------------------------------------------
  let inputElement_1 = document.getElementById("doinginput_1");
  let inputElement_2 = document.getElementById("doinginput_2");
  let inputnickname = inputElement_1.value.trim();
  let inputValue = inputElement_2.value.trim();
  //-------------------------------------------------------------

  //----------------------------------- 시간
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  let date = today.getDate();
  let day = today.getDay();
  let hours = String(today.getHours()).padStart(2, "0");
  let minutes = String(today.getMinutes()).padStart(2, "0");
  let seconds = String(today.getSeconds()).padStart(2, "0");
  //------------------------------------
  let input_temp = `
  <div class="input-group">
    <span id="nickname" class="input-group-text">${inputnickname}</span>
    <div class="form-control" id="visit_dat" aria-label="With textarea" style="overflow:auto;"readonly>${inputValue}
    </div>
  </div>
  <span class="visit_today">${year}년${month}월${date}일 ${hours}:${minutes}:${seconds}</span>
`;

  if (inputnickname === "" || inputValue === "") {
    alert("닉네임 또는 방명록을 작성해 주세요");
  } else {
    $("#visitlog").append(input_temp);
  }
}
function writeBox() {
  $("#write_box").show();
  $("#show_box").hide();
}
function showBox() {
  $("#show_box").show();
  $("#write_box").hide();
}
