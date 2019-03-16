const appRoot = document.getElementById('app');
const app= {
    title: "My first react app",
    subtitle: '',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'no options'}</p>
    </div>
);

const user = {
    name: "",
    age: "16",
    location: "Sfax"
}

function getLocation() {
    if (user.location) {
        return <p>Location: {user.location}</p>
    }

}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation()}
    </div> 
);

ReactDOM.render(template, appRoot);
