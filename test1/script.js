const buttons = document.querySelectorAll('button');
buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
        alert(`感谢您购买商品 ${index + 1}！`);
    });
});
