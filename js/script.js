$(".nav li a , .nav a").click(function(){
    var target= $(this).attr("href")
    $("html , body").animate({
        scrollTop: $(target).offset().top
    } , 800)
})

