import React, { Component } from 'react';


class Form extends Component {
    render() {
        return (
            <div className="Form">
                <form onSubmit={this.props.getWeather}>
                    <input type='text' name='city' placeholder='city' />
                    <input type='text' name='country' placeholder='country' />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
