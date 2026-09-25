/** Extra Credit:
 * While not required, if you finish this assignment and have some extra time, feel free to add functionality to the disclaimer button, so that a disclaimer modal pops up when “OFFER DETAILS >” is clicked. (the modal should be closeable) */



const offerDetails = document.querySelector('.offer-details');
const offerModal = document.querySelector('.offer-modal');
const offerModalClose = document.querySelector('.offer-modal-close');

offerDetails.addEventListener('click', (e) => {
e.preventDefault();
offerModal.style.display = "block";
});


offerModalClose.addEventListener('click', () => {
offerModal.style.display = "none";
});