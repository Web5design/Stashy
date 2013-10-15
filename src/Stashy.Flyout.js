(function (Stashy, $, undefined) {   

    var flyout = (function () {      

        function flyout(sltor, useropt) {                            
            
            var element = $(((sltor || "") + ".st-flyout") || ".st-flyout");
            
            if (element[0] == undefined || element.data("st-flyout") == true) {
                return false;
            } 
                                  
            this.element = element;
            
            this.container = this.element.find(".st-flyout-container"); 
            this.element.data("st-flyout", true);
            this.enabled = false;
            this.options = {     
                slideType : "push",
                closeOnClickOutside : true,
                enableTouch : false
            };               
            $.extend(this.options || {}, useropt);
        }

        var handleHammer = function(ev) {
            var flyout = ev.data.flyout;
    
            // only horizontal swipe
            if (Hammer.utils.isVertical(ev.gesture.direction)) {
                   return;
            }

            // disable browser scrolling
            ev.gesture.preventDefault();
            ev.stopPropagation();
            switch(ev.type) {
                case 'swipeleft':
                    flyout.close();
                    ev.gesture.stopDetect();
                    break;
    
                case 'swiperight':
                    flyout.open();
                    ev.gesture.stopDetect();
                    break;
            }
        }
                
        var isAndroidStockBrowser = function() {
            var nua = navigator.userAgent;
            return ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1) && !(nua.indexOf('Chrome') > -1));
        }
        
        flyout.prototype.layout = function() {
            if (this.element ==  null) return;
            
            $("html").addClass("js");
            
            this.element.find(".st-flyout-toggle").on("click", function(event) {
                $(this).closest(".st-flyout-container").toggleClass("active-menu");
                event.stopPropagation();
                return false;
            });
            if (this.options.slideType == "reveal") {
                this.element.find(".st-flyout-container").addClass("st-reveal");
            }
            else {
                this.element.find(".st-flyout-container").addClass("st-push");
            }
            if (Modernizr && Modernizr.csstransforms3d && !isAndroidStockBrowser()) {
                this.element.find(".st-flyout-container").addClass("active-transforms");
            }            

            if (this.options.closeOnClickOutside) {
                var self = this;
                this.element.on("click", function() {
                    self.close();                    
                });
            }

            if (this.options.enableTouch && typeof(Hammer) == 'function' && Modernizr.touch) {
                this.element.hammer({ drag_lock_to_axis: true });  
                this.element.on("swipeleft swiperight", { flyout : this },handleHammer);
		    }
            
            this.enabled = true;
            return this;
        }

        flyout.prototype.open = function() {
            if (this.element ==  null) return;
            this.container.addClass("active-menu");
        }

        flyout.prototype.close = function() {
            if (this.element ==  null) return;
            this.container.removeClass("active-menu");
        }
        
        return flyout;

    })();

    Stashy.Flyout = function(sltor, options) {
	    return new flyout(sltor, options);
	}

})(window.Stashy || (window.Stashy = {}), jQuery);