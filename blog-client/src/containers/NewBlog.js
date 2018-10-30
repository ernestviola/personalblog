import React, { Component } from 'react'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import LoaderButton from '../components/LoaderButton';
import './NewBlog.css';
import config from '../config';


export default class NewBlog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        };
    }

    validateForm() {
        return this.state.content.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="NewBlog">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="content">
                        <FormControl
                            onChange={this.handleChange}
                            value={this.state.content}
                            componentClass="textarea"
                        />

                    </FormGroup>
                </form>
                <LoaderButton
                    block
                    bsStyle="primary"
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit"
                    isLoading={this.state.isLoading}
                    text="Create"
                    loadingText="Creating…"
                />
            </div>
        )
    }
}
