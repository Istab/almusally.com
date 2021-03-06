var APP = (function($) {
    
    var app = {};
    
    function init() {
    	cupid();
    }

    function cupid(){
        if (window.addEventListener) {
            var keys = [],
            lover = "65,77,65,78";
            // bind the keydown event to the cupid function
            window.addEventListener("keydown", function(e){
                // push the keycode to the 'keys' array
                keys.push(e.keyCode);
                
                // and check to see if the user has entered the secret code
                if (keys.toString().indexOf(lover) >= 0) {
                    var love = setInterval(function() {
                      var r_num = Math.floor(Math.random() * 40) + 1;
                      var r_size = Math.floor(Math.random() * 65) + 10;
                      var r_left = Math.floor(Math.random() * 100) + 1;
                      var r_bg = Math.floor(Math.random() * 25) + 100;
                      var r_time = Math.floor(Math.random() * 5) + 5;

                      $('#mothers-modal .modal-body').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

                      $('#mothers-modal .modal-body').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

                      $('.heart').each(function() {
                          var top = $(this).css("top").replace(/[^-\d\.]/g, '');
                          var width = $(this).css("width").replace(/[^-\d\.]/g, '');
                          if (top <= -100 || width >= 150) {
                              $(this).detach();
                          }
                      });
                    }, 500);
                    
                    // Show the modal
                    $('#mothers-modal').modal('show')
                    
                    // and finally clean up the keys array
                    keys = [];
                };
            }, true);
        };
    }

    $(init);
    
    return app;

} (jQuery));
