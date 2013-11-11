/**
 * Show list items on click
 * @class Stashy.ShowMeMore
*/
(function (Stashy, $, undefined) {    

    var showmemore = (function () {        

        /**
         * ShowMeMore constructor
         * @constructor
         * param {string} sltor - CSS selector for choosing target elements
         * param {object} useropt - User defined options
         */          
        function showmemore(sltor, useropt) {  
                  
            if (!sltor) return false;
      
            this.element = sltor;
            
            this.options = {     
                linkClass : "",
                linkText : "Show more",
                howMany : 1
            };
            
            $.extend(this.options || {}, useropt);
            
            if (this.options.howMany == 0 || null || undefined) {
              this.options.howMany = 1;  
            }             
        }

        /**
         * Start ShowMeMore
         * @method
         * @public
         */           
        showmemore.prototype.on = function() {
            
            var self = this;
            
            $(self.element + ":gt(" + (self.options.howMany - 1) + ")").hide().last().after(
                
                $('<a class="showmemore-btn ' + self.options.linkClass +'" />')                    
                    .attr('href', '#')                    
                    .text(self.options.linkText)                                            
                    .on("click",function () {
                        
                        var a = this;
                        
                        $(self.element + ':not(:visible):lt(' + self.options.howMany + ')')
                            .fadeIn(function () {
                                if ($(self.element + ':not(:visible)').length == 0) $(a).remove();
                        
                            }
                        ); 
                        return false;
                    })
                );            
                return this;
        }
		
        /**
         * Remove ShowMeMore layout
         * @method
         * @public
         */           
        showmemore.prototype.off = function() {
            var self = this;
			$(self.element + ":gt(" + (self.options.howMany - 1) + ")")
				.show()
				.last()
				.next()				
				.remove();			
            return this;
        }		

        return showmemore;

    })();

    /**
     * Build a new ShowMeMore instance
     * @param {string} sltor - CSS selector for choosing target elements
     * @param {object} options - User options for the new instance
    */     
    Stashy.ShowMeMore= function(sltor, options) {
	    return new showmemore(sltor, options);
	}

})(window.Stashy || (window.Stashy = {}), jQuery);