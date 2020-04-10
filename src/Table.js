import React from "react";


const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Surname</th>
        </tr>
        </thead>

    )
};

const TableBody = props => {

    const rows = props.musiciansData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.surname}</td>
                <td>
                <button onClick={() => props.removeMusician(index)}>Delete</button>
                </td>
            </tr>
        )
    });

    return <tbody>{rows}</tbody>
};


class Table extends React.Component {
    render() {

        const { musiciansData, removeMusician } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody musiciansData={musiciansData} removeMusician={removeMusician} />
            </table>
        )
    }
}

export default Table;

