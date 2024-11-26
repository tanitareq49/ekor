/* Waste Modal */
const wasteModalBtn = document.querySelector('.modal-btn');
const modalWasteContainer = document.querySelector('.waste');
const wasteModalClose  = document.querySelector('.close-btn');
const bgOverlay = document.querySelector('.overlay');


wasteModalBtn.addEventListener('click',function(){
      modalWasteContainer.classList.remove('hidden');
      bgOverlay.classList.remove('hidden');
})

wasteModalClose.addEventListener('click',function(){
      modalWasteContainer.classList.add('hidden');
      bgOverlay.classList.add('hidden');
}) 

/* Form modal */
const formModalOpenBtn = document.querySelector('.formModalOpen-btn');
const formModalCloseBtn = document.querySelector('.formModalClose-btn');
const formModalContainer = document.querySelector('.formModal-container');
const bgOverlayTwo = document.querySelector(".overlay-two")


// Open the modal and overlay when the open button is clicked
formModalOpenBtn.addEventListener("click", ()=> {
      bgOverlayTwo.classList.remove("hidden");
      formModalContainer.classList.remove("hidden");
});

// Close the modal and overlay when the close button is clicked
formModalCloseBtn.addEventListener('click', function () {
      bgOverlayTwo.classList.add("hidden");  
    formModalContainer.classList.add('hidden');
});

// Handle click on the overlay
bgOverlay.addEventListener('click', () => {
      if (!modalWasteContainer.classList.contains('hidden')) {
          modalWasteContainer.classList.add('hidden');
          bgOverlay.classList.add('hidden');
      }
  });

bgOverlayTwo.addEventListener('click', () => {
      if (!formModalContainer.classList.contains('hidden')) {
            formModalContainer.classList.add('hidden');
          bgOverlayTwo.classList.add('hidden');
      }
  });

modalWasteContainer.addEventListener('click', (event) => {
      event.stopPropagation();
  });

formModalContainer.addEventListener('click', (event) => {
      event.stopPropagation();
  });





