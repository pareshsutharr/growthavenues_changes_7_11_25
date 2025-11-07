import '@testing-library/jest-dom';

const noop = () => {};
const { TextEncoder, TextDecoder } = require('util');

if (!global.TextEncoder) {
  global.TextEncoder = TextEncoder;
}
if (!global.TextDecoder) {
  global.TextDecoder = TextDecoder;
}

if (!window.IntersectionObserver) {
  window.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}

if (!window.scrollTo) {
  window.scrollTo = noop;
}
