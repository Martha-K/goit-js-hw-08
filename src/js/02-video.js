import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });
const videoPlaybackTime = player.on('timeupdate', function () {
    console.log('hdgch')
});
localStorage.setItem('videoplayer-current-time', videoPlaybackTime);
// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
