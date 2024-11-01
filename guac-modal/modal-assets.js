import { Modal, ModalHTML } from './modal.js';
import { SampleData, ConnectionNode, ContextHandler, NodeWeight } from './sample-api.js';


function parseSampleData() {
	const connections = SampleData.nodes;
	const context = ContextHandler.getContext();
	return context;
}
/**
 * 
 * @param {ConnectionNode} connection 
 */
function leafConnectionSchema(connection) {

}
/**
 * 
 * @param {ConnectionNode} connection 
 */
function connectionGroupSchema(connection) {

}
/**
 * @param {ConnectionNode[]} connection 
 */
function multipleSelectedSchema(selectConnections) {

}

$(document).ready(() => {
	const sample = parseSampleData();
	const modal = new Modal();
	

});

