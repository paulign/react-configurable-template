import React, { Component } from 'react';
import { CardSubtitle } from 'reactstrap';
export default class Price extends Component {
    render() {
        const {value} = this.props;
        return (
            <CardSubtitle className="item-price">
                ${value}
            </CardSubtitle>
        )
    }
}