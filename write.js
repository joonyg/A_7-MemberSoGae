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

  if (inputnickname === "" || inputValue === "") {
    alert("닉네임 또는 방명록을 작성해 주세요");
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
