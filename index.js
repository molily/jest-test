/**
 * @param {() => void} callback
 */
export const sayHello = (callback) => {
  document.body.innerHTML = "Hello world!";
  callback();
};
