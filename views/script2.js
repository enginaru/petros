document.addEventListener('DOMContentLoaded', () => {

    const checkWorkdsButton = document.getElementById('checkWords');
    const tableElement = document.getElementById('mytable2');

    // 화면 테이블을 가리고 보여주는 함수
    checkWorkdsButton.addEventListener('click', () => {

        if ( tableElement.style.display == 'none')
        {
            tableElement.style.display = 'block';
        }else{
            tableElement.style.display = 'none';
        }
    });
});
