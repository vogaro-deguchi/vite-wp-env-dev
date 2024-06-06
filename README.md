# Watt Magazine

# How to use

node 18

```
yarn
yarn wp-start
yarn watch
```

フロント：localhost:8888

管理画面：localhost:8888/wp-login.php

admin / password


- `yarn watch`

distに吐き出され変更を監視。

- `yarn wp-start`

wpサーバ立ち上げ。

- ```yarn wp-stop```

wpサーバ停止。

- `yarn wp-export`

`sql/wpenv.sql`にDBをエクスポート。

- `yarn wp-import`

`sql/wpenv.sql`に存在するsplをインポート。

# .wp-env.json

WordPressの管理をしているjson。

コアファイルやPHPのバージョンの変更、プラグインの追加をしたい場合はこちらを追加。

記述変更したらwpサーバサイド立ち上げ。

## vite.config.mjs

Viteの設定ファイル。

`src/assets/`のscriptsとscssをコンパイルして`dist`に吐き出します。

`src/public/`で管理しているファイルは圧縮されずに`dist`に吐き出されます。
