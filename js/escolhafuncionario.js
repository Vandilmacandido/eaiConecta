document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.escolha');
    var instances = M.FormSelect.init(elems, options);
  });

  $(document).ready(function(){
    $('escolha').formSelect();
  });