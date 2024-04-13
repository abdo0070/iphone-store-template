
let container = document.getElementById('container');
let image = document.querySelector('.content img');
let images = document.querySelectorAll('.images img');


images.forEach
(selectedImage =>{
    selectedImage.addEventListener('click',function(){
        image.src = selectedImage.src;
    });
});

function changeColor(color){
        container.style.background = color;

}
console.log(images.length);

