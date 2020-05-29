const validateStatus = (value) =>
  [
    "neutral",
    "primary",
    "secondary",
    "white",
    "info",
    "success",
    "warning",
    "danger",
  ].indexOf(value) !== -1;
const validateSize = (value) =>
  ["xs", "sm", "md", "lg", "xl"].indexOf(value) !== -1;

const sizeStringPixels = { xs: 24, sm: 35, md: 50, lg: 75, xl: 100 };

const sizeStringToPixel = (sz) => sizeStringPixels[sz];

export { validateStatus, validateSize, sizeStringToPixel };
