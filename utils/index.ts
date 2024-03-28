export const typeBy = (obj: any) => {
  const str = Object.prototype.toString.call(obj);
  let type = '';
  switch (str) {
    case '[object Number]':
      type = 'number';
      break;
    case '[object Null]':
      type = 'null';
      break;
    case '[object Undefined]':
      type = 'undefined';
      break;
    case '[object Boolean]':
      type = 'boolean';
      break;
    case '[object Object]':
      type = 'object';
      break;
    case '[object Array]':
      type = 'array';
      break;
    case '[object AsyncFunction]':
    case '[object Function]':
      type = 'function';
      break;
    default:
      type = 'string';
  }

  return type;
};

export function jsonParse(str: any, defaultValue: any = {}) {
  if (typeBy(str) === 'object' || typeBy(str) === 'array') {
    return str;
  }
  let obj = {};
  try {
    obj = JSON.parse(str);
  } catch (e) {
    obj = defaultValue;
  }

  return obj;
}