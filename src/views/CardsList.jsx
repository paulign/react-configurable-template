import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap';
import CardTemplate from '../containers/CardTemplate';

class CardsList extends Component {

    render() {
        const { houses } = this.props;

        return (
            <Container className="py-3">
                {!!houses && !!houses.length && (
                    <Row className="align-items-stretch">
                        {houses.map(item => (
                            <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
                                <CardTemplate house={item} />
                            </Col>
                        ))}
                    </Row>
                )}
                {(!houses || !houses.length) && (
                    <div className="p-5 text-center">
                        <h1>Nothing to display...</h1>
                    </div>
                )}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        houses: state.houses.houses,
    }
}

export default connect(mapStateToProps)(CardsList);