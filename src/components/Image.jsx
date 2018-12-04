import React, { Component } from 'react';

export default class Image extends Component {
    render() {
        const { value } = this.props;
        return (
            <img
                src={value[0]}
                alt=""
            />
        )
    }
}