const quizData = [
  {
    question: 'Q. 다음 중 <table> 태그와 관련된 태그가 아닌 것은?',
    answer: 3,
    type: '객관식',
    explanation:
      '<ul> 태그는 순서 없는 목록을 만드는 태그이며, 표(<table>)와는 관련이 없습니다.',
    options: ['① <tr>', '② <th>', '③ <td>', '④ <ul>', '⑤ <caption>'],
  },
  {
    question:
      'Q. 다음 중 <ul> 태그와 <ol> 태그의 차이에 대한 설명으로 옳은 것은?',
    answer: 2,
    type: '객관식',
    explanation:
      '<ul> 태그는 순서가 없는 목록 (기본적으로 점이 표시됨), <ol> 태그는 순서가 있는 목록 (숫자나 문자로 순서 표시) 입니다.',
    options: [
      '① <ul> 태그는 번호가 붙은 목록을 생성한다.',
      '② <ol> 태그는 점이 표시된 목록을 만든다.',
      '③ <ul> 태그는 순서가 없고, <ol> 태그는 순서가 있는 목록을 만든다.',
      '④ <ul>과 <ol>의 기능은 동일하다.',
      '⑤ <ol> 태그는 목록을 수직이 아닌 가로로 정렬한다.',
    ],
  },
  {
    question: 'Q. 다음 중 올바른 설명이 아닌 것을 고르시오.',
    answer: 1,
    type: '객관식',
    explanation:
      'label 태그는 입력 양식에 이름을 붙이는 태그로, 사용자 편의성을 높이고 접근성 향상에 도움을 줍니다. label의 for 속성은 반드시 연결할 input 태그의 id 값과 동일해야 합니다.',
    options: [
      '① radio 버튼은 반드시 동일한 name 속성을 가져야 한다.',
      '② label의 for 속성과 input 의 id 속성이 일치하지 않아도 된다.',
      '③ checked 속성은 체크 박스와 라디오 버튼에서 사용 가능하다.',
      '④ button 태그는 input type="button" 보다 더 다양한 스타일링이 가능하다.',
      '⑤ required 은 반드시 값이 입력이 되어야 한다.',
    ],
  },
  {
    question: 'Q.  다음 설명 중 잘못 짝지어진 것을 고르시오',
    answer: 3,
    type: '객관식',
    explanation:
      '함수명 없이 변수에 할당하여 사용하는 함수 는 익명 함수(Anonymous Function)의 설명입니다. \n 콜백 함수(Callback Function)는다른 함수의 인자로 전달되어 실행되는 함수를 의미합니다.',
    options: [
      '① 이스케이프(Escape) : 백슬래시(\\)를 사용하여 특정 문자를 특수한 의미로 변환하는 문자',
      '② 변수 : 값을 지정할 때 사용하는 식별자 ',
      '③ 배열 : 변수 여러 개를 한꺼번에 다룰 수 있는 자료형',
      '④ 콜백 함수 : 함수명 없이 변수에 할당하여 사용하는 함수',
      '⑤ 전달인자 : 함수를 실행할 때 전달하는 실제 값 ',
    ],
  },
  {
    question:
      'Q. 화면이면서 최소 너비가 768px, 최대 너비가 959px일 때, tablet.css 파일을 불러오는 코드를 완성해주세요.',
    type: '주관식',
    answer: ['stylesheet', 'screen', 'min-width: 768px', 'max-width: 959px'],
    explanation:
      'rel="stylesheet” : 스타일시트를 불러온다. \t screen : 스타일시트가 화면에서만 적용됨을 의미한다. \n min-width: 768px: 최소 너비가 768px 이상일 때 적용 \t max-width: 959px : 최대 너비가 959px 이하일 때 적용',
    options: [
      `<link rel="________" href="tablet.css" media="________ and ( ________ ) and ( ________ )">`,
    ],
  },
  {
    question:
      'Q. 반응형 웹을 설정하기 위해 필수적으로 사용해야 하는 HTML 태그는?',
    type: '객관식',
    answer: 0,
    explanation:
      '반응형 웹(Responsive Web Design)을 올바르게 구현하기 위해서는 뷰포트(Viewport) 설정이 필수적이다.',
    options: [
      '① <meta name="viewport" content="width=device-width, initial-scale=1.0">',
      '② <meta name="responsive" content="true">',
      '③ <script>window.responsive = true;</script>',
      '④ <style>@media screen and (max-width: 768px) { body { font-size: 14px; } }</style>',
      '⑤ <link rel="stylesheet" href="responsive.css">',
    ],
  },
  {
    question:
      'Q : 자손의 position 속성에 absolute 키워드를 적용하려면 부모의 position 속성에 relative 키워드를 적용해야 한다.',
    answer: 0,
    type: '객관식',
    explanation: '부모의 position 속성에 relative 키워드 설정은 필수적이다.',
    options: ['O', 'X'],
  },
  {
    question: 'Q. 다음 중 CSS 선택자에 대한 설명으로 틀린 것은?',
    answer: 3,
    type: '객관식',
    explanation:
      "'#test1 > li:first-child'는 #test1의 첫 번째 자식 요소가 li 태그인 경우를 의미합니다. 구조가 변경되면 달라질 수 있습니다.",
    options: [
      '① "선택자[속성]"의 경우 특정한 속성이 존재하는 모든 요소를 의미한다.',
      "② 자손 선택자는 '>' 기호를 사용하여 정의한다.",
      '③ "선택자A 선택자B"의 경우 선택자A의 후손인 선택자B를 의미한다.',
      '④ "#test1 > li:first-child" 형태에서 #test1 내부의 첫 번째 li 요소는 항상 선택된다.',
    ],
  },
  {
    question: 'Q. 다음 개념 설명에서 빈칸을 순서대로 채우시오.',
    answer: ['margin', 'padding'],
    type: '주관식',
    explanation: 'margin은 외부 여백, padding은 내부 여백을 의미합니다.',
    options: [
      '① [ ________ ] : 테두리와 다른 태그 사이의 테두리 바깥쪽 여백\n\n② border : 테두리\n\n③ [ ________ ] : 테두리와 글자 사이의 테두리 안쪽 여백, 배경색은 C 영역까지만 적용\n\n④ width : 글자를 감싸는 영역의 가로 크기\n\n⑤ height : 글자를 감싸는 영역의 세로 크기',
    ],
  },
  {
    question:
      'Q. 인라인 요소처럼 배치되면서도, 블록 요소처럼 width와 height 값을 조정할 수 있는 속성과 값을 적으세요.',
    answer: ['display', 'inline-block'],
    type: '주관식',
    explanation:
      'display : inline-block은 인라인 요소의 특성을 가지면서도 크기 조절이 가능합니다.',
    options: ['① property: [ ________ ] \n\n② value: [ ________ ]'],
  },
];

