import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardsList from '../views/CardsList';
import Header from '../layout/Header';
import { getTemplates, getHouses } from '../actions';

class AppContainer extends Component {
    componentDidMount() {
        this.props.getTemplates();
        this.props.getHouses();
    }

    render() {
        const { templatesLoading, itemsLoading } = this.props;
        if (templatesLoading || itemsLoading) {
            return <h1 className="p-5 text-center">Loading...</h1>
        }
        return (
            <div>
                <header>
                    <Header />
                </header>
                <div className="main">
                    <CardsList />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        templatesLoading: state.templates.isLoading,
        itemsLoading: state.houses.isLoading
    }
}

export default connect(mapStateToProps, { getTemplates, getHouses })(AppContainer);