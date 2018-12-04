import React, { Component } from 'react';
import { Card } from 'reactstrap';

import FieldTemplate from './FieldTemplate';

export default class CardTemplate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // template: [
            //     {
            //         component: "IMAGE",
            //         field: "images",
            //         children: [
            //             {
            //                 component: "PRICE",
            //                 field: "price"
            //             }
            //         ]
            //     },
            //     {
            //         component: "ADDRESS",
            //         field: "full_address"
            //     },
            //     {
            //         component: "AREA",
            //         field: "area"
            //     }
            // ]
            // template: [
            //     {
            //         component: "IMAGE",
            //         field: "images"
            //     },
            //     {
            //         component: "ADDRESS",
            //         field: "full_address"
            //     },
            //     {
            //         component: "PRICE",
            //         field: "price"
            //     },
            //     {
            //         component: "AREA",
            //         field: "area"
            //     }
            // ]
            template: [
                {
                    component: "ADDRESS",
                    field: "full_address"
                },
                {
                    component: "IMAGE",
                    field: "images"
                },
                {
                    component: "PRICE",
                    field: "price"
                },
                {
                    component: "AREA",
                    field: "area"
                }
            ]
        }
    }

    buildCard = (template) => {
        const { house } = this.props;

        return template.map((item, index) => {
            if (!item.children) {
                return <FieldTemplate {...item} key={index} value={house[item.field]} />
            } else {
                return (
                    <FieldTemplate {...item} key={index} value={house[item.field]}>
                        {this.buildCard(item.children, item.field)}
                    </FieldTemplate>
                );
            }
        })
    }

    render() {
        const { template } = this.state;

        return (
            <Card className="item-card">
                {this.buildCard(template)}
            </Card>
        )
    }
}