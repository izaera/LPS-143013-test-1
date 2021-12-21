import moment from '@esm-bundle/moment';
//import moment from './node_modules/@esm-bundle/moment/esm/index.js';
import tokenizer from 'sbd';
import lps, {getMoment} from 'LPS-143013-test-2';

/**                                                                                 
 * This is the main entry point of the portlet.                                     
 *                                                                                  
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent           
 * information on the signature of this function.                                   
 *                                                                                  
 * @param  {Object} params a hash with values of interest to the portlet            
 * @return {void}                                                                   
 */                                                                                 
export default function main(params) { 
	const node = document.getElementById(params.portletElementId);

	const text = "On Jan. 20, former Sen. Barack Obama became the 44th President of the U.S. Millions attended the Inauguration.";
	const sentences = tokenizer.sentences(text, {});
                                                                                    
	node.innerHTML +=`                                                               
		<div>
			<div>
				<span class="tag">
					@esm/moment comes from LPS-143013-test-2:
				</span> 
				<span class="value">${getMoment() === moment}</span>
			</div>
			<div>
				<span class="tag">
					LPS-143013-test-2:
				</span> 
				<span class="value">${lps()}</span>
			</div>
			<div>
				<span class="tag">
					SBD Tokenizer:
				</span> 
				<span class="value">${sentences.join(' <·> ')}</span>
			</div>
			<div>
				<span class="tag">
					Moment:
				</span> 
				<span class="value">${moment().format()}</span>
			</div>
			<div>
				<span class="tag">
					${Liferay.Language.get('portlet-namespace')}:
				</span> 
				<span class="value">${params.portletNamespace}</span>
			</div>
			<div>
				<span class="tag">
					${Liferay.Language.get('context-path')}:
				</span> 
				<span class="value">${params.contextPath}</span>
			</div>
			<div>
				<span class="tag">
					${Liferay.Language.get('portlet-element-id')}:
				</span> 
				<span class="value">${params.portletElementId}</span>
			</div>
			<div>
				<span class="tag">
					${Liferay.Language.get('configuration')}:
				</span> 
				<span class="value pre">${JSON.stringify(params.configuration, null, 2)}</span>
			</div>
		</div>
	`;                                                                          
}                                                                                   
