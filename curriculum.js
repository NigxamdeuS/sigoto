window.CURRICULUM = [
  {
    id: '01',
    file: 'ch01.html',
    title: 'PHP・オブジェクト指向の基礎',
    blurb: '設計図と実物の違いから。$this もたとえで理解。',
    sections: [
      { id: 'class', title: 'クラスとは' },
      { id: 'object-new', title: 'オブジェクトとnew' },
      { id: 'property-method', title: 'プロパティとメソッド' },
      { id: 'arrow', title: '->の意味' },
      { id: 'this', title: '$thisの意味' },
      { id: 'visibility', title: 'public / protected / private' },
      { id: 'construct', title: 'コンストラクタ __construct()' },
      { id: 'const', title: 'クラス定数・const' },
      { id: 'extends', title: '継承とextends' },
      { id: 'parent', title: 'parent::と::' },
      { id: 'exercise', title: '第1章 演習問題' }
    ]
  },
  {
    id: '02',
    file: 'ch02.html',
    title: 'CakePHPとMVC',
    blurb: 'レストランのたとえでMVC。全体像だけ先に掴む。',
    sections: [
      { id: 'what-is-cake', title: 'CakePHPとは' },
      { id: 'mvc', title: 'MVCとは' },
      { id: 'roles', title: 'Model / View / Controllerの役割' },
      { id: 'folders', title: 'CakePHPのフォルダ構成' },
      { id: 'request-flow', title: 'URLから画面が表示されるまで' },
      { id: 'routing', title: 'Routingとは' },
      { id: 'controller-action', title: 'ControllerとAction' },
      { id: 'reading-code', title: 'CakePHPコードの基本的な読み方' },
      { id: 'exercise', title: '第2章 演習問題' }
    ]
  },
  {
    id: '03',
    file: 'ch03.html',
    title: 'Controllerの基本',
    blurb: '受付係の仕事。GET/POST/set/redirect をやさしく。',
    sections: [
      { id: 'make-controller', title: 'Controllerの作り方・読み方' },
      { id: 'action', title: 'Actionとは' },
      { id: 'this', title: '$thisが何を指しているか' },
      { id: 'request', title: 'Requestとは' },
      { id: 'get', title: 'GETパラメータの取得' },
      { id: 'post', title: 'POSTデータの取得' },
      { id: 'url-param', title: 'URLパラメータの取得' },
      { id: 'set', title: '$this->set()でViewへデータを渡す' },
      { id: 'redirect', title: 'Redirect' },
      { id: 'error', title: 'エラー処理の基本' },
      { id: 'exercise', title: '第3章 演習問題' }
    ]
  },
  {
    id: '04',
    file: 'ch04.html',
    title: 'View・画面表示',
    blurb: '画面表示と h()。安全に出す習慣から。',
    sections: [
      { id: 'what-is-view', title: 'Viewとは' },
      { id: 'display-vars', title: 'Controllerから渡された値を表示' },
      { id: 'echo-short', title: '<?= ?>の意味' },
      { id: 'h', title: 'h()とは' },
      { id: 'if', title: 'ifによる表示切り替え' },
      { id: 'foreach', title: 'foreachで一覧表示' },
      { id: 'form', title: 'Form' },
      { id: 'element', title: 'Element' },
      { id: 'layout', title: 'Layout' },
      { id: 'flash', title: 'エラー情報を画面に表示' },
      { id: 'exercise', title: '第4章 演習問題' }
    ]
  },
  {
    id: '05',
    file: 'ch05.html',
    title: 'Model・データベース',
    blurb: 'TableとEntityをExcelにたとえて理解。重要章。',
    note: true,
    sections: [
      { id: 'what-is-model', title: 'CakePHPのModelとは' },
      { id: 'table-entity', title: 'TableとEntity' },
      { id: 'use-model', title: 'ControllerからModelを使う' },
      { id: 'find', title: 'find()' },
      { id: 'all', title: 'all()' },
      { id: 'first', title: 'first()' },
      { id: 'where', title: 'where()による検索条件' },
      { id: 'and-or', title: 'AND / OR条件' },
      { id: 'order', title: '並び替え' },
      { id: 'one', title: 'データ1件取得' },
      { id: 'list', title: 'データ一覧取得' },
      { id: 'sql', title: 'SQLがどう組み立てられるのか' },
      { id: 'exercise', title: '第5章 演習問題' }
    ]
  },
  {
    id: '06',
    file: 'ch06.html',
    title: 'CRUD',
    blurb: '作る・読む・更新・削除の型を暗記する章。',
    note: true,
    sections: [
      { id: 'what-is-crud', title: 'CRUDとは' },
      { id: 'index', title: '一覧表示（Read）' },
      { id: 'view', title: '詳細表示（Read）' },
      { id: 'add', title: '新規登録（Create）' },
      { id: 'new-entity', title: 'Entityの作成' },
      { id: 'patch', title: 'patchEntity()' },
      { id: 'save', title: 'save()' },
      { id: 'edit', title: '更新（Update）' },
      { id: 'delete', title: '削除（Delete）' },
      { id: 'validation', title: 'バリデーション' },
      { id: 'exercise', title: '第6章 CRUD総合演習' }
    ]
  },
  {
    id: '07',
    file: 'ch07.html',
    title: 'Session',
    blurb: 'サーバー側のメモ帳。ログインの土台。',
    sections: [
      { id: 'what-is-session', title: 'Sessionとは' },
      { id: 'read', title: 'Sessionの取得' },
      { id: 'write', title: 'Sessionへの書き込み' },
      { id: 'check', title: 'Sessionの存在チェック' },
      { id: 'delete', title: 'Sessionの削除' },
      { id: 'login-idea', title: 'ログイン情報をSessionで扱う考え方' },
      { id: 'logged-in', title: 'ログイン状態の判定' },
      { id: 'exercise', title: '第7章 演習問題' }
    ]
  },
  {
    id: '08',
    file: 'ch08.html',
    title: 'Component',
    blurb: 'コピペをやめて部品にする考え方。',
    sections: [
      { id: 'what-is-component', title: 'Componentとは' },
      { id: 'why', title: 'Componentを使う理由' },
      { id: 'use', title: 'ControllerからComponentを利用' },
      { id: 'extract', title: '共通処理をComponent化' },
      { id: 'exercise', title: '第8章 演習問題' }
    ]
  },
  {
    id: '09',
    file: 'ch09.html',
    title: 'Pagination',
    blurb: '多いデータを「1ページ10件」に分ける。',
    sections: [
      { id: 'what-is-paging', title: 'ページングとは' },
      { id: 'why', title: 'なぜPaginationが必要なのか' },
      { id: 'paginate', title: 'paginate()' },
      { id: 'limit', title: '件数設定' },
      { id: 'order', title: '並び順' },
      { id: 'search', title: '検索＋Pagination' },
      { id: 'view-links', title: 'View側でページリンクを表示' },
      { id: 'exercise', title: '第9章 演習問題' }
    ]
  },
  {
    id: '10',
    file: 'ch10.html',
    title: 'Transaction',
    blurb: '全部成功か全部取消か。口座振替のたとえ。',
    note: true,
    sections: [
      { id: 'what-is-tx', title: 'Transactionとは' },
      { id: 'why', title: 'なぜ必要なのか' },
      { id: 'begin', title: 'BEGIN / COMMIT / ROLLBACK' },
      { id: 'cake', title: 'CakePHPでTransactionを使う' },
      { id: 'multi', title: '複数のDB更新' },
      { id: 'fail', title: '途中で失敗した場合' },
      { id: 'exception', title: '例外処理との組み合わせ' },
      { id: 'exercise', title: '第10章 演習問題' }
    ]
  },
  {
    id: '11',
    file: 'ch11.html',
    title: 'ログイン・権限制御',
    blurb: '「誰か」と「してよいか」を分けて考える。',
    sections: [
      { id: 'authz', title: '認証と認可の違い' },
      { id: 'user', title: 'ログインユーザーとは' },
      { id: 'get-user', title: 'ログインユーザー情報の取得' },
      { id: 'guest', title: '未ログイン判定' },
      { id: 'permission', title: '権限とは' },
      { id: 'roles', title: '一般ユーザー / 管理者' },
      { id: 'own-data', title: '対象データを操作できるか確認' },
      { id: 'denied', title: '権限がない場合の処理' },
      { id: 'exercise', title: '第11章 演習問題' }
    ]
  },
  {
    id: '12',
    file: 'ch12.html',
    title: 'ログ・エラー処理',
    blurb: 'ユーザーには短く、ログには詳しく。',
    sections: [
      { id: 'what-is-log', title: 'ログとは' },
      { id: 'why', title: 'なぜログを残すのか' },
      { id: 'cake-log', title: 'CakePHPでログ出力' },
      { id: 'levels', title: 'info / warning / error' },
      { id: 'exception', title: 'Exception' },
      { id: 'try-catch', title: 'try / catch' },
      { id: 'on-error', title: 'エラー時の処理' },
      { id: 'exercise', title: '第12章 演習問題' }
    ]
  },
  {
    id: '13',
    file: 'ch13.html',
    title: 'CSV出力',
    blurb: '表をファイルにして渡す。文字化け対策も。',
    sections: [
      { id: 'what-is-csv', title: 'CSVとは' },
      { id: 'fetch', title: 'DBから対象データ取得' },
      { id: 'transform', title: 'CSV用にデータを加工' },
      { id: 'response', title: 'CSVレスポンス' },
      { id: 'download', title: 'ファイルとして出力' },
      { id: 'encoding', title: '日本語・文字コードについて' },
      { id: 'exercise', title: '第13章 演習問題' }
    ]
  },
  {
    id: '14',
    file: 'ch14.html',
    title: 'TODO機能を一から作る',
    blurb: '今までの部品をTODOアプリに組み立てる。',
    note: true,
    sections: [
      { id: 'table', title: 'TODOテーブルを理解' },
      { id: 'index', title: 'TODO一覧取得' },
      { id: 'view', title: 'TODO詳細' },
      { id: 'add', title: 'TODO登録' },
      { id: 'edit', title: 'TODO編集' },
      { id: 'delete', title: 'TODO削除' },
      { id: 'search', title: '検索' },
      { id: 'pagination', title: 'Pagination' },
      { id: 'user-link', title: 'ログインユーザーとの紐付け' },
      { id: 'auth', title: '権限チェック' },
      { id: 'transaction', title: 'Transaction' },
      { id: 'error', title: 'エラー処理' },
      { id: 'csv', title: 'CSV出力' }
    ]
  }
];
