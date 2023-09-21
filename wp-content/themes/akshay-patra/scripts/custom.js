var nonceValue = "S0c00714lB34t007";
$(document).ready(function($) {

    new WOW().init();
    //popup video
    jQuery('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    if ($('.fundraise_testimonia_slider').length > 0) {
        $('.fundraise_testimonia_slider').slick({
            dots: true,
            infinite: true,
            arrows: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }
    //banner slider
    $(".bannerSlider").slick({
        dots: false,
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slideswToScroll: 1,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    if ($('.latest_updates_slider').length > 0) {
        $('.latest_updates_slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            variableWidth: false,
            cssEase: 'ease-out',
            autoplaySpeed: 5000,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,

                    }
                }
            ]
        });
    }
    if ($('.stories_section').length > 0) {
        $('.stories_section').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            variableWidth: false,
            cssEase: 'ease-out',
            autoplaySpeed: 5000,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }

    if ($('.stories_section12').length > 0) {
        $('.stories_section12').slick({
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            prevArrow: '<button class="slide-arrow prev-arrow"></button>',
            nextArrow: '<button class="slide-arrow next-arrow"></button>',
            autoplay: false,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1.1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
    if (jQuery('.center-slider').length > 0) {
        $('.center-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,
            arrows: false,
            dots: false,
            focusOnSelect: false,
            centerMode: true,
            speed: 300,
            centerPadding: '60px',
            infinite: true,
            autoplaySpeed: 5000,
            autoplay: true,
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        dots: false,
                        arrows: true,
                    }
                }
            ]
        });
    }
    if (jQuery("input[name='d_amount']").length > 0) {
        var amount = jQuery("input[name='d_amount']:checked").val();
        jQuery("input[name='amount']").val(amount);

    }



    if (jQuery(".pub_slider").length > 0) {
        $('.pub_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            fade: true,
            dots: true,
        });
    }
    if (jQuery(".carousel_testimonial_wrap").length > 0) {
        $('.carousel_testimonial_wrap').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            fade: true,
            dots: true,
            adaptiveHeight: true,
        });
    }
    if (jQuery(".banner_slider").length > 0) {
        $('.banner_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            fade: true,
            dots: true,
        });
    }
    if ($("input.mobile_number").length > 0) {
        $(".mobile_number").each(function(index) {
            var input = $(this)[0];
            window.intlTelInput(input, {
                separateDialCode: true,
                initialCountry: "In",
                hiddenInput: "full_number",
                geoIpLookup: function(callback) {
                    $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
                        var countryCode = (resp && resp.country) ? resp.country : "us";
                        callback(countryCode);
                    });
                }
            })
        });
        if (jQuery("#alt_tel").length > 0) {
            var input_alt = document.querySelector("#alt_tel");
            window.intlTelInput(input_alt, {
                separateDialCode: true,
                initialCountry: "In",
                hiddenInput: "alt_full_number",
                geoIpLookup: function(callback) {
                    $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
                        var countryCode = (resp && resp.country) ? resp.country : "us";
                        callback(countryCode);
                    });
                }
            });
        }

    }
});
jQuery(document).ready(function() {

    if (jQuery("input[name='billing_country']").length > 0) {
        jQuery("input[name='billing_country']").val("");

    }

    if (jQuery("input[name='billing_state']").length > 0) {
        jQuery("input[name='billing_state']").val("");

    }
    if (jQuery("input[name='billing_zip']").length > 0) {
        jQuery("input[name='billing_zip']").val("");

    }

    if (jQuery("form").length > 0) {
        jQuery("form").each(function() {
            var page_url = window.location.href;
            jQuery(this).append("<input type='hidden' name='dp_page_url' value='" + page_url + "'>");
        });
    }
    jQuery('.single_photo_gallery').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#scroll').fadeIn();
    } else {
        $('#scroll').fadeOut();
    }
});
$('#scroll').click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});
$(document).on("change", "input[name='offline_op']", function() {
    var tab = $(this).data("tabn");
    var title = $(this).val();
    $("#of_heading").text(title);
    $(".offline_tab.active_t").removeClass("active_t");
    $("#" + tab).addClass("active_t");
});
$('#primary-menu a,.scroll').click(function(e) {
    $('html,body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 90
    }, 500);
    $('input[name="Name"]').focus();
    e.preventDefault();
});
$(window).on("load", function() {
    if ($(window).width() > 767.98) {
        var height = 0;
        $(".Consultative-equal-height").each(function() {
            if (height < $(this).outerHeight()) {
                height = $(this).outerHeight();
            }
        });
        $(".Consultative-equal-height").css("height", height);
    }
});
$(window).on("load", function() {
    if ($(window).width() > 767.98) {
        var height = 0;
        $(".contact-us-equal-height").each(function() {
            if (height < $(this).outerHeight()) {
                height = $(this).outerHeight();
            }
        });
        $(".contact-us-equal-height").css("height", height);
    }
});
$(window).on("load", function() {
    equaliseIt();
    if ($(window).width() > 767.98) {
        var height = 0;
        $(".box-border").each(function() {
            if (height < $(this).outerHeight()) {
                height = $(this).outerHeight();
            }
        });
        $(".box-border").css("height", height);
    }


    // card

    // Find all the card_wrapper elements within the slick slider
    var cardWrappers = $('.stories_section12 .card_wrapper');

    // Initialize a variable to store the maximum height
    var maxHeight = 0;

    // Loop through each card_wrapper
    cardWrappers.each(function() {
        // Find the h2.title element within the current card_wrapper
        var title = $(this).find('h2');

        // Get the height of the h2.title element
        var titleHeight = title.outerHeight();

        // Update the maxHeight if the current height is greater
        if (titleHeight > maxHeight) {
            maxHeight = titleHeight;
        }
    });

    // Set the maximum height for all the h2.title elements within the card_wrappers
    cardWrappers.find('h2').css('height', maxHeight + 'px');

    // card end
});
$(window).resize(function() {
    equaliseIt();
});

