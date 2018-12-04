import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Collapse,
    Navbar,
    Container,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { changeTemplate } from "../actions";

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { templates, selectedIndex, changeTemplate } = this.props;

        return (
            <div>
                <Navbar color="dark" dark fixed="top" expand="md">
                    <Container>
                        <NavbarBrand href="/">Test Task</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                {!!templates && !!templates.length && (
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            Template {templates[selectedIndex].id}
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            {templates.map((item, index) => {
                                                return (
                                                    <DropdownItem onClick={() => changeTemplate(index)} key={item.id} active={index === selectedIndex}>
                                                        Template {item.id}
                                                    </DropdownItem>
                                                )
                                            })}
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                )}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        templates: state.templates.templates,
        selectedIndex: state.templates.selectedIndex || 0
    }
}

export default connect(mapStateToProps, { changeTemplate })(Header)