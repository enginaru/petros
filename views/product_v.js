console.log('Client-side test_btn code running');

const button = document.getElementById('test_btn');
button.addEventListener('click', function(e) {
  console.log('test_btn was clicked');
  // 페이지 새로고침
  stuff = "False";
  location.reload(true);
});
