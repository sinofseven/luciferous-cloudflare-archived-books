import { encodeFilename } from "../src/helpers/encode_filename";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { createReadStream } from "fs";
import { basename } from "path";

async function main() {
  const env = loadEnvironments();
  const filePaths = loadFilePaths();
  const client = createS3Client(env.endpointUrl);
  for (const filePath of filePaths) {
    const filename = basename(filePath);
    const encodedFilename = encodeFilename(filename);
    const key = `${env.prefix}/${encodedFilename}`;
    console.log({
      msg: "次のファイルをアップロードします",
      filePath,
      encodedFilename,
      bucketName: env.bucketName,
      key,
    });
    await upload({
      bucket: env.bucketName,
      key: `${env.prefix}/${encodedFilename}`,
      filePath,
      client,
    });
  }
}

export function loadEnvironments() {
  const endpointUrl = process.env.R2_ENDPOINT_URL;
  const bucketName = process.env.R2_BUCKET_NAME;
  const prefix = process.env.VITE_PREFIX;
  if (endpointUrl == null || bucketName == null || prefix == null) {
    throw new Error("環境変数が不正です");
  }
  return { endpointUrl, bucketName, prefix };
}

function loadFilePaths(): string[] {
  return process.argv.slice(2);
}

export function createS3Client(endpointUrl: string): S3Client {
  return new S3Client({
    endpoint: endpointUrl,
    region: "auto",
  });
}

export async function upload(data: {
  filePath: string;
  bucket: string;
  key: string;
  client: S3Client;
}) {
  const command = new PutObjectCommand({
    Bucket: data.bucket,
    Key: data.key,
    Body: createReadStream(data.filePath),
  });
  await data.client.send(command);
}

await main();
