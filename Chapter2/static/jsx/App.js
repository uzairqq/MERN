'use strict';

var contentNode = document.getElementById('contents');

var continents = ['pakistan', 'china', 'india', 'iran'];

var message = continents.map(function (c) {
  return 'Hello ' + c + '!';
}).join('  ');

var component = React.createElement(
  'p',
  null,
  message
);

ReactDOM.render(component, contentNode);