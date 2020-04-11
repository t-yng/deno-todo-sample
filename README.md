# deno-todo-sample
This is Todo sample application with Deno to study.

## Setup

```
$ docker-compose up -d
$ deno fetch package.ts
$ ./db/migration/migrate.sh
```

## 実行確認方法

### TODO一覧の取得

```
$ curl localhost:8000
```

### TODOの作成

```
$ curl -XPOST localhost:8000/api/todos -H "Content-Type: application/json;"  -d '{"content": "test"}'
```

## TODO

### 環境構築TODO
* Docker構築
  * [x] Denoの開発環境
  * [x] MySQL構築

### 実装TODO
* API実装
  * [x] TODOの作成
    * POSTリクエスト
  * [x] TODOの読み込み
    * GETリクエスト JSONで一覧を返す
  * [ ] TODOの更新
    * PUTリクエスト
  * [x] TODOの削除
    * DELETEリクエスト
* DBのCRUD実装
  * [x] TODOの作成
  * [x] TODOの読み込み
  * [ ] TODOの更新
  * [x] TODOの削除

### リファクタ

* [ ] DBのマイグレーションの実行を自動化する
* [ ] deno_mysqlを[denolib/typeorm](https://github.com/denolib/typeorm)に置き換える
