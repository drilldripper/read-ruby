import ej_dict from './kantan-ej-dictionary';
import pluralize from 'pluralize';

let initFlag = true;
let displayFlag = true;

chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
  if (request == 'goRuby') {
    chrome.storage.sync.get(null, options => {
      if (Object.keys(options).length == 0) {
        options['level'] = 4;
      } //Default SVL
      // console.info(options);
      // console.log(initFlag);
      if (initFlag) {
        let result = document.evaluate(
          "/html/body/descendant::text()[name(..)!='script'][name(..)!='style'][name(..)!='code']", // eslint-disable-line quotes
          document,
          null,
          XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
          null
        );

        for (let i = 0; i < result.snapshotLength; i++) {
          let node = result.snapshotItem(i);

          if (/[a-zA-Z]/.test(node.textContent)) {
            // Word Only
            let parentNode = node.parentNode;
            let span = document.createElement('span');
            const nbsp = String.fromCharCode(160);
            const words = node.textContent.replace(nbsp, '').split(' '); // Remove &nbsp

            for (let word of words) {
              let ruby = document.createElement('ruby');
              let rb = document.createElement('rb');
              let rt = document.createElement('rt');

              // Singularize a word
              let singularWord = pluralize.singular(word);
              const hit_word = ej_dict[singularWord];

              if (typeof hit_word === 'undefined' || hit_word['svl_level'] < options['level']) {
                const wordNode = document.createElement('span');
                wordNode.innerText = word;
                span.appendChild(wordNode);
              } else {
                rt.innerText = hit_word['ja'][0];
                rb.innerText = word;
                ruby.appendChild(rb);
                ruby.appendChild(rt);
                span.appendChild(ruby);
              }

              const spaceNode = document.createElement('span');
              spaceNode.innerText = ' ';
              span.appendChild(spaceNode);
            }
            parentNode.replaceChild(span, node);
          }
        }
        initFlag = !initFlag;
      }
    });
  }
  displayFlag = !displayFlag;
  sendResponse({ display: displayFlag });
  return true;
});
