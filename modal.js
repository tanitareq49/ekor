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
formModalOpenBtn.addEventListener('click', function(){
      formModalContainer.classList.remove('hidden');
      bgOverlay.classList.remove('hidden');
})
formModalCloseBtn.addEventListener('click', function(){
      formModalContainer.classList.add('hidden');
      bgOverlay.classList.add('hidden');
})

