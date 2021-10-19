const image_preview = document.querySelector('.thumbnail-preview');
const input_url = document.querySelector('#url-image');
const download_url = document.querySelector('#url-download');

input_url.addEventListener('input', function () {

   console.log(this);

   if (this.value.length !== 0) {
      checkImage(this);
   }
   else{

      image_preview.style.backgroundImage = `none`;
      image_preview.style.border = '2px dashed #D35B2E';
      document.querySelector('.thumbnail-preview i').style.opacity = '1';
      document.querySelector('.thumbnail-preview p').style.opacity = '1';
   }

});

/**
 * Checks if the image is a thumbnail of youtube or other images
 * @param Element InputElement
 */

function checkImage(InputElement){

   if (InputElement.value.match(/(youtu.be)/g)) {

      // youtube thumbnails
      const url = InputElement.value;
      const id = url.slice(url.match(/^[htps]+\:\/\/(youtu.be){1}\//g)[0].length);
      let image_url = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

      download_url.value = image_url;

      image_preview.style.backgroundImage = `url(${image_url})`;
      image_preview.style.border = 'none';
      document.querySelector('.thumbnail-preview i').style.opacity = '0';
      document.querySelector('.thumbnail-preview p').style.opacity = '0';

   }
   else {

      // other images
      const image_url = InputElement.value;
      download_url.value = image_url;

      image_preview.style.backgroundImage = `url(${image_url})`;
      image_preview.style.border = 'none';
      document.querySelector('.thumbnail-preview i').style.opacity = '0';
      document.querySelector('.thumbnail-preview p').style.opacity = '0';

   }
}