import React, { Component } from 'react';
import Markdown from 'react-markdown';

export default class Content extends Component {
    constructor(props, context) {
        super(props, context);

        this.ContentMarkdown = `# Your markdown here \n <h1>This won't be translated into HTML </h1>`;
    }

    render() {
        return (
            <div>
                <Markdown
                    escapeHtml={true}
                    source={this.ContentMarkdown}
                />
            </div>
        );
    }
}