function equaliseIt() {


    $('.impact_grid_wrapper').each(function() {
        var highestBox = 0;
        $('.child_heading', this).each(function() {
            if ($(this).height() > highestBox)
                highestBox = $(this).height();
        });
        $('.child_heading', this).height(highestBox);
    });
    if ($('.impact_summery').length > 0) {
        $('.impact_grid_wrapper').each(function() {
            var highestBox = 0;
            $('.impact_summery', this).each(function() {
                if ($(this).height() > highestBox)
                    highestBox = $(this).height();
            });
            $('.impact_summery', this).height(highestBox);
        });
    }
    var maxHeight = 0;
    if ($('div.profile_box .feat_desc').length > 0) {
        $("div.profile_box .feat_desc").each(function() {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        });
        $("div.profile_box .feat_desc").height(maxHeight);
    }
    if ($('div.trustees_wrap .trustees_designation').length > 0) {
        $("div.trustees_wrap .trustees_designation").each(function() {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        });
        $("div.trustees_wrap .trustees_designation").height(maxHeight);
    }
    if ($('div.how_wrap h5').length > 0) {
        $("div.how_wrap h5").each(function() {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        });
        $("div.how_wrap h5").height(maxHeight);
    }
}
/**Filter JS***/
jQuery(function() {
    jQuery('div#datetimepicker').datetimepicker({
        inline: true,
        viewMode: 'years',
        format: 'DD/MM/YYYY'
    }).on('dp.change', function(ev) {
        get_selectedDate(); //your function call
    });
    jQuery('.finacial_report div#datetimepicker').datetimepicker({
        inline: true,
        viewMode: 'years',
        format: 'YYYY'
    }).on('dp.change', function(ev) {
        alert("Hello");
        get_selectedDate(); //your function call
    });
    jQuery('div#datetimepicker_cohort').datetimepicker({
        inline: true,
        viewMode: 'years',
        format: 'YYYY'
    }).on('dp.change', function(ev) {
        get_selectedDate_cohort(); //your function call
    });
    jQuery('div#datetimepicker_mentor').datetimepicker({
        inline: true,
        viewMode: 'years',
        format: 'YYYY'
    }).on('dp.change', function(ev) {
        get_selectedDate_mentor(); //your function call
    })
});

function get_selectedDate_mentor() {
    // console.log( jQuery('div#datetimepicker').data('date'));
    var pub_date = jQuery('div#datetimepicker_mentor').data('date');
    jQuery("#pub_date_mentor").val(pub_date);
}

function get_selectedDate_cohort() {
    // console.log( jQuery('div#datetimepicker').data('date'));
    var pub_date = jQuery('div#datetimepicker_cohort').data('date');
    jQuery("#pub_date_cohort").val(pub_date);
}

function get_selectedDate() {
    // console.log( jQuery('div#datetimepicker').data('date'));
    var pub_date = jQuery('div#datetimepicker').data('date');
    jQuery("#pub_date").val(pub_date);
}
if ($(".gform_wrapper form").length > 0) {
    gform.addFilter('gform_datepicker_options_pre_init', function(optionsObj, formId, fieldId) {
        if (formId == 2) {
            optionsObj.minDate = 0;
        }
        return optionsObj;
    });
}
$(document).ready(function() {
    /*All header links Click events*/
    $('.careers .accordion>.card>.card-header').click(function() {
        $('.careers .accordion>.card>.card-header').removeClass("heading_color_gray");
        $(this).toggleClass("heading_color_gray");
    });
});
var init = {
    infinite: false,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-chevron-right"></i></button>'
};
$(function() {
    // var win = $(window);
    // var slider = $(".carousel_wrap");
    // win.on("load resize", function () {
    //   if (win.width() < 1023) {
    //     slider.not(".slick-initialized").slick(init);
    //   } else if (slider.hasClass("slick-initialized")) {
    //     slider.slick("unslick");
    //   }
    // });
});
$('body').on('click', 'div.know_more_section a.read-button', function() {
    $('.know_more_desc').slideUp();
    var current = $(this).closest('.know_more_section').find('.know_more_desc');
    if (current.is(':visible')) {
        current.slideUp();
    } else {
        current.slideDown();
    }
});
// /*Sticky Header JS*/
// window.onscroll = function() {myFunction()};
// var header = document.getElementById("masthead");
// var sticky = 0;
// if(header != null) {
//     sticky = header.offsetTop;
// }
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("header_sticky");
//   } else {
//     header.classList.remove("header_sticky");
//   }
// }
/*Sticky Header JS*/
/*Mobile Menu*/
jQuery(document).on("click", "body.mega-menu-menu-1-mobile-open ul#mega-menu-menu-1 > li.mega-menu-item", function(e) {
    // e.preventDefault();
    var current = $(this).closest('ul#mega-menu-menu-1').find('li.mega-menu-item');
    current.removeClass("mega-toggle-on");
    current.removeClass("menu_open");
    $(this).addClass("menu_open");
    $(".menu_open").addClass("mega-toggle-on");
});

