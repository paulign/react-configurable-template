import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'reactstrap';

import FieldTemplate from './FieldTemplate';

const defaultTemplate = [
    {
        component: "IMAGE",
        field: "images"
    },
    {
        component: "ADDRESS",
        field: "full_address"
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

class CardTemplate extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    buildCard = (template) => {
        const { house } = this.props;

        if(!template) {
            return null;
        }

        return template.map((item, index) => {
            if (!item.children) {
                return <FieldTemplate {...item} key={index} value={house[item.field]} />
            } else {
                return (
                    <FieldTemplate {...item} key={index} value={house[item.field]}>
                        {this.buildCard(item.children)}
                    </FieldTemplate>
                );
            }
        })
    }

    render() {
        const { templates, selectedIndex } = this.props;
        let template = { ...defaultTemplate };

        if (templates && templates.length) {
            template = templates[selectedIndex].template;
        }

        return (
            <Card className="item-card">
                {this.buildCard(template)}
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        templates: state.templates.templates,
        selectedIndex: state.templates.selectedIndex || 0
    }
}

export default connect(mapStateToProps)(CardTemplate);