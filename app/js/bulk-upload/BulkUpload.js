import React from 'react';
import Form from './UploadForm';
import PastUploadTable from './PastUploadTable';
import request from 'superagent-bluebird-promise';

export default React.createClass(
    {
        getInitialState: function () {
            return {pastUploads: []};
        },

        componentDidMount: function() {
            request.get('http://localhost:3000/pastUploads')
                .accept('json')
            //.then(JSON.parse)
            .then(response => {
                    this.setState({
                        pastUploads: response.body
                    });
                    console.log(response.body);
                },
                error => {
                    console.log(error)
                }
            );
        },

        render: function () {
            var pastUploads = this.state.pastUploads;
            var table;
            var uploadForm;

            // No pending uploads processing
            if(!pastUploads.filter(upload=>upload.status==='PENDING').length) {
                uploadForm = <Form />;
            }

            if(pastUploads.length) {
                table = <PastUploadTable pastUploads={pastUploads}/>;
            }

            return (
                <div>
                    {uploadForm}
                    {table}
                </div>
            );
        }
    }
);