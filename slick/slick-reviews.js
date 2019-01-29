$(document).ready(function(){
  $('.reviews').slick({
    dots: true,
    autoplay:true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    dotsClass: "dots-review",
    customPaging : function(reviews, i) {
        return '<a href="#"><img src="./images/human1.jpg" /><img src="./images/human2.jpg" /><img src="./images/human3.jpg" /></a>';
    },
  });
});
