<?php

require_once './functions.php';

handlePost();

?>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
   <link rel="stylesheet" href="./css/style.css">
</head>
<body>
   <form class="download-thumbnail-container" action="" method="post">
      <h1>Download Image</h1>
      <div class="field-download-thumbnail">
         <div class="paste-url-container">
            <p>Paste image address:</p>
            <div class="input-url">
               <input type="text" name="url-image" id="url-image" placeholder="Image address..." autocomplete="off">
               <input type="hidden" name="url-download" id="url-download">
            </div>
         </div>
         <div class="thumbnail-preview">
            <i class="fas fa-cloud-download-alt" id="icon-thumbnail" style="font-size:60px;color:#D35B2E;"></i>
            <p id="message-thumbnail" style="font-size:clamp(1rem,1.5rem,4vw);text-align:center;color:#D35B2E;">Paste image address to see preview</p>
         </div>
         <div class="btn-container">
            <button type="submit" class="btn-download-thumbnail">Download</button>
         </div>
      </div>
   </form>
   <script src="./js/app.js" type="module"></script>
</body>
</html>