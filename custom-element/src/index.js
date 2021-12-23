import React from 'react';
import ReactDOM from 'react-dom';

import AppComponent from './AppComponent.js';

class VanillaCounter extends HTMLElement {
	constructor() {
		super();

		const root = document.createElement('div');

		ReactDOM.render(
			<AppComponent 
				portletNamespace="namespace"
				contextPath="context-path"
				portletElementId="portlet-element-id"
				configuration="configuration"
			 />, 
			root
		);

		//this.attachShadow({mode: 'open'}).appendChild(root);
		this.appendChild(root);
	}

	connectedCallback() {
	}

	disconnectedCallback() {
	}

}

if (customElements.get('custom-element')) {
	console.log(
		'Skipping registration for <custom-element> (already registered)'
	);
} else {
	customElements.define('custom-element', VanillaCounter);
}

