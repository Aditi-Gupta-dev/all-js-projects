const generateForm=document.querySelector(".generate-form");
const imageGallery=document.querySelector(".image_gallery");

const handleFormSubmit=(e)=>{
    e.preventDefault();
    console.log(e.srcElement);
    
    const userPrompt=e.srcElement[0].value;
    const userImgQuantity=e.srcElement[1].value;

    console.log(userPrompt,userImgQuantity);

    const cardMarkup=Array.from({length:userImgQuantity},()=>
    `<div class="img-card loading">
    <img src="./images/tube-spinner.svg" alt="">
    <a href=""><span class="fa-solid fa-download"></span></a>
</div>`).join("");

    imageGallery.innerHTML=cardMarkup;
}
generateForm.addEventListener("submit",handleFormSubmit);