var matriz=document.querySelectorAll("a");
function iterar(){
	for(var i=0; i<matriz.length; i++){	
		var span=document.getElementsByClassName("span3");
		var img=document.createElement("img");
		var link=matriz[i].getAttribute("href");

		var miniatura=youtube.generateThumbnailUrl(link);
		img.setAttribute("src",miniatura);
		matriz[i].appendChild(img);	
	}
}
window.addEventListener("load",iterar);