$(document).ready(function() {
	
     var editor = CodeMirror.fromTextArea(document.getElementById("cm"), {
      lineNumbers: true,
      mode:"simpleMode",
      matchBrackets: true
  });
    
});