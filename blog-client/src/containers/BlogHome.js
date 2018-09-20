import React, { Component } from 'react'
import './BlogHome.css';

export default class BlogHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };
    }

    componentDidMount() {
    }
    render() {
        return (
            <div>
                This is the blog
            </div>
        )
    }
}
