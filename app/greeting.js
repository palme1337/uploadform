import React from 'react';
import * as asdf from 'css/main.less';

export default React.createClass({
    render: function() {
        return (
            <div className="greeting">
                <h1>Hello, {this.props.name}!</h1>
            </div>
        );
    }

});