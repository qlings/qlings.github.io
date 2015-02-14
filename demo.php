<?php
    header('Access-Control-Allow-Origin:*');
    $file=file_get_contents("./xml/emotion.xml");
    echo $file;
    ?>