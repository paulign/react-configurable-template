import React, { Component } from 'react';
import { CardSubtitle } from 'reactstrap';

export default class Address extends Component {
    render() {
        const {value} = this.props;
        return (
            <CardSubtitle className="item-address">
                {value}
            </CardSubtitle>
        )
    }
}