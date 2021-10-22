const image_preview = document.querySelector('.thumbnail-preview');
const download_url = document.querySelector('#url-download');

/**
 * 
 * @param string url 
 */

export function handleInputUrl(InputElement) {

   checkUrlLenght(InputElement.value);

}

/**
 * Checks if the image is a thumbnail of youtube or other images
 * @param Element InputElement
 */

function checkImage(url) {

   // check youtube thumbnails

   if (url.match(/(youtu.be)/g)) {

      try {
         const id = url.slice(url.match(/^[htps]+\:\/\/(youtu.be){1}\//g)[0].length); // get the id from youtube's thumbnail address
         let image_url = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

         download_url.value = image_url;
         image_preview.style.backgroundImage = `url(${image_url})`;
         image_preview.style.border = 'none';
         document.querySelector('.thumbnail-preview i').style.opacity = '0';
         document.querySelector('.thumbnail-preview p').style.opacity = '0';
      }
      catch (error) {
         console.log(error);
      }
   }
   else {

      // check other images
      try {
         const image_url = url;
         download_url.value = image_url;

         image_preview.style.backgroundImage = `url(${image_url})`;
         image_preview.style.border = 'none';
         document.querySelector('.thumbnail-preview i').style.opacity = '0';
         document.querySelector('.thumbnail-preview p').style.opacity = '0';
      }
      catch (error) {
         console.log(error);
      }
   }
}

/**
 * 
 * @param {*} url 
 */

function checkUrlLenght(url) {

   if (url.length === 0) {

      document.querySelector('#icon-thumbnail').className = 'fas fa-cloud-download-alt';
      document.querySelector('#message-thumbnail').textContent = 'Paste image address to see preview';

      image_preview.style.backgroundImage = `none`;
      image_preview.style.border = '2px dashed #D35B2E';
      document.querySelector('.thumbnail-preview i').style.opacity = '1';
      document.querySelector('.thumbnail-preview p').style.opacity = '1';
   }

   else {

      const pattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;

      if (pattern.test(url)) {
         checkImage(url);
      }
      else {

         document.querySelector('#icon-thumbnail').className = 'fas fa-exclamation-circle';
         document.querySelector('#message-thumbnail').textContent = 'Invalid Url. Please try again!';

         image_preview.style.backgroundImage = `none`;
         image_preview.style.border = '2px dashed #D35B2E';
         document.querySelector('.thumbnail-preview i').style.opacity = '1';
         document.querySelector('.thumbnail-preview p').style.opacity = '1';
      }
   }
}