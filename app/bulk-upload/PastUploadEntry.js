import React from 'react';

export default React.createClass({
    render: function () {
        var entry = this.props.upload,
            createDate = entry.createDate.toString(),
            status = entry.status;
        return (
            <tr>
                <td>{createDate}</td>
                <td>{status}</td>
                <td>View errz</td>
            </tr>
        );
    }
});