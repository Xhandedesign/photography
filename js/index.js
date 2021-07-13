const images = document.querySelectorAll('.imagen__port');
const contenedorImg = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');
const final = document.querySelector('.bi.bi-x-lg');


images.forEach(image =>{
    image.addEventListener('click', ()=>{
        addImage(image.getAttribute('src'), image.getAttribute('alt'));
    });
});

const addImage = (srcImage, altImage)=>{
    contenedorImg.classList.toggle('move');
    imageContainer.classList.toggle('show');
    imageContainer.src = srcImage;
};

final.addEventListener('click', ()=>{
    contenedorImg.classList.toggle('move');
    imageContainer.classList.toggle('show');
});

