$(function(){
  $('.close').on('click', function(){
    $('.alert').fadeOut()
  })
/* 
  $('.btn.btn-primary').on('click', function(){
    $('.collapse').show()
  })
  $('a.btn.btn-primary').on('click', function(){
    $('.collapse').hide()
  })
}) */ 

$('.btn.btn-primary').on('click', function(){
    $('.collapse').toggle()
  })

  $('.btn.btn-link').on('click', function(){
    $('.collapse').hide(5000)
    //const target = $(this).attr('data-target')
    const target = $(this).data('data')
    $(target).show(1000)
  })
})

