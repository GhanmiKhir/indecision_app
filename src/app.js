class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the heands of a computer'
        const options = ['Thing one', 'Thing two', 'Thing three']

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options} />
                <AppOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick () {

    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do</button>
            </div>
        );
    }
}

class Options extends React.Component {
    removeAll () {
        console.log('removed');
    }
    render() {
        return (
            <div>
                <ol>
                    {
                        this.props.options.map(opt => <Option key={opt} optionText={opt} />)
                    }
                </ol>
                <button onClick={this.removeAll}>Remove all</button>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>
                {this.props.optionText}
            </li>
        );
    }
}

class AppOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    
    handleAddOption(e) {
        e.preventDefault();
        
        const option = e.target.elements.option.value.trim();
        if (option) {
            console.log('baka');
        }
    
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));