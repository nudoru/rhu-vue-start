/*
Reusables
 */

// Convert status code to string used for styles on UI elements
const statusCodeToString = code => {
  if (code === 0) return 'danger';
  if (code === 1) return 'warning';
  return 'success';
}

// Convert status code to the correct icon for UI elements
const statusCodeToGlyph = code => {
  if (code === 0) return 'fa fa-times';
  if (code === 1) return 'fa fa-exclamation';
  return 'fa fa-check';
}

export {
  statusCodeToString,
  statusCodeToGlyph
}