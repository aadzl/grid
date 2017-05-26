import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Slot extends Component{
	/**
	 * ---------------------
	 * lifecycle
	 * ---------------------
	 */
	constructor(props){
		super(props);
	}
	/**
	 * ---------------------
	 * rendering
	 * ---------------------
	 */
	render(){
		return(
			<div
				className="grid-slot"
			    style={{
			    	width: this.props.dimension+"%",
			    }}
			>
				<StyleChanger />
				<div className="grid-boxes">{this.props.children}</div>
			</div>
		)
	}
	/**
	 * ---------------------
	 * events
	 * ---------------------
	 */
	
	/**
	 * ---------------------
	 * other functions
	 * ---------------------
	 */
}
Slot.propTypes = {
	dimension: PropTypes.number.isRequired,
}

export default Slot;

class StyleChanger extends Component{
	/**
	 * ---------------------
	 * lifecycle
	 * ---------------------
	 */
	constructor(props){
		super(props);
	}
	/**
	 * ---------------------
	 * rendering
	 * ---------------------
	 */
	render(){
		return (
			<div className="grid-slot__style-changer">
			</div>
		)
	}
	/**
	 * ---------------------
	 * events
	 * ---------------------
	 */
	
	/**
	 * ---------------------
	 * other functions
	 * ---------------------
	 */
}