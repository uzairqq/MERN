const contentNode=document.getElementById('contents');

const continents=['pakistan','china','india','iran'];

var message=continents.map(c=>`Hello ${c}!`).join('  ');

var component=<p>{message}</p>

ReactDOM.render(component,contentNode);