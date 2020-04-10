import React from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';

class App extends React.Component {
    state = {
        musicians: [],
    };

    removeMusician = index => {
        const { musicians } = this.state;

        this.setState({
            musicians: musicians.filter((musicians, i) => {
                return i !== index
            }),
        })
    };

    handleSubmit = musician => {
        this.setState({musicians: [...this.state.musicians, musician]})
    };

    render() {
        const { musicians } = this.state;

        return (
            <div className="container">
                <Table musiciansData={musicians} removeMusician={this.removeMusician} />
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }

}
export default App;
