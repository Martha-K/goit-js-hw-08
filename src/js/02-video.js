import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(playerTime, 1000));
// player.setCurrentTime(currentTime);
function playerTime(time) {
  localStorage.setItem('videoplayer-current-time', time.seconds);
}
// player.on("seeked", function() {
//     player.setCurrentTime(currentTime);
// })
function onPlay() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}
player.on('play', onPlay);
onPlay();
player.on('ready', () => {
  // const currentTime = localStorage.getItem('videoplayer-current-time');
  // player.setCurrentTime(currentTime);
  console.log('ddd');
});
