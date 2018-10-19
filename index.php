<?php

header("Cache-control: public");
header("Expires: " . gmdate("D, d M Y H:i:s", time() + 60*60*24) . " GMT");

$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

if ($lang == "ru") {
    include "ru/index.html";
}
elseif ($lang == "de") {
    include "de/index.html";
}
else {
    include "en/index.html";
}
