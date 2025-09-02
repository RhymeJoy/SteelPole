// 陣列管理：低畫質 (縮圖) 與 高畫質 (大圖)
  const images = [
    { thumb: "gallery-1.jpg", full: "gallery-1.jpg" },
    { thumb: "gallery-2.jpg", full: "gallery-2.jpg" },
    { thumb: "gallery-3.jpg", full: "gallery-3.jpg" },
    { thumb: "gallery-4.jpg", full: "gallery-4.jpg" },
    { thumb: "gallery-5.jpg", full: "gallery-5.jpg" },
    { thumb: "gallery-6.jpg", full: "gallery-6.jpg" },
    { thumb: "gallery-7.jpg", full: "gallery-7.jpg" },
    { thumb: "gallery-8.jpg", full: "gallery-8.jpg" },
    { thumb: "gallery-9.jpg", full: "gallery-9.jpg" },
    { thumb: "gallery-10.jpg", full: "gallery-10.jpg" },
    { thumb: "gallery-11.jpg", full: "gallery-11.jpg" },
    { thumb: "gallery-12.jpg", full: "gallery-12.jpg" },
    { thumb: "gallery-13.jpg", full: "gallery-13.jpg" },
    { thumb: "gallery-14.jpg", full: "gallery-14.jpg" },
    { thumb: "gallery-15.jpg", full: "gallery-15.jpg" }
  ];

  const gallery = document.getElementById("gallery-array");

  images.forEach(img => {
    const col = document.createElement("div");
    col.className = "col-lg-3 col-md-4";

    col.innerHTML = `
      <div class="gallery-item">
        <a href="assets/img/gallery/${img.full}" 
           class="glightbox" 
           data-gallery="images-gallery">
          <img src="assets/img/gallery/low/${img.thumb}" loading="lazy" class="img-fluid">
        </a>
      </div>
    `;

    gallery.appendChild(col);
  });