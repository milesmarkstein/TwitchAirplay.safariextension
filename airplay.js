
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  console.log('ready');
  if (window.WebKitPlaybackTargetAvailabilityEvent) {
    // TODO: insetad of settimeout use an event listnere for when the video dom is loaded.
    setTimeout(function(){
      var el = document.querySelector('.js-chromecast-button');
      document.querySelector('.js-chromecast-button .js-tip').dataset.tip = 'Airplay';
      var video = document.querySelector('.player-video video');
      video.addEventListener('webkitplaybacktargetavailabilitychanged', function(event) {
        switch (event.availability) {
          case "available":
            el.classList.remove('player-button--chromecast');
          break;
          default:
            el.classList.add('player-button--chromecast');
        }
        el.addEventListener('click', function() {
          video.webkitShowPlaybackTargetPicker();
        });
      });
    }, 5000);
  }
});
