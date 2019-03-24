const appRoot = document.getElementById('app');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value= '';
        renderApp();
    } 
};

const clearList = () => {
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderApp = () => {
    const template = (
        <div>
           <h1>{app.title}</h1>
           {app.subtitle && <p>{app.subtitle}</p>}
           <p>{app.options.length ? 'Here are your options' : 'No options'}</p>
           <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
           <button onClick={clearList}>Clear List</button> 
           <ol>
                {
                    app.options.map((opt) => <li key={opt}>{opt}</li>)
                }
           </ol>
           <form onSubmit={onFormSubmit}>
               <input type="text" name="option"/>
               <button>Add Option</button>
           </form>
       </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();