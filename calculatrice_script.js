

$.fn.calculator = function (options) {

    var settings = $.extend({
        Is_resize: true,
        Is_draggable: true,
        langue: "en"


    }, options)



    if (options == "remove") {
        $('.calcu_container').remove();
        return this;
    }

    //show
    if (options == "show") {
        $(".calcu_container ").show();
        return this;
    }

    //hide 
    if (options == "hide") {
        $(".calcu_container ").hide();
        return this;
    }



    $(this).click(function () {


        $(this).after('' +
            '<div   class="calcu_container   ">  ' +
            '<span    id="calc_btn_fermer"> ' +
            ' &times; ' +
            ' </span> ' +
            '<div > ' +
            ' <input type="text" class="form-control mb-2 myChampsCalc" disabled> ' +
            ' <div class="calcula_div_btn"> <div class="row calcul_row justify-content-around mb-2"> ' +
            '  <button class="col-5 col-5_calcu calcu_btn btn btn-dark val" value="C">C</button> ' +
            '  <button class="col-2 calcu_btn btn btn-dark val" value="/">/</button> ' +
            '  <button class="col-2 calcu_btn btn btn-dark val totaux" value="/100">%</button> ' +
            ' </div> ' +
            ' <div class="row calcul_row justify-content-around mb-2"> ' +
            '  <button class="col-2 calcu_btn btn btn-dark val" value="7">7</button> ' +
            '  <button class="col-2 calcu_btn btn btn-dark val" value="8">8</button> ' +
            '  <button class="col-2 calcu_btn btn btn-dark val" value="9">9</button> ' +
            ' <button class="col-2 calcu_btn btn btn-dark val" value="*">*</button> ' +
            '  </div> ' +
            '  <div class="row calcul_row justify-content-around mb-2"> ' +
            ' <button class="col-2 calcu_btn btn btn-dark val" value="4">4</button> ' +
            ' <button class="col-2 calcu_btn btn btn-dark val" value="5">5</button> ' +
            '<button class="col-2 calcu_btn btn btn-dark val" value="6">6</button> ' +
            ' <button class="col-2 calcu_btn btn btn-dark val" value="-">-</button> ' +
            ' </div> ' +
            ' <div class="row calcul_row justify-content-around mb-2"> ' +
            '  <button class="col-2 calcu_btn btn btn-dark val" value="1">1</button> ' +
            '  <button class="col-2 calcu_btn btn btn-dark val" value="2">2</button> ' +
            ' <button class="col-2 calcu_btn btn btn-dark val" value="3">3</button> ' +
            '  <button class="col-2 calcu_btn btn btn-dark val" value="+">+</button> ' +
            ' </div> ' +
            ' <div class="row calcul_row justify-content-around mb-2"> ' +
            ' <button class="col-2 calcu_btn  btn btn-dark val" value="-/+">±</button> ' +
            ' <button class="col-2 calcu_btn  btn btn-dark val" value="0">0</button> ' +
            ' <button class="col-2 calcu_btn  btn btn-dark val" value=".">,</button> ' +
            ' <button class="col-2 calcu_btn  btn btn-dark totaux " value="=">=</button> ' +
            ' </div> </div> </div></div> </div>');



        css_calculat();

        if (settings.Is_resize) {
            $(".calcu_container ").resizable({
                ghost: true
            });
        }

        if (settings.Is_draggable) {
            $(".calcu_container").draggable();

            $(".calcu_container")
                .css('cursor', 'move');
        }





        // mon drag 

        return this;
    });

    function css_calculat() {

        $(".calcu_container")
            .css('display', 'none')
            .css('z-index', '1000')
            .css('backgroundColor', '#ffff')
            .css('border', ' #000 solid 2px')
            .css('border-radius', ' 5px')
            .css('box-shadow', '0px 0px 3px rgb(0, 0, 0)')
            .css('left', ' 30%')
            .css('padding', '5px')
            .css('position', ' absolute')
            .css('top', ' 25%')
            .css('top', '30%')
            .css('min-width', '180px')
            .css('min-height', '235px')
            .css('max-height', '235px')
            .css('width', '180px')
            .css('height', '235px');


        $("#calc_btn_fermer")
            .css('position', 'absolute')
            .css('font-size', '19px')
            .css('top', '-11px')
            .css('right', '-1px')
            .css('padding', '0px')
            .css('margin', '0px')
            .css('cursor', 'pointer');

        $(".calcu_btn")
            .css('height', '26px')
            .css('padding', ' 0px 7px 0px 7px')


        $(".calcula_div_btn")
            .css('padding', ' 0px 7px 0px 7px')




        /* probleme de style sur Safary*/
        var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (is_safari) {

            $(".calcul_row")
                .css('textAlign', 'center  !important')


            $(".calcu_btn")
                .css('textAlign', 'center   !important')
                .css('padding', '5px  !important')
                .css('margin', 'auto 4px !important')
                .css('height', '28px  !important')
                .css('width', '70px !important');



        }



    }






    /*******************Les operations************* */

    function insert(num) {

        $(".myChampsCalc").val($(".myChampsCalc").val() + num);

    };

    function plusMoins() {

        var text_PM = $(".myChampsCalc").val();
        var debut = true, arr_Opr = new Array("*", "+", "-", "/");

        var nmb_Ary = text_PM.split('');

        for (var i_ = nmb_Ary.length; i_ >= 0; i_--) {

            if (jQuery.inArray(nmb_Ary[i_], arr_Opr) !== -1) {

                if (nmb_Ary[i_] == "-") {
                    nmb_Ary[i_] = '+';
                    i_ = -1; debut = false;;
                } else
                    if (nmb_Ary[i_] == "+") {
                        nmb_Ary[i_] = '-';
                        i_ = -1; debut = false;
                    } else
                        if (nmb_Ary[i_] == "*" || nmb_Ary[i_] == "/") {
                            nmb_Ary.splice(i_ + 1, 0, '-');
                            i_ = -1; debut = false;
                        }

            }
        };

        if (debut == false) return nmb_Ary.join('');

        if (nmb_Ary[0] + "" === "-") {
            nmb_Ary.splice(0, 0, '+');
        }

        else if ((nmb_Ary[0] === "+") || jQuery.inArray(nmb_Ary[0], arr_Opr) == -1)
            nmb_Ary.splice(0, 0, '-');



        nmb_Ary = nmb_Ary.join('');

        return nmb_Ary;

    }

    console.log($.calculator);

    $.calculator = $.extend($.calculator, { regional: { 'en': { errorText: 'Error' } } });

    console.log($.calculator); 

    function total() {

        var msg_err = settings.errorText ? settings.errorText : ($.calculator.regional[options.langue] ? $.calculator.regional[options.langue].errorText : $.calculator.regional['en'].errorText);
 

        try {
            var exp = $(".myChampsCalc").val().trim();


            if (eval(exp) == "Infinity" || eval(exp).trim() == "NaN")
                $(".myChampsCalc").val(msg_err);
            else {

                $(".myChampsCalc").val(eval(exp));
            }


        } catch (error) {
            $(".myChampsCalc").val(msg_err);
        }

    }


    function clear() {
        $(".myChampsCalc").val('');
    }



    $("body").on("click", ".val", function () {

        var num = $(this).val();

        if ($(this).val() === '-/+') {
            $(".myChampsCalc").val(plusMoins());
        }
        else insert(num);

        if ($(this).val() === 'C') { clear(); }

    });


    $("body").on("click", ".totaux", function () {
        total();
    });

    $("body").on("click", "#calc_btn_fermer", function () {
        $(".calcu_container ").hide();
    });



    return this;
}


