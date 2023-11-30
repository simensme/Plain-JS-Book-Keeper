const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

// Show Modal, Focus on the first input in the modal
const showModal = () => {
    modal.classList.add('show-modal');
    websiteNameEl.focus();
}

// Close Modal
const closeModal = () => {
    modal.classList.remove('show-modal');
}

// Modal Event Listeners
modalShow.addEventListener('click', showModal);
modalClose.addEventListener('click', closeModal);
window.addEventListener('click', e => (e.target === modal ? modal.classList.remove('show-modal') : false));