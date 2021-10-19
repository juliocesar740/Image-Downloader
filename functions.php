<?php

session_start();

/**
 * This function will do the downlaod of the image 
 * through the image address passed in the $_POST variable
 */

function handlePost()
{
   if ($_SERVER['REQUEST_METHOD'] === 'POST') {
      $url = filter_input(INPUT_POST, 'url-download', FILTER_SANITIZE_URL);

      if ($url) {

         $handle = curl_init($url);
         curl_setopt($handle, CURLOPT_RETURNTRANSFER, 1);
         $download = curl_exec($handle);
         curl_close($handle);
         header('Content-Type: image/jpeg');
         header('Content-Disposition: attachment; filename="img.jpeg"');
         echo $download;
         header('Location:/');
         exit;
      } 
      else {

         header('Location:/');
         exit;
      }
   }
}