// question: ,
// answer: ,
// type: ,
// explanation:
//   ,
// options: [
// ],

// @sangil
let currentQuestion = 0;
let score = 0;
let userAnswers = new Array(quizData.length).fill(-1);
let quizCompleted = false;
let selectedOption = null;
const userName = new URLSearchParams(window.location.search).get('name');
document.getElementById('user-name').innerHTML = userName;
let curIndex = -1;

// 문제 풀이 완료 됐는지 관리하는 변수 추가해도 괜찮을 듯...

// --------------------------------------------------------------------------------

// 선택지,  타입 구분
// 타입에 따라서 박스 온 오프
function loadQuiz(type) {
  document.getElementById('option-container').style.display =
    type === '객관식' ? 'block' : 'none';
  document.getElementById('subjective-container').style.display =
    type === '주관식' ? 'block' : 'none';
}

// 문제 내용 로드
function loadQuestion() {
  const questionData = quizData[currentQuestion];
  // 1. 문제 제목 로드
  document.getElementById('question').innerText = questionData.question;

  if (questionData.type === '객관식') {
    const optionContainer = document.getElementById('option-container');
    optionContainer.innerHTML = ''; // 내용 초기화 -> 버튼 여기서 제작해도 괜찮은 이유

    // 온 오프 로드
    loadQuiz('객관식');

    // 설명창 OFF -> 문제가 풀렸다는 변수 컨트롤로 none 안하도록 바꿀수도 있을듯?
    document.getElementById('explanation').style.display = 'none';

    // 각 선지마다 옵션으로 추가가
    questionData.options.forEach((option, index) => {
      // 각 선지를 위한 div 태그 하나 생성성
      const div = document.createElement('div');
      div.classList.add('option');
      div.innerText = option;

      // @sangil 사용자가 선택했던 옵션을 확인하여 복원
      if (userAnswers[currentQuestion] != -1) {
        if (userAnswers[currentQuestion] === index) {
          div.classList.add('selected'); // 이전 선택한 옵션을 복원
        }
        if (quizData[currentQuestion].answer === index) {
          div.style.backgroundColor = 'rgb(169, 207, 169)';
          div.style.border = '2px solid green';
        }
      }



      // 각 선지 클릭하면 selectOption 되도록 이벤트 설정!!
      div.onclick = () => selectOption(index, div);
      // 세팅 끝나서 컨테이너에 삽입
      optionContainer.appendChild(div);
    });

    // 버튼 컨테이너 제작
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    // 버튼 제작
    const checkAnswerBtn = document.createElement('button');
    checkAnswerBtn.classList.add('submit-btn');
    // 버튼 ID 설정 및 내용 넣기 !!! ID 확인할 것
    checkAnswerBtn.id = 'checkAnswer';
    checkAnswerBtn.innerText = '정답 확인';
    // !!!!! 정답 제출 불가능하도록 설정 -> selected 되면 풀기기
    checkAnswerBtn.disabled = true;
    checkAnswerBtn.onclick = checkAnswer;
    // 버튼을 버튼컨테이너에 넣기
    btnContainer.appendChild(checkAnswerBtn);
    // 버튼을 선택지 아래에 추가
    optionContainer.appendChild(btnContainer);
  } else if (questionData.type === '주관식') {
    loadQuiz('주관식');

    // 주관식 컨테이너 안에 있는 제출버튼만 조작!!! - 안보이는 옵션 컨테이너에 있는 버튼을 조작 막기
    const subjectiveContainer = document.getElementById('subjective-container');

    const checkAnswerBtn = subjectiveContainer.querySelector('.submit-btn');
    // 정답 제출 불가능하도록 설정 -> selected 되면 풀기
    checkAnswerBtn.disabled = true;
    // 버튼 클릭시 정답 확인 이벤트 리스너 설정
    checkAnswerBtn.onclick = checkAnswer;

    document.getElementById('explanation').style.display = 'none'; // 해설 숨기기
    //  document.getElementById("answer-input").value = ""; // 입력값 초기화
    document.getElementById('subjective-option').innerText =
      questionData.options; // 문제 내용 표시
    document.getElementById('explanation').style.display = 'none';

    // 기존 input 태그 제거
    const existingInputs =
      subjectiveContainer.querySelectorAll('.answer-input');
    existingInputs.forEach((input) => input.remove());

    // 정답 개수만큼 input 태그 동적 생성 후 버튼 앞에 추가
    questionData.answer.forEach((_, index) => {
      const answerInput = document.createElement('input');
      answerInput.type = 'text';
      answerInput.placeholder = `빈칸 ${index + 1} - 정답을 입력해주세요.`;
      answerInput.classList.add('answer-input');

      // 버튼 앞에 input 삽입
      subjectiveContainer.insertBefore(answerInput, checkAnswerBtn);
    });

    // input 이 일어나면 내용물 보고 활성화되도록 이벤트 리스너 설정
    document
      .querySelectorAll('.answer-input') // ✅ 모든 input 필드를 선택
      .forEach((input) => input.addEventListener('input', enableSubmitButton));
  }
}

