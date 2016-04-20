<?php 
//connect to db
 
if ("localhost" == $_SERVER[ 'SERVER_NAME'] || $_SERVER[ 'SERVER_NAME'] == "127.0.0.1")
 {
  $con = mysql_connect('localhost','root', '');
  $web_url ="http://localhost/fountaintechies2015/";
 }
else
 {
  $con = mysql_connect('localhost','apps', '7gXWOqeaf');
  $web_url ="http://fountaintechies.com";
 } 
 $db  = mysql_select_db('fountaintechies');
 //$con = mysql_connect('cio-choice-201408141000.ctseggpibot4.ap-southeast-1.rds.amazonaws.com','admin', 'H3ll0$c1o7#');
 
 //$db  = mysql_select_db('cio-choice_27march');
  
 // $web_url ="http://staging.cio-choice.sg";


?>