import { Modal, ModalHTML } from "./modal.js";
import {
  SampleData,
  ConnectionNode,
  ContextHandler,
  NodeWeight,
} from "./sample-api.js";

function parseSampleData() {
  const connections = SampleData.nodes;
  const context = ContextHandler.getContext();
  return context;
}





function leafConnectionModal(connection) {
  const generalTab = generalTab(connection);

}

function generalTab(connection) {
  const tabContext = {
    tabId: "nodeGeneral",
    title: "Connection Info",
    fasIcon: "fa-solid fa-circle-info",
  };
  const tabContent = generalTabContent(connection);
  return { tabContext, tabContent };
}

function controlsTab(connection) {
  const tabContext = {
    tabId: "nodeControls",
    title: "Node Controls",
    fasIcon: "fa-solid fa-circle-controls",
  };
  const tabContent = controlsTabContent(connection);
  return { tabContext, tabContent };
}
function controlsTabContent(connection) {

}




/**
 * @param {Map<string, ConnectionNode>} nodeMap
 * @param {ConnectionNode} connection
 */

const generalTabContent = (connection, nodeMap) => {
  $("<h3>").text("General Information");
  const fields = [
    ModalHTML.createField({
      title: "Connection Name",
      value: connection.name,
    }),
    ModalHTML.createField({
      title: "Node Identifier",
      value: connection.identifier,
    }),
  ]
	let parent = nodeMap.get(connection.parentIdentifier);	
	if(parent) {
    fields.push(
      ModalHTML.createField({
        title: "Parent Connection",
        value: connection.parentIdentifier,
      }),
		  ModalHTML.createField({
		  	title: "Parent Identifier",
		  	value: connection.parentIdentifier,
		  })
    );
	}
	
	const activeConnections = connection.dump.activeConnections;
  let status;
  if (!activeConnections || activeConnections < 0) {
    status = "Offline";
  } else {
		status = "Online";
	}
	const connectionFields = [
		{
			title: "Active Connections",
			value: connection.dump.activeConnections,
		},
		{
			title: "Connection Status",
			value: status,
		},
		{
			title: "Protocol",
			value: connection.dump.protocol,
		},
	]
	ModalHTML.createCollapsible(connectionFields);
	const connProps = initConnectionProperties(connection);
  const sharingProfile = initSharingProfile(connection, nodeMap);
  fields.push(
    ModalHTML.createCollapsible("Connection Properties", connProps),
    ModalHTML.createCollapsible("Sharing Profile", sharingProfile),
  );
  return fields;
};

const initConnectionProperties = (connection) => {
  const attributes = connection.attributes;
  if (!attributes || attributes.length === 0) {
    return ModalHTML.createField({
      title: "Connection Properties",
      value: "No attributes have been set for this connection",
    });
  }
  return attributes.map((attribute) => {
    return {
      title: attribute.name,
      value: attribute.value ?? "Not set",
    };
  });
};

const initSharingProfile = (connection) => {
  const sharingProfile = connection.sharingProfile;
  if (!sharingProfile || sharingProfile.length === 0) {
    return ModalHTML.createField({
      title: "Sharing Profile",
      value: "No attributes have been set for this connection",
    });
  }
  return sharingProfile.map((attribute) => {
    return {
      title: attribute.name,
      value: attribute.value ?? "Not set",
    };
  });
};




/* 
    When a node is double clicked
    we want a modal to appear to 
    display information about said 
    node.

    -Tabs for Modal 

    Connection Leaf Node 
    -General
    
    Name: [Node Name]
    Identifier: [Node Identifier]
    Parent Connection: [Parent_Name]
    Parent Identifier: [Parent_Identifier]

    Connection Status
    Active Connections: [activeConnections]
    Last Active: [lastActive] ?? 
    Protocol: [protocol]


    Connection Properties [collapse]
    if empty
        -No attributes have been set for
        this connection     
    forEach(node.attribute)
        -Attribute Name: [attributeName]
     
    Sharing Profile [collapse]
    if not sharing profile 
    No attributes have been set for
        this connection
    forEach(node.sharingProfile)
        -Attribute Name: [attributeName]

    Tab 2 - Node Controls 
    Connect to Node 
    Refresh Node Data 
    Kill Connection
    View Timeline  

    Tab 3 - Node Connection Group Topology 
    - Do not show if multiple nodes are selected 
    
    - Show the connection group topology in the modal 
*/

/**
 *
 * @param {ConnectionNode} connection
 */
/**
 *
 * @param {ConnectionNode} connection
 */
function connectionGroupSchema(connection) {}
/**
 * @param {ConnectionNode[]} connection
 */
function multipleSelectedSchema(selectConnections) {}

$(document).ready(() => {
  const sample = parseSampleData();
  const modal = new Modal();
});