function isInView(elem) {
    return ($(elem).offset().top + ($(elem).height())) - $(window).scrollTop() < $(elem).height();
}
$(window).scroll(function() {
    if ($('.testimonial_section').length > 0) {
        if (isInView($('.testimonial_section'))) {
            // console.log('visible');
            if (jQuery('.filter_div').hasClass('filter_sticky')) {
                jQuery('.filter_div').removeClass('filter_sticky');
            }
        } else {
            // console.log('hidden');
            if (!jQuery('.filter_div').hasClass('filter_sticky')) {
                jQuery('.filter_div').addClass('filter_sticky');
            }
        }
    }
});
//Dropdown filter
if (jQuery('.select-wrapper').length > 0) {
    document.querySelector('.select-wrapper').addEventListener('click', function() {
        this.querySelector('.select').classList.toggle('open');
    });
}
if (jQuery('.custom-option').length > 0) {
    for (const option of document.querySelectorAll(".custom-option")) {
        option.addEventListener('click', function() {
            if (!this.classList.contains('selected')) {
                this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
                this.classList.add('selected');
                this.closest('.select').querySelector('.select__trigger span').textContent = this.textContent;
            }
        })
    }
}
//donation form script
var currentTab = 0; // Current tab is set to be the first tab (0)
if ($(".donation_form").length > 0) {
    showTab(currentTab); // Display the current tab
}
jQuery("input[name='fav_language']").on("change", function() {
    var g_way = jQuery("input[name='fav_language']:checked").data("gateway");
    if (jQuery(this).val() == "Foreign") {
        jQuery("#pan_number").parent().toggle();
        jQuery("input[name='district']").parent().toggle();
        jQuery("input[name='pass']").parent().next("p").toggle();
        jQuery("#inputState").attr("placeholder", "Province*");
        jQuery("#country option[value='']").prop("selected", true);
        jQuery("input[name='zip_code']").val('');
        jQuery("input[name='zip_code']").attr("placeholder", "Zip code");
        jQuery("input[name='state']").val('');
        jQuery("input[name='district']").val('');
    } else {
        jQuery("#pan_number").parent().toggle();
        jQuery("#inputState").attr("placeholder", "State*");
        jQuery("input[name='zip_code']").attr("placeholder", "Pincode");
        jQuery("#country option[value='India']").prop("selected", true);
    }
    jQuery("input[name='payment_gateway']").val(g_way);
})

