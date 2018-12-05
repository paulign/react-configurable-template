import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'reactstrap';

import CardGenerator from './CardGenerator';

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
];

class CardTemplate extends Component {

    render() {
        const { templates, selectedIndex, house } = this.props;
        let template = { ...defaultTemplate };

        if (templates && templates.length) {
            template = templates[selectedIndex].template;
        }

        return (
            <Card className="item-card">
                <CardGenerator template={template} house={house} />
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