'use strict';

// Imports
import React from 'react';
import PropTypes from 'prop-types';

// Constants

export default class COMPONENT_NAME extends React.Component {

	static propTypes = {}

	static defaultProps = {}


	/** Lifecycle */
	constructor(props) {
		super(props)

		// Initial state
		this.state = {}
	}

	componentDidMount() {
		this.load();
	}


	/** Getters */
	get title() {
		return 'hello';
	}


	/** Events */
	onClick() {
		//
	}


	/** Actions */
	load() {
		//
	}


	/** Rendering */
	render() {
		const { t } = I18n

		return (
			<div>
				{ this.title }
			</div>
		)
	}

}