function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n == 0) {
        if (jQuery("#prevBtn").length > 0) {
            document.getElementById("prevBtn").style.display = "none";
        }

    } else {
        if (jQuery("#prevBtn").length > 0) {
            document.getElementById("prevBtn").style.display = "inline";
        }
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    // debugger;
    if (n == 1 && !validateForm() && currentTab != 3) {

        var target = x[0];
        target = $(target);
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
        return false;
    }
    // Hide the current tab:
    x[currentTab].style.display = "none";
    cTab = currentTab;
    if (jQuery("#offline_transfer").length == 0) {
        $("#nextBtn").hide();
    }
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
        //...the form gets submitted:
        document.getElementById("regForm").submit();
        return true;
    }
    if ($("input[name='d_amount']").is(":checked") && $("input[name='amount']").val() == '') {
        var amount = $("input[name='d_amount']:checked").val();
        $("input[name='amount']").val(amount);
    }
    if ($("input[name='other_amount']").val() != "" && $("input[name='amount']").val() == '') {
        var amount = $("input[name='other_amount']").val();
        $("input[name='amount']").val(amount);
    }
    if (cTab == 0 && jQuery('input[name="payment_gateway"]').length > 0) {
        var formData = new FormData();
        // var nonceValue  =  "S0c00714lB34t007";
        let encryption = new Encryption();
        var amount = $("input[name='amount']").val();
        if (amount == "") {
            return false;
        }
        var merchant_id = $("input[name='merchant_id']").val();
        formData.append("merchant_id", encryption.encrypt(merchant_id, nonceValue));
        var language = $("input[name='language']").val();
        formData.append("language", encryption.encrypt(language, nonceValue));
        var amount = $("input[name='amount']").val();
        formData.append("amount", encryption.encrypt(amount, nonceValue));
        var currency = $("input[name='currency']").val();
        formData.append("currency", encryption.encrypt(currency, nonceValue));
        var dp_page = jQuery("input[name='dp_page_url']").val();
        formData.append("dp_page", encryption.encrypt(dp_page, nonceValue));
        var redirect_url = $("input[name='redirect_url']").val();
        formData.append("redirect_url", encryption.encrypt(redirect_url, nonceValue));
        var cancel_url = $("input[name='cancel_url']").val();
        formData.append("cancel_url", encryption.encrypt(cancel_url, nonceValue));
        var billing_name = $("input[name='billing_name']").val();
        formData.append("billing_name", encryption.encrypt(billing_name, nonceValue));
        var billing_address = $("input[name='billing_address']").val();
        formData.append("billing_address", encryption.encrypt(billing_address, nonceValue));
        var inputState = $("#inputState").val();
        formData.append("billing_state", encryption.encrypt(inputState, nonceValue));
        var billing_zip = $("#billing_zip").val();
        formData.append("billing_zip", encryption.encrypt(billing_zip, nonceValue));
        var inputDistrict = $("#inputDistrict").val();
        formData.append("billing_city", encryption.encrypt(inputDistrict, nonceValue));
        var country = $("#country").val();
        formData.append("billing_country", encryption.encrypt(country, nonceValue));
        var billing_tel = $("input[name='billing_tel']").val();
        formData.append("billing_tel", encryption.encrypt(billing_tel, nonceValue));
        var billing_email = $("input[name='billing_email']").val();
        formData.append("billing_email", encryption.encrypt(billing_email, nonceValue));
        var integration_type = $("input[name='integration_type']").val();
        formData.append("integration_type", encryption.encrypt(integration_type, nonceValue));
        var payment_option = $("input[name='payment_option']").val();
        formData.append("payment_option", encryption.encrypt(payment_option, nonceValue));
        var payment_gateway = $("input[name='payment_gateway']").val();
        formData.append("payment_gateway", encryption.encrypt(payment_gateway, nonceValue));
        var hard_copy = $("input[name='hard_copy']").val();
        formData.append("hard_copy", encryption.encrypt(hard_copy, nonceValue));
        var pan_number = $("input[name='pan']").val();
        if (pan_number == undefined) {
            pan_number = $("input[name='pass']").val();
        }
        formData.append("pan", encryption.encrypt(pan_number, nonceValue));
        var payment_type = $("input[name='payment_type']").val();

        if ($("select[name='preference']").length > 0) {
            var preference_state = $("select[name='preference']").val();
            formData.append("pref_state", encryption.encrypt(preference_state, nonceValue));

        }

        formData.append("payment_type", encryption.encrypt(payment_type, nonceValue));
        var email_update = $("input[name='email_update']").val();
        formData.append("email_update", encryption.encrypt(email_update, nonceValue));
        var birthdate_date = $("input[name='birthdate_date']").val();
        formData.append("birthdate_date", encryption.encrypt(birthdate_date, nonceValue));
        var anonymous = $("input[name='anonymous']").val();
        formData.append("anonymous", encryption.encrypt(anonymous, nonceValue));
        var fav_language = $("input[name='fav_language']:checked").val();
        formData.append("citizen", encryption.encrypt(fav_language, nonceValue));
        /*Address field data*/
        var address = $("input[name='address']").val();
        formData.append("address", encryption.encrypt(address, nonceValue));
        var zip_code = $("input[name='zip_code']").val();
        formData.append("zip_code", encryption.encrypt(zip_code, nonceValue));
        var inputDistrict = $(".inputDistrict").val();
        formData.append("billing_city", encryption.encrypt(inputDistrict, nonceValue));
        var country = $("#country").val();
        formData.append("billing_country", encryption.encrypt(country, nonceValue));
        var is_whatsapp = $("input[name='is_whatsapp']:checked").val();
        if (is_whatsapp == undefined) {
            is_whatsapp = "0";
        }
        formData.append("is_whatsapp_number", encryption.encrypt(is_whatsapp, nonceValue));
        var alt_tel = $("input[name='alt_tel']").val();
        formData.append("alternative_phone", encryption.encrypt(alt_tel, nonceValue));
        /*Address field data*/
        if ($("input[name='school_repopen']").length > 0) {
            var school = $("input[name='school_repopen']").val();
            formData.append("school_reopen", encryption.encrypt(school, nonceValue));
        }
        if ($("input[name='campaign_id']").length > 0) {
            var campaign_id = $("input[name='campaign_id']").val();
            formData.append("campaign_id", encryption.encrypt(campaign_id, nonceValue));
        }
        if ($("input[name='campaign_name']").length > 0) {
            var campaign_name = $("input[name='campaign_name']").val();
            formData.append("campaign_name", encryption.encrypt(campaign_name, nonceValue));
        }
        if ($("#occassion").length > 0) {
            if (($("#occassion").val() == 'other-occassion' && $('input[name="occassion_name"]').val() != '')) {
                var occassion_name = $("input[name='occassion_name']").val();
                formData.append("occassion_name", encryption.encrypt(occassion_name, nonceValue));
                var occassion = $("#occassion").val();
                formData.append("occassion_other", encryption.encrypt(occassion, nonceValue));
            }
            if ($("#occassion").val() != 'other-occassion') {
                var occassion = $("#occassion").val();
                formData.append("occassion_name", encryption.encrypt(occassion, nonceValue));
            }
            var occassion_date = $("input[name='occassion_date']").val();
            formData.append("occassion_date", encryption.encrypt(occassion_date, nonceValue));
            var relationship = $("input[name='relationship']").val();
            formData.append("relationship", encryption.encrypt(relationship, nonceValue));
            var honor_name = $("input[name='honor_name']").val();
            formData.append("honor_name", encryption.encrypt(honor_name, nonceValue));
            var honor_email_id = $("input[name='honor_email_id']").val();
            formData.append("honor_email", encryption.encrypt(honor_email_id, nonceValue));
            var honor_mobile_number = $("input[name='honor_mobile_number']").val();
            formData.append("honor_mobile", encryption.encrypt(honor_mobile_number, nonceValue));
        }
        formData.append("action", "donation_data");
        jQuery.ajax({
            method: 'post',
            processData: false,
            contentType: false,
            cache: false,
            enctype: 'multipart/form-data',
            url: siteurls.ajax_url,
            data: formData,
            success: function(response) {
                jQuery(".rerorr_wrap").remove();
                var res_data = JSON.parse(response);
                if (res_data.rstatus == 1) {
                    response = res_data.form;
                } else {
                    jQuery(".donation_amount_wrap").prepend(res_data.form);
                    nextPrev(-1);
                    jQuery("#nextBtn").show();
                    return false;
                }
                if ($("input[name='payment_gateway']").val() == 'PayU') {
                    $("#payment_screen").html(response);
                    var payuForm = document.forms.payuForm;
                    payuForm.submit();
                }
                if ($("input[name='payment_gateway']").val() == 'razor_pay') {
                    razorpay_options = JSON.parse(response);
                    jQuery("#post_id").val(razorpay_options.post_id);
                    razorpay_mode(razorpay_options);
                }
                if ($("input[name='payment_gateway']").val() == 'ccavenue') {
                    $("#payment_screen").html(response);
                }
            }
        });
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}
$(function() {
    $("input[id='mobile_india']").on('input', function(e) {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });
    $("input[id='alt_tel']").on('input', function(e) {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });
});

$('input[name="relationship"],input[name="honor_name"]').bind('keydown', function(e) {
    var key = e.which;
    if (e.shiftKey || e.ctrlKey || e.altKey) {
        e.preventDefault();
    } else {
        var key = e.keyCode;
        if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
            e.preventDefault();
        }
    }
});

