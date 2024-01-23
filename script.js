const element = document.getElementById('infi-list');
let lastScrollTop = 0;
element.onscroll = (e)=>{
   if (element.scrollTop < lastScrollTop){
      return;
   } 
   lastScrollTop = element.scrollTop <= 0 ? 0 : element.scrollTop;
    if (element.scrollTop + element.offsetHeight>= element.scrollHeight )
	{
		var entry = document.createElement('li');
		entry.appendChild(document.createTextNode("Item 11"));
		element.appendChild(entry);
		var entry1  = document.createElement('li');
		entry1.appendChild(document.createTextNode("Item 12"));
		element.appendChild(entry1);
    }
}