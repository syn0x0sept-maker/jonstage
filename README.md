# JonStage

## Yoroduwemaki(万絵巻) Official Website

関西大学演劇サークル劇団万絵巻の公式ウェブサイトのプロジェクト

## プロジェクト構造

[Astro](https://astro.build/)をベースに、軽量で高速、かつメンテナンスしやすい構成で設計しています。

JonStageは次のフォルダとファイルで構成されています。

```text
/
├── LICENSE
├── README.md
├── astro.config.mjs
├── contents
│   ├── blog/
│   ├── diary/
│   └── performances/
├── package.json
├── public/
├── src
│   ├── assets
│   ├── components
│   ├── content.config.ts
│   ├── layouts
│   └── pages
└── tsconfig.json
```
## コンテンツ構造

JonStageは、`contents`フォルダの中に次のようなコンテンツ構造で構成されています。

- `/blog/`: ブログ記事を格納するフォルダ
- `/diary/`: 劇団員日記を格納するフォルダ
- `/performances/`: 公演を格納するフォルダ

### Blog

ブログ記事コンテンツ構造は現在作成中です。

### Diary

劇団員日記には次のようなフロントマターを設定してください。

```text
---
title: "2025年度新人発表公演終了のお知らせ"
date: 2026-03-15
event_name: "2025年度新人発表公演"
---
```

- title: 日記のタイトルを設定してください。必須項目です。
- date: 日記の日付をYYYY-MM-DD形式で設定してください。必須項目です。
- event_name: 日記に関連する公演の名前(カテゴリ)を入力してください。任意項目です。

### Performances

公演コンテンツの作成方法については現在検討中です。

## コマンド

すべてのコマンドは、プロジェクトのルートディレクトリで実行してください。

| Command                   | Action                                    |
|:--------------------------|:------------------------------------------|
| `npm install`             | 依存関係をインストール                               |
| `npm run dev`             | `localhost:4321`でローカル開発サーバーを起動            |
| `npm run build`           | `./dist/`に本番サイトをビルド                       |
| `npm run preview`         | デプロイする前にローカルでビルドをプレビュー                    |
| `npm run astro ...`       | `astro add`、`astro check` などの CLI コマンドを実行 |
| `npm run astro -- --help` | Astro CLI の使用に関するヘルプ                      |

## 技術スタック

- フレームワーク: [Astro](https://astro.build/)
- UI: [AsagaoUI](https://github.com/ctpena/asagaoui)
- スタイル: [SCSS](https://sass-lang.com/)

## 団員のみなさんへ

JonStageはJonによって設計と構築され、2006年からの劇団員日記、過去の公演情報などの劇団万絵巻が生み出したほぼすべてのデータが蓄積されたプロジェクトです。

## 貢献

JonStageは、劇団員・OB/OG・関係者の手によって開発されています。改善案・修正・新機能の提案は大歓迎です。

## 謝辞

Jonを始め、開発メンバー、劇団万絵巻団員一同に感謝します。

© Yoroduwemaki / Designed & Developed by Hiroshi ISOBE.
