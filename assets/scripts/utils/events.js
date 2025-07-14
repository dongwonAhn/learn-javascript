/* eslint-disable no-unused-vars */

// element.addEventListener(eventType, listener, ?options)
function on(element, type, listener) {
  element.addEventListener(type, listener)
}

function click(element, listener) {
  element.addEventListener('click', listener)
}

function mouseenter(element, listener) {
  element.addEventListener('mouseenter', listener)
}

function mouseleave(element, listener) {
  element.addEventListener('mouseleave', listener)
}