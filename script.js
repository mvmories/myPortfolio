
$('.smooth-goto').on('click', function () {
  $('html, body').animate({
      scrollTop: $(this.hash).offset().top + 50
  }, 1000);
});

$(document).ready(function(){
  $('.popup__img').css('visibility', 'visible');        
})


const miguel = {
  age: 27,
  location: 'lisboa',
  certifications: {
    branding: true,
    uxui: true,
    frontend: true,
    fullstack: true,
  },
  make_eggs() {
    console.log('hey');
  }
}