import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/files", { withCredentials: true })
      .then(res => setFiles(res.data.files));
  }, []);

  return (
    <div>
      <h2>Your Files</h2>
      <ul>
        {files.map(file => (
          <li key={file.id}>
            <a href={file.downloadUrl} target="_blank" rel="noopener noreferrer">
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
