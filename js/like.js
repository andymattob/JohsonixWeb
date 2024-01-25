var clicks = 0; 
$(".like_cont").click(function(e) {
    if ($(this).html() == "Like") {
        $(this).html('Unlike').removeClass('like_cont').addClass('unlike_cont');
        clicks++; 
       $('.likecount').html(clicks);
    }
    else {
    $(this).html('Like').removeClass('unlike_cont').addClass('like_cont');
        clicks--; 
        $('.likecount').html(clicks);
    }
    return false;
});