
// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  } catch (e) {
    console.error("Error getting data from localStorage:", e);
    return [];
  }
}

// save data to local storage
export function setLocalStorage(key, data) {
  try {
    let existingData = getLocalStorage(key);

    // If existingData is not an array, initialize it
    if (!Array.isArray(existingData)) {
      existingData = [];
    }

    // Add new data to existing array
    existingData.push(data);

    // Save back to localStorage
    localStorage.setItem(key, JSON.stringify(existingData));
  } catch (e) {
    console.error("Error saving data to localStorage:", e);
  }
}

//getParameter function to get URL
export function getParam(param) {
  const queryString = window.location.search;
  const UrlParams = new URLSearchParams(queryString);
  const product = UrlParams.get(param);
  return product;
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  const element = qs(selector);
  if (element) {
    element.addEventListener("touchend", (event) => {
      event.preventDefault();
      callback();
    });
    element.addEventListener("click", callback);
  }
}
