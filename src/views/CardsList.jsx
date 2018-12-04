import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CardTemplate from '../containers/CardTemplate';

const house = {
    "id": 5401,
    "full_address": "Киев, Киевская область, Дарницкий",
    "description": "Дом не достроенный (без внутренних отделочных работ кирпич, газоблок) на 60 кв.м. крытый битумная черепица, утеплен 100мм, метало пластиковые окна.",
    "images": [
        "https://img01-olxua.akamaized.net/img-olxua/670747936_1_1000x700_srochno-prodam-dom-v-r-ne-osokorkov-kiev.jpg",
        "https://img01-olxua.akamaized.net/img-olxua/670747936_6_1000x700_srochno-prodam-dom-v-r-ne-osokorkov-.jpg"
    ],
    "area": 210,
    "price": 203400
}

class CardsList extends Component {
    render() {
        return (
            <Container className="py-3">
                <Row className="align-items-stretch">
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <CardTemplate house={house} />
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <CardTemplate house={house} />
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <CardTemplate house={house} />
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <CardTemplate house={house} />
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <CardTemplate house={house} />
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <CardTemplate house={house} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CardsList;