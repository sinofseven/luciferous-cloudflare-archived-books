import { encodeFilename } from "../src/helpers/encode_filename";
import { loadEnvironments, upload, createS3Client } from "./upload_files.mjs";

type FileInfo = {
  path: string;
  name: string;
};

async function main() {
  const { endpointUrl, prefix, bucketName } = loadEnvironments();
  const client = createS3Client(endpointUrl);
  const files = listFiles();
  for (const info of files) {
    const key = `${prefix}/${encodeFilename(info.name)}`;
    console.log({
      msg: "次のファイルをアップロードします",
      path: info.path,
      name: info.name,
      bucket: bucketName,
      key: key,
    });
    await upload({
      filePath: info.path,
      bucket: bucketName,
      key,
      client,
    });
  }
}

function listFiles(): FileInfo[] {
  return [
    {
      path: "/Users/yuta/space/pdfs_downloads/[9005495225867040] kitune_group_journal.pdf",
      name: "きつねの交換日記.pdf",
    },
    {
      path: "/Users/yuta/space/pdfs_downloads/[9005495225719830] C91-Domain_Driven_Design.pdf",
      name: "わかる！ドメイン駆動設計 ～もちこちゃんの大冒険～.pdf",
    },
  ];
}

await main();
