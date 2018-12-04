import React, { Component } from 'react';
import Image from '../components/Image';
import Address from '../components/Address';
import Price from '../components/Price';
import Area from '../components/Area';
import { CardBody } from 'reactstrap';

export default class FieldTemplate extends Component {
    components = {
        IMAGE: Image,
        ADDRESS: Address,
        PRICE: Price,
        AREA: Area
    }

    render() {
        const { component, field } = this.props;
        const Component = this.components[component] || null;

        if (!Component) {
            return null;
        }

        return (
            <CardBody className={`field-template ${field}-component`}>
                {this.props.children}
                <Component {...this.props} />
            </CardBody>
        )
    }
}