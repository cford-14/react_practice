import React from 'react';

const styles = {
    height: 750,
    minWidth: '50%'
};

export class PageImage extends React.Component {
    render() {
        return(
            <div>
                <img style={styles} src={this.props.src} />
            </div>
        );
    }
}