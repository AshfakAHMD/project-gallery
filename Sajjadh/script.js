// Function to change background color
document.querySelectorAll('.color-button').forEach(button => {
    button.onclick = () => {
        const color = button.getAttribute('data-color');
        document.body.style.backgroundColor = color;
    };
});

// Popup image functionality
document.querySelectorAll('.image-gellary .img-box img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'flex';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
        document.querySelector('.popup-head').textContent = image.nextElementSibling.textContent;
        document.querySelector('.popup-discription').innerHTML = image.getAttribute('data-description').replace(/\n/g, '<br>');
    };
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
};