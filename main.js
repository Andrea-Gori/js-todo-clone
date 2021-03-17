$(document).ready(function () {
  $('#add').click(function () {
    var listVal = $('#list-title').val();
    var listItem = $('#todo li').clone();

    /* aggiungo gli elementi alla to do list */
    listItem.children('span.title').text(listVal);

    /* funzione per eliminare l'elemento fatto */
    listItem.children('span.cancella').click(function () {
      $(this).parent().remove()
    })

    listItem.children('span.edit').click(function () {
      $(this).prev().show().val();
      $(this).siblings('span.title').hide()
    })

    listItem.children('.modifica').keyup(function (e) {
      if (e.which == 13 ) {
        var title = $(this).val();
        $(this).hide();
        $(this).siblings('span.title').text(title).show();
      }
    })

    $('#todo-list').append(listItem);
  })


  
})