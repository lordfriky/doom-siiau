const tabla = document.getElementsByTagName('table')[1];
var elemento = tabla.insertRow();
elemento.insertCell(0).innerHTML = '<div class="menuc" style="left:1px;width:7;border:0px solid;float:left; "><img src="/ows-img/opened.gif" width="7" height="7" alt="DOOM"></div><div class="menuc" style=";left:12px;width:120;border:0px solid; position:relativefloat:left;"><alt="DOOM" width="7" height="7" border="0"><a href="' + chrome.runtime.getURL('doom.html') + '" target="Contenido">DOOM</a></alt="DOOM"></div>';

