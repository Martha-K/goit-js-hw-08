import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(playerTime, 1000));

function playerTime(time) {
  localStorage.setItem('videoplayer-current-time', time.seconds);
}

function onPlay() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}
player.on('play', onPlay);
