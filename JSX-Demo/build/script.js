import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

var roomDomElement = document.getElementById('root');

var root = ReactDOM.createRoot(roomDomElement);

function Footer() {
  return React.createElement(
    'div',
    { className: 'site-footer' },
    React.createElement(
      'p',
      null,
      'All right reserved \xA9'
    )
  );
}

var headerJSX = React.createElement(
  'div',
  null,
  React.createElement(
    'header',
    { className: 'site-header' },
    React.createElement(
      'h1',
      null,
      'Hello from JSX!'
    ),
    React.createElement(
      'h2',
      null,
      'The best syntax ever!'
    ),
    React.createElement(
      'p',
      null,
      'something else here'
    )
  ),
  React.createElement(Footer, null)
);

root.render(headerJSX);