// @sangil
function checkAnswer() {
  const questionListItems = document.querySelectorAll('.questionList'); // 모든 문제 리스트 가져오기
  let isCorrect = false;

  if (quizData[currentQuestion].type === '객관식') {
    userAnswers[currentQuestion] = curIndex;

    isCorrect = selectedOption === quizData[currentQuestion].answer;
    // ✅ 정답의 인덱스를 그대로 가져와서 해당 옵션의 배경색 변경
    const correctIndex = quizData[currentQuestion].answer; // 정답 번호 (0부터 시작)

    const optionElements = document.querySelectorAll('.option');

    if (optionElements[correctIndex]) {
      // 해당 index가 존재하는 경우만 적용
      optionElements[correctIndex].style.backgroundColor = 'rgb(169, 207, 169)';
      optionElements[correctIndex].style.border = '2px solid green';
    }
  } else if (quizData[currentQuestion].type === '주관식') {
    // 사용자 입력값에서 모든 공백 제거
    const userInputs = Array.from(
      document.querySelectorAll('.answer-input')
    ).map((input) => input.value.replace(/\s+/g, '')); // 모든 공백 제거

    // 정답 배열에서도 모든 공백 제거
    const correctAnswers = quizData[currentQuestion].answer.map((answer) =>
      answer.replace(/\s+/g, '')
    );

    // 수정된 입력값과 정답 비교
    isCorrect = JSON.stringify(userInputs) === JSON.stringify(correctAnswers);

    // 주관식에서도 체크
    userAnswers[currentQuestion] = 0;
  }

  document.getElementById('explanation').innerText =
    quizData[currentQuestion].explanation;
  document.getElementById('explanation').style.display = 'block';

  // 정답 여부에 따라 색상 변경
  if (isCorrect) {
    questionListItems[currentQuestion].style.backgroundColor = 'green'; // 정답 → 초록색
    questionListItems[currentQuestion].style.color = 'white'; // 글자색 변경
    score++;
  } else {
    questionListItems[currentQuestion].style.backgroundColor = 'red'; // 오답 → 빨간색
    questionListItems[currentQuestion].style.color = 'white'; // 글자색 변경
  }

  // @sangil
  if (!userAnswers.includes(-1)) {
    // 카운트다운 시작
    let count = 6; // 시작 숫자
    document.getElementById('blinking-text').style.display = 'block';

    const countdownElement = document.getElementById('countdown');

    const countdownInterval = setInterval(() => {
      count--;
      countdownElement.textContent = count + '초 뒤 결과 페이지로 이동합니다.'; // 화면에 반영

      if (count == 0) {
        clearInterval(countdownInterval); // 타이머 정지
        const timeTaken = document.getElementById('time-taken').textContent;

        const queryString = `?name=${encodeURIComponent(
          userName
        )}&score=${score}&timeTaken=${timeTaken}`;
        window.location.href = 'result.html' + queryString; // 결과 페이지로 즉시 이동
      }
    }, 1000);
  }
}

