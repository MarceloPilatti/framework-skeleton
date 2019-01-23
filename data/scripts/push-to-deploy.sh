#!/bin/bash
cd /home/${USER}/workspacePHP/nome-projeto/
composer minify:js
composer minify:css

version=`grep "^version=" config/version.ini |cut -d= -f2`
newVersion=$(($version+1))
updatedAt=`date '+%d/%m/%Y às %H:%M'`
echo "version=${newVersion}" > config/version.ini
echo
echo "updatedAt=${updatedAt}" >> config/version.ini

git add .
git commit -a -m "Versão dos js e css"
git pull origin master
git push origin master
git push heroku master
