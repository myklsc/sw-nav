// Get all dropdown buttons and contents
var dropdownBtns = document.querySelectorAll('.sw-nav-dropdown > button');
var dropdownContents = document.querySelectorAll('.sw-nav-dropdown > .sw-nav-dropdown-content');

// Get the account trigger and account wrapper elements
var accountTrigger = document.querySelector("[data-nav='sw-nav-mobile-account-trigger']");
var accountWrapper = document.querySelector("[data-nav='sw-nav-mobile-account-wrapper']");

// Add event listener to all dropdown buttons
dropdownBtns.forEach(function (dropdownBtn, index) {
  dropdownBtn.addEventListener('click', function () {
    // Check if the clicked button's parent is already open
    var isAlreadyOpen = dropdownBtn.parentNode.classList.contains('sw-nav-dropdown-show');

    // Close all dropdowns
    dropdownContents.forEach(function (dropdownContent) {
      dropdownContent.parentNode.classList.remove('sw-nav-dropdown-show');
    });

    // If the clicked button's parent was not already open, open it now
    if (!isAlreadyOpen) {
      dropdownBtn.parentNode.classList.add('sw-nav-dropdown-show');
    }
  });
});

// Add event listener to the document
document.addEventListener('click', function (event) {
  // Check if the clicked element is not a dropdown button or content
  if (!event.target.matches('.sw-nav-dropdown > button') && !event.target.matches('.sw-nav-dropdown > .sw-nav-dropdown-content *')) {
    // Remove the 'sw-nav-dropdown-show' class from all dropdowns
    dropdownContents.forEach(function (dropdownContent) {
      dropdownContent.parentNode.classList.remove('sw-nav-dropdown-show');
    });
  }
});

// Add event listener to the account trigger element
accountTrigger.addEventListener('click', function () {
  // Toggle the 'closed' class on the account wrapper element and the trigger
  accountTrigger.classList.toggle('closed');
  accountWrapper.classList.toggle('closed');
});

