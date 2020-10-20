export function UpdateJson(treeList, inpValue){
	var queryResult = [];
	getData(inpValue, treeList, queryResult)
	function getData(queryText, data, queryResult){
		data.map((dataNode, i)=> {
			if(dataNode.node.description.indexOf(queryText)!=-1){
				queryResult.push(dataNode);
				return;
			}
			if(dataNode.node.children){
				getData(queryText, dataNode.node.children, queryResult);
			}
		});
		return queryResult;
	}
	return queryResult;
}
