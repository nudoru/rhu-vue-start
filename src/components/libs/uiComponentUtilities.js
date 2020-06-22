import scssVariables from '@/scss/_vars.scss';

export const kebabCase = (str) =>
  str
    .toLowerCase()
    .replace(/\W+/g, '-')
    .replace(/(^-|-$)/g, '');

export const createId = (prefix) => {
  return `${prefix ? prefix : 'el'}-${Math.floor(Math.random() * 100000)}`;
};

export const checkPercent = (pct) => {
  let value = Math.abs(Math.round(pct));
  return isNaN(value) ? 0 : value;
};

export const getStatusColor = (status) => scssVariables[status + 'Color'];
export const getStatusHueShiftColor = (status) =>
  scssVariables[status + 'ColorHueShift'];

export const validateStatus = (value) =>
  [
    'neutral',
    'primary',
    'secondary',
    'white',
    'info',
    'success',
    'warning',
    'danger',
  ].indexOf(value) !== -1 || value.length === 0;
export const validateSize = (value) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].indexOf(value) !== -1 || value.length === 0;

export const sizeStringPixels = { xs: 24, sm: 35, md: 50, lg: 75, xl: 100 };

export const sizeStringToPixel = (sz) => sizeStringPixels[sz];
export const sizeStringToEms = (sz) => sizeStringToPixel(sz) / 16;

export const syntaxHighlightJSON = (jsonObj) => {
  // test for string or object
  let json = JSON.stringify(jsonObj, null, 2);
  json = json
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match) {
      let cls = 'syntax-none';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'syntax-key';
        } else {
          cls = 'syntax-string';
        }
      } else if (/true|false/.test(match)) {
        cls = 'syntax-boolean';
      } else if (/null/.test(match)) {
        cls = 'syntax-null';
      } else if (/[0-9]/.test(match)) {
        cls = 'syntax-number';
      } else if (/(\[)?(\])?(\{)?(\})?/.test(match)) {
        cls = 'syntax-brace';
      }
      return '<span class="' + cls + '">' + match + '</span>';
    }
  );
};
