(function ($) {
  'use strict'
  // $ = window.$

  $('#empname').hide()

  $(document).on('click', '#somthingnew', () => {
    console.log('hahahahah')
  })

	// tooltip
  $("[data-toggle='tooltip']").tooltip()

	// popover
  $('[data-toggle="popover"]').popover({
    container: 'body'
  })

	// Horizontal-menu
  $('a[data-theme]').click(function () {
    $('head link#theme').attr('href', $(this).data('theme'))
    $(this).toggleClass('active').siblings().removeClass('active')
  })
  $('a[data-effect]').click(function () {
    $('head link#effect').attr('href', $(this).data('effect'))
    $(this).toggleClass('active').siblings().removeClass('active')
  })

	/* ----FullScreen---- */
  $(document).on('click', '#fullscreen-button', function toggleFullScreen () {
    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen()
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    }
  })

	/* ----CollapseableLeftMenu---- */
  $('[data-collapse]').each(function () {
    var me = $(this),
      target = me.data('collapse')

    me.click(function () {
      $(target).collapse('toggle')
      $(target).on('shown.bs.collapse', function () {
        me.html('<i class="ion ion-minus"></i>')
      })
      $(target).on('hidden.bs.collapse', function () {
        me.html('<i class="ion ion-plus"></i>')
      })
      return false
    })
  })

	/* ----Alerts---- */
  $('.alert-dismissible').each(function () {
    var me = $(this)

    me.find('.close').on('click', function (e) {
      me.alert('close')
    })
  })

	/* data tables */
  $(function (e) {
    $('#example').DataTable({
      paging: false,
      searching: false
    })
  })
	/** *********************** */
  var newTabindex = 3
  $(document).on('click', '.add-tab', function () {
    var $tabnav = $('#myTab2')
    var $tabcontent = $('#myTab2Content')

    var newbtn = '<li class="nav-item"><a class="nav-link" id="newtab' + newTabindex + '" data-toggle="tab" href="#newtab' + newTabindex + '" role="tab" aria-controls="profile" aria-selected="false">New Form <button class="close-btn"><i class="fa fa-times"></i></button></a></li>'
    var $secondLast = $tabnav.find('li:last-child').prev()
    $(newbtn).insertAfter($secondLast)

    var newtab = '<div class="tab-pane fade" id="newtab' + newTabindex + '" role="tabpanel" aria-labelledby=""><table id="example" class="table table-striped table-bordered border-t0 w-100 text-nowrap table-samll-txt"><thead><tr><th class="wd-15p">First name</th><th class="wd-15p">Last name</th><th class="wd-20p">Position</th><th class="wd-15p">Start date</th><th class="wd-10p">Salary</th><th class="wd-25p">E-mail</th></tr></thead><tbody><tr><td>Gopal</td><td>Jangid</td><td>UI DEveloper</td><td>13/3/2018</td><td>54325</td><td>g9jangid@gmail.com</td></tr></tbody></table></div>'

    $tabcontent.append(newtab)
    newTabindex++
  })

  $(document).on('click', '.nav-item', function () {
    var tabtoshow = $(this).find('a').attr('href')
    if (tabtoshow) {
      $('#myTab2Content').find('.tab-pane').removeClass('show active')
      $('#myTab2Content').find(tabtoshow).addClass('show active')
    }
  })
  $(document).on('click', '.close-btn', function () {
    var tabtoshow = $(this).closest('a').attr('href')
    console.log(tabtoshow)
    if (tabtoshow) {
      $('#myTab2').find('li:first-child  a').click()
      $('#myTab2Content').find(tabtoshow).remove()
    }
    $(this).closest('li').remove()
    newTabindex--
  })

  $('#checkbox-vouchure').click(function () {
    if (!$(this).is(':checked')) {
      $('#empname').hide()
    } else {
      $('#empname').show()
    }
  })
  $(document).on('click', '.color-set', function () {
    $('.app-sidebar').removeClass().addClass('app-sidebar').addClass($(this).attr('refsColor'))
  })
})
