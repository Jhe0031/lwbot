printf "Running checks for pm2... (This will ask for your password)\n"
sudo npm i pm2
printf "Done\n"
pm2 start main.js
pm2 start relay.js
pm2 start music.js
pm2 monit