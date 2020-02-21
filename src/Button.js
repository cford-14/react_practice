import React from 'react';

const styles = {
    fontSize: 30,
    color: 'purple',
    backgroundColor: 'white',
    borderRadius: 10,
    cursor: 'pointer',
    marginBottom: 50
};

export class Button extends React.Component {
    render() {
        return(
            <button style={styles} onClick={this.props.choosePage}>Next Page</button>
        );
    }
}