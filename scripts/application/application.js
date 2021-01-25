/* Imports */
import NeueKit from '@neuekit/neuekit/src/scripts/neuekit';

import './modules/tns.js';
import './modules/product-form.js';
import './modules/product-images.js';
import './modules/mobile-nav.js';
import './modules/see-more.js';
import './modules/search.js';
import './modules/smooth-scrolling.js';
import './modules/accordions.js';
import './modules/sort-and-tag.js';

function clean(node)
{
  for(var n = 0; n < node.childNodes.length; n ++)
  {
    var child = node.childNodes[n];
    if
    (
      child.nodeType === 8 
      || 
      (child.nodeType === 3 && !/\S/.test(child.nodeValue))
    )
    {
      node.removeChild(child);
      n --;
    }
    else if(child.nodeType === 1)
    {
      clean(child);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
	new NeueKit()
	clean(document.body);
	if(navigator.userAgent.includes('Windows')) {
		document.body.classList.add('windows')
	}
});
