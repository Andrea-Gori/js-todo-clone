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















    $('#todo-list').append(listItem);
  })


  
})