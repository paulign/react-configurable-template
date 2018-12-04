import React, { Component } from 'react';
import { CardTitle } from 'reactstrap';
export default class Price extends Component {
    render() {
        const {value} = this.props;
        return (
            <CardTitle className="item-price">
                ${value}
            </CardTitle>
        )
    }
}