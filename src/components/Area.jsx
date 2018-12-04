import React, { Component } from 'react';
import { CardText } from 'reactstrap';

export default class Image extends Component {
    render() {
        const {value} = this.props;

        if(!value) {
            return null;
        }

        return (
            <CardText className="item-area">
                {value} sq. ft.
            </CardText>
        )
    }
}