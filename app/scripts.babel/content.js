import ej_dict from './kantan-ej-dictionary'
let initFlag = true;
let displayFlag = true;
chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
  if (request == 'goRuby') {
		chrome.storage.sync.get(null, options => {
			 console.info(options);
			 console.log(initFlag);
			 if(initFlag){
					let result = document.evaluate("/html/body/descendant::text()[name(..)!='script'][name(..)!='style']",
					document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
				for ( let i=0 ; i < result.snapshotLength; i++ ){
					let node=result.snapshotItem(i)
					if(/[a-zA-Z]/.test(node.textContent)){ //Word Only
						let parentNode = node.parentNode;
						let span = document.createElement('span');
						let nbsp = String.fromCharCode( 160 ); //Remove &nbsp
						let words=node.textContent.replace(nbsp,'').split(' ');
						for (let word of words) {
							let ruby = document.createElement('ruby');
							let rb = document.createElement('rb');
							rb.innerText=word;
							let w = word.replace(/[.;,"?:]+/,'');
							let rt = document.createElement('rt');
							const hit_word = ej_dict[word];	
							if (typeof hit_word === 'undefined'){
								// console.log('UNKNOWN');
							}else if (hit_word['svl_level'] >= options['level']) {
								rt.innerText = hit_word['ja'][0];	
								console.log('HIT');
							}
							ruby.appendChild(rb);
							ruby.appendChild(rt);
							span.appendChild(ruby);
					}
							parentNode.replaceChild(span, node);
					}
				}
				initFlag = !initFlag;
			 }
		});
	}
	displayFlag = !displayFlag;
	sendResponse({'display': displayFlag});
	return true;
})
