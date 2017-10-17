// http://jsfiddle.net/mekwall/sgxKJ/
$.widget("ui.autocomplete", $.ui.autocomplete, {
    options: $.extend({}, this.options, {
        multiselect: false
    }),
    _create: function () {
        this._super();
        var self = this,
            o = self.options;
        if (o.multiselect) {
            console.log('multiselect true');
            self.selectedItems = {};
            self.multiselect = $("<div></div>")
                .addClass("ui-autocomplete-multiselect ui-state-default ui-widget")
                .css("width", self.element.width())
                .insertBefore(self.element)
                .append(self.element)
                .bind("click.autocomplete", function () {
                    self.element.focus();
                });
            var fontSize = parseInt(self.element.css("fontSize"), 10);
            function autoSize(e) {
                // Hackish autosizing
                var $this = $(this);
                $this.width(1).width(this.scrollWidth + fontSize - 1);
            };
            var kc = $.ui.keyCode;
            self.element.bind({
                "keydown.autocomplete": function (e) {
                    if ((this.value === "") && (e.keyCode == kc.BACKSPACE)) {
                        var prev = self.element.prev();
                        delete self.selectedItems[prev.text()];
                        prev.remove();
                    }
                },
                // TODO: Implement outline of container
                "focus.autocomplete blur.autocomplete": function () {
                    self.multiselect.toggleClass("ui-state-active");
                },
                "keypress.autocomplete change.autocomplete focus.autocomplete blur.autocomplete": autoSize
            }).trigger("change");

            // TODO: There's a better way?
            o.select = o.select || function (e, ui) {
                    var dupval = [];
                    $(".ui-autocomplete-multiselect-item").each(function (index, element) {
                        var replaced3 = $(this).html().replace('<span class="ui-icon ui-icon-close"></span>', '');
                        dupval.push(replaced3);
                    });
                    var trimlabel = $.trim(ui.item.label);
                    var arraysplit = trimlabel.split(' ');
                    $.each(arraysplit, function (i, val) {
                        if ($.inArray(val, dupval) === -1) {
                            $("<div></div>").addClass("ui-autocomplete-multiselect-item").text(val).append($("<span></span>").addClass("ui-icon ui-icon-close").click(function () {
                                    var item = $(this).parent();
                                    var ss = item.text();
                                    delete self.selectedItems[item.text()];
                                    item.remove();
                                    var hs = $("#multiplesearch").val();
									
                                    var result = "," + hs + ",";
                                    result = result.replace("," + ss + ",", ",");
                                    result = result.substr(1, result.length);
                                    result = result.substr(0, result.length - 1);
                                    result = $.trim(result);

                                    $("#multiplesearch").val(result);
                                }))
                                .insertBefore(self.element);
                            self.selectedItems[val] = ui.item;
                        }
                    });

                    self._value("");
                    return false;
                }
            var searchvalues = $("#search_values").val();
            if ((searchvalues == "") || (searchvalues === undefined)) {
            } else {
                var arrS = searchvalues.split(',');
                var search_htmlss = "";
                $.each(arrS, function (key, value) {
                    search_htmlss += ($("<div></div>").addClass("ui-autocomplete-multiselect-item").text(value).append($("<span></span>").addClass("ui-icon ui-icon-close").click(function () {
                        var item = $(this).parent();
                        var ss = item.text();
                        delete self.selectedItems[item.text()];
                        item.remove();
                        var hs = $("#multiplesearch").val();
                        var result = "," + hs + ",";
                        result = result.replace("," + ss + ",", ",");
                        result = result.substr(1, result.length);
                        result = result.substr(0, result.length - 1);
                        result = $.trim(result);
                        /* var newArr = $.unique(result.sort()).sort();
                         var results = "";
                         for (var i = 0; i < newArr.length; i++) {
                         results += newArr[i] + ",";
                         }
                         result = results.slice(0, -1);*/
                        $("#multiplesearch").val(result);
                    }))).insertBefore($("#searchtxt"));
                });
            }

            /* var mhtml5 =[];
             $( ".ui-autocomplete-multiselect-item" ).each(function( index, element ) {
             var replaced5 = $(this).html().replace('<span class="ui-icon ui-icon-close"></span>','');
             mhtml5.push(replaced5);
             });

             var arraysplit5 =[];
             arraysplit5 = searchvalues.split(',');
             alert(arraysplit5);
             if ($.inArray(arraysplit5, mhtml5) !== -1){
             alert("ll");
             }*/
            /*self.options.open = function(e, ui) {
             var pos = self.multiselect.position();
             pos.top += self.multiselect.height();
             self.menu.element.position(pos);
             }*/
        }

        return this;
    }
});