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
        <h1>test</h1>
        <img src="https://data.archives.books.luciferous.app/icon.png" />
      </div>
    </>
  );
}

export default App;
