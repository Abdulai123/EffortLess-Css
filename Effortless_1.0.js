     /* JavaScript */
     function toggleMenu() {
        var menu = document.querySelector(".menu");
        menu.classList.toggle("menu-open");
      }
      
      /* JavaScript */
  // Toggle the navigation menu when the nav toggle button is clicked
  function toggleNav() {
    var nav = document.querySelector(".nav");
    nav.classList.toggle("nav-open");
  }
  
 /* JavaScript */
// Toggle the navigation menu when the nav toggle button is clicked
function toggleNav() {
  var nav = document.querySelector(".nav");
  nav.classList.toggle("nav-open");
}

// Validate the form when it is submitted
function validateForm(form) {
  // Check that all required fields are filled in
  var requiredFields = form.querySelectorAll(".form-control[required]");
  for (var i = 0; i < requiredFields.length; i++) {
    if (!requiredFields[i].value) {
      return false;
    }
  }

  // Check that the email field contains a valid email address
  var emailField = form.querySelector(".form-control[type='email']");
  if (emailField && !/^\S+@\S+\.\S+$/.test(emailField.value)) {
    return false;
  }

  // If all checks pass, return true
  return true;
}

// Toggle the accordion item when the header is clicked
function toggleAccordion(item) {
  item.classList.toggle("accordion-open");
}

// Show the popover when the button is clicked
function showPopover(button, popover) {
  popover.classList.add("popover-open");
  button.setAttribute("aria-expanded", "true");
}

// Hide the popover when the close button is clicked
function hidePopover(button, popover) {
  popover.classList.remove("popover-open");
  button.setAttribute("aria-expanded", "false");
}

// Show the tooltip when the element is hovered
function showTooltip(element, tooltip) {
  tooltip.classList.add("tooltip-open");
  element.setAttribute("aria-describedby", tooltip.id);
}

// Hide the tooltip when the element is no longer hovered
function hideTooltip(element, tooltip) {
  tooltip.classList.remove("tooltip-open");
  element.removeAttribute("aria-describedby");
}

// Switch to the selected tab when the tab is clicked
function selectTab(tab) {
  // Remove the active class from all tabs and tab content
  var tabs = tab.parentElement.children;
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("tab-active");
  }
  var tabContent = document.querySelectorAll(".tab-content");
  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove("tab-content-active");
  }

  // Add the active class to the selected tab and tab content
  tab.classList.add("tab-active");
  var tabId = tab.getAttribute("href");
  document.querySelector(tabId).classList.add("tab-content-active");
}

// Make the header sticky when the page is scrolled past a certain point
function updateStickyHeader() {
  var header = document.querySelector(".header");
  if (window.scrollY > header.offsetHeight) {
    header.classList.add("header-sticky");
  } else {
    header.classList.remove("header-sticky");
  }
}

// Initialize the tabs and sticky header when the page is loaded
// Initialize the tabs and sticky header when the page is loaded
window.addEventListener("load", function() {
  // Select the first tab by default
  var tabs = document.querySelectorAll(".tabs li");
  if (tabs.length > 0) {
    selectTab(tabs[0].children[0]);
  }

  // Set up event listeners for the tabs
  var tabLinks = document.querySelectorAll(".tabs a");
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener("click", function(event) {
      event.preventDefault();
      selectTab(this);
    });
  }

  // Set up the sticky header
  window.addEventListener("scroll", updateStickyHeader);
  updateStickyHeader();

  // Smooth scroll to anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener("click", function(event) {
      event.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});

// Select the progress bar fill element
var fill = document.querySelector('.progress-bar .fill');

// Set the width and color of the fill to 0%
fill.style.width = '0%';
fill.style.backgroundColor = '#ccc';

// Define a function to update the progress bar
function updateProgress(percent, color) {
  // Update the width and color of the fill to the specified percentage and color
  fill.style.width = percent + '%';
  fill.style.backgroundColor = color;
}

// Set a timer to update the progress bar every 1000ms (1 second)
var timer = setInterval(function() {
  // Increment the progress by 10%
  var progress = fill.style.width;
  progress += 10;
  // If the progress is greater than 100%, set it back to 0%
  if (progress > 100) {
    clearInterval(timer); // Stop the timer
    progress = 100;
  }
  // Update the progress bar
  updateProgress(progress, '#00ff00');
}, 5000);

// Select the spinner element
var spinner = document.querySelector('.spinner');

// Define a function to hide the spinner
function hideSpinner() {
  spinner.style.display = 'none';
}

// Set a timer to hide the spinner after 5 seconds
setTimeout(function() {
  hideSpinner();
}, 5000); // 5 seconds
