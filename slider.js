const sliderSection = document.querySelectorAll(".slider-section");

sliderSection.forEach((section)=>{
     const leftButton = section.querySelector('.btn-left');
     const rightButton = section.querySelector('.btn-right');
     const sliderContainer = section.querySelector('.slider-container > img');
     const allProductImgContainer = section.querySelector('.all-image');
     const allProduct = allProductImgContainer.querySelectorAll('div > img');

let rightCurrentIndex = 0;
let leftCurrentIndex = allProduct.length - 1;

// Function to update opacity
function updateImageOpacity(currentIndex) {
    allProduct.forEach((img, index) => {
        img.style.opacity = index === currentIndex ? "1" : "0.5";
    });
}

// Set initial opacity
updateImageOpacity(0);

// Event listeners for product thumbnails
for (let [index, product] of allProduct.entries()) {
    product.addEventListener('click', function () {
        sliderContainer.src = this.src;
        rightCurrentIndex = index;
        leftCurrentIndex = index - 1;
        updateImageOpacity(index);
    });
}

// Right button click event
rightButton.addEventListener('click', function () {
    if (rightCurrentIndex < allProduct.length) {
        sliderContainer.src = allProduct[rightCurrentIndex].src;
        updateImageOpacity(rightCurrentIndex);
        rightCurrentIndex = (rightCurrentIndex + 1) % allProduct.length;
    } else {
        if (rightCurrentIndex === allProduct.length) {
            leftButton.classList.remove('hidden');
            leftCurrentIndex = (rightCurrentIndex - 1 + allProduct.length) % allProduct.length;
        }
        rightButton.classList.add('hidden');
    }
});

// Left button click event
leftButton.addEventListener("click", function () {
    if (leftCurrentIndex >= 0) {
        sliderContainer.src = allProduct[leftCurrentIndex].src;
        updateImageOpacity(leftCurrentIndex);
        leftCurrentIndex = (leftCurrentIndex - 1 + allProduct.length) % allProduct.length;
    } else {
        if (leftCurrentIndex === -1) {
            rightButton.classList.remove('hidden');
            rightCurrentIndex = (rightCurrentIndex + 1) % allProduct.length;
        }
        leftButton.classList.add("hidden");
    }
});

});


