import React from 'react';

class Form extends React.Component {

    initialState = {
        name: '',
        surname: '',
    };

    state = this.initialState;

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        })
    };

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    };

    render() {
        const { name, surname } = this.state;

        return (
         <form>
             <label htmlFor="name">Name</label>
             <input
                 type="text"
                 name="name"
                 id="name"
                 value={name}
                 onChange={this.handleChange} />
             <label htmlFor="surname">Surname</label>
             <input
                 type="text"
                 name="surname"
                 id="surname"
                 value={surname}
                 onChange={this.handleChange} />
             <input type="button" value="Submit" onClick={this.submitForm} />
         </form>
        );
    }
}

export default Form;
