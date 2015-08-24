import React from 'react';
import PastUploadEntry from './PastUploadEntry';

export default React.createClass({
    render: function () {
        console.log(this.props);
        console.log(this.state);

        var rows = this.props.pastUploads.map(
                upload => <PastUploadEntry upload={upload}/>
        );

        return (
            <table className='table table-striped'>
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