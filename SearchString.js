// load the book
function loadBook(filename,display){
  let currentBook = "";
  let url = "books/" + filename;
  
  // reset UI to get back to beginning if reloaded
  document.getElementById("fileName").innerHTML = displayName;
  document.getElementById("searchstat").innerHTML = "";
  document.getElementById("keyword").value = "";


  // make a server request to load our books
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true );
  xhr.send();
  //  load file from disk strung it back into our website 
  xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200){
      currentBook = xhr.responseText;

      document.getElementById("fileContent").innerHTML = currentBook;

      var elmnt = document.getElementById("fileContent");
      // scroll viewer to the top
      elmnt.scrollTop = 0;
    }
  };

}