// 선택지 선택을 했을 때, 정답확인 disabled 해제
function selectOption(index, div) {
  if (userAnswers[currentQuestion] != -1) return;

  document
    .querySelectorAll('.option')
    .forEach((el) => el.classList.remove('selected'));
  // 선택된 선지는 selected 클래스 추가
  div.classList.add('selected');
  selectedOption = index;
  // 정답확인 disabled 해제
  document.getElementById('checkAnswer').disabled = false;
  curIndex = index;
}

// 입력 값이 있을 때 버튼 활성화
function enableSubmitButton() {
  // 모든 입력 필드의 값 확인
  const userInputs = Array.from(document.querySelectorAll('.answer-input')).map(
    (input) => input.value.trim()
  );

  // 하나라도 비어 있으면 버튼 비활성화
  const allFilled = userInputs.every((input) => input !== '');

  // 주관식 컨테이너 안에 있는 제출 버튼만 조작
  const subjectiveContainer = document.getElementById('subjective-container');
  subjectiveContainer.querySelector('.submit-btn').disabled = !allFilled;
}

// 정답 확인 버튼 클릭 시 해설 표시 - 로직 중복으로 checkAnswer 내부로 옮김

// checkAnswer를 했을 때 설명 보여주기 - 로직 중복으로 checkAnswer 내부로 옮김

// leftbar에 대한 정보
const leftBar = document.getElementById('left_bar');

quizData.forEach((_, index) => {
  const div = document.createElement('div');
  div.classList.add('questionList');
  div.innerText = `문제 ${index + 1}`;

  div.onclick = () => {
    // 모든 문제 리스트에서 현재 선택된 효과 제거
    document.querySelectorAll('.questionList').forEach((item) => {
      item.classList.remove('nav-selected');
    });

    // 현재 클릭한 문제에 선택 효과 추가
    div.classList.add('nav-selected');

    // 현재 문제 변경 및 로드
    currentQuestion = index;
    loadQuestion();
  };

  leftBar.appendChild(div);
});

// 현재 0페이지부터 시작
loadQuestion();
