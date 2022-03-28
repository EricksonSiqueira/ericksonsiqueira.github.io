import '@testing-library/jest-dom';

/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
global.matchMedia = global.matchMedia || function () {
  return {
    matches: false,
    addListener() { },
    removeListener() { },
  };
};