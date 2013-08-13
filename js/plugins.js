// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/*!
 * jquery.customSelect() - v0.4.1
 * http://adam.co/lab/jquery/customselect/
 * 2013-05-13
 *
 * Copyright 2013 Adam Coulombe
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 * @license http://www.gnu.org/licenses/gpl.html GPL2 License 
 */

//функция преобразовывающая обычный селект в такой
function reselect(select, addclass) {

    addclass = typeof(addclass) != 'undefined' ? addclass : '';

    $(select).wrap('<div class="select_wrap ' + addclass + '"/>');
    
    var sel_options = '';
    
    var selected_option = false;
    
    $(select).children('option').each(function() {
        
        if($(this).is(':selected')){
            
            selected_option = $(this).index();
            
        }
        
        sel_options = sel_options + '<div class="select_option" value="' + $(this).val() + '">' + $(this).html() + '</div>';

    });
    
    
    
    var sel_imul = '<div class="select_emul">\
                <div class="select_selected">\
                    <div class="selected_text">' + $(select).children('option').eq(selected_option).html() + '</div>\
                    <div class="select_arrow"><ins></ins></div>\
                </div>\
                <div class="select_options">' + sel_options + '</div>\
            </div>';

    $(select).before(sel_imul);

}

//reselect('#country');
//reselect('#order-status');
reselect('select');



$('.select_emul').on('click', function() {

    $('.select_emul').removeClass('act');
    $(this).addClass('act');

    if ($(this).children('.select_options').is(':visible')) {

        $('.select_options').hide();

    }
    else {

        $('.select_options').hide();
        $(this).children('.select_options').show();

    }

});

$('.select_option').on('click', function() {

    //меняем значение на выбранное
    var tektext = $(this).html();
    $(this).parent('.select_options').parent('.select_emul').children('.select_selected').children('.selected_text').html(tektext);

    //активируем текущий
    $(this).parent('.select_options').children('.select_option').removeClass('sel_ed');
    $(this).addClass('sel_ed');

    //устанавливаем значение для селекта
    var tekval = $(this).attr('value');
    tekval = typeof(tekval) != 'undefined' ? tekval : tektext;
  $(this).parent('.select_options').parent('.select_emul').parent('.select_wrap').children('select').children('option').removeAttr('selected').each(function() {
        if ($(this).val() == tekval) {
            
            $(this).attr('selected', 'select');
            
        }
    });
});

var selenter = false;

$('.select_emul').on('mouseenter', function() {
    
    selenter = true;
    
});

$('.select_emul').on('mouseleave', function() {
    
    selenter = false;
    
});
$(document).click(function() {
    
    if (!selenter) {
        
        $('.select_options').hide();
        $('.select_emul').removeClass('act');


    }
    
});
