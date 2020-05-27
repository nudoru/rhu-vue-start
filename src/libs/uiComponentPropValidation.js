const validateStatus = value => ['neutral','primary', 'secondary', 'white', 'info', 'success', 'warning', 'danger'].indexOf(value) !== -1;
const validateSize = value => ['xs', 'sm', 'md', 'lg', 'xl'].indexOf(value) !== -1;

export {
  validateStatus,
  validateSize
}