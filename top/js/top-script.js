new Splide('.splide', {
  autoWidth: true,
  gap: 8,
  pagination: false,
}).mount()

new Splide('.splide--recommend', {
  autoWidth: true,
  gap: 8,
  pagination: false,
}).mount()

new Splide('.splide--coffee', {
  autoWidth: true,
  gap: 8,
  pagination: false,
}).mount()

new Splide('.splide--cup', {
  autoWidth: true,
  gap: 8,
  pagination: false,
}).mount()

new Splide('.splide--gift', {
  autoWidth: true,
  gap: 8,
  pagination: false,
}).mount()


$(function() {

  const $tabBtns = $('#jsi-tab__btnWrap');
  const $tabBtn = $tabBtns.find('button');
  const $contentsWrap = $('#jsi-shopAria__contentsWrap');
  const $contents = $contentsWrap.find('section');
  


    $tabBtn.on('click', function(){
      let index = $tabBtn.index(this);
      console.log(index)
      $tabBtn.removeClass('is-btn-active');
      $(this).addClass('is-btn-active');
      $contents.removeClass('is-contents-active');
      $contents.eq(index).addClass('is-contents-active');
    });
  
});

