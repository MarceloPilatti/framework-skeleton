<?php
use Framework\Setup;

if(!file_exists(__DIR__.'/../vendor/autoload.php')){
    echo "Vendor folder not found";
    exit();
}
require_once __DIR__.'/../vendor/autoload.php';

return Setup::run();