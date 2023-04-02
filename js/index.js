const uploadFile = document.querySelector(".upload-zone img");
const sliderZone = document.querySelector("#slider-zone")
const showImages = document.querySelector(".show-images")
const imgSlider = document.querySelectorAll("#slider-img")
const nextBtn = document.querySelector(".next")
const prewBtn = document.querySelector(".prew")

const images = [
    "./assets/images/sl1.jpg",
    "./assets/images/sl2.jpg",
    "./assets/images/sl3.jpg",
    "./assets/images/sl4.jpg"
];

images.forEach(image => {

    const newImg = document.createElement("img");
    newImg.src = image;
    showImages.appendChild(newImg)
});

uploadFile.addEventListener("click", () => {
    uploadFile.previousElementSibling.click();
});


function showSlider(images) {
    const newImg = document.createElement("img");

    let i = images.length - 1;
    newImg.setAttribute("src", images[i]);
    sliderZone.appendChild(newImg);

    prewBtn.addEventListener("click", () => {

        if (i <= images.length && i >= 0) {
            newImg.setAttribute("src", images[i])
        } else if (i < 0) {
            i = images.length;
        }
        i--;
    })
    
    nextBtn.addEventListener("click", () => {

        if (i < images.length && i >= 0) {
            newImg.setAttribute("src", images[i])
        } else if (i=images.length) {
            i = 0;
        }
        i++;
    })
}

showSlider(images);

showImages.addEventListener("click", () => {
    sliderZone.style.display = "flex"
    showImages.style.display = "none"

})

uploadFile.previousElementSibling.addEventListener("change", (e) => {
    const { files } = e.target;

    for (const file of files) {
        const fileReader = new FileReader();

        fileReader.onloadend = (e) => {
            const { result } = e.target;

            const imageUpload = document.createElement("img")

            imageUpload.setAttribute("src", result);
            images.push(result);

            showImages.appendChild(imageUpload)

        };
        fileReader.readAsDataURL(file);
    }


})




