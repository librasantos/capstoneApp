


// When size is submitted by the user, call makeGrid()

function makeGrid() {
  var width=$('#inputWidth').val();
  var column=$('#inputHeight').val();
  var table =$("#pixelCanvas");
  for (var h=1; h<=column; h++){
     var row= $('<tr></tr>');
     for (var w=1; w<=width; w++){
       row.append('<td></td>');
}
  table.append(row);
}
}

$("#sizePicker" ).submit(function( event ) {
  event.preventDefault();
  makeGrid();

  $("td").click(function() {
    var colorNew=$('#colorPicker').val();
    //alert( "Handler for .click() called." );
    $(this).css( "background", colorNew );
  });

  $("td").mouseover(function() {
    var colorNew=$('#colorPicker').val();
    //alert( "Handler for .click() called." );
    $(this).css( "background", colorNew );
  });

  $( "#my-reset" ).click(function() {
    //alert( "Handler for .click() called." );
    $("#pixelCanvas tr").remove();
  });

});
