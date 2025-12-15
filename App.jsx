
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("API error");
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Frontend–Backend Integration</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!data && !error && <p>Loading...</p>}

      {data && (
        <>
          <h3>Message: {data.message}</h3>
          <h4>Users:</h4>
          <ul>
            {data.users.map((user, i) => (
              <li key={i}>{user}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
