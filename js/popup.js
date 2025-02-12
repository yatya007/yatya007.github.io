// 要素を取得
const clickableText = document.querySelector(".clickable");
const closePopup = document.getElementById("closePopup");
const popup = document.getElementById("popup");
const popupOverlay = document.getElementById("popupOverlay");

// ポップアップを開く
clickableText.addEventListener("click", function() {
    popup.style.display = "block";
    popupOverlay.style.display = "block";
});

// ポップアップを閉じる
closePopup.addEventListener("click", function() {
    popup.style.display = "none";
    popupOverlay.style.display = "none";
});

// オーバーレイをクリックすると閉じる
popupOverlay.addEventListener("click", function() {
    popup.style.display = "none";
    popupOverlay.style.display = "none";
});