function validateForm() {

    // This function deals with validation of the form fields
    var x, y, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // for firstname and lastname field valid
    var numbers = /^[-+]?[0-9]+$/;
    // for email valid
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var a_flag = false;
    var f_lang = jQuery("input[name='fav_language']:checked").val();
    for (i = 0; i < y.length; i++) {
        if (y[i].value.trim() == "" && y[i].type != "hidden") {
            // alert("no valid");
            // add an "invalid" class to the field:
            if (f_lang == 'Foreign' && y[i].name == 'pass') {
                continue;
            }
            if (f_lang == 'Foreign' && y[i].name == 'district') {
                continue;
            }
            if (y[i].name == 'alt_tel') {

                continue;
            }
            if (y[i].name == "other_amount" && a_flag) {
                continue;
            } else if (y[i].name == "occassion_name") {
                if (($("#occassion").val() == 'other-occassion' && $('input[name="occassion_name"]').val() != '') || ($("#occassion").val() != 'other-occassion')) {
                    continue;
                } else {
                    y[i].className += " invalid";
                    valid = false;
                }
            } else {
                y[i].className += " invalid";
                valid = false;
            }
        } else if (y[i].value.trim() !== "") {
            // alert("all ok..valid true");
            y[i].removeClass = "invalid";
            console.log(y[i].parentNode.parentNode.className);
            if (y[i].name == "d_amount" && y[i].checked) {
                a_flag = true;
            }
            if (y[i].name == 'other_amount' && !a_flag && y[i].value < 100) {
                y[i].className += " invalid";
                valid = false;
                const otAmErrors = document.querySelectorAll(".ot_am_error");
                otAmErrors.forEach((error) => error.remove());
                var element = document.querySelector(".single_amount_wrapper");
                var span = document.createElement("span");
                span.className = "ot_am_error text-danger";
                span.textContent = "Minimum amount of donation is rupees 100";
                element.parentNode.insertBefore(span, element.nextSibling);
            }
            //for name field
            if (y[i].parentNode.parentNode.className == ".fname") {
                //console.log("text");
                if (y[i].value.match(numbers)) {
                    // alert("letter only format");
                    y[i].className += " deep_invalid";
                    valid = false;
                }
            }
            if (y[i].type == "email") {
                if (y[i].value.match(mailformat)) {
                    console.log("mailformat");
                    var reg_email = y[i].value;
                    console.log(reg_email);
                    valid = true;
                } else {
                    console.log("not mailformat")
                    y[i].className += " invalid";
                    valid = false;
                }
            }
            if (y[i].name == 'billing_tel' || y[i].name == 'honor_mobile_number' || y[i].name == 'alt_tel') {
                var mobile = y[i].value;
                if (phonenumber(mobile)) {
                    valid = true;
                } else {
                    y[i].className += " invalid";
                    valid = false;
                }
            }
            if (y[i].name == 'billing_name' || y[i].name == 'fname') {
                var name = y[i].value;
                var regex = /^[A-Za-z\s]*$/;
                if (!regex.test(name)) {
                    y[i].className += " invalid";
                    valid = false;
                }
            }
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}
//donation form script ends here
// gravity form past dates restrict
$("#ag_donation_form").validate({
    rules: {
        billing_name: {
            required: true,
            normalizer: function(value) {
                // Update the value of the element
                this.value = $.trim(value);
                // Use the trimmed value for validation
                return this.value;
            }
        },
        custom_amount: {
            required: jQuery("#radiobtn7").is(":checked"),
            min: 100
        },
        address: {
            required: true,
            normalizer: function(value) {
                // Update the value of the element
                this.value = $.trim(value);
                // Use the trimmed value for validation
                return this.value;
            }
        }
    },
    messages: {
        billing_name: "Please fill name",
        billing_email: {
            email: "Enter Valid Email!",
            required: "Enter Email!"
        },
        billing_tel: {
            minlength: "Please enter Valid Mobile No.",
            required: "Please enter Mobile No."
        },
        custom_amount: {
            required: "Please enter an amount",
            min: "Amount must be at least 100"
        },
    },
    submitHandler: function(form) {
        // debugger;
        var formData = new FormData();
        let encryption = new Encryption();
        var amount = $("input[name='amount']").val();
        if (amount == "") {
            return false;
        }
        var merchant_id = $("input[name='merchant_id']").val();
        formData.append("merchant_id", encryption.encrypt(merchant_id, nonceValue));
        var language = $("input[name='language']").val();
        formData.append("language", encryption.encrypt(language, nonceValue));
        var amount = $("input[name='amount']").val();
        formData.append("amount", encryption.encrypt(amount, nonceValue));
        var currency = $("input[name='currency']").val();
        formData.append("currency", encryption.encrypt(currency, nonceValue));
        var dp_page = jQuery("input[name='dp_page_url']").val();
        formData.append("dp_page", encryption.encrypt(dp_page, nonceValue));
        var redirect_url = $("input[name='redirect_url']").val();
        formData.append("redirect_url", encryption.encrypt(redirect_url, nonceValue));
        var cancel_url = $("input[name='cancel_url']").val();
        formData.append("cancel_url", encryption.encrypt(cancel_url, nonceValue));
        var billing_name = $("input[name='billing_name']").val();
        formData.append("billing_name", encryption.encrypt(billing_name, nonceValue));
        var address = $("input[name='address']").val();
        formData.append("billing_address", encryption.encrypt(address, nonceValue));
        var billing_state = $("input[name='billing_state']").val();
        formData.append("billing_state", encryption.encrypt(billing_state, nonceValue));
        var billing_zip = $("input[name='billing_zip']").val();
        formData.append("billing_zip", encryption.encrypt(billing_zip, nonceValue));
        var billing_tel = $("input[name='billing_tel']").val();
        formData.append("billing_tel", encryption.encrypt(billing_tel, nonceValue));
        var billing_email = $("input[name='billing_email']").val();
        formData.append("billing_email", encryption.encrypt(billing_email, nonceValue));
        var integration_type = $("input[name='integration_type']").val();
        formData.append("integration_type", encryption.encrypt(integration_type, nonceValue));
        var payment_option = $("input[name='payment_option']").val();
        formData.append("payment_option", encryption.encrypt(payment_option, nonceValue));
        var payment_gateway = $("input[name='payment_gateway']").val();
        formData.append("payment_gateway", encryption.encrypt(payment_gateway, nonceValue));
        var hard_copy = $("input[name='hard_copy']").val();
        formData.append("hard_copy", encryption.encrypt(hard_copy, nonceValue));
        var pan_number = $("input[name='pan']").val();
        if (pan_number == undefined) {
            pan_number = $("input[name='pass']").val();
        }
        formData.append("pan", encryption.encrypt(pan_number, nonceValue));
        var payment_type = $("input[name='payment_type']").val()
        formData.append("payment_type", encryption.encrypt(payment_type, nonceValue));
        var d_amount = $("input[name='d_amount']:checked").val();
        formData.append("child", encryption.encrypt(d_amount, nonceValue));
        /*Address field data*/
        var address = $("input[name='address']").val();
        formData.append("address", encryption.encrypt(address, nonceValue));
        var zip_code = $("input[name='zip_code']").val();
        formData.append("zip_code", encryption.encrypt(zip_code, nonceValue));
        var inputDistrict = $(".inputDistrict").val();
        formData.append("billing_city", encryption.encrypt(inputDistrict, nonceValue));
        var country = $("#country").val()
        formData.append("billing_country", encryption.encrypt(country, nonceValue));
        var is_whatsapp = $("input[name='is_whatsapp']:checked").val();
        formData.append("is_whatsapp_number", encryption.encrypt(is_whatsapp, nonceValue));

        /*Address field data*/
        if ($("input[name='school_repopen']").is(":checked")) {
            var school_repopen = $("input[name='school_repopen']").val();
            formData.append("school_reopen", encryption.encrypt(school_repopen, nonceValue));
        }
        if ($("input[name='email_update']").is(":checked")) {
            var email_update = $("input[name='email_update']").val();
            formData.append("email_update", encryption.encrypt(email_update, nonceValue));
        }
        if ($("input[name='anonymous']").is(":checked")) {
            var email_update = $("input[name='anonymous']").val();
            formData.append("anonymous", encryption.encrypt(email_update, nonceValue));
        }
        var fav_language = $("input[name='fav_language']:checked").val()
        formData.append("citizen", encryption.encrypt(fav_language, nonceValue));
        formData.append("action", "donation_data");
        $.ajax({
            method: 'post',
            processData: false,
            contentType: false,
            cache: false,
            enctype: 'multipart/form-data',
            url: siteurls.ajax_url,
            data: formData,
            success: function(response) {
                jQuery(".rerorr_wrap").remove();
                var res_data = JSON.parse(response);
                if (res_data.rstatus == 1) {
                    response = res_data.form;
                } else {
                    jQuery(".donation_amount_wrap").prepend(res_data.form);
                    nextPrev(-1);
                    jQuery("#nextBtn").show();
                    return false;
                }
                jQuery("#ag_donation_form").hide();
                if ($("input[name='payment_gateway']").val() == 'PayU') {
                    $("#payment_screen").html(response);
                    var payuForm = document.forms.payuForm;
                    payuForm.submit();
                }
                if ($("input[name='payment_gateway']").val() == 'razor_pay') {
                    razorpay_options = JSON.parse(response);
                    jQuery("#post_id").val(razorpay_options.post_id);
                    razorpay_mode(razorpay_options);
                }
                if ($("input[name='payment_gateway']").val() == 'ccavenue') {
                    $("#payment_screen").html(response);
                }
                $('html, body').animate({
                    scrollTop: $(".relief_feeding_form_section").offset().top - 150
                }, 'slow');
            }
        });
    }
});
jQuery("input[name='d_amount']").on("change", function() {
    var camout = 0;
    camout = jQuery(this).val();
    damount = parseInt(camout).toLocaleString();
    if (jQuery(".dy_amount").length > 0) {
        jQuery(".dy_amount").text(damount);
    }
    camout = camout / 1500;
    if (jQuery(".c_child").length > 0) {
        jQuery(".c_child").text(Math.round(camout));
    }
});
jQuery("input[name='other_amount']").on("blur", function() {
    var camout = jQuery(this).val();
    var main_a = jQuery(this).val();
    jQuery(this).removeClass("invalid");
    if (camout != '') {
        damount = parseInt(camout).toLocaleString();;
        if (jQuery(".dy_amount").length > 0) {
            jQuery(".dy_amount").text(damount);
        }
        camout = camout / 1500;
        if (jQuery(".c_child").length > 0) {
            jQuery(".c_child").text(Math.round(camout));
        }
    }
    if (main_a < 100 || camout == '') {
        const otAmErrors = document.querySelectorAll(".ot_am_error");
        otAmErrors.forEach((error) => error.remove());
        jQuery(this).addClass("invalid");
        var element = document.querySelector(".single_amount_wrapper");
        var span = document.createElement("span");
        span.className = "ot_am_error text-danger";
        span.textContent = "Minimum amount of donation is rupees 100";
        jQuery(".inline_c input,.inline_c select,.mobile_number,#nextBtn").prop("disabled", true);
        element.parentNode.insertBefore(span, element.nextSibling);
    } else {
        jQuery(".inline_c input,.inline_c select,.mobile_number,#nextBtn").prop("disabled", false);
        jQuery(".ot_am_error").remove();
    }
});
jQuery(document).on('click', "input[name='d_amount']", function() {
    jQuery("input[name='other_amount']").val("");
    var d = jQuery(this).val();
    jQuery("input[name='amount']").val(d);
    jQuery(".inline_c input,.inline_c select,.mobile_number ").prop("disabled", false)

});
jQuery(document).on('change', "input[name='d_amount']", function() {
    jQuery("input[name='other_amount']").val("");
    var d = jQuery(this).val();
    jQuery("input[name='amount']").val(d);
});
jQuery(document).on("blur", "#other_amount", function() {
    var d = jQuery(this).val();
    if (d != "") {
        jQuery("input[name='amount']").val(d);
    }
});
jQuery(document).on("change", "#inputState", function() {
    var state = jQuery(this).val();
    jQuery("#billing_state").val(state);
});
jQuery(document).on("change", "#inputDistrict", function() {
    var city = jQuery(this).val();
    jQuery("#billing_city").val(city);
});

function focusFunction() {
    jQuery('input:radio[name="d_amount"]').removeAttr('checked');
    jQuery('input:radio[name="d_amount"]').prop('checked', false);
    jQuery("input[name='amount']").val("");
}
$(document).ready(function() {

    $("input[name='billing_name']").on("blur", function() {
        var name = $(this).val();
        var regex = /^[A-Za-z\s]*$/;
        $(".name_error.text-danger").remove();
        $(".name_error.text-danger").removeClass("text-danger");
        if (!regex.test(name)) {
            // $("input[name='billing_email']").val("");
            $("input[name='billing_name']").addClass("text-danger");
            $("input[name='billing_name']").parent().append("<span class='name_error text-danger'>Please enter valid name</span>");
            return regex.test(name);
        }
    });
    $("input[name='billing_tel'],input[name='honor_mobile_number']").on("blur", function() {
        var mobile = $(this).val();
        $(".mobile_error.text-danger").remove();
        $(".mobile_error.text-danger").removeClass("text-danger");
        if (!phonenumber(mobile)) {
            // $("input[name='billing_email']").val("");
            $(this).addClass("text-danger");
            $(this).parent().append("<span class='mobile_error text-danger'>Please enter valid number</span>");
            return false;
        } else {
            $(this).removeClass("text-danger");
            $(".mobile_error.text-danger").remove();
            return true;
        }
    });
    $("input[name='billing_email'],input[name='honor_email_id']").on("blur", function() {
        var email = $(this).val();
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        $(".email_error.text-danger").remove();
        $(".email_error.text-danger").removeClass("text-danger");
        if (!regex.test(email)) {
            // $("input[name='billing_email']").val("");
            $(this).addClass("text-danger");
            $(this).parent().after("<span class='email_error text-danger'>Please enter valid email address</span>");
            return regex.test(email);
        }
    });
    $("select[name='country']").on("change", function() {
        var country = $(this).val();
        if (country == "India") {
            $("#Indian").trigger("click");
            jQuery("input[name='pass']").parent().next("p").toggle();
            jQuery("input[name='district']").parent().toggle();
        } else {
            $("#Foreign").trigger("click");
        }
    });
    $("input[name='zip_code']").on("blur", function() {
        var zip_code = $(this).val();

        if ($("select[name='country']").val() != 'India') {
            return;
        }

        if ($("body").hasClass('page-template-template-wire-transfer') || jQuery("input[name='offline_op']").val() != 'Wire Transfer') {
            if (zip_code.length > 0) {
                if ($("body").hasClass('page-template-template-wire-transfer')) {
                    var tb = jQuery("input[name='offline_op']:checked").data("tabn");
                    $("#" + tb).find('#inputState').parent().css("opacity", 0.1);
                    $("#" + tb).find('#inputDistrict').parent().css("opacity", 0.1);
                }
                $('#inputState').parent().css("opacity", 0.1);
                $('#inputDistrict').parent().css("opacity", 0.1);
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: frontendajax.ajaxurl,
                    data: {
                        zip_code: zip_code,
                        action: 'zipcode_ajax'
                    },
                    success: function(data) {
                        if (data.status != 'undefined' && data.length != 0) {
                            if (data.status == 1) {
                                // debugger;
                                var state = data.state;
                                var city = data.city;
                                // $('#inputState option[value="'+state+'"]').attr("selected","selected");
                                if ($("body").hasClass('page-template-template-wire-transfer')) {
                                    var tb = jQuery("input[name='offline_op']:checked").data("tabn");
                                    $("#" + tb).find('#inputState').val(state);
                                    $("#" + tb).find('#inputDistrict').val(city);
                                    $("#" + tb).find('#inputState').parent().css("opacity", 1);
                                    $("#" + tb).find('#inputDistrict').parent().css("opacity", 1);

                                }
                                $('#inputState').val(state);
                                $('#inputDistrict').val(city);
                                // setTimeout(function(){
                                //     $(".inputState").trigger("change");
                                //     $('#inputDistrict option[value="'+city+'"]').attr("selected","selected");
                                // },500);
                                $('#inputState').parent().css("opacity", 1);
                                $('#inputDistrict').parent().css("opacity", 1);
                            }
                        } else {
                            $('#inputState').val("");
                            $('#inputDistrict').val("");
                            $('#inputState').parent().css("opacity", 1);
                            $('#inputDistrict').parent().css("opacity", 1);
                        }
                    }
                });
            }
        }
        if (jQuery("input[name='fav_language']:checked").val() == 'Indian') {
            if (zip_code.length > 0) {
                $('#inputState').parent().css("opacity", 0.1);
                $('#inputDistrict').parent().css("opacity", 0.1);
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: frontendajax.ajaxurl,
                    data: {
                        zip_code: zip_code,
                        action: 'zipcode_ajax'
                    },
                    success: function(data) {
                        if (data.status != 'undefined' && data.length != 0) {
                            if (data.status == 1) {
                                // debugger;
                                var state = data.state;
                                var city = data.city;
                                // $('#inputState option[value="'+state+'"]').attr("selected","selected");
                                $('#inputState').val(state);
                                $('#inputDistrict').val(city);
                                // setTimeout(function(){
                                //     $(".inputState").trigger("change");
                                //     $('#inputDistrict option[value="'+city+'"]').attr("selected","selected");
                                // },500);
                                $('#inputState').parent().css("opacity", 1);
                                $('#inputDistrict').parent().css("opacity", 1);
                            }
                        } else {
                            $('#inputState').val("");
                            $('#inputDistrict').val("");
                            $('#inputState').parent().css("opacity", 1);
                            $('#inputDistrict').parent().css("opacity", 1);
                        }
                    }
                });
            }
        }
    });
});

