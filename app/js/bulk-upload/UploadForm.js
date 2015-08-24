import React from 'react';
import DropZone from 'react-dropzone';

export default React.createClass({
    onDrop: function (files) {
        console.log('Received files: ', files);
    },

    onOpenClick: function () {
        this.refs.dropzone.open();
    },

    render: function () {

        return (
            <div>
                <DropZone class='upload-drop-zone' width='60em'>
                    Try dropping a file here or clicking to browse to a file!
                </DropZone>
            </div>
        );
    }
})