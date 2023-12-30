import { encodeFilename } from "../../helpers/encode_filename.ts";
import classNames from "classnames";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  execClose: () => void;
};

export function EncodeModal({ isOpen, execClose }: Props) {
  const [value, setValue] = useState("");
  const [hideHelper, setHideHelper] = useState(true);
  const encodedValue = encodeFilename(value);

  const clickClipboard = async () => {
    await window.navigator.clipboard.writeText(encodedValue);
    setHideHelper(false);
    setTimeout(() => setHideHelper(true), 1000);
  };

  const helperText = hideHelper ? "　" : "copied!";

  return (
    <div className={classNames("modal", { "is-active": isOpen })}>
      <div className="modal-background" onClick={execClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Filename Encode</p>
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">Filename</label>
            <div className="control">
              <input
                className="input"
                type="text"
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Encoded Name</label>
          </div>
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                className="input"
                type="text"
                readOnly
                value={encodedValue}
              />
            </div>
            <div className="control">
              <button className="button" onClick={clickClipboard}>
                copy
              </button>
            </div>
          </div>
          <div className="field has-text-right">
            <p className="help">{helperText}</p>
          </div>
        </section>
        <footer className="modal-card-foot is-justify-content-end">
          <button className="button" onClick={execClose}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
}
