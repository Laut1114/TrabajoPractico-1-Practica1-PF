const mobileRow1 = document.querySelector('.row');
const mobileRow2 = document.querySelector('div.row2');

console.log(mobileRow1);


window.addEventListener('resize', function() {
    var anchoViewport = window.innerWidth;    

    if (anchoViewport <= 530) {
        mobileRow1.classList.remove('row');
        mobileRow1.classList.remove('row2');
    } 

    if (anchoViewport > 530) {
        mobileRow1.classList.add('row');
    }
});
