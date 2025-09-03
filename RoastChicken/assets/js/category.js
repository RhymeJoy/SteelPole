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