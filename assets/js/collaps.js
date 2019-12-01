function onClickCollaps(){
	let content = document.querySelector('.content');

    if(content.style.display != 'inline'){
		content.style.display = 'inline';
	}
	else if(content.style.display == 'inline'){
		content.style.display = 'none';
	}
	
}

document.querySelector('.collapsible').addEventListener('click',function(){
  onClickCollaps();
});