function phonenumber(inputtxt) {
    var phoneno = /^\d{10}$/;
    if (inputtxt.match(phoneno)) {
        return true;
    } else {
        return false;
    }
}

function final_step() {
    setTimeout(function() {
        var x = document.getElementsByClassName("tab");
        x[currentTab].style.display = "none";
        showTab(2);
    }, 300)
    jQuery("#nextBtn").hide();

    jQuery(".tab.thankyou .message").html(jQuery('.m_text_pay').text().trim());
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }
    /*
    setTimeout(function () {
        window.location.href = window.location.href
    }, 55000);
    */
}

function final_step_single_form() {
    jQuery("#ag_donation_form").hide();
    jQuery('html,body').animate({
        scrollTop: jQuery('#thankyou').offset().top - 200
    }, 3000);
    jQuery(".thankyou .message").html("Thank you for donation . Your account has been charged and your transaction is successful.<br>We will be processing your donation.");
    jQuery(".thankyou .message").show();
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }
    /*
    setTimeout(function () {
        window.location.replace(window.location.href);
    }, 55000);
    */
}
/** Login & Register ***/
$('#loginbtn').click(function() {
    $('#loginModal').modal('show');
})
$('#registerpopup').click(function() {
    $('#loginModal').modal('hide');
    $('#registerModal').modal('show');
})
$('#loginpopup').click(function() {
    $('#loginModal').modal('show');
    $('#registerModal').modal('hide');
});
const submitButton = document.querySelector('#get_otp');
const quizInput = document.querySelector(".quiz-control");
quizInput.addEventListener("input", function(e) {
    const res = submitButton.getAttribute("data-res");
    if (this.value == res) {
        submitButton.removeAttribute("disabled");
    } else {
        submitButton.setAttribute("disabled", "");
    }
});
$("#get_otp").on('click', function() {
    var res = $('#get_otp').data("res");
    var input_res = $("#quiz").val();
    $('.status_message').html();
    if (res == input_res) {
        login_a();
    } else {
        return false;
    }
});

