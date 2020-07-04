document.addEventListener('DOMContentLoaded', function(){
    if(Notification.permission !=="granted")
      Notification.requestPermission();
  });

  function notification()
  {
    if(!Notification){
      alert('Desktop Notifications are not supported in your browser. Try Google Chrome.');
      return;
    }
    
    if(Notification.permission !== "granted")
      Notification.requestPermission();

    else{
      var notification = new Notification('Stay Aware !', {
        icon: '',
        body:'STOP TOUCHING YOUR FACE !!'
      });
    }


    
  }