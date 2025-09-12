document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.category-item');
    const products = document.querySelectorAll('.product-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            products.forEach(product => {
                const categories = product.getAttribute('data-category').split(',');
                if (filter === 'all' || categories.includes(filter)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });


    window.onload = function() {
        // 選取該元素
        var item = document.querySelector('.category-item');
        
        // 添加 'active' 類別
        item.classList.add('active');
    }
    
    
    const categoryItems = document.querySelectorAll('.category-item');

    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            // 清除所有的選中樣式
            categoryItems.forEach(i => i.classList.remove('active'));
            // 為當前點擊的元素添加選中樣式
            item.classList.add('active');
        });
    });

});


// 取得網址語言，例如 ?id=zh-tw 或 ?id=en
function getLanguage() {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("id");
  return (lang === "en" || lang === "zh-tw") ? lang : "zh-tw"; // 預設 zh-tw
}

const lang = getLanguage();
const productListContainer = document.getElementById('product-list');

const details = {
  "zh-tw": "查看商品",
  "en": "View Details"
}

const href = {
  "zh-tw": "Menu/Cuisine.html",
  "en": "Menu/Cuisine-en.html"
}

// --- 生成商品列表 ---
menuItems.forEach(item => {
  const productItem = document.createElement('div');
  productItem.classList.add('product-item');
  productItem.setAttribute('data-category', item.categories.join(',')); // 添加類別屬性
  productItem.innerHTML = `
    <img data-src="${item.img}" alt="${item.alt[lang]}">
    <h3>${item.name[lang]}</h3>
    <div style="margin-top: auto;">
      <p>${item.price[lang]}</p>
      <a href="${href[lang]}?id=${lang}&number=${item.number}" onclick="${item.onclick}">${details[lang]}</a>
    <div>
  `;
  productListContainer.appendChild(productItem);
});

// 懶加載
const lazyImages = document.querySelectorAll("img[data-src]");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src || ""; // 若沒有圖片可設空
      observer.unobserve(img);
    }
  });
});
lazyImages.forEach(img => observer.observe(img));