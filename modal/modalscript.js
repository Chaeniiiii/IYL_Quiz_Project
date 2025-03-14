const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('.modal_btn');
const modalText = document.querySelector('.modal_popup h3');
const nameInput = document.getElementById('nameInput');

//열기 버튼을 눌렀을 때 모달팝업이 열림
modalOpen.addEventListener('click',function(){
  const userName = nameInput.value.trim(); // 입력한 이름 가져오기

  if (userName) {
      modalText.innerHTML = `${userName} 님! 오늘 하루도 화이팅하세요!`; // 모달 메시지 변경
  } else {
      modalText.innerHTML = "이름 없이 진행됩니다 .. ㅡㅡ;;"; // 입력 없을 때 기본값
  }

  modal.style.display = 'block';

  // 3초 후 자동 닫기 + 페이지 이동
  setTimeout(function () {
      modal.style.display = 'none'; // 모달 닫기
      // @sangil 수정 
      const encodedUserName = encodeURIComponent(userName); // 인코딩 추가
      location.href = `mainPage.html?name=${encodedUserName}`;  }, 3000);
});
