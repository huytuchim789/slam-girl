export function throttle(delay, fn) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}

export function setLocalStorage({ key, data }) {
  localStorage.setItem(key, data);
}

export function getItemLocalStorage(key) {
  let data = localStorage.getItem(key);
  return data;
}

export function checkLocationUrl(location) {
  if ('token-information' === location.pathname) {
    return true;
  }
  return false;
}
