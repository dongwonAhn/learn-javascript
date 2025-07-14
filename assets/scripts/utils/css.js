/* eslint-disable no-unused-vars */

function getStyle(element, propertyName, pseudoElement) {
  const elementStyles = getComputedStyle(element, pseudoElement)
  const propertyValue = elementStyles.getPropertyValue(propertyName)
  return propertyValue
}

function setStyle(element, propertyName, propertyValue) {
  element.style.setProperty(propertyName, propertyValue)
  return element
}

function css(element, propertyName, propertyValue, pseudoElement) {
  if (propertyValue) {
    return setStyle(element, propertyName, propertyValue)
  } else {
    return getStyle(element, propertyName, pseudoElement)
  }
}