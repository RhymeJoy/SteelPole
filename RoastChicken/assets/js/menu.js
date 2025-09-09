// 取得網址語言，例如 ?id=zh-tw 或 ?id=en
function getLanguage() {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("id");
  return (lang === "en" || lang === "zh-tw") ? lang : "zh-tw"; // 預設 zh-tw
}

const lang = getLanguage();

//沒圖
const altNoimage = {
  "zh-tw": "沒圖片",
  "en": "No Image"
};

const menuContainer = document.getElementById("menu-container");

// 生成菜單 HTML
menuItems.forEach(item => {
  const menuHTML = `
    <div class="col-lg-6 menu-item isotope-item ${item.filter}">
      <img data-src="${item.img}" class="menu-img" alt="${altNoimage[lang]}">
      <div class="menu-content">
        <a href="${item.href}" onclick="${item.onclick}">${item.name[lang]}</a>
        <span>${item.price[lang]}</span>
      </div>
      <div class="menu-ingredients">
        ${item.description[lang]}
      </div>
    </div>
  `;
  menuContainer.insertAdjacentHTML("beforeend", menuHTML);
});

//       <img data-src="${item.img}" class="menu-img" alt="${item.alt[lang]}">

// 懶加載
const lazyImages = document.querySelectorAll("img[data-src]");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});

// 開始觀察
lazyImages.forEach(img => observer.observe(img));