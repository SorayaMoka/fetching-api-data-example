import React from 'react';
import './App.css';
import Table from './Table';

class App extends React.Component {
    state = {
        musicians: [ {
            name: 'Charlie',
            surname: 'Parker',
        },
            {
                name: 'Miles',
                surname: 'Davis',
            },
            {
                name: 'Kenny',
                surname: 'Gareth',
            },
            {
                name: 'Nina',
                surname: 'Simone',
            },
        ],
    };

    removeCharacter = index => {
        const { musicians } = this.state;

        this.setState({
            musicians: musicians.filter((musicians, i) => {
                return i !== index
            }),
        })
    };

    render() {
        const { musicians } = this.state;

        return (
            <div className="container">
                <Table musiciansData={musicians} removeMusician={this.removeMusician} />
            </div>
        )
    }

}
export default App;
