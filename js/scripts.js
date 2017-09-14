$(document).ready(function(){
  $("#dino-form").submit(function(event) {
  var dino = $('#dino').val();

   if (dino === 'Paralophosaurus') {
     $('#kentrosaurus, #styracosaurus').hide();
     $('#paralophosaurus').show();
   } else if (dino === 'Kentrosaurus') {
     $('#paralophosaurus, #styracosaurus').hide();
     $('#kentrosaurus').show();
   } else {
     $('#paralophosaurus, #kentrosaurus').hide();
     $('#styracosaurus').show();
   }
  event.preventDefault();
 });
});
