import { encodeFilename } from "../src/helpers/encode_filename";

const listNames = process.argv.slice(2);

if (listNames.length === 0) {
  console.error("no name");
  process.exit(1);
}

listNames.forEach((name, index) => {
  if (index > 0) {
    console.log("=".repeat(20));
  }
  console.log(name);
  console.log(encodeFilename(name));
});
