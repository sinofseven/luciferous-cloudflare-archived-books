import { ArchivedObject } from "./types/archived_object.ts";

const PROD_DATA: ArchivedObject[] = [
  {
    name: "入門監視",
    description: ["オライリーのやつ"],
    filenames: ["入門監視.pdf", "入門監視.epub"],
  },
  {
    name: "ルールズ･オブ・プログラミング",
    description: ["オライリーのやつ"],
    filenames: [
      "ルールズ･オブ・プログラミング.pdf",
      "ルールズ･オブ・プログラミング.epub",
    ],
  },
  {
    name: "Effective Python 第2版",
    description: ["オライリーのやつ"],
    filenames: ["Effective Python 第2版.pdf", "Effective Python 第2版.epub"],
  },
  {
    name: "ゼロトラストネットワーク",
    description: ["オライリーのやつ"],
    filenames: [
      "ゼロトラストネットワーク.pdf",
      "ゼロトラストネットワーク.epub",
    ],
  },
  {
    name: "Go言語による並行処理",
    description: ["オライリーのやつ"],
    filenames: ["Go言語による並行処理.pdf", "Go言語による並行処理.epub"],
  },
  {
    name: "AWSの薄い本",
    filenames: [
      "AWSの薄い本 IAMのマニアックな話.pdf",
      "AWSの薄い本Ⅲ データ分析基盤を作ってみよう 〜設計編〜.pdf",
      "AWSの薄い本Ⅴ データ分析基盤を作ってみよう 〜性能測定編〜.pdf",
    ],
  },
  {
    name: "プロダクトオーナーになる前に読む本",
    filenames: [
      "プロダクトオーナーになる前に読む本 vol.1 プロダクトと制約.pdf",
      "プロダクトオーナーになる前に読む本 vol.2 プロダクトの指標策定.pdf",
    ],
  },
  {
    name: "テスターちゃん（同人誌版）",
    filenames: [
      "テスターちゃん 1巻（同人誌版）.pdf",
      "テスターちゃん 2巻（同人誌版）.pdf",
      "テスターちゃん 3巻（同人誌版）.pdf",
      "テスターちゃん 4巻（同人誌版）.pdf",
      "テスターちゃん 5巻（同人誌版）.pdf",
      "テスターちゃん 6巻（同人誌版）.pdf",
      "テスターちゃん 7巻（同人誌版）.pdf",
      "テスターちゃん 8巻（同人誌版）.pdf",
      "テスターちゃん 9巻（同人誌版）.pdf",
    ],
  },
  {
    name: "個人開発がやりたくなる本 - クリエイター13人の実録エッセイ",
    filenames: [
      "個人開発がやりたくなる本 - クリエイター13人の実録エッセイ.pdf",
    ],
  },
  {
    name: "きつねの交換日記",
    filenames: ["きつねの交換日記.pdf"],
  },
  {
    name: "わかる！ドメイン駆動設計 ～もちこちゃんの大冒険～",
    filenames: ["わかる！ドメイン駆動設計 ～もちこちゃんの大冒険～.pdf"],
  },
  {
    name: "中世への旅",
    filenames: [
      "中世への旅 騎士と城.pdf",
      "中世への旅 都市と庶民.pdf",
      "中世への旅 農民戦争と傭兵.pdf",
    ],
  },
  {
    name: "キャラクター創造論 キャラクターのレシピ!",
    filenames: ["キャラクター創造論 キャラクターのレシピ!.pdf"],
  },
  {
    name: "私家版マルタ･サギーは探偵ですか?",
    filenames: [
      "私家版マルタ･サギーは探偵ですか? 5巻 ニッポンのドクトル・バーチ.pdf",
      "私家版マルタ･サギーは探偵ですか? 6巻 探偵の堕天.pdf",
      "私家版マルタ･サギーは探偵ですか? 7巻 マイラブ.pdf",
    ],
  },
  {
    name: "「本の姫」は謳う",
    filenames: [
      "「本の姫」は謳う 第1巻.pdf",
      "「本の姫」は謳う 第2巻.pdf",
      "「本の姫」は謳う 第3巻.pdf",
      "「本の姫」は謳う 第4巻.pdf",
    ],
  },
  {
    name: "さよならピアノソナタ",
    filenames: [
      "さよならピアノソナタ 1巻.pdf",
      "さよならピアノソナタ 2巻.pdf",
      "さよならピアノソナタ 3巻.pdf",
      "さよならピアノソナタ 4巻.pdf",
      "さよならピアノソナタ encore pieces.pdf",
    ],
  },
  {
    name: "マルドゥック・スクランブル",
    filenames: [
      "マルドゥック・スクランブル The First Compression 圧縮.pdf",
      "マルドゥック・スクランブル The Second Combustion 燃焼.pdf",
      "マルドゥック・スクランブル The Third Exhaust 排気.pdf",
    ],
  },
  {
    name: "マルドゥック・ヴェロシティ",
    filenames: [
      "マルドゥック・ヴェロシティ 01巻.pdf",
      "マルドゥック・ヴェロシティ 02巻.pdf",
      "マルドゥック・ヴェロシティ 03巻.pdf",
    ],
  },
  {
    name: "空の彼方",
    filenames: ["空の彼方 01巻.pdf", "空の彼方 02巻.pdf", "空の彼方 03巻.pdf"],
  },
  {
    name: "月の盾",
    filenames: ["月の盾.pdf"],
  },
  {
    name: "つきこい",
    filenames: ["つきこい.pdf"],
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
