const image = document.getElementById("image");
const textInput = document.getElementById("text-input");
const textOverlay = document.getElementById("text-overlay");
const imageSelector = document.getElementById("image-selector");

// 이미지 선택 시 변경
imageSelector.addEventListener("change", () => {
  const selectedImage = imageSelector.value;
  image.src = selectedImage;

  // 바질 이미지 선택 시 글자 크기 및 기본 텍스트 설정
  if (selectedImage === "basil.jpg") {
    textOverlay.style.fontSize = "14px"; // 글씨 크기 작게
    textInput.maxLength = 50; // 최대 글자수 50글자
    textInput.value =
      "이름은 고추장 닭날개조림으로 하겠습니다. 근데 이제 바질을 곁들인"; // 기본 텍스트
    textOverlay.textContent = textInput.value; // 오버레이 텍스트 업데이트
  } else {
    // 들기름 이미지 선택 시 기본 설정
    textOverlay.style.fontSize = "20px"; // 기본 글씨 크기
    textInput.maxLength = 10; // 기본 최대 글자수
    textInput.value = "나야, 들기름"; // 기본 텍스트
    textOverlay.textContent = textInput.value; // 오버레이 텍스트 업데이트
  }
});

// 텍스트 입력 시마다 오버레이 텍스트 업데이트
textInput.addEventListener("input", () => {
  const text = textInput.value.trim();
  textOverlay.textContent = text; // 텍스트 오버레이에 추가
});

// 다운로드 버튼 클릭 시
document.getElementById("download").addEventListener("click", () => {
  html2canvas(document.getElementById("canvas-container")).then((canvas) => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png"); // 이미지 데이터 URL 생성
    link.download = "짤생성.png"; // 다운로드 파일 이름
    link.click(); // 링크 클릭으로 다운로드
  });
});