function login_a() {
    var serialized = $("form#login_frm").serialize();
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: frontendajax.ajaxurl,
        data: serialized,
        success: function(data) {
            if (data.status == '-10') {
                $('.status_message').html("Something went wrong. Please try again.");
            } else if (data.status == 404) {
                $('.status_message').html(data.message);
            } else {
                $("#encNumber").val(data.nvertp);
                $("#phone").val(data.phone);
                $(".get_otp_wrapper").slideUp('fast');
                $(".otp_ver_wrapper").slideDown('fast');
            }
        }
    });
}

function isBirthdateValid(birthdate) {
    var pattern = /^(\d{2})-(\d{2})-(\d{4})$/;
    var match = birthdate.match(pattern);

    if (match === null) {
        return false; // Date format is invalid
    }

    var day = parseInt(match[1], 10);
    var month = parseInt(match[2], 10);
    var year = parseInt(match[3], 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return false; // Parts of the date are not numeric
    }

    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();

    if (year > currentYear) {
        return false; // Birth year is in the future
    }

    var maxDay = new Date(year, month, 0).getDate();

    if (day < 1 || day > maxDay) {
        return false; // Invalid day for the given month and year
    }

    return true; // Birthdate is valid
}
$(function() {
    $("input[name='occassion_date']").datepicker({
        dateFormat: 'dd-mm-yy',
        changeMonth: true,
        changeYear: true,
    });
    $("input[name='birthdate_date']").datepicker({
        dateFormat: 'dd-mm-yy',
        changeMonth: true,
        changeYear: true,
        yearRange: '1920:c',
    });

    $('.date-icon').on('click', function() {
        $("input[name='birthdate_date']").focus();
    });
    $("input[name='birthdate_date'],input[name='occassion_date']").mask("99-99-9999");
    // Add keyup event listener to update the Datepicker date
    // $("input[name='birthdate_date']").on('keyup', function () {
    //     var inputValue = $(this).val();

    //     // Extract the date components
    //     var parts = inputValue.split('-');
    //     var day = parseInt(parts[0]);
    //     var month = parseInt(parts[1]) - 1; // Month is zero-based in Date object
    //     var year = parseInt(parts[2]);

    //     // Check if the date components are valid
    //     if (day && month >= 0 && year) {
    //         var date = new Date(year, month, day);
    //         // Set the Datepicker date
    //         $("input[name='birthdate_date']").datepicker('setDate', date);
    //     }
    // });
    $("input[name='birthdate_date'],input[name='occassion_date']").on("blur", function() {
        var userInput = jQuery(this).val();
        jQuery(".b_date_error").remove();
        if (isBirthdateValid(userInput)) {
            console.log('The date is valid.');
            jQuery(".b_date_error").remove();
        } else {
            jQuery(this).parent().after('<span class="b_date_error text-danger">Please enter valid date</span>');
        }
    });
});
$(function() {
    $("form#register_frm").on("submit", function(event) {
        // Perform AJAX login on form submit
        event.preventDefault();
        var serialized = $(this).serialize();
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: frontendajax.ajaxurl,
            data: serialized,
            success: function(data) {
                console.log(data);
                $('form#register_frm p.status_message').html(data.message);
                if (data.status == 1) {
                    $('form#register_frm').trigger("reset");
                }
            }
        });
        return false;
    });
    $("form#verify_otp").on("submit", function(event) {
        $('.status_message').html();
        // Perform AJAX login on form submit
        event.preventDefault();
        var serialized = $(this).serialize();
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: frontendajax.ajaxurl,
            data: serialized,
            success: function(data) {
                console.log(data);
                if (data.status == 1) {
                    $('form#verify_otp p.status_message').html(data.message);
                    window.location.href = window.location.href + 'active-fundraising-campaign/';
                    console.log("otp Matched");
                } else {
                    console.log("invalid otp");
                    $('form#verify_otp p.status_message').html(data.message);
                }
            }
        });
        return false;
    });
});
/** Login & Register ***/