$(document).ready(function () {
    
    $(".decal_left").removeClass('decal_left');
	$(".decal_right").removeClass('decal_right');
	$(".decal_top").removeClass('decal_top');
	$(".decal_bot").removeClass('decal_bot');
    $(".fading").removeClass('fading');
    

    const sections = $('.content-wrapper > section')
    sections.width($(window).width());
    $('.content-wrapper').width(sections.width() * sections.length)

    $('.main-nav a, #nav-top a.contact, #nav-btn a').on('click', function (event) {
        event.preventDefault();
        sectionToScroll = $($(this).attr("href"));
        if (!sectionToScroll.hasClass("active")) {
            $('.content-wrapper > section').removeClass("active");
            $('.main-nav a').removeClass("active");
            console.log(sectionToScroll);
            // Setting hrefs for prev / next buttons
            numSection = parseInt(sectionToScroll.attr("id").replace(/[^\d]/g,''), 10);

            if (numSection == $('.content-wrapper > section').length) {
				$('#nav-btn .next').addClass('disabled');
				$('#nav-btn .prev').removeClass('disabled');
			} else if (numSection == 1) {
				$('#nav-btn .prev').addClass('disabled');
				$('#nav-btn .next').removeClass('disabled');
            } else {
				$('#nav-btn .prev').removeClass('disabled');
				$('#nav-btn .next').removeClass('disabled');
			}
            $("#nav-btn .next").attr("href","#section"+(numSection+1));
            $("#nav-btn .prev").attr("href","#section"+(numSection-1));

            sectionToScroll.addClass("active");
         $($('.content-wrapper')).css("transform", "translateX( -" + sectionToScroll.position().left + "px )");
        }
    })
})
