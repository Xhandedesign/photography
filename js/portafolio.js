const images = document.querySelectorAll('.imagen__ga');
const contenedorImg = document.querySelector('.contiene-imgporta');
const imageContainer = document.querySelector('.img-show');
const final = document.querySelector('.bi.bi-x-lg-1');


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

