// Get all dropdown buttons and contents
const dropdownBtns = document.querySelectorAll('.sw-nav-dropdown > button');
const dropdownContents = document.querySelectorAll('.sw-nav-dropdown > .sw-nav-dropdown-content');

// Get the mobile nav, trigger, and backdrop elements using their data-nav attribute values
const mobileNav = document.querySelector('[data-nav="mobile-nav"]');
const mobileNavTrigger = document.querySelector('[data-nav="mobile-nav-trigger"]');
const mobileNavBackdrop = document.querySelector('[data-nav="mobile-nav-backdrop"]');

// Get the mobile nav account trigger and account wrapper elements
const accountTrigger = document.querySelector("[data-nav='sw-nav-mobile-account-trigger']");
const accountWrapper = document.querySelector("[data-nav='sw-nav-mobile-account-wrapper']");

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

// Add a click event listener to the mobileNavTrigger element
mobileNavTrigger.addEventListener('click', function () {
  // When clicked, add the "active" class to both the mobileNav and mobileNavBackdrop elements
  mobileNav.classList.add('active');
  mobileNavBackdrop.classList.add('active');
});

// Add a click event listener to the mobileNavBackdrop element
mobileNavBackdrop.addEventListener('click', function () {
  // When clicked, remove the "active" class from both the mobileNav and mobileNavBackdrop elements
  mobileNav.classList.remove('active');
  mobileNavBackdrop.classList.remove('active');
});

// Add event listener to the account trigger element
accountTrigger.addEventListener('click', function () {
  // Toggle the 'closed' class on the account wrapper element and the trigger
  accountTrigger.classList.toggle('closed');
  accountWrapper.classList.toggle('closed');
});
