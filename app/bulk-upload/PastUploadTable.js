import React from 'react';
import _ from 'underscore';
import PastUploadEntry from './PastUploadEntry';

export default React.createClass({
    render: function () {
        console.log(this.props)
        console.log('asdasdasd');
        var rows = _.map(this.props.pastUploads, function(upload) {
            console.log(upload)
            return <PastUploadEntry upload={upload}/>;
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Status</th>
                    <th>asd</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
})