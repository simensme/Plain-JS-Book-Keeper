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
};

// Close Modal
const closeModal = () => {
    modal.classList.remove('show-modal');
};

// Modal Event Listeners
modalShow.addEventListener('click', showModal);
modalClose.addEventListener('click', closeModal);
window.addEventListener('click', e => (e.target === modal ? modal.classList.remove('show-modal') : false));

// Validate the form
const validate = (nameValue, urlValue) => {
    // Expression to check that the web address has a valid format, e.g no spacing
    const expression = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    const regex = new RegExp(expression);
    if (!nameValue || !urlValue){
        alert('Please add values to both fields');
        return false;
    }
    if (!urlValue.match(regex)){
        alert('Please provide a valid web address');
        return false;
    }
    // if everything is ok
    return true;
};

// Handle data from form
const storeBookmark = e => {
    // Prevent it from submitting a form to a web-server
    e.preventDefault();
    const nameValue = websiteNameEl.value;
    let urlValue = websiteUrlEl.value;
    if (!urlValue.includes('https://') && !urlValue.includes('http://')) {
        urlValue = `https://${urlValue}`;
    }
    if(!validate(nameValue, urlValue)){
        return false;
    } 
};

// Event Listener
bookmarkForm.addEventListener('submit', storeBookmark);



