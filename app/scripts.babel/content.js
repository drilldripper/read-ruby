import ej_dict from './kantan-ej-dictionary'

chrome.extension.onMessage.addListener((request, sender, sendRequest) => {
  if (request == 'goRuby') {
		chrome.storage.sync.get(null, options => {
			 console.info(options);
			 console.log('offff');
			 var result = document.evaluate("/html/body/descendant::text()[name(..)!='script'][name(..)!='style']",
			  document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
			 for ( var i=0 ; i < result.snapshotLength; i++ ){
				 var node=result.snapshotItem(i)
				 if(/[a-zA-Z]/.test(node.textContent)){ //Word Only
					 var parentNode = node.parentNode;
					 var span = document.createElement('span');
					 var nbsp = String.fromCharCode( 160 ); //Remove &nbsp
					 var words=node.textContent.replace(nbsp,'').split(' ');
					 for (let word of words) {
						 var ruby = document.createElement('ruby');
						 var rb = document.createElement('rb');
						 rb.innerText=word;
						 var w = word.replace(/[.;,"?:]+/,'');
						 var rt = document.createElement('rt');
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
		});
  }
})
