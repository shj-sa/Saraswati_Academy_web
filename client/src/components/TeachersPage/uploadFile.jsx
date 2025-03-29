import React, { useState, useRef } from "react";
import Sidebar from "./Sidebar";

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const fileNameRef = useRef("");
  const fileExtensionRef = useRef("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const nameWithoutExtension = file.name.replace(/\.[^/.]+$/, "");
      const extension = file.name.match(/\.[^/.]+$/)[0];
      setSelectedFile(file);
      fileNameRef.current = nameWithoutExtension;
      fileExtensionRef.current = extension;
    }
  };

  const handleFileNameChange = (event) => {
    const newName = event.target.value.slice(0, 50); // Limit file name length
    fileNameRef.current = newName;
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setUploadStatus("Please select a file first.");
      return;
    }

    setUploadStatus("Uploading...");
    setTimeout(() => {
      setUploadStatus("File uploaded successfully!");
      setSelectedFile(null);
      fileNameRef.current = "";
      fileExtensionRef.current = "";
    }, 2000);
  };

  const renderPreview = React.useMemo(() => {
    if (!selectedFile) return null;
    const fileType = selectedFile.type;
    const fullFileName = fileNameRef.current + fileExtensionRef.current;

    if (fileType.includes("image")) {
      return (
        <img
          src={URL.createObjectURL(selectedFile)}
          alt="Preview"
          className="mt-4 max-w-full h-auto rounded-lg shadow"
        />
      );
    }
    if (fileType.includes("pdf")) {
      return (
        <iframe
          src={URL.createObjectURL(selectedFile)}
          className="mt-4 w-full h-[500px] border rounded-lg shadow"
          title="PDF Preview"
        ></iframe>
      );
    }
    if (fileType.includes("text")) {
      return (
        <p className="mt-4 p-2 bg-gray-100 border rounded text-gray-700">
          Text file selected: {fullFileName}
        </p>
      );
    }
    if (fileType.includes("presentation")) {
      return (
        <p className="mt-4 p-2 bg-gray-100 border rounded text-gray-700">
          PPT file selected: {fullFileName}
        </p>
      );
    }
    return (
      <p className="mt-4 p-2 bg-gray-100 border rounded text-gray-700">
        Selected file: {fullFileName}
      </p>
    );
  }, [selectedFile]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6">
        <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 w-full max-w-md sm:max-w-lg text-center">
          <h1 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">
            📂 Upload File
          </h1>
          <label className="cursor-pointer w-full flex flex-col items-center px-4 py-4 sm:py-6 bg-gray-200 text-gray-700 rounded-lg shadow-md border-dashed border-2 border-gray-400 hover:bg-gray-300">
            <input type="file" onChange={handleFileChange} className="hidden" />
            <span className="text-sm sm:text-lg font-medium">
              Click to select a file
            </span>
          </label>
          {selectedFile && (
            <div className="mt-4 w-full flex flex-col items-center">
              <div className="flex items-center">
                <input
                  type="text"
                  defaultValue={fileNameRef.current}
                  onChange={handleFileNameChange}
                  className="border p-2 rounded text-center"
                />
                <span className="ml-2 text-gray-700">
                  {fileExtensionRef.current}
                </span>
              </div>
            </div>
          )}
          {renderPreview}
          <button
            onClick={handleUpload}
            className="mt-4 sm:mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Upload
          </button>
          {uploadStatus && (
            <p className="mt-4 text-gray-700 font-semibold text-sm sm:text-base">
              {uploadStatus}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
