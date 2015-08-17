import React from 'react';
import BulkUpload from './bulk-upload/BulkUpload';

var PAST_UPLOADS = [
    {createDate: new Date(), status: 'PENDING'},
    {createDate: new Date(), status: 'COMPLETE'},
    {createDate: new Date(), status: 'FAILED'}
];

React.render(
    (
        <BulkUpload pastUploads={PAST_UPLOADS}/>
    ),
    document.body
);