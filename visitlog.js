//----------------------------------------------------------------------------------------------- 방명록 기능
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.addId,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//파이어베이스 저장하는 기능
$("#save").click(async () => {
  try {
    let guest = $("#doinginput_1").val();
    let text = $("#doinginput_2").val();

    if (guest.trim() !== "" && text.trim() !== "") {
      const docRef = await addDoc(collection(db, "guests"), {
        nickname: guest,
        text: text,
        date: new Date().toLocaleDateString().split(". "),
      });
      alert("방명록 작성 완료!");
      window.location.reload();
    }
  } catch (e) {
    console.error(e);
  }
});

//파이어베이스 데이터를 방문자 목록에 불러오기
const querysnapshot = await getDocs(collection(db, "guests"));
querysnapshot.forEach((doc) => {
  let data = doc.data();
  let year = parseInt(data.date[0]);
  let month = parseInt(data.date[1]);
  let day = parseInt(data.date[2]);
  let input_temp = `
    <div class="input-group">
      <span id="nickname" class="input-group-text">${data.nickname}</span>
      <div class="form-control" id="visit_dat" aria-label="With textarea" style="overflow:auto;"readonly>${data.text}
      </div>
    </div> 
    <span class="visit_today">${year}년${month}월${day}일</span>
            `;

  $("#visitlog").append(input_temp);
});
