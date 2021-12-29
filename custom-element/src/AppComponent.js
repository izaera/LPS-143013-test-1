import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import tokenizer from 'sbd';

import 'react-datepicker/dist/react-datepicker.css';

export default function AppComponent(props) {
	const text = "On Jan. 20, former Sen. Barack Obama became the 44th President of the U.S. Millions attended the Inauguration.";
	const sentences = tokenizer.sentences(text, {});
	const [startDate, setStartDate] = useState(new Date());

	return (
		<div>
			<div>
				<span className="tag">
					Liferay.ThemeDisplay.getUserName():
				</span>
				<span className="value">
					{Liferay.ThemeDisplay.getUserName()}
				</span>
			</div>
			<div>
				<span className="tag">
					DatePicker:
				</span>
				<span className="value">
					<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
				</span>
			</div>
			<div>
				<span className="tag">
					Sentences:
				</span> 
				<span className="value">{sentences}</span>
			</div>
			<div>
				<span className="tag">
					{Liferay.Language.get('portlet-namespace')}:
				</span> 
				<span className="value">{props.portletNamespace}</span>
			</div>
			<div>
				<span className="tag">
					{Liferay.Language.get('context-path')}:
				</span> 
				<span className="value">{props.contextPath}</span>
			</div>
			<div>
				<span className="tag">
					{Liferay.Language.get('portlet-element-id')}:
				</span> 
				<span className="value">{props.portletElementId}</span>
			</div>
			<div>
				<span className="tag">
					{Liferay.Language.get('configuration')}:
				</span> 
				<span className="value pre">{JSON.stringify(props.configuration, null, 2)}</span>
			</div>
		</div>
	);
}
