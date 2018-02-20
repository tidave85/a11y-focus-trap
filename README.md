# A11y Focus trap

A simple javascript module to trap focus in an HTML element and loop de navigation that is made using the tab key inside this element. This pretty useful for modal or alert element and help your navigation to be accessible by users with disabilities. 

## Configuration
Install using NPM
```javascript
npm install a11y-focus-trap
```
You can also clone the github repo and insert it directly in your project via the script tag.

## Usage

Import the module in the desired file
```javascript
var a11yFocusTrap = require('./a11y-focus-trap');
```

Have and HTML element where you want the focus to be trapped in such as:
```html
<div id="modal">
    <h3>Focus need to be trap in those element</h3>
    <button id="close-modal">Close</button>
    <form>
        <div><input type="text" placeholder="First Name"/></div>
        <div><input type="text" placeholder="Last Name"/></div>
        <div><input type="submit" /></div>
    </form>
</div>
```

Call the `trapFocus` method which have two parameter. The first one is the element in which the focus will be trapped in and the second is the current active element to return the focus on once we exit the trap. 

Example:
```javascript
var containerElement = document.getElementById('modal');
a11yFocusTrap.trapFocus(containerElement, document.activeElement);
```

To cancel the focus trap, call the `unTrapFocus` method. This will also return the focus on the current active element that you passed as the second parameter of the `trapFocus` method. 

Example:
```javascript
a11yFocusTrap.unTrapFocus();
```

Thats it !
