
		function default_tooltip() {
   $('.hasTooltip').each(function () { // Notice the .each() loop, discussed below
            $(this).qtip({
                content: {
                    text: $(this).next('div') // Use the "div" element next to this for the content
                },
				
            });
        });
		
		
		
		$('.hasTooltip2').each(function () { // Notice the .each() loop, discussed below
            $(this).qtip({
                content: {
                    text: $(this).next('div') // Use the "div" element next to this for the content
                },
				
				
				style: {
        classes: 'tax_tooltip', // No additional classes added to .qtip element
        widget: false, // Not a jQuery UI widget
        width: false, // No set width
        height: false, // No set height
        tip: { // Requires Tips plugin
            corner: true, // Use position.my by default
            mimic: false, // Don't mimic a particular corner
            width: 8, 
            height: 8,
            border: true, // Detect border from tooltip style
            offset: 0 // Do not apply an offset from corner
        }
			}	
				
				
				
            });
        });
		$('.product_selector').each(function () { // Notice the .each() loop, discussed below
            $(this).qtip({
                content: {
                    text: $(this).next('div') // Use the "div" element next to this for the content
                },
    position: {
        my: 'center left',  // Position my top left...
        at: 'center right', // at the bottom right of...
      //  target: $('.selector') // my target
    },
    style: {
        classes: 'qtip-new-product'
    }
            });
        });
		
	
            $('.selector2').qtip({
                content: {
                    text: "dd" // Use the "div" element next to this for the content
                },
  
   
            });
        
		$('.product_selector2').each(function () { // Notice the .each() loop, discussed below
            $(this).qtip({
                content: {
                    text: $(this).next('div') // Use the "div" element next to this for the content
                },
    position: {
        my: 'center right',  // Position my top left...
        at: 'center left', // at the bottom right of...
      //  target: $('.selector') // my target
    },
    style: {
        classes: 'qtip-new-product'
    }
            });
        });
		
$('.seller_search_selector').each(function () { // Notice the .each() loop, discussed below
            $(this).qtip({
                content: {
                    text: $(this).next('div') // Use the "div" element next to this for the content
                },
    position: {
        my: 'center right',  // Position my top left...
        at: 'center left', // at the bottom right of...
      //  target: $('.selector') // my target
    },
    style: {
        classes: 'qtip-new-product'
    }
            });
        });
       
		}
		