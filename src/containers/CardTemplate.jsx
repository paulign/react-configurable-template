import React, { Component } from 'react';
import FieldTemplate from './FieldTemplate';

export default class CardTemplate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            template: [
                {
                    component: "IMAGE",
                    field: "images",
                    children: [
                        {
                            component: "PRICE",
                            field: "price"
                        }
                    ]
                },
                {
                    component: "ADDRESS",
                    field: "full_address"
                },
                {
                    component: "AREA",
                    field: "area"
                }
            ]
        }
    }

    buildCard = (template) => {

        return template.map((item, index) => {
            if (!item.children) {
                return <FieldTemplate {...item} key={index} />
            } else {
                return (
                    <FieldTemplate {...item} key={index}>
                        {this.buildCard(item.children)}
                    </FieldTemplate>
                );
            }
        })
    }

    render() {
        const { template } = this.state;

        return this.buildCard(template);
    }
}