(function($) { 
   $.ajax({
        type     : "GET",
        url      : 'http://qlings.github.io/',
        success  : function(data) {
                    $("#counterValue").text(data);
                   },
        error    : function() { 
					
                    $("#counter").html(""); 
                   }
    });
	
})(jQuery);