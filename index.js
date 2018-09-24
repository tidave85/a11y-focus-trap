const focusableElementsSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
const tabKeycode = 9;

var container;
var lastFocusedElement;
var containerFirstFocusable;
var containerLastFocusable;

exports.trapFocus = function(containerElement, lastFocused) {
    container = containerElement;
    lastFocusedElement = lastFocused;
    var containerFocusable = container.querySelectorAll(focusableElementsSelector);
    containerFirstFocusable = containerFocusable[0];
    containerLastFocusable = containerFocusable[containerFocusable.length - 1];
    containerFirstFocusable.focus();
    
    container.addEventListener('keydown', loopFocus);
}

exports.unTrapFocus = function() {
    container.removeEventListener('keydown', loopFocus);
    lastFocusedElement.focus();
};

function loopFocus(event) {
    if (event.keyCode === tabKeycode) {
        if (!event.shiftKey && document.activeElement === containerLastFocusable) {
            event.preventDefault();
            containerFirstFocusable.focus();
        } else if (event.shiftKey && document.activeElement === containerFirstFocusable) {
            event.preventDefault();
            containerLastFocusable.focus();
        }
    }
}
