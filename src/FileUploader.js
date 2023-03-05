import React, { useState } from 'react';

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files[0];
    setFile(selectedFile);
  };

  return (
    <div className="file-uploader">
      {file ? (
        <div className="file-info">
          <h2>{file.name}</h2>
          <p>{file.size} bytes</p>
        </div>
      ) : (
        <div
          className="file-drop-zone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <p>Drag and drop a file here, or click to select a file</p>
          <input type="file" onChange={handleFileUpload} />
        </div>
      )}
    </div>
  );
};

export default FileUploader;
