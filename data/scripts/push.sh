#!/bin/bash

echo "Digite a mensagem do commit: "
read msg

cd /home/${USER}/workspacePHP/nome-projeto/
composer minify:js
composer minify:css
git add .
git commit -a -m "${msg}"
git pull origin master
git push origin master
git push heroku master
