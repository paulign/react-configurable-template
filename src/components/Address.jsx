import React, { Component } from 'react';
import { CardTitle } from 'reactstrap';

export default class Address extends Component {
    render() {
        const {value} = this.props;
        return (
            <CardTitle className="item-address">
                {value}
            </CardTitle>
        )
    }
}