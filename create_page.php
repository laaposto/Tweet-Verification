<?php
$newcontent = file_get_contents("template.html");
$tweet        = $_GET['tweet'];
$newcontent = str_replace('var tweet_to_verify = "";', 'var tweet_to_verify = "'.$tweet.'";', $newcontent);
$unique     = hash('ripemd160', $tweet);
$dirname    = 'results/' . $unique;
if (!is_dir($dirname)) {
    mkdir($dirname, 0777, true);
}
if (!file_exists('./results/' . $unique . '/index.html')) {
    $handle = fopen('./results/' . $unique . '/index.html', 'w+');
    fwrite($handle, $newcontent);
    fclose($handle);
}
echo $dirname;
?>