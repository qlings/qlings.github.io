(function($) { 
   $.ajax({
        type     : "GET",
        url      : 'http://1.qling.sinaapp.com/',
        success  : function(data) {
                    $("#counterValue").text(data);
                   },
        error    : function() { 
					
                    $("#counter").html(""); 
                   }
    });
	
})(jQuery);