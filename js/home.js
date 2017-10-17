	$(document).ready(function () {
	 $('#fancybox-close').css({
                "right": "-10px",
                "top": "27px",
                "background": "url('images/close.png')",
                "background-repeat": "no-repeat"
            });
	$('.color_blocks_subcatsearch').click(function (e) {
                var get_subcatblock_id = $(this).attr('id');
				var get_title_id = $(this).attr('title');
				
				 var msearch = $("#multiplesearch").val();
				 if(msearch!=""){
                var result22 = msearch + "," + get_title_id;
				}
				else
				{
				 var result22 =  get_title_id;
				 }
                result22 = $.trim(result22);
                var result222 = result22.split(',');
                result222 = $.unique(result222);
                if (result222 != undefined) {
                    $("#multiplesearch").val(result222);
                }
                var resultm = $("#multiplesearch").val();
	
                window.location = '<?php echo WEBSITE_URL;?>/search_product_list.php?searchtxt=&subCat=' + get_subcatblock_id + '&iid=0&multiplesearch='+ resultm;
            });
	 $('.color_block').carouFredSel({
                prev: '#prev3',
                next: '#next3',
                auto: false,
			onCreate: function(){
            $(".featured-area-container").css("visibility", "visible");
        }
            });
	});
        $(window).load(function () {
            for (var iiii = 1; iiii <= 6; iiii++) {
                $('#bxslider' + iiii).bxSlider({
                    slideWidth: 250,
                    minSlides: 2,
                    maxSlides: 5,
                    pager: false,
                    responsive: true,
                    preloadImages: 'all',
					onSliderLoad: function(){
        $('#bxslider' + iiii).css("visibility", "visible");
		$('.slider_subcat').css("visibility", "visible");
		
      }

                });
            }
        });