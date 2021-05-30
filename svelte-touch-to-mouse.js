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

  export function mapTouchToMouseFor (Selector) {
    function TouchEventMapper (originalEvent) {
      let Target = originalEvent.target
      if (! Target.matches(Selector)) { return }

      let simulatedEventType
      switch (originalEvent.type) {
        case 'touchstart':  simulatedEventType = 'mousedown'; break
        case 'touchmove':   simulatedEventType = 'mousemove'; break
        case 'touchend':    simulatedEventType = 'mouseup';   break
        case 'touchcancel': simulatedEventType = 'mouseup';   break
        default:            return
      }

      let firstTouch = originalEvent.changedTouches[0]

      let clientX = firstTouch.clientX, pageX = firstTouch.pageX, PageXOffset = window.pageXOffset
      let clientY = firstTouch.clientY, pageY = firstTouch.pageY, PageYOffset = window.pageYOffset
      if (
        (pageX === 0) && (Math.floor(clientX) > Math.floor(pageX)) ||
        (pageY === 0) && (Math.floor(clientY) > Math.floor(pageY))
      ) {
        clientX -= PageXOffset
        clientY -= PageYOffset
      } else if (
        (clientX < pageX - PageXOffset) || (clientY < pageY - PageYOffset)
      ) {
        clientX = pageX - PageXOffset
        clientY = pageY - PageYOffset
      }

      let simulatedEvent = new MouseEvent(simulatedEventType, {
        bubbles:true, cancelable:true,
        screenX:firstTouch.screenX, screenY:firstTouch.screenY,
        clientX, clientY, pageX, pageY, which:1, button:0
      })

      firstTouch.target.dispatchEvent(simulatedEvent)
      originalEvent.preventDefault()
    }

    document.addEventListener('touchstart',  TouchEventMapper, true)
    document.addEventListener('touchmove',   TouchEventMapper, true)
    document.addEventListener('touchend',    TouchEventMapper, true)
    document.addEventListener('touchcancel', TouchEventMapper, true)
  }

  export default mapTouchToMouseFor
