//----------------------------------------------------------------------------//
//                           Svelte Touch-to-Mouse                            //
//----------------------------------------------------------------------------//
// see https://stackoverflow.com/questions/1517924/javascript-mapping-touch-events-to-mouse-events
// and https://stackoverflow.com/questions/5885808/includes-touch-events-clientx-y-scrolling-or-not
// Important!
// for all elements affected by "mapTouchToMouseFor" (i.e., for all elements
// selected by "Selector"), don't forget to set the following style properties
//
// -webkit-touch-callout:none;
// -ms-touch-action: none; touch-action: none;
//
// either in a stylesheet or inline
function mapTouchToMouseFor(Selector) {
    function TouchEventMapper(originalEvent) {
        var Target = originalEvent.target;
        if (!Target.matches(Selector)) {
            return;
        }
        var simulatedEventType;
        switch (originalEvent.type) {
            case 'touchstart':
                simulatedEventType = 'mousedown';
                break;
            case 'touchmove':
                simulatedEventType = 'mousemove';
                break;
            case 'touchend':
                simulatedEventType = 'mouseup';
                break;
            case 'touchcancel':
                simulatedEventType = 'mouseup';
                break;
            default: return;
        }
        var firstTouch = originalEvent.changedTouches[0];
        var clientX = firstTouch.clientX, pageX = firstTouch.pageX, PageXOffset = window.pageXOffset;
        var clientY = firstTouch.clientY, pageY = firstTouch.pageY, PageYOffset = window.pageYOffset;
        if ((pageX === 0) && (Math.floor(clientX) > Math.floor(pageX)) ||
            (pageY === 0) && (Math.floor(clientY) > Math.floor(pageY))) {
            clientX -= PageXOffset;
            clientY -= PageYOffset;
        }
        else if ((clientX < pageX - PageXOffset) || (clientY < pageY - PageYOffset)) {
            clientX = pageX - PageXOffset;
            clientY = pageY - PageYOffset;
        }
        var simulatedEvent = new MouseEvent(simulatedEventType, {
            bubbles: true, cancelable: true,
            screenX: firstTouch.screenX, screenY: firstTouch.screenY,
            // @ts-ignore we definitely want "pageX" and "pageY"
            clientX: clientX, clientY: clientY, pageX: pageX, pageY: pageY, buttons: 1, button: 0,
            ctrlKey: originalEvent.ctrlKey, shiftKey: originalEvent.shiftKey,
            altKey: originalEvent.altKey, metaKey: originalEvent.metaKey
        });
        firstTouch.target.dispatchEvent(simulatedEvent);
        //    originalEvent.preventDefault()
    }
    document.addEventListener('touchstart', TouchEventMapper, true);
    document.addEventListener('touchmove', TouchEventMapper, true);
    document.addEventListener('touchend', TouchEventMapper, true);
    document.addEventListener('touchcancel', TouchEventMapper, true);
}

export default mapTouchToMouseFor;
//# sourceMappingURL=svelte-touch-to-mouse.esm.js.map
