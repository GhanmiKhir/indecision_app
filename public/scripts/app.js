'use strict';

var appRoot = document.getElementById('app');
var app = {
    title: "My first react app",
    subtitle: '',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'no options'
    )
);

var user = {
    name: "",
    age: "16",
    location: "Sfax"
};

function getLocation() {
    if (user.location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            user.location
        );
    }
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation()
);

ReactDOM.render(template, appRoot);
