import EncodeModal from "./components/encode-modal";
import ObjectCard from "./components/object-card";
import { listArchivedObjects } from "./data.ts";
import { ArchivedObject } from "./types/archived_object.ts";
import { useState } from "react";

function App() {
  const [filterValue, setFilterValue] = useState("");
  const [showEncodeModal, setShowEncodeModal] = useState(false);

  const filterObjects = (x: ArchivedObject): boolean => {
    if (filterValue === "") {
      return true;
    }
    if (x.name.indexOf(filterValue) >= 0) {
      return true;
    }
    for (const filename of x.filenames) {
      if (filename.indexOf(filterValue) >= 0) {
        return true;
      }
    }
    for (const line of ([] as string[]).concat(x.description ?? [])) {
      if (line.indexOf(filterValue) >= 0) {
        return true;
      }
    }
    return false;
  };

  const archivedObjects = listArchivedObjects();

  const cards = archivedObjects
    .filter(filterObjects)
    .map((x, i) => <ObjectCard data={x} key={`${i}:${x.name}`} />);

  return (
    <>
      <nav
        className="navbar is-black"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <h1 className="navbar-item">Luciferous Data Store</h1>
        </div>
      </nav>
      <div className="container">
        <div className="field is-grouped mt-3">
          <p className="control">
            <button className="button" onClick={() => setShowEncodeModal(true)}>
              Encode Filename
            </button>
          </p>
        </div>
        <div className="field">
          <label className="label">Filter</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Text Input"
              onChange={(e) => setFilterValue(e.target.value)}
            />
          </div>
        </div>
        <p>{filterValue}</p>
        {cards}
      </div>
      <EncodeModal
        isOpen={showEncodeModal}
        execClose={() => setShowEncodeModal(false)}
      />
    </>
  );
}

export default App;
