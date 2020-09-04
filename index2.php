<?php include __DIR__. "/data.php";
function FunctionName($pseudoDB){
  foreach ($pseudoDB['response'] as $val) {
    ?>
      <div class="disc">
        <div class="cover">
          <img src="<?php echo $val['poster']; ?>"  alt="404">
        </div>
        <ul class="info">
          <li class="titolo">Titolo: <?php echo $val['title']; ?></li>
          <li>Autore: <?php echo $val['author']; ?></li>
          <li>Genere: <?php echo $val['genre']; ?></li>
          <li>Anno: <?php echo $val['year']; ?></li>
        </ul>
      </div>
    <?php
  }
}

 ?>


<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="style.css">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://kit.fontawesome.com/d4368e456d.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.min.js"></script>
    <script
			  src="https://code.jquery.com/jquery-3.5.1.min.js"
			  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
			  crossorigin="anonymous"></script>

    <title>EX</title>
  </head>
  <body>
    <div class="headerBar">
      <p>Salve</p>
    </div>
    <div id="big_cont">
      <div id="cont">
        <?php FunctionName($pseudoDB);  ?>
      </div>
    </div>


    <!-- <script type="text/javascript" src="script.js"> -->
    </script>
  </body>
</html>
