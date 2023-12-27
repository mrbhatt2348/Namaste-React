const rootFromHTML = document.getElementById("root");
const heading = React.createElement('div', { id: 'parent' }, [React.createElement('div', { className: 'child' }, [React.createElement('h1', {}, "Hello React from Nested statements..."), React.createElement('h2', {}, "Hello React from Nested statements...")]), React.createElement('div', { className: 'child' }, [React.createElement('h1', {}, "Hello React from Nested statements..."), React.createElement('h2', {}, "Hello React from Nested statements...")])])
const root = ReactDOM.createRoot(rootFromHTML);
root.render(heading);