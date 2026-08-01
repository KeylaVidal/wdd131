let reviewCount = localStorage.getItem('reviewCount');
reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
localStorage.setItem('reviewCount', reviewCount);
document.getElementById('reviewCount').textContent = reviewCount;
document.getElementById('lastModified').textContent = document.lastModified;