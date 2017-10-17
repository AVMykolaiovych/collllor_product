$(document).ready(function () {
 $('#frm_subscribe').validate({
submitHandler : function(form) {
var subscribe_email = $('#subscribe_email').val();
			  $.ajax({
                        type: 'GET',
                        url: 'home_ajax.php',
                        data: {target: 'SubscribeNewsletter', subscribe_email: subscribe_email},
                        dataType: 'html',
                        success: function (data) {
                           alert(data);
						  $('#subscribe_email').val('');
                        }
                    });
    
}
});

 
 
$(".main__form-check").change(
    function(){
        if ($(this).is(':checked')) {
		$(".main__form").hide();
            $("#"+$(this).data("form")).show();
        }
    });

$('#selectSubCategory').scombobox('val', null);
$('#selectSize').scombobox('val', null);
$('#selectMaterial').scombobox('val', null);
$('#selectFinish').scombobox('val', null);
$('#selectMore').scombobox('val', null);  
$('#selectSubCategory2').scombobox('val', null);
$('#selectSize2').scombobox('val', null);
$('#selectMaterial2').scombobox('val', null);
$('#selectFinish2').scombobox('val', null);
$('#selectMore2').scombobox('val', null);
$('#selectSubCategory3').scombobox('val', null);
$('#selectSize3').scombobox('val', null);
$('#selectMaterial3').scombobox('val', null);
$('#selectFinish3').scombobox('val', null);
$('#selectMore3').scombobox('val', null);
$('#selectSubCategory4').scombobox('val', null);
$('#selectSize4').scombobox('val', null);
$('#selectMaterial4').scombobox('val', null);
$('#selectFinish4').scombobox('val', null);
$('#selectMore4').scombobox('val', null);

var cattid;
if(cattn=="printing"){cattid=1;}
else if(cattn=="packing"){cattid=15;}
else if(cattn=="signage"){cattid=11;}
else if(cattn=="large-format"){cattid=9;}
else{cattn=1;}
  
 $('#selectSubCategory').scombobox('change', function()  {
 var subcat = $('#selectSubCategory').scombobox('val');
 var cattn= $('input[name=option]:checked').val();
                $.ajax({
                    type: 'GET',
					 url: 'home_ajax.php',
					data: {target: 'ChangeCat', subcat: subcat,cattid:cattid},
                    dataType: 'json',
                    success: function (data) {
						var arr=[];
						$.each(data, function (key, value1) {
							arr.push({value: value1, text: value1});
						});
						$('#selectSize').scombobox({data: arr});
                    }
   				});
   });

$('#selectSize').scombobox('change', function()  {
 var subcat = $('#selectSubCategory').scombobox('val');
 if((subcat=="122") || (subcat=="119") || (subcat=="132") ){var targ = "ChangeSize";}
 else if((subcat=="139") || (subcat=="343258")){var targ = "ChangeSize";}
 else {var targ = "ChangePSize";}
 var size = $('#selectSize').scombobox('val');
                $.ajax({
                    type: 'GET',
					 url: 'home_ajax.php',
					data: {target: targ, size: size, subcat: subcat},
                    dataType: 'json',
                    success: function (data) {
						var arr=[];
						$.each(data, function (key, value1) {
							arr.push({value: value1, text: value1})
						});
						$('#selectMaterial').scombobox({data: arr});
                    }
   				});
   });
 
 $('#selectMaterial').scombobox('change', function()  {
 var material = $('#selectMaterial').scombobox('val');
                $.ajax({
                    type: 'GET',
					 url: 'home_ajax.php',
					data: {target: 'ChangeMaterial', material: material, subcat: subcat},
                    dataType: 'json',
                    success: function (data) {
						var arr=[];
						$.each(data, function (key, value1) {
							arr.push({value: value1, text: value1})
						});
						
						$('#selectFinish').scombobox({data: arr});
                    }
   				});
   });
  
  $('#selectFinish').scombobox('change', function()  {
 var finish = $('#selectFinish').scombobox('val');
 var subcat = $('#selectSubCategory').scombobox('val');
 
 if((subcat=="115") || (subcat=="124")){var attrib = "binding";}
 else if((subcat=="113") || (subcat=="343251") || (subcat=="343246") ||  (subcat=="343255") || (subcat=="343253") || (subcat=="138") ){var attrib = "folding";}
 else if((subcat=="111")){var attrib = "corners";}
 else if((subcat=="343245") || (subcat=="112") ){var attrib = "die cut";}
 else if((subcat=="129")){var attrib = "numbering";}
 else if((subcat=="119")){var attrib = "shape";}
 else if((subcat=="128")){var attrib = "foil";}
 else if((subcat=="132") || (subcat=="134")){var attrib = "corners";}
 else if((subcat=="343257")){var attrib = "mailing services";}
 else {var attrib = "";}
                $.ajax({
                    type: 'GET',
					 url: 'home_ajax.php',
					data: {target: 'ChangeFinish', finish: finish, subcat: subcat, attrib: attrib},
                    dataType: 'json',
                    success: function (data) {
						var arr=[];
						$.each(data, function (key, value1) {
							arr.push({value: value1, text: value1})
						});
						
						$('#selectMore').scombobox({data: arr});
                    }
   				});
   });
   
   
   
   
   
   $('#selectSubCategory2').scombobox('change', function()  {
 var subcat = $('#selectSubCategory2').scombobox('val');
                $.ajax({
                    type: 'GET',
					 url: 'home_ajax.php',
					data: {target: 'ChangeCat', subcat: subcat},
                    dataType: 'json',
                    success: function (data) {
						var arr=[];
						$.each(data, function (key, value1) {
							arr.push({value: value1, text: value1})
						});
						$('#selectSize2').scombobox({data: arr});
                    }
   });
   });

$('#selectSize2').scombobox('change', function()  {
 var subcat = $('#selectSubCategory2').scombobox('val');
 var size = $('#selectSize2').scombobox('val');
                $.ajax({
                    type: 'GET',
					 url: 'home_ajax.php',
					data: {target: 'ChangeSize', size: size, subcat: subcat},
                    dataType: 'json',
                    success: function (data) {
						var arr=[];
						$.each(data, function (key, value1) {
							arr.push({value: value1, text: value1})
						});
						
						$('#selectMaterial2').scombobox({data: arr});
                    }
   				});
   });
 
 $('#selectMaterial2').scombobox('change', function()  {
 var material = $('#selectMaterial2').scombobox('val');
                $.ajax({
                    type: 'GET',
					 url: 'home_ajax.php',
					data: {target: 'ChangeMaterial', material: material, subcat: subcat},
                    dataType: 'json',
                    success: function (data) {
						var arr=[];
						$.each(data, function (key, value1) {
							arr.push({value: value1, text: value1})
						});
						
						$('#selectFinish2').scombobox({data: arr});
                    }
   				});
   });
  
  $('#selectFinish2').scombobox('change', function()  {
 var finish = $('#selectFinish2').scombobox('val');
                $.ajax({
                    type: 'GET',
					 url: 'home_ajax.php',
					data: {target: 'ChangeFinish', finish: finish},
                    dataType: 'json',
                    success: function (data) {
						var arr=[];
						$.each(data, function (key, value1) {
							arr.push({value: value1, text: value1})
						});
						
						$('#selectMore2').scombobox({data: arr});
                    }
   				});
   });
   
      
   
   $('#selectSubCategory3').scombobox('change', function()  {
 var subcat = $('#selectSubCategory3').scombobox('val');
 //alert(subcat);
                $.ajax({
                    type: 'GET',
					 url: 'home_ajax.php',
					data: {target: 'ChangeCat', subcat: subcat},
                    dataType: 'json',
                    success: function (data) {
						var arr=[];
						$.each(data, function (key, value1) {
							arr.push({value: value1, text: value1})
						});
						$('#selectSize3').scombobox({data: arr});
                    }
   });
   });

$('#selectSize3').scombobox('change', function()  {
 var subcat = $('#selectSubCategory3').scombobox('val');
 var size = $('#selectSize3').scombobox('val');
                $.ajax({
                    type: 'GET',
					 url: 'home_ajax.php',
					data: {target: 'ChangeSize', size: size, subcat: subcat},
                    dataType: 'json',
                    success: function (data) {
						var arr=[];
						$.each(data, function (key, value1) {
							arr.push({value: value1, text: value1})
						});
						
						$('#selectMaterial3').scombobox({data: arr});
                    }
   				});
   });
 
 $('#selectMaterial3').scombobox('change', function()  {
 var material = $('#selectMaterial3').scombobox('val');
                $.ajax({
                    type: 'GET',
					 url: 'home_ajax.php',
					data: {target: 'ChangeMaterial', material: material, subcat: subcat},
                    dataType: 'json',
                    success: function (data) {
						var arr=[];
						$.each(data, function (key, value1) {
							arr.push({value: value1, text: value1})
						});
						
						$('#selectFinish3').scombobox({data: arr});
                    }
   				});
   });
  
  $('#selectFinish3').scombobox('change', function()  {
 var finish = $('#selectFinish3').scombobox('val');
                $.ajax({
                    type: 'GET',
					 url: 'home_ajax.php',
					data: {target: 'ChangeFinish', finish: finish},
                    dataType: 'json',
                    success: function (data) {
						var arr=[];
						$.each(data, function (key, value1) {
							arr.push({value: value1, text: value1})
						});
						
						$('#selectMore3').scombobox({data: arr});
                    }
   				});
   });
      
   
   $('#selectSubCategory4').scombobox('change', function()  {
 var subcat = $('#selectSubCategory4').scombobox('val');
                $.ajax({
                    type: 'GET',
					 url: 'home_ajax.php',
					data: {target: 'ChangeCat', subcat: subcat},
                    dataType: 'json',
                    success: function (data) {
						var arr=[];
						$.each(data, function (key, value1) {
							arr.push({value: value1, text: value1})
						});
						$('#selectSize4').scombobox({data: arr});
                    }
   });
   });

$('#selectSize4').scombobox('change', function()  {
 var subcat = $('#selectSubCategory4').scombobox('val');
 var size = $('#selectSize4').scombobox('val');
                $.ajax({
                    type: 'GET',
					 url: 'home_ajax.php',
					data: {target: 'ChangeSize', size: size, subcat: subcat},
                    dataType: 'json',
                    success: function (data) {
						var arr=[];
						$.each(data, function (key, value1) {
							arr.push({value: value1, text: value1})
						});
						
						$('#selectMaterial4').scombobox({data: arr});
                    }
   				});
   });
 
 $('#selectMaterial4').scombobox('change', function()  {
 var material = $('#selectMaterial4').scombobox('val');
                $.ajax({
                    type: 'GET',
					 url: 'home_ajax.php',
					data: {target: 'ChangeMaterial', material: material, subcat: subcat},
                    dataType: 'json',
                    success: function (data) {
						var arr=[];
						$.each(data, function (key, value1) {
							arr.push({value: value1, text: value1})
						});
						
						$('#selectFinish4').scombobox({data: arr});
                    }
   				});
   });
  
  $('#selectFinish4').scombobox('change', function()  {
 var finish = $('#selectFinish4').scombobox('val');
                $.ajax({
                    type: 'GET',
					 url: 'home_ajax.php',
					data: {target: 'ChangeFinish', finish: finish},
                    dataType: 'json',
                    success: function (data) {
						var arr=[];
						$.each(data, function (key, value1) {
							arr.push({value: value1, text: value1})
						});
						
						$('#selectMore4').scombobox({data: arr});
                    }
   				});
   });
	$('#find_variant').click(function () {
if( $('input[name=option]:checked').val()==""){var cur_cat = 1;}
if( $('input[name=option]:checked').val()=="printing"){
var cur_cat = 1;
	 var arr = [];
	 if($('#selectSize').scombobox('val')!=""){
	 arr.push($('#selectSize').scombobox('val'));
	 }
	 if($('#selectMaterial').scombobox('val')!=""){

	 arr.push($('#selectMaterial').scombobox('val'));
	 }
	 if($('#selectFinish').scombobox('val')!=""){
	 arr.push($('#selectFinish').scombobox('val'));
	 }
	if( $('#selectMore').scombobox('val')!=""){
	 arr.push($('#selectMore').scombobox('val'));
	 }

	var ad = arr.join(",");
	var selectSubCategory = $('#selectSubCategory').scombobox('val');
	if($('#result').is(":checked")==true){
	window.open('<?php echo WEBSITE_URL;?>/search_product_list.php?searchtxt=&subCat='+selectSubCategory+'&search_cat='+cur_cat+'&iid=<?php echo $_GET['iid'];?>&multiplesearch='+ad, '_blank');
	}
	else
	{	
		window.location = '<?php echo WEBSITE_URL;?>/search_product_list.php?searchtxt=&subCat='+selectSubCategory+'&search_cat='+cur_cat+'&iid=<?php echo $_GET['iid'];?>&multiplesearch='+ad;
		}
		}
		else if( $('input[name=option]:checked').val()=="packing"){
		var cur_cat = 15;
		var arr = [];
	 if($('#selectSize2').scombobox('val')!=""){
	 arr.push($('#selectSize2').scombobox('val'));
	 }
	 if($('#selectMaterial2').scombobox('val')!=""){
	 arr.push($('#selectMaterial2').scombobox('val'));
	 }
	 if($('#selectFinish2').scombobox('val')!=""){
	 arr.push($('#selectFinish2').scombobox('val'));
	 }
	if( $('#selectMore2').scombobox('val')!=""){
	 arr.push($('#selectMore2').scombobox('val'));
	 }

	var ad = arr.join(",");
	var selectSubCategory2 = $('#selectSubCategory2').scombobox('val');
	if($('#result').is(":checked")==true){
	window.open('<?php echo WEBSITE_URL;?>/search_product_list.php?searchtxt=&subCat='+selectSubCategory2+'&search_cat='+cur_cat+'&iid=<?php echo $_GET['iid'];?>&multiplesearch='+ad, '_blank');
	}
	else
	{	
		window.location = '<?php echo WEBSITE_URL;?>/search_product_list.php?searchtxt=&subCat='+selectSubCategory2+'&search_cat='+cur_cat+'&iid=<?php echo $_GET['iid'];?>&multiplesearch='+ad;
		}
		}
		else if( $('input[name=option]:checked').val()=="signage"){
		var cur_cat = 11;
		var arr = [];
	 if($('#selectSize3').scombobox('val')!=""){
	 arr.push($('#selectSize3').scombobox('val'));
	 }
	 if($('#selectMaterial3').scombobox('val')!=""){
	 arr.push($('#selectMaterial3').scombobox('val'));
	 }
	 if($('#selectFinish3').scombobox('val')!=""){
	 arr.push($('#selectFinish3').scombobox('val'));
	 }
	if( $('#selectMore3').scombobox('val')!=""){
	 arr.push($('#selectMore3').scombobox('val'));
	 }

	var ad = arr.join(",");
	var selectSubCategory3 = $('#selectSubCategory3').scombobox('val');
	if($('#result').is(":checked")==true){
	window.open('<?php echo WEBSITE_URL;?>/search_product_list.php?searchtxt=&subCat='+selectSubCategory3+'&search_cat='+cur_cat+'&iid=<?php echo $_GET['iid'];?>&multiplesearch='+ad, '_blank');
	}
	else
	{	
		window.location = '<?php echo WEBSITE_URL;?>/search_product_list.php?searchtxt=&subCat='+selectSubCategory3+'&search_cat='+cur_cat+'&iid=<?php echo $_GET['iid'];?>&multiplesearch='+ad;
		}
		}
		else if( $('input[name=option]:checked').val()=="large-format"){
		var cur_cat = 9;
		var arr = [];
	 if($('#selectSize4').scombobox('val')!=""){
	 arr.push($('#selectSize4').scombobox('val'));
	 }
	 if($('#selectMaterial4').scombobox('val')!=""){
	 arr.push($('#selectMaterial4').scombobox('val'));
	 }
	 if($('#selectFinish4').scombobox('val')!=""){
	 arr.push($('#selectFinish4').scombobox('val'));
	 }
	if( $('#selectMore4').scombobox('val')!=""){
	 arr.push($('#selectMore4').scombobox('val'));
	 }

	var ad = arr.join(",");
	var selectSubCategory4 = $('#selectSubCategory4').scombobox('val');
	if($('#result').is(":checked")==true){
	window.open('<?php echo WEBSITE_URL;?>/search_product_list.php?searchtxt=&subCat='+selectSubCategory4+'&search_cat='+cur_cat+'&iid=<?php echo $_GET['iid'];?>&multiplesearch='+ad, '_blank');
	}
	else
	{	
		window.location = '<?php echo WEBSITE_URL;?>/search_product_list.php?searchtxt=&subCat='+selectSubCategory4+'&search_cat='+cur_cat+'&iid=<?php echo $_GET['iid'];?>&multiplesearch='+ad;
		}
		}
		else
		{
		
		
var cur_cat = 1;
	 var arr = [];
	 if($('#selectSize').scombobox('val')!=""){
	 arr.push($('#selectSize').scombobox('val'));
	 }
	 if($('#selectMaterial').scombobox('val')!=""){
	 arr.push($('#selectMaterial').scombobox('val'));
	 }
	 if($('#selectFinish').scombobox('val')!=""){
	 arr.push($('#selectFinish').scombobox('val'));
	 }
	if( $('#selectMore').scombobox('val')!=""){
	 arr.push($('#selectMore').scombobox('val'));
	 }

	var ad = arr.join(",");
	var selectSubCategory = $('#selectSubCategory').scombobox('val');
	if($('#result').is(":checked")==true){
	window.open('<?php echo WEBSITE_URL;?>/search_product_list.php?searchtxt=&subCat='+selectSubCategory+'&search_cat='+cur_cat+'&iid=<?php echo $_GET['iid'];?>&multiplesearch='+ad, '_blank');
	}
	else
	{	
		window.location = '<?php echo WEBSITE_URL;?>/search_product_list.php?searchtxt=&subCat='+selectSubCategory+'&search_cat='+cur_cat+'&iid=<?php echo $_GET['iid'];?>&multiplesearch='+ad;
		}
		
		}
            });
			
			
	});