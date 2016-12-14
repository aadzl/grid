import React from 'react';
import ReactDOM from 'react-dom';
import TheGridRouter from './router/the-grid-router.js';

/**
 *
 * @type {
 *  {
 *  id: null,
 *  events: *,
 *  toobar_buttons: Array,
 *  toolbar_buttons_editor: Array,
 *  overlays: Array,
 *  overlays_editor: Array
 *  }}
 */
// const GRID = window.GRID = {
//     id: null,
// 	events: new EventEmitter(),
// 	plugins: [],
// 	toobar_buttons: [],
// 	toolbar_buttons_editor: [],
// 	overlays: [],
// 	overlays_editor: [],
// };
//
// GRID.events.setMaxListeners(0);



/**
 * wait for dom to be ready so all plugins etc are loaded
 */
document.addEventListener("DOMContentLoaded", function(event) {
	/**
	 * Toolbar button components
	 */
	const tb = window.grid_toolbar_buttons;
	const etb = window.grid_toolbar_buttons_editor;
	
	/**
	 * grid overlays
	 */
	const gov = window.grid_overlays;
	const eov = window.grid_overlays_editor;
	
	/**
	 * append app to grid app root
	 */
	ReactDOM.render(
		<TheGridRouter
			ajax_url={document.gridajax}
			grid_id={document.ID}
		/>,
		document.getElementById("grid-app")
	);
});