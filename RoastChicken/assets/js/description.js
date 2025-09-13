document.addEventListener("DOMContentLoaded", () => {
  // 讀取網址參數
  const params = new URLSearchParams(window.location.search);
  const num = params.get("number");       // 取得商品編號
  const lang = params.get("id") === "en" ? "en" : "zh-tw";  // 取得語言，預設 zh-tw

  if (!num) {
    console.warn("網址沒有指定商品編號");
    window.location.href = "../404.html";
    // history.back(); // 回到上一頁
    return;
  }

  // 根據編號找對應商品
  const item = menuItems.find(i => i.number === num);
  if (!item) {
    console.warn("找不到對應商品:", num);
    window.location.href = "../404.html";
    return;
  }

  const returnHref = {
    "zh-tw": "../Menu.html",
    "en": "../Menu-en.html"
  } 

  const cat = {
    "all": "全部",
    "staple": "主食",
    "soup": "湯品",
    "dessert": "甜點",
    "dish": "單點",
    "set": "合菜"
  }

  // 顯示商品資訊
  const container = document.querySelector(".product-info .form-container");

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  let categoriesStr;
  if (lang === "zh-tw") {
    categoriesStr = item.categories.map(c => cat[c] || c).join(", ");
  } else {
    categoriesStr = item.categories.map(capitalize).join(", ");
  }

  container.innerHTML = `
    <h1><strong>${item.name[lang]}</strong></h1>
    <div class="product-price">${lang === 'en' ? 'Price:' : '價格：'} ${item.price[lang]}</div>
    <div class="product-categories">
      <strong>${lang === 'en' ? 'Categories:' : '類別:'}</strong> ${categoriesStr}
    </div>
    <h2><strong>${lang === 'en' ? 'Description:' : '詳細說明：'}</strong></h2>
    <p>${item.detail[lang] || item.description[lang]}</p>
    <a href="${returnHref[lang]}" class="reeturn-btn">
      ${lang === 'en' ? 'Return to MENU' : '返回菜單'}
    </a>
  `;

  // 圖片處理
  const mainImage = document.getElementById("main-image");
  const bottomImages = document.getElementById("bottom-images");

  // 取得該商品的圖片陣列
  const images = item.images || ["../" + item.img]; // 如果沒有 images 就用單張 img

  // 設定主圖為第一張
  mainImage.src = images[0];

  // 清空底部圖片容器
  bottomImages.innerHTML = "";

  // 生成縮圖
  images.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Preview Image ${index + 1}`;
    img.onclick = () => changeImage(src);
    bottomImages.appendChild(img);
  });

  function changeImage(newSrc) {
    mainImage.src = newSrc;
  }

});


