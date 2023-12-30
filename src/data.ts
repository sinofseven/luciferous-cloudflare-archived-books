import { ArchivedObject } from "./types/archived_object.ts";

const PROD_DATA: ArchivedObject[] = [
  {
    name: "入門監視",
    description: ["オライリーのやつ"],
    filenames: ["入門監視.pdf", "入門監視.epub"],
  },
];

const DEV_DATA: ArchivedObject[] = [
  {
    name: "アイコン画像",
    filenames: ["icon.png"],
  },
  {
    name: "テスト画像2",
    filenames: ["test_image.png", "test_image.avif"],
  },
];

export function listArchivedObjects(): ArchivedObject[] {
  return import.meta.env.PROD ? PROD_DATA : DEV_DATA;
}
