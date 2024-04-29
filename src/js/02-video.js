import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

const currentTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(Number.parseFloat(currentTime));

const delayedUptdate = throttle(data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

player.on('timeupdate', eventData => {
  delayedUptdate(eventData);
});
