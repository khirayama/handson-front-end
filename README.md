# Hands on Front-end :-) with CoffeeScript
[[WEBSITE] Hands on Front-end :-) with CoffeeScript](http://khirayama.github.io/handson-front-end/)  
[[CODEPEN] BEGINNER](http://codepen.io/anon/pen/qOOEQa)  
[[CODEPEN] INTERMEDIATE](http://codepen.io/anon/pen/zvvxev)  
[[CODEPEN] SENIOR](http://codepen.io/anon/pen/MaayeY)  
※ CODEPENはForkしてから使用してください

対象:

- よりよいフロント開発を望む開発者（特にRuby on Rails）
- JavaScript、CoffeeScriptの読み書きを行える開発者
- ウェブフロントに興味のあるiOS、Android開発者

フロントエンドでは一般的にGUIが用いられています。特にウェブではJavaScriptとHTML、CSSを用いて行います。  

ここで学ぶ内容はGUIの基本でもあり、iOSやAndroidなどのアプリケーションに共通する部分が多くあります。GUIアプリケーションの構築の基礎を学ぶことでどのような環境でもマッピングを行い、対処する力をつけることができます。  

またLessons(Extra)では全く同じ内容を、とても小さいViewクラスとModelクラス、グローバル汚染を避けるためのModuleクラスを用いて再構築します。  
これによりフロントエンド環境でのフレームワークの役割と効率化を知るとともに、フレームワークが何を助け、どう実装されるのかの理解の助けになれば幸いです。  

このドキュメントは荒削りな部分があります。様々な方向からのアドバイス（特にPullRequest！）を期待しています。このドキュメントがすべての開発者の力になれることを願います。  

## Index

- [About Hands on Front-end](https://github.com/khirayama/handson-front-end#about-hands-on-front-end--)
- [Get started](https://github.com/khirayama/handson-front-end#get-started)
- [Contents](https://github.com/khirayama/handson-front-end#contents)
  - [BEGINNER | make a simple tab](https://github.com/khirayama/handson-front-end#beginner--make-a-simple-tab)
  - [INTERMEDIATE | make a sortable table & fetch button](https://github.com/khirayama/handson-front-end#intermediate--make-a-sortable-tabel--fetch-btn)
  - [SENIOR | make a sortable table & a modal for adding an item](https://github.com/khirayama/handson-front-end#senior--make-a-sortable-tabel--a-modal-for-adding-an-item)
  - [About Lessons(Extra)](https://github.com/khirayama/handson-front-end#about-lessonsextra)
- [Rules](https://github.com/khirayama/handson-front-end#rules)
- [About jQuery](https://github.com/khirayama/handson-front-end#about-jquery)
  - [Recommended jQuery Methods](https://github.com/khirayama/handson-front-end#recommended-jquery-methods)
  - [Deprecated jQuery Methods](https://github.com/khirayama/handson-front-end#deprecated-jquery-methods)
- [Feedback](https://github.com/khirayama/handson-front-end#feedback)

## About Hands on Front-end :-)

このリポジトリはウェブフロント開発において、どう開発すべきか。どう設計すべきか。の一案を示します。他にもよい方法が必ずあります。出会った時にはぜひ声をかけてください。  

また記述はCoffeeScriptで行っています。これは広く利用されているRuby on Railsでの開発を想定してるためです。  
現在（2015.09.01）、BabelなどのES2015を取り入れた環境が広まっていますが、ここではRuby on Railsの標準に則って進めます。  
またテンプレートにはslimによく似たjadeを用いました。  
このリポジトリに多くの目的を入れたくはなかったのですが、今、ウェブフロント開発はどのような環境で行われているのかに触れられるように。という願いもあります。  
これによりバックエンド開発者の方にも、役割が増しているウェブフロントのよりよい開発環境とは何か考えるきっかけになれば幸いです。  

CoffeeScriptについて理解したいのであれば、この資料がお勧めです。  
[The Little Book on CoffeeScript](http://minghai.github.io/library/coffeescript/index.html)  
CoffeeScriptの記述ルールに関してはこちらを参照ください。  
[CoffeeScript Coding Style Guide](https://github.com/khirayama/styleguide/blob/master/coffeesctipt.md)

## Get started

本リポジトリをcloneしたら、以下のコマンドを実行してください（node/npmをインストールしておいてください）  

```
$ npm install
```

本プロジェクトでは以下のコマンドを準備じています。

```
$ npm start // 開発用環境の立ち上げ
$ npm test // CoffeeLintの適用
```

```$ npm start```を行うとサーバとブラウザが起動するはずです。すでに開発可能なので、app.scssやCoffeeScriptを変更すると自動的に素早く更新されることを確認してください。  

```
--- src: 編集用のディレクトリ
--- package.json: npmパッケージの管理・設定ファイル
--- gulpfile.js: ファイル監視などを行うgulpの設定ファイル
--- dist: srcディレクトリのファイルをコンパイルしたファイルがここに生成される（最初はない）
```

## Contents

### BEGINNER | make a simple tab
初学者向けの内容で、クラスベースの開発を知るため、シンプルなタブ切り替えのコンポーネントを実装します。ここで学んで欲しいのは、よくある```$('.className');```のような作りで始める記述以外の方法を知ることです。  
またコードを見ることができますが、これではどういった順番で構築していくのかわかりません。以下に筆者の構築手順を記載します。指針を持っていない場合はこれに従って一度構築してみてください。  

1. なにを作るのか全体像を把握する（仕様を書き出す）
2. Viewを作成する
3. 必要なClassを準備する
4. 用意したClassとViewを結びつける
5. ViewにEventListenerをセットし、イベント（clickなど）を取得できるようにする
6. イベントに応じた処理を行う
7. 必要に応じてView（見た目）の更新を行う
8. 見た目を整える

以上の手順です。これはiOSやAndroidでもあまり違いはありません。BEGINNERの内容を例に見てみましょう。[完成形](http://khirayama.github.io/handson-front-end/beginner/)  

1. なにを作るのか全体像を把握する（仕様を書き出す）  
3つのタブ切り替えボタンと3つのコンテンツを持つタブ切り替えの仕組みを構築する。タブをクリックするとそれと同じ番号 (index)をもつコンテンツが表示される

2. Viewを作成する  
3つのタブ切り替えボタンと3つのコンテンツ部分をul、li要素で構築する。このときスタイルと振る舞いを分けるため、振る舞いを持つものにはjs-プレフィックス（js-はJavaScriptの略）を付与する

3. 必要なClassを準備する  
ここではTabクラスを用意する。TabBtnクラスとTabContentクラスを作成するのも一つの方法だが複雑な動きもないため、不要に大きい必要はないのでTabクラスのみとする。

4. 用意したClassとViewを結びつける  
querySelectorAllを利用してDOMを取得し、DOMを引数として渡す。Class内ではこのDOM以下のDOMにしか触れないようにする。また触れる場合は必ず引数のDOMから探し出すようにする。
もし外のDOMに触れないといけない場合には、コメントを記載する

5. ViewにEventListenerをセットし、イベント（clickなど）を取得できるようにする  
引数で渡されたDOMを起点にイベントを貼っていく。Tabの場合、.js-btn-tabにclickイベントを貼る

6. イベントに応じた処理を行う  
clickイベントを貼ったので、clickイベントが起こった場合の処理をcallbackに記述する。Tabでは、index（表示しているタブの番号）を切り替え、タブ切り替えボタンのアクティブ表示（is-activeクラスの付与）とコンテンツの表示切り替え（is-activeクラスの付与）を行うメソッドを呼び出す

7. 必要に応じてView（見た目）の更新を行う  
タブ切り替えボタンとコンテンツの見た目を切り替えるメソッド内でクラスを付け替え、目的を達成する。

8. 見た目を整える  
7が完了したら、最後に見た目を整える。これは分業を行いやすくするとともに、JavaScript(CoffeeScript)が行うべき役割を切り分けれていることを確認する作業でもある

この手順を元にコードを読み解き、実際に実装してみるとクラスベースでの実装を理解できているはずです。しかし、これだけでは整理された印象を持つだけで、利点を感じることができません。
Intermediateに進みましょう。

### INTERMEDIATE | make a sortable tabel & fetch button
ここでは通信を想定したテーブルの作成を行います。さらにこのテーブルはNAME（名前）とAMOUNT（金額）を持っており、それぞれで並び替えを行うことができます。  
さらに注目してほしいことがあります。データの扱い上、金額にカンマ（,）を入れたくありません。これは以降、文字列で扱わなければならないからです。  
しかし、ユーザの扱いやすさのうえでは金額にはカンマがあるべきです。そこでこのサンプルではModel（ページの状態）では数字で扱い、View（見た目）の上ではカンマ付きで扱っています。  
これはrequestを送る場合などでも役立つものです。習得することをお勧めします。  

### SENIOR | make a sortable tabel & a modal for adding an item
ここではクラスの再利用と、Ruby on Railsを想定したアイテムの追加を行います。各クラスのインスタンスがページに唯一あるモデルインスタンスを監視し、変更に応じて自律した動きを行います。  

### About Lessons(Extra)
Lessons(Extra)では筆者が自作したとても小さなフレームワーク（不安な響きしかないですね）を使用して各Lessonを書き直しています。  
これはフレームワークを導入することのメリットである、効率化と記述ルールを統一することを体感してもらいたいために作りました。  
フレームワークを使用することで可読性が上がるとともに自分たちで扱うべき範囲に集中できていることがわかると思います。  
また記述ルールでは、本来どう書くべきかが想像できるため、レビューや習熟度の高くない開発者でも一定のクオリティを出すことが保証できます。  

またMicroModuleというクラスは簡易的（かつ擬似的な）モジュール管理システムを提供します。これはグローバル汚染を回避できるとともに、そのページの依存クラスを明示することができます。  
CoffeeScriptにおいては別ファイルからクラスを使用しようと考えるとwindowやglobalオブジェクトを介する必要がありますが、MicroModuleによりそれを回避できます。  

余談ですが、このフレームワークをプロダクションに採用することも可能です。このフレームワークは内容がすべて把握できるため、予期せぬエラーに出会うことはないでしょう。依存ライブラリもないため、環境にも左右されません。  
しかし、今回導入したフレームワークの設計に賛同でき、より充実したサポートを求めるのであればBackbone.jsの導入をお勧めします。  
ですが、Backbone.jsも銀の弾丸ではありません。自分たちが抱える課題を解決し、よりよいチーム開発のためにフレームワークは導入するべきです。  
ここから様々なフレームワークに出会い、よりよいサービス、環境になればと思います。相談があれば、issueやwiki、mailでも構いません。声をかけてください。  

## Rules
- コーディング規約は以下に従います。  
[CoffeeScript Coding Style Guide](https://github.com/khirayama/styleguide/blob/master/coffeesctipt.md)

- JavaScriptでDOMにアクセスするときには、DOMにjs-プレフィックスのクラスを付与しましょう。jsでアクセスするDOMがわかりやすくなるととともに装飾を担うクラスとの責任を分けやすくします
- またクラスの付け替えで見た目を変更する場合、この限りではありません。このサンプルではis-プレフィックスを用いています
- 見た目を変更する場合は、JavaScriptでcssを変更するのではなく、クラスの付け替えで行ってください。装飾はCSSが担うべき役割です。アニメーションも可能な限りtransitionなどを利用してください
- eventオブジェクトの名前は、eとしてください  
```(e) => some.action(e.target)```
- イベントを結びつけるメソッドはsetEventListenersで統一してください。統一することでチーム開発を円滑にできます。
- そのページの起点となるファイルはindex.coffee、show.coffeeのようにRailsの規約に則り、各クラスごとに分割してください
- Viewクラスのクラス名、ファイル名はSomeViewのように末尾はViewとしてください

## About jQuery
本リポジトリではjQueryを使用していませんが、jQueryは非常に優れたライブラリです。  
JavaScriptエンジニアだけなら使用しなくても問題ないでしょう。しかし、チームで開発するのであれば、優れた知見は有効活用すべきです。  
ですが、jQueryは強力が故に本来避けるべきことも簡単に行えてしまいます。そのため、以下に推奨・非推奨メソッドを示します。  
より詳しく知りたい場合にはjQueryの15種類のAPI群を把握することを推奨します。  

### Recommended jQuery Methods
find, addClass, removeClass, on, off, trigger, $.ajax...  
上記に示すようなDOMアクセス系、クラス操作系、イベント操作系、通信系のみに絞ることが望ましいです。  
それ以外の使用が必要な場合は、設計・実装を見直すよい機会かもしれません。

### Deprecated jQuery Methods
css, animate, click, focus...  
上記に示すようなスタイル操作系、イベントのショートハンドなどは避けることが望ましいです。  
使用するAPIが多いと変更やリファクタリングを難しくするとともに現状と違うライブラリ・フレームワークの導入の障害になることがあります。  
特に現在のJavaScriptの環境では、コンパクトな状態を維持するのはとても重要だと感じます。  

## Feedback
issueやwiki、mailにて受け付けています。もちろんPullRequestもお待ちしております。
受託などの場合、CoffeeScriptの使用が限られる場合があります。そのため、筆者はES5とES6での実装も準備しています。もう少し待ってください。  
英語訳してくださる方も募集していますよ！
