// calendar.js

// 在庫データ (JSON形式)
const stockData = {
  "2025-02-10": 5,
  "2025-02-11": 3,
  "2025-02-12": 0
};

// カレンダー要素
const calendar = document.getElementById("calendar");

// 2月の日付を生成 (例: 28日まで)
for (let i = 1; i <= 28; i++) {
  const date = `2025-02-${i.toString().padStart(2, '0')}`;
  const stock = stockData[date] || 0;

  // 日付の要素を作成
  const dayDiv = document.createElement("div");
  dayDiv.classList.add("day");
  dayDiv.textContent = `${date}\n在庫: ${stock}`;

  // クラスを追加 (在庫の有無で色分け)
  if (stock === 0) {
    dayDiv.classList.add("out-of-stock");
  } else {
    dayDiv.classList.add("available");
  }

  calendar.appendChild(dayDiv);
}
