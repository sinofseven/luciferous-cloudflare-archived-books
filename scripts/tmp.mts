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
      path: "/Volumes/home/mirai_books/JE39412=48719_15営-3冊 00001/中世への旅 騎士と城 [ハインリヒ・プレティヒャ].pdf",
      name: "中世への旅 騎士と城.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/JE39412=48719_15営-3冊 00001/中世への旅 都市と庶民 [ハインリヒ・プレティヒャ].pdf",
      name: "中世への旅 都市と庶民.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/JE39412=48719_15営-1冊/中世への旅 農民戦争と傭兵 [ハインリヒ・プレティヒャ].pdf",
      name: "中世への旅 農民戦争と傭兵.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/gigafile-0401-4ac73a1f5b33b1170d34c67d04992a5c/キャラクター創造論／キャラクターのレシピ！ [榊一郎].pdf",
      name: "キャラクター創造論 キャラクターのレシピ!.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/gigafile-0401-4ac73a1f5b33b1170d34c67d04992a5c/私家版マルタ・サギーは探偵ですか？ 第05巻 [水とピーナッツ].pdf",
      name: "私家版マルタ･サギーは探偵ですか 5巻 ニッポンのドクトル・バーチ.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/gigafile-0401-4ac73a1f5b33b1170d34c67d04992a5c/私家版マルタ・サギーは探偵ですか？ 第06巻 [水とピーナッツ].pdf",
      name: "私家版マルタ･サギーは探偵ですか 6巻 探偵の堕天.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/gigafile-0401-4ac73a1f5b33b1170d34c67d04992a5c/私家版マルタ・サギーは探偵ですか？ 第07巻 [水とピーナッツ].pdf",
      name: "私家版マルタ･サギーは探偵ですか 7巻 マイラブ.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/JE15717=22836_60営_CT--59冊 00001/「本の姫」は謳う 第01巻 [多崎礼].pdf",
      name: "「本の姫」は謳う 第1巻.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/JE15717=22836_60営_CT--59冊 00001/「本の姫」は謳う 第02巻 [多崎礼].pdf",
      name: "「本の姫」は謳う 第2巻.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/JE15717=22836_60営_CT--59冊 00001/「本の姫」は謳う 第03巻 [多崎礼].pdf",
      name: "「本の姫」は謳う 第3巻.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/JE15717=22836_60営_CT--59冊 00001/「本の姫」は謳う 第04巻 [多崎礼].pdf",
      name: "「本の姫」は謳う 第4巻.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/JE15717=22836_60営_CT--59冊 00001/さよならピアノソナタ [杉井光].pdf",
      name: "さよならピアノソナタ 1巻.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/JE15717=22836_60営_CT--59冊 00001/さよならピアノソナタ2 [杉井光].pdf",
      name: "さよならピアノソナタ 2巻.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/JE15717=22836_60営_CT--59冊 00001/さよならピアノソナタ 第03巻 [杉井光].pdf",
      name: "さよならピアノソナタ 3巻.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/JE15717=22836_60営_CT--59冊 00001/さよならピアノソナタ 第04巻 [杉井光].pdf",
      name: "さよならピアノソナタ 4巻.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/JE15717=22836_60営_CT--59冊 00001/さよならピアノソナタ encore pieces [杉井光].pdf",
      name: "さよならピアノソナタ encore pieces.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/JE15717=22836_60営_CT--59冊 00001/マルドゥック・スクランブル The First Compression 圧縮 [冲方丁].pdf",
      name: "マルドゥック・スクランブル The First Compression 圧縮.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/JE15717=22836_60営_CT--59冊 00001/マルドゥック・スクランブル The Second Combustion 燃焼 [冲方丁].pdf",
      name: "マルドゥック・スクランブル The Second Combustion 燃焼.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/JE15717=22836_60営_CT--59冊 00001/マルドゥック・スクランブル The Third Exhaust 排気 [冲方丁].pdf",
      name: "マルドゥック・スクランブル The Third Exhaust 排気.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/JE15717=22836_60営_CT--59冊 00001/マルドゥック・ヴェロシティ 第01巻 [冲方丁].pdf",
      name: "マルドゥック・ヴェロシティ 01巻.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/JE15717=22836_60営_CT--59冊 00001/マルドゥック・ヴェロシティ 第02巻 [冲方丁].pdf",
      name: "マルドゥック・ヴェロシティ 02巻.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/JE15717=22836_60営_CT--59冊 00001/マルドゥック・ヴェロシティ 第03巻 [冲方丁].pdf",
      name: "マルドゥック・ヴェロシティ 03巻.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/JE15717=22836_60営_CT--59冊 00001/空の彼方 [菱田愛日].pdf",
      name: "空の彼方 01巻.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/JE15717=22836_60営_CT--59冊 00001/空の彼方2 [菱田愛日].pdf",
      name: "空の彼方 02巻.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/JE15717=22836_60営_CT--59冊 00001/空の彼方3 [菱田愛日].pdf",
      name: "空の彼方 03巻.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/JE15717=22836_60営_CT--59冊 00001/月の盾 [岩田洋季].pdf",
      name: "月の盾.pdf",
    },
    {
      path: "/Volumes/home/mirai_books/JE15717=22836_60営_CT--59冊 00001/つきこい [山科千晶].pdf",
      name: "つきこい.pdf",
    },
  ];
}

await main();
