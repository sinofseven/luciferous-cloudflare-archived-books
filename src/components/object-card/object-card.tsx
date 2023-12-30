import { encodeFilename } from "../../helpers/encode_filename.ts";
import { ArchivedObject } from "../../types/archived_object.ts";
import { faAngleDown, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Props = {
  data: ArchivedObject;
};

export function ObjectCard({ data }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const prefix = import.meta.env.VITE_PREFIX;

  const icon = isOpen ? faAngleDown : faAngleLeft;

  const linesDescription = ([] as string[])
    .concat(data.description ?? [])
    .map((line) => <p style={{ whiteSpace: "break-spaces" }}>{line}</p>);
  const description =
    data.description == null ? null : (
      <div className="mb-4">{linesDescription}</div>
    );

  const files = data.filenames.map((x) => (
    <li key={x}>
      <a href={`/${prefix}/${encodeFilename(x)}`} download={x}>
        {x}
      </a>
    </li>
  ));

  const content = (
    <div className="card-content">
      {description}
      {files}
    </div>
  );

  return (
    <>
      <div className="card mb-2">
        <header className="card-header">
          <p
            className="card-header-title"
            onClick={() => setIsOpen(!isOpen)}
            style={{ cursor: "pointer" }}
          >
            {data.name}
          </p>
          <button
            className="card-header-icon"
            aria-label="more options"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="icon">
              <FontAwesomeIcon icon={icon} />
            </span>
          </button>
        </header>
        {isOpen ? content : null}
      </div>
    </>
  );
}
