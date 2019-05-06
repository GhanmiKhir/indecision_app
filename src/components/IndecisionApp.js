import React from 'react';
import Options from './Options';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

    state = {
        options : [],
        selectedOption: undefined
    }
    
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }))
    }

    handlePick = () => {
        const rnd = Math.floor(Math.random() * this.state.options.length)
        const selected = this.state.options[rnd] ;
        this.setState(() => ({selectedOption: selected}))
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState)=> ({
            options: prevState.options.concat(option)
        }));
    }

    handleClearSelected = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            if (options) {  
                this.setState(() => ({options: options}))
            }
        } catch (e) {
            // do nothing
        }
            
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
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
                    handleDeleteOption= {this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
                <OptionModal 
                    selectedOption= {this.state.selectedOption} 
                    handleClearSelected= {this.handleClearSelected}
                />
            </div>
        );
    }
}