$(document).ready(function() {
  $('.content img').each(function() {
    var currentImage = $(this);
    currentImage.wrap("<a class='image-link' href='" + currentImage.attr("src").replace("images/", "original/").replace(".jpg", ".png") + "'</a>");
  });
  $('.image-link').magnificPopup({type:'image', closeBtnInside:false, gallery:{
    enabled:true
  }});
});
