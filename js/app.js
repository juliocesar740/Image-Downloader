import { handleInputUrl } from "./functions.js";

const input_url = document.querySelector('#url-image');

input_url.addEventListener('input', function () {handleInputUrl(this);});
