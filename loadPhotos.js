const postContainer = document.querySelector('#post-container');
// Đọc giá trị của n từ file soluong.txt
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://hbs.vn/soluong.txt', true);
xhr.onload = () => {
  const n = parseInt(xhr.responseText.trim());

  // Tạo các phần tử post sử dụng giá trị của n
  for (let i = 0; i < n + 1; i++) {
    const url = 'photo-detail.html'
    const postElement = document.createElement('div');
    postElement.classList.add('col-xl-3', 'col-lg-4', 'col-md-6', 'col-sm-6', 'col-12', 'mb-5');
    postElement.innerHTML = `
      <figure class="effect-ming tm-video-item">
        <img src="img/img-03.jpg" alt="Image" class="img-fluid">
        <figcaption class="d-flex align-items-center justify-content-center">
          <h2>Kỹ năng sống</h2>
          <a href="${url}">View more</a>
        </figcaption>
      </figure>
      <div class="d-flex justify-content-between tm-text-gray">
        <span class="tm-text-gray-light">${new Date().toLocaleDateString()}</span>
        <span>0 views</span>
      </div>
    `;
    postContainer.appendChild(postElement);
  }
};
xhr.send();
