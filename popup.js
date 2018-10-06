$(window).load(function () {
    $(".trigger_popup_fricc").onclick(function(){
       $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').onclick(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').onclick(function(){
        $('.hover_bkgr_fricc').hide();
    });
});
