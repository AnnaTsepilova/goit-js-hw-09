import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
 
});

player.getVideoTitle().then(function(title) {
    
});

const onPlay = function (data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
};

player.on('timeupdate', throttle(onPlay, 1000));

const savedCurrentTime = localStorage.getItem("videoplayer-current-time");
const parsedCurrentTime = JSON.parse(savedCurrentTime);

if (parsedCurrentTime) {
    player.setCurrentTime(parsedCurrentTime.seconds).then(function(seconds) {
  
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
        break;

        default:
            // some other error occurred
        break;
    }
});
}

