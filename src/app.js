class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            options : ['Thing one', 'Thing two', 'Thing three']
        }
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handlePick() {
        const rnd = Math.floor(Math.random() * this.state.options.length)
        const selected = this.state.options[rnd] ;
        alert(selected);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => {
            
            return {
                options: prevState.options.concat(option)
            }
        })
    }


    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the heands of a computer'

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions = {this.state.options.length > 0}
                    handlePick = {this.handlePick}    
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions= {this.handleDeleteOptions}
                />
                <AppOption handleAddOption={this.handleAddOption}/>
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
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                What should I do
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <ol>
                    {
                        this.props.options.map((opt) => <Option key={opt} optionText={opt} />)
                    }
                </ol>
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
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
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();  

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {
                error: error
            };
        })
    }
    
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));