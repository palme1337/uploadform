import React from 'react';
import Form from './Form';
import PastUploadTable from './PastUploadTable'


export default React.createClass(
    {
        render: function () {
            return (
                <div>
                    <Form pastUploads={this.props.pastUploads} />
                    <PastUploadTable pastUploads={this.props.pastUploads} />
                </div>
            );
        }
    }
);