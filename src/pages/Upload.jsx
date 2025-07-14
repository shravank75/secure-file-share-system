function Upload() {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    await fetch("http://localhost:5000/api/upload", {
      method: "POST",
      credentials: "include",
      body: formData
    });

    alert("File uploaded!");
  };

  return (
    <div>
      <h2>Upload a File</h2>
      <input type="file" onChange={handleUpload} />
    </div>
  );
}

export default Upload;
