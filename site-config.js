/*
  TunedHand 候補頁設定（2026-11-06 草稿，尚未上線）
  上線前要換的值都在這裡，一行一項；只有 index.html 用這個檔；聯絡信箱與生效日直接寫在 HTML 裡（換法見 README.md）。
  換完用 README.md「上線前自己測一次」走一遍。
*/
window.SITE_CONFIG = {
  // 中文、英文 Google 表單的填寫網址（…/viewform）。還沒建表單時留空字串，按鈕會顯示「表單準備中」。
  formUrlZh: "https://docs.google.com/forms/d/e/1FAIpQLScF3jjF5JWP97hBCh4B56dCwss43oCp7vTaiyBfODVB3S_fMA/viewform",
  formUrlEn: "https://docs.google.com/forms/d/e/1FAIpQLScsezPOWqm5vlpX97XlNpe7SpFaEL2nA77MBLelW-ok-n1KSA/viewform",

  // 表單「來源碼」那一題的欄位編號（entry.123456789）。不填也能用，只是量不到從哪個管道來。
  sourceEntryZh: "entry.792904746",
  sourceEntryEn: "entry.384938580"
};
