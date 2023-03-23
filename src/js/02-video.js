import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(playerTime, 1000));

function playerTime() {
    localStorage.setItem('videoplayer-current-time', data);
}