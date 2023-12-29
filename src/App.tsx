import { encodeUrlSafeBase64 } from "./helpers/base64.ts";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [filenames, setFilenames] = useState<string[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await resp.json();
      const names = users.map((item: any) => item.name as string);
      console.log(names);
      setFilenames(names);
    };
    if (loading) {
      setLoading(false);
      getUsers();
    }
  }, [filenames, loading]);

  return (
    <>
      <div className="container">
        <h1>
          test {import.meta.env.MODE} {import.meta.env.PROD ? "true" : "false"}{" "}
        </h1>
        <p>{encodeUrlSafeBase64("夏目祐樹")}</p>
        <p>
          <a href="/test-image/icon.png" download="icon_data.png">
            image
          </a>
        </p>
        <img src="/test-image/icon.png" />
      </div>
    </>
  );
}

export default App;
