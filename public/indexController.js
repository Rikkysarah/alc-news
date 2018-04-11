
if('serviceWorker' in navigator){
  window.addEventListener('load', function(){
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
        console.log('Registration worked!', registration.scope);
      }).catch(function(err) {
        console.log('Registration failed!', err);
      });

  })
}
  navigator.serviceWorker.register('/sw.js').then(function(reg){
    // TODO: if there is no controller, this page wasn't loaded
    // via a service Worker,so they are looking at the latest version.
    // In that case, exit early
    if(!navigator.serviceWorker.controller){
      return;
    }
    // TODO: if there is an update worker already waiting, call 
    if(reg.waiting){
      indexController._updateReady();
      return;
    }
  
    // TODO: if there's an updated worker installing, track its
    // progress. If it bebecomes 'installed', call 
    // indexController._updateReady()
    if(reg.installing){
      indexController._trackInstalling(reg.installing);
      return;
    }

    // TODO: otherwise,listen for new installing workers arriving.
    // If one arrives,track its progress.
    // It becomes "installed", call
    // indexController._updateReady()
    reg.addEventListener('updatefound', function(){
      indexController._trackInstalling(reg.installing);
    })
  })

 
// indexController.prototype._trackInstalling = function(worker){
  var indexController = this;

  worker.addEventListener('statechange', function(worker){
    if (worker.state == 'installed'){
      indexController._updateReady();
    }
  })
// }