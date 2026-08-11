/**
 * Generates beginner-friendly chapter HTML pages.
 * Run: node generate-chapters.js
 */
const fs = require('fs');
const path = require('path');

const chapters = {
  '01': {
    title: 'PHP・オブジェクト指向の基礎',
    lead: '専門用語はあとにします。まずは「設計図」と「実物」の違いだけ押さえましょう。',
    prev: null,
    next: { file: 'ch02.html', title: '第2章 CakePHPとMVC' },
    body: `
<section class="lesson" id="class">
  <h2>1. クラスとは</h2>
  <div class="callout"><code>クラス</code>＝ものの<strong>設計図</strong>（まだ実物ではない）</div>
  <div class="analogy">
    <span class="analogy-label">たとえ</span>
    <p>クッキーの抜き型がクラス、焼いたクッキーがオブジェクトです。抜き型だけでは食べられません。でも抜き型があるから、同じ形を何個でも作れます。</p>
  </div>
  <p>プログラムでも「ユーザー」や「商品」を扱うとき、先に設計図を書きます。</p>
<pre data-lang="php"><code>class User
{
}</code></pre>
  <ul class="line-explain">
    <li><code>class</code><span>「これから設計図を書きます」という宣言</span></li>
    <li><code>User</code><span>設計図の名前（大文字始まりが慣例）</span></li>
    <li><code>{ }</code><span>この中に中身を書く。今は空</span></li>
  </ul>
  <div class="tip">
    <span class="tip-label">いま覚えること</span>
    <p>クラスを書いただけでは、まだ何も動きません。「設計図を用意しただけ」です。</p>
  </div>
</section>

<section class="lesson" id="object-new">
  <h2>2. オブジェクトと<code>new</code></h2>
  <div class="callout"><code>new</code>＝設計図から<strong>実物</strong>を作るスイッチ</div>
  <p>実物のことを<strong>オブジェクト</strong>（またはインスタンス）と呼びます。</p>
<pre data-lang="php"><code>$user = new User();</code></pre>
  <ul class="line-explain">
    <li><code>new User()</code><span>User設計図から1つ作る</span></li>
    <li><code>$user =</code><span>作った実物に名前（変数）をつける</span></li>
  </ul>
  <p>同じ設計図から、別々の実物を何個でも作れます。</p>
<pre data-lang="php"><code>$taro = new User();
$hanako = new User();
// $taro と $hanako は別人（別オブジェクト）</code></pre>
  <div class="warn">
    <span class="warn-label">つまずきやすい点</span>
    <p><code>User</code>（クラス）と <code>$user</code>（オブジェクト）は別物です。大文字・小文字と <code>$</code> の有無に注目してください。</p>
  </div>
</section>

<section class="lesson" id="property-method">
  <h2>3. プロパティとメソッド</h2>
  <div class="callout"><code>プロパティ</code>＝持っているデータ　／　<code>メソッド</code>＝できること（処理）</div>
  <div class="analogy">
    <span class="analogy-label">たとえ</span>
    <p>人でいうと、名前や年齢がプロパティ。自己紹介する・歩く、がメソッドです。</p>
  </div>
<pre data-lang="php"><code>class User
{
    public $name;  // プロパティ（データ）

    public function showName()  // メソッド（処理）
    {
        echo $this->name;
    }
}</code></pre>
  <p><code>function</code> のあとの名前がメソッド名です。末尾の <code>()</code> は「呼び出すときに使う」印、と思ってください。</p>
</section>

<section class="lesson" id="arrow">
  <h2>4. <code>-&gt;</code> の意味</h2>
  <div class="callout"><code>-&gt;</code>＝「このオブジェクトの〜」と読む矢印</div>
  <p>日本語にするとこうなります。</p>
<pre data-lang="php"><code>$user = new User();
$user->name = 'Taro';   // $user の name に Taro を入れる
$user->showName();     // $user の showName を実行する</code></pre>
  <div class="tip">
    <span class="tip-label">読み方のコツ</span>
    <p><code>$user-&gt;name</code> は「ユーザーの名前」。<code>$user-&gt;showName()</code> は「ユーザーに自己紹介させる」。</p>
  </div>
</section>

<section class="lesson" id="this">
  <h2>5. <code>$this</code> の意味</h2>
  <div class="callout"><code>$this</code>＝いま動いている<strong>自分自身</strong>のオブジェクト</div>
  <p>メソッドの中では、外側の <code>$user</code> という名前が見えません。なので「自分の名前」を指す特別な言葉 <code>$this</code> を使います。</p>
<pre data-lang="php"><code>class User
{
    public $name;

    public function showName()
    {
        echo $this->name;
    }
}</code></pre>
  <p>ここで出てくる短い式がこれです。</p>
<pre data-lang="php"><code>$this->name</code></pre>
  <p>意味は「このオブジェクトが持っている <code>name</code>」です。</p>
  <div class="analogy">
    <span class="analogy-label">たとえ</span>
    <p>教室で先生が「自分の名前を書いて」と言うときの「自分」が <code>$this</code> です。太郎なら太郎、花子なら花子を指します。</p>
  </div>
  <div class="tip">
    <span class="tip-label">CakePHPでも同じ</span>
    <p>あとで出てくる <code>$this-&gt;set()</code> や <code>$this-&gt;request</code> も、「今のController自身の〜」という意味です。</p>
  </div>
</section>

<section class="lesson" id="visibility">
  <h2>6. <code>public</code> / <code>protected</code> / <code>private</code></h2>
  <div class="callout">「外から触ってよいか」のルール（鍵の種類）</div>
  <ul>
    <li><code>public</code> … 誰でも触ってOK（公開）</li>
    <li><code>protected</code> … 自分と、引き継いだ子クラスだけ</li>
    <li><code>private</code> … そのクラスの中だけ（非公開）</li>
  </ul>
<pre data-lang="php"><code>class User
{
    public $name;        // 外から見える
    protected $role;     // 家族（継承先）まで
    private $password;   // 自分の中だけ
}</code></pre>
  <div class="note-box">
    <span class="note-label">初心者への案内</span>
    <p>最初は「だいたい public で書いてある」と読み流してOKです。パスワードのような秘密は private、とだけ覚えておきましょう。</p>
  </div>
</section>

<section class="lesson" id="construct">
  <h2>7. コンストラクタ <code>__construct()</code></h2>
  <div class="callout"><code>__construct()</code>＝<code>new</code> した瞬間に自動で走る「初期セット」</div>
  <p>作った直後に名前を入れておきたい、というときに使います。</p>
<pre data-lang="php"><code>class User
{
    public $name;

    public function __construct($name)
    {
        $this->name = $name;
    }
}

$user = new User('Taro');
// 作った瞬間に name が Taro になる</code></pre>
  <div class="tip">
    <span class="tip-label">名前の覚え方</span>
    <p>construct＝組み立てる。組み立てた直後の処理、と覚えると楽です。</p>
  </div>
</section>

<section class="lesson" id="const">
  <h2>8. クラス定数・<code>const</code></h2>
  <div class="callout"><code>const</code>＝変わらない値に名前を付けたもの</div>
  <p>マジックナンバー（意味の分からない数字や文字列）を減らすために使います。</p>
<pre data-lang="php"><code>class User
{
    public const ROLE_ADMIN = 'admin';
}

echo User::ROLE_ADMIN;  // admin</code></pre>
  <p>定数はオブジェクトではなく<strong>クラス名</strong>から、<code>::</code> で取ります（次の項目）。</p>
</section>

<section class="lesson" id="extends">
  <h2>9. 継承と<code>extends</code></h2>
  <div class="callout"><code>extends</code>＝親の設計図を引き継いで、少し改造する</div>
  <div class="analogy">
    <span class="analogy-label">たとえ</span>
    <p>「動物」の設計図を引き継いで「犬」を作る、イメージです。犬は動物の性質を持ちつつ、鳴き方だけ変えられます。</p>
  </div>
<pre data-lang="php"><code>class Animal
{
    public function speak()
    {
        echo '...';
    }
}

class Dog extends Animal
{
    public function speak()
    {
        echo 'wan';
    }
}</code></pre>
  <div class="tip">
    <span class="tip-label">CakePHPでの登場シーン</span>
    <p><code>class TodosController extends AppController</code> のように、「CakePHP用意のControllerを引き継ぐ」形で必ず使います。</p>
  </div>
</section>

<section class="lesson" id="parent">
  <h2>10. <code>parent::</code> と <code>::</code></h2>
  <div class="callout"><code>::</code>＝クラス側のものを呼ぶ　／　<code>parent::</code>＝親クラスのものを呼ぶ</div>
  <p>矢印 <code>-&gt;</code> は「実物の〜」、二重コロン <code>::</code> は「設計図（クラス）の〜」と分けると混乱しにくいです。</p>
<pre data-lang="php"><code>class Dog extends Animal
{
    public function speak()
    {
        parent::speak();  // まず親の speak を実行
        echo ' wan';
    }
}</code></pre>
</section>

<section class="lesson" id="exercise">
  <h2>第1章 やってみよう</h2>
  <div class="exercise">
    <div class="exercise-label">EXERCISE</div>
    <h3>Product（商品）を作る</h3>
    <ol>
      <li><code>Product</code> クラスを作る</li>
      <li>プロパティ <code>$name</code> と <code>$price</code> を持たせる</li>
      <li>コンストラクタで両方セットする</li>
      <li><code>show()</code> で「本: 1200円」のように表示する</li>
    </ol>
    <p style="margin-top:0.75rem;color:#a3a3a3;font-size:0.9rem;">ヒント: 第1章の User クラスを、名前を変えて写すところから始めましょう。</p>
  </div>
</section>`
  },

  '02': {
    title: 'CakePHPとMVC',
    lead: 'CakePHPは「役割分担の決まった型」です。全体像だけ先に掴みます。',
    prev: { file: 'ch01.html', title: '第1章 PHP・オブジェクト指向の基礎' },
    next: { file: 'ch03.html', title: '第3章 Controllerの基本' },
    body: `
<section class="lesson" id="what-is-cake">
  <h2>1. CakePHPとは</h2>
  <div class="callout"><code>CakePHP</code>＝PHPでWebアプリを速く・きれいに作るための道具一式</div>
  <p>ログイン、画面表示、データベースアクセスなど、毎回ゼロから書かなくてよい仕組みが最初から入っています。</p>
  <div class="analogy">
    <span class="analogy-label">たとえ</span>
    <p>素のPHPが「包丁だけ」、CakePHPが「キッチン一式のキッチンカー」です。ルール（置き場所）がある代わりに、迷いにくくなります。</p>
  </div>
</section>

<section class="lesson" id="mvc">
  <h2>2. MVCとは</h2>
  <div class="callout"><code>MVC</code>＝仕事を3つに分ける考え方</div>
  <ul>
    <li><strong>Model</strong>（モデル）… データ係。DBの読み書き</li>
    <li><strong>View</strong>（ビュー）… 見た目係。HTMLを作る</li>
    <li><strong>Controller</strong>（コントローラ）… 受付係。流れを決める</li>
  </ul>
  <div class="analogy">
    <span class="analogy-label">レストランのたとえ</span>
    <p>お客さん＝ブラウザ。受付＝Controller。厨房＝Model。盛り付け・提供＝View。</p>
  </div>
</section>

<section class="lesson" id="roles">
  <h2>3. Model / View / Controllerの役割</h2>
  <div class="tip">
    <span class="tip-label">役割の見分け方</span>
    <ul>
      <li>DBを触る？ → Model</li>
      <li>HTMLを書く？ → View</li>
      <li>「POSTが来たら保存して一覧へ戻す」など判断？ → Controller</li>
    </ul>
  </div>
  <div class="warn">
    <span class="warn-label">よくある失敗</span>
    <p>全部をControllerに書くと、後で読めなくなります。まずは「受付は短く」を意識しましょう。</p>
  </div>
</section>

<section class="lesson" id="folders">
  <h2>4. CakePHPのフォルダ構成</h2>
  <p>最初に覚える場所はこれだけで十分です。</p>
<pre data-lang="text" data-label="PATH"><code>src/Controller/   … 受付（Controller）
src/Model/Table/  … DB操作（Table）
src/Model/Entity/ … データ1件分
templates/        … 画面のHTML
config/routes.php … URLの対応表</code></pre>
  <div class="note-box">
    <span class="note-label">バージョンについて</span>
    <p>CakePHP 3/4/5でフォルダ名が少し違います。意味は同じなので、「Controller・Model・画面ファイルがある」と捉えればOKです。</p>
  </div>
</section>

<section class="lesson" id="request-flow">
  <h2>5. URLから画面が表示されるまで</h2>
  <div class="callout">ブラウザ → URL解釈 → Controller →（必要ならModel）→ View → 画面</div>
  <ol>
    <li>住所（URL）にアクセスする</li>
    <li>Routingが「どの受付の、どの係か」を決める</li>
    <li>Controllerのメソッド（Action）が動く</li>
    <li>データを View に渡し、HTMLが返る</li>
  </ol>
</section>

<section class="lesson" id="routing">
  <h2>6. Routingとは</h2>
  <div class="callout"><code>Routing</code>＝URLと処理の対応表</div>
  <p>たとえば <code>/todos</code> を開いたら <code>TodosController</code> の <code>index</code> を動かす、と決めます。</p>
<pre data-lang="php" data-label="イメージ"><code>// /todos  →  TodosController::index()</code></pre>
  <div class="tip">
    <span class="tip-label">慣例</span>
    <p>何も書かなくても <code>/コントローラ名/アクション名</code> で動くことが多いです。まずはこの形を覚えましょう。</p>
  </div>
</section>

<section class="lesson" id="controller-action">
  <h2>7. ControllerとAction</h2>
  <div class="callout"><code>Controller</code>＝受付クラス　／　<code>Action</code>＝その中の1つの窓口（メソッド）</div>
<pre data-lang="php"><code>class TodosController extends AppController
{
    public function index()
    {
        // 一覧ページ用の窓口
    }
}</code></pre>
  <p><code>index</code> がActionです。URLの最後の部分と名前が対応することが多いです。</p>
</section>

<section class="lesson" id="reading-code">
  <h2>8. CakePHPコードの基本的な読み方</h2>
  <div class="tip">
    <span class="tip-label">迷ったらこの3問</span>
    <ol>
      <li>このURLはどの Action？</li>
      <li>データはどこで取っている？</li>
      <li>どの画面ファイルを出している？</li>
    </ol>
  </div>
  <div class="callout">Action名と、templates 内のファイル名がだいたい一致する</div>
</section>

<section class="lesson" id="exercise">
  <h2>第2章 やってみよう</h2>
  <div class="exercise">
    <div class="exercise-label">EXERCISE</div>
    <ol>
      <li>自分のプロジェクトで Controller フォルダを開いてみる</li>
      <li>既存のURLを1つ選び、「Controller名 / Action名」を書き出す</li>
      <li>MVCを、レストランのたとえで家族に説明してみる</li>
    </ol>
  </div>
</section>`
  },

  '03': {
    title: 'Controllerの基本',
    lead: 'Controllerは「受付」。受け取って、処理して、画面へ渡す係です。',
    prev: { file: 'ch02.html', title: '第2章 CakePHPとMVC' },
    next: { file: 'ch04.html', title: '第4章 View・画面表示' },
    body: `
<section class="lesson" id="make-controller">
  <h2>1. Controllerの作り方・読み方</h2>
  <div class="callout">名前は <code>〇〇Controller</code>。ファイル名も同じ</div>
<pre data-lang="php"><code>namespace App\\Controller;

class TodosController extends AppController
{
    public function index()
    {
    }
}</code></pre>
  <ul class="line-explain">
    <li><code>extends AppController</code><span>共通の土台を引き継ぐ（第1章の継承）</span></li>
    <li><code>index()</code><span>一覧用の窓口（Action）</span></li>
  </ul>
</section>

<section class="lesson" id="action">
  <h2>2. Actionとは</h2>
  <div class="callout"><code>Action</code>＝1リクエストの入り口になる public メソッド</div>
  <p>よく使う名前（覚えると楽）：</p>
  <ul>
    <li><code>index</code> … 一覧</li>
    <li><code>view</code> … 詳細</li>
    <li><code>add</code> … 新規</li>
    <li><code>edit</code> … 編集</li>
    <li><code>delete</code> … 削除</li>
  </ul>
</section>

<section class="lesson" id="this">
  <h2>3. <code>$this</code> が何を指しているか</h2>
  <div class="callout">Controllerの中の <code>$this</code>＝今動いている受付係そのもの</div>
<pre data-lang="php"><code>$this->getRequest();  // お客さんの注文内容
$this->set(...);      // 厨房から来た料理をトレーに載せる
$this->redirect(...); // 別の窓口へ案内する</code></pre>
  <p>第1章の <code>$this</code> と同じ考え方です。</p>
</section>

<section class="lesson" id="request">
  <h2>4. Requestとは</h2>
  <div class="callout"><code>Request</code>＝ブラウザから届いた荷物（URL・入力・ボタンなど）</div>
<pre data-lang="php"><code>$request = $this->getRequest();</code></pre>
</section>

<section class="lesson" id="get">
  <h2>5. GETパラメータの取得</h2>
  <p>URLの <code>?</code> 以降です。例: <code>/todos?status=done</code></p>
<pre data-lang="php"><code>$status = $this->request->getQuery('status');
// $status は 'done'</code></pre>
  <div class="tip">
    <span class="tip-label">覚え方</span>
    <p>GET＝見える荷物（URLに出る）。検索やページ番号によく使います。</p>
  </div>
</section>

<section class="lesson" id="post">
  <h2>6. POSTデータの取得</h2>
  <p>フォーム送信など、URLに出さない荷物です。</p>
<pre data-lang="php"><code>if ($this->request->is('post')) {
    $title = $this->request->getData('title');
    $data = $this->request->getData(); // 全部
}</code></pre>
  <div class="warn">
    <span class="warn-label">大事</span>
    <p>「POSTで来たときだけ保存する」と <code>is('post')</code> で確認するのが基本です。</p>
  </div>
</section>

<section class="lesson" id="url-param">
  <h2>7. URLパラメータの取得</h2>
  <div class="callout"><code>/todos/view/5</code> の <code>5</code> は、メソッドの引数で受け取ることが多い</div>
<pre data-lang="php"><code>public function view($id = null)
{
    // /todos/view/5 なら $id は 5
}</code></pre>
</section>

<section class="lesson" id="set">
  <h2>8. <code>$this-&gt;set()</code> でViewへデータを渡す</h2>
  <div class="callout"><code>set</code>＝画面側で使える変数を渡す</div>
<pre data-lang="php"><code>$this->set('title', '買い物');
// View で $title が使えるようになる</code></pre>
  <div class="analogy">
    <span class="analogy-label">たとえ</span>
    <p>受付がトレーにメモを載せて、盛り付け係（View）に渡すイメージです。</p>
  </div>
</section>

<section class="lesson" id="redirect">
  <h2>9. Redirect</h2>
  <div class="callout">保存などのあと、「別のURLへ移動させる」</div>
<pre data-lang="php"><code>return $this->redirect(['action' => 'index']);
// 一覧へ戻す、が定番</code></pre>
</section>

<section class="lesson" id="error">
  <h2>10. エラー処理の基本</h2>
  <p>「無いのに詳細を見ようとした」などは、例外で止めます。</p>
<pre data-lang="php"><code>use Cake\\Http\\Exception\\NotFoundException;

public function view($id = null)
{
    if (!$id) {
        throw new NotFoundException('見つかりません');
    }
}</code></pre>
  <div class="note-box">
    <span class="note-label">今はこれだけでOK</span>
    <p>ユーザー向けメッセージは Flash、詳しい記録はログ（後の章）。まずは「止める方法がある」と知れば十分です。</p>
  </div>
</section>

<section class="lesson" id="exercise">
  <h2>第3章 やってみよう</h2>
  <div class="exercise">
    <div class="exercise-label">EXERCISE</div>
    <ol>
      <li>GETで名前を受け取る Action を想像して書く</li>
      <li><code>set</code> で View に渡す1行を書く</li>
      <li>保存後に一覧へ <code>redirect</code> する1行を書く</li>
    </ol>
  </div>
</section>`
  },

  '04': {
    title: 'View・画面表示',
    lead: 'Viewは「見た目係」。渡されたデータを、安全にHTMLへします。',
    prev: { file: 'ch03.html', title: '第3章 Controllerの基本' },
    next: { file: 'ch05.html', title: '第5章 Model・データベース' },
    body: `
<section class="lesson" id="what-is-view">
  <h2>1. Viewとは</h2>
  <div class="callout"><code>View</code>＝画面のHTMLを作るファイル</div>
  <p>だいたい Action と同じ名前です。<code>index()</code> なら <code>index.php</code>。</p>
</section>

<section class="lesson" id="display-vars">
  <h2>2. Controllerから渡された値を表示</h2>
<pre data-lang="php"><code>// Controller
$this->set('title', '買い物');</code></pre>
<pre data-lang="ctp" data-label="VIEW"><code>&lt;p&gt;&lt;?= h($title) ?&gt;&lt;/p&gt;</code></pre>
  <p>Controllerで <code>set</code> した名前が、Viewでは変数になります。</p>
</section>

<section class="lesson" id="echo-short">
  <h2>3. <code>&lt;?= ?&gt;</code> の意味</h2>
  <div class="callout"><code>&lt;?= $x ?&gt;</code>＝「$x をここに出力」の短い書き方</div>
  <p>長い書き方は <code>&lt;?php echo $x; ?&gt;</code> です。同じ意味です。</p>
</section>

<section class="lesson" id="h">
  <h2>4. <code>h()</code> とは</h2>
  <div class="callout"><code>h()</code>＝危険な文字を無害化する（エスケープ）</div>
  <div class="analogy">
    <span class="analogy-label">たとえ</span>
    <p>ユーザーが入力した文字を、そのままページに貼ると「悪いスクリプト」が混ざることがあります。<code>h()</code> はそれを普通の文字として表示するガードです。</p>
  </div>
<pre data-lang="ctp" data-label="VIEW"><code>&lt;?= h($todo->title) ?&gt;</code></pre>
  <div class="warn">
    <span class="warn-label">習慣にすること</span>
    <p>画面に出す文字列には、基本いつも <code>h()</code> を付けましょう。</p>
  </div>
</section>

<section class="lesson" id="if">
  <h2>5. ifによる表示切り替え</h2>
  <p>完了なら「完了」、まだなら「未完了」のように出し分けます。</p>
<pre data-lang="ctp" data-label="VIEW"><code>&lt;?php if ($todo->done): ?&gt;
  &lt;span&gt;完了&lt;/span&gt;
&lt;?php else: ?&gt;
  &lt;span&gt;未完了&lt;/span&gt;
&lt;?php endif; ?&gt;</code></pre>
</section>

<section class="lesson" id="foreach">
  <h2>6. foreachで一覧表示</h2>
  <div class="callout"><code>foreach</code>＝リストを1件ずつ取り出す繰り返し</div>
<pre data-lang="ctp" data-label="VIEW"><code>&lt;ul&gt;
&lt;?php foreach ($todos as $todo): ?&gt;
  &lt;li&gt;&lt;?= h($todo->title) ?&gt;&lt;/li&gt;
&lt;?php endforeach; ?&gt;
&lt;/ul&gt;</code></pre>
  <p><code>$todos</code> が全体、<code>$todo</code> が今見ている1件です。</p>
</section>

<section class="lesson" id="form">
  <h2>7. Form</h2>
  <p>CakePHPにはフォームを楽に書く道具（FormHelper）があります。</p>
<pre data-lang="ctp" data-label="VIEW"><code>&lt;?= $this->Form->create($todo) ?&gt;
&lt;?= $this->Form->control('title', ['label' => 'タイトル']) ?&gt;
&lt;?= $this->Form->button('保存') ?&gt;
&lt;?= $this->Form->end() ?&gt;</code></pre>
  <div class="tip">
    <span class="tip-label">いま知っておくこと</span>
    <p>自分で &lt;input&gt; を全部書かなくても、Helper が用意してくれます。セキュリティ用のトークンも付きます。</p>
  </div>
</section>

<section class="lesson" id="element">
  <h2>8. Element</h2>
  <div class="callout"><code>Element</code>＝使い回す部品テンプレート</div>
  <p>ヘッダーや「1件分のカード」など、同じHTMLを何度も書かないために使います。</p>
<pre data-lang="ctp" data-label="VIEW"><code>&lt;?= $this->element('todo_item', ['todo' => $todo]) ?&gt;</code></pre>
</section>

<section class="lesson" id="layout">
  <h2>9. Layout</h2>
  <div class="callout"><code>Layout</code>＝全ページ共通の外枠（枠・ナビ・フッター）</div>
  <p>各ページの中身は、この外枠の真ん中に差し込まれます。</p>
</section>

<section class="lesson" id="flash">
  <h2>10. エラー情報を画面に表示</h2>
  <p>「保存しました」「失敗しました」などの短い伝言です。</p>
<pre data-lang="php"><code>// Controller
$this->Flash->success('保存しました');
$this->Flash->error('失敗しました');</code></pre>
<pre data-lang="ctp" data-label="LAYOUT"><code>&lt;?= $this->Flash->render() ?&gt;</code></pre>
</section>

<section class="lesson" id="exercise">
  <h2>第4章 やってみよう</h2>
  <div class="exercise">
    <div class="exercise-label">EXERCISE</div>
    <ol>
      <li>配列を foreach で &lt;li&gt; 表示するViewを書く</li>
      <li>出力すべてに <code>h()</code> を付ける</li>
      <li>タイトル入力の FormHelper を写経する</li>
    </ol>
  </div>
</section>`
  },

  '05': {
    title: 'Model・データベース',
    lead: 'データベースは「大きな表」。CakePHPでは Table と Entity に分けて扱います。',
    prev: { file: 'ch04.html', title: '第4章 View・画面表示' },
    next: { file: 'ch06.html', title: '第6章 CRUD' },
    body: `
<section class="lesson" id="what-is-model">
  <h2>1. CakePHPのModelとは</h2>
  <div class="callout">Modelまわり＝データの読み書きを担当する係</div>
  <p>初心者はまず次の2つだけ覚えればOKです。</p>
  <ul>
    <li><strong>Table</strong> … 表全体を操作（探す・保存する）</li>
    <li><strong>Entity</strong> … 表の1行分（1件のデータ）</li>
  </ul>
</section>

<section class="lesson" id="table-entity">
  <h2>2. TableとEntity</h2>
  <div class="analogy">
    <span class="analogy-label">たとえ</span>
    <p>Excelでいうと、シート全体の操作が Table。1行が Entity です。</p>
  </div>
<pre data-lang="php"><code>$todo->title;  // 1件のタイトル
$todo->done;   // 1件の完了フラグ</code></pre>
</section>

<section class="lesson" id="use-model">
  <h2>3. ControllerからModelを使う</h2>
<pre data-lang="php"><code>$todosTable = $this->fetchTable('Todos');
// 以降 $this->Todos のように書ける環境もあります</code></pre>
  <p>「Todosという表係を借りる」イメージです。</p>
</section>

<section class="lesson" id="find">
  <h2>4. <code>find()</code></h2>
  <div class="callout"><code>find()</code>＝検索スタートボタン</div>
<pre data-lang="php"><code>$query = $this->Todos->find();
// まだ「条件付きの検索計画」。ここでDBは確定していないことも多い</code></pre>
</section>

<section class="lesson" id="all">
  <h2>5. <code>all()</code></h2>
  <div class="callout"><code>all()</code>＝ヒットしたものを全部（一覧として）取る</div>
<pre data-lang="php"><code>$todos = $this->Todos->find()->all();</code></pre>
</section>

<section class="lesson" id="first">
  <h2>6. <code>first()</code></h2>
  <div class="callout"><code>first()</code>＝先頭の1件だけ。無ければ null</div>
<pre data-lang="php"><code>$todo = $this->Todos->find()->first();</code></pre>
</section>

<section class="lesson" id="where">
  <h2>7. <code>where()</code> による検索条件</h2>
  <p>「未完了だけ」など、絞り込みです。</p>
<pre data-lang="php"><code>$todos = $this->Todos->find()
    ->where(['done' => false])
    ->all();</code></pre>
  <div class="tip">
    <span class="tip-label">読み方</span>
    <p><code>where(['done' =&gt; false])</code>＝「done が false のもの」。</p>
  </div>
</section>

<section class="lesson" id="and-or">
  <h2>8. AND / OR条件</h2>
  <ul>
    <li>条件を並べる → AND（どれも満たす）</li>
    <li><code>OR</code> キー → どれか満たせばOK</li>
  </ul>
<pre data-lang="php"><code>->where([
    'user_id' => 1,
    'done' => false,  // どちらも必要 = AND
])

->where([
    'OR' => [
        ['title LIKE' => '%請求%'],
        ['title LIKE' => '%支払%'],
    ]
])</code></pre>
</section>

<section class="lesson" id="order">
  <h2>9. 並び替え</h2>
<pre data-lang="php"><code>->orderBy(['created' => 'DESC'])  // 新しい順
// DESC=大きい→小さい、ASC=小さい→大きい</code></pre>
</section>

<section class="lesson" id="one">
  <h2>10. データ1件取得</h2>
<pre data-lang="php"><code>$todo = $this->Todos->get($id);
// ID指定で1件。無いとエラー（例外）になる</code></pre>
  <div class="warn">
    <span class="warn-label">first との違い</span>
    <p><code>get</code> は「必ずあるはず」のとき。<code>first</code> は「無いかも」のときに向きます。</p>
  </div>
</section>

<section class="lesson" id="list">
  <h2>11. データ一覧取得</h2>
<pre data-lang="php"><code>$todos = $this->Todos->find()
    ->where(['user_id' => $userId])
    ->orderBy(['id' => 'DESC'])
    ->all();
$this->set(compact('todos'));
// compact は ['todos' => $todos] の短縮</code></pre>
</section>

<section class="lesson" id="sql">
  <h2>12. SQLがどう組み立てられるのか</h2>
  <p>あなたが書いた find は、最終的にデータベース言葉（SQL）になります。</p>
<pre data-lang="sql"><code>SELECT * FROM todos WHERE done = 0</code></pre>
  <div class="tip">
    <span class="tip-label">実務の癖</span>
    <p>「思ったデータが来ない」ときは、画面より先にSQLを疑うと早いです。</p>
  </div>
</section>

<section class="lesson" id="exercise">
  <h2>第5章 やってみよう</h2>
  <div class="exercise">
    <div class="exercise-label">EXERCISE</div>
    <ol>
      <li>未完了だけ取る where を書く</li>
      <li>新しい順に並べる</li>
      <li>get と first の違いを自分の言葉で1行ずつ書く</li>
    </ol>
  </div>
</section>`
  },

  '06': {
    title: 'CRUD',
    lead: 'データの基本は4つだけ。作る・読む・更新・削除です。',
    prev: { file: 'ch05.html', title: '第5章 Model・データベース' },
    next: { file: 'ch07.html', title: '第7章 Session' },
    body: `
<section class="lesson" id="what-is-crud">
  <h2>1. CRUDとは</h2>
  <div class="callout">Create 作る / Read 読む / Update 更新 / Delete 削除</div>
  <p>TODOアプリも会員管理も、ほとんどこの組み合わせです。</p>
</section>

<section class="lesson" id="index">
  <h2>2. 一覧表示（Read）</h2>
<pre data-lang="php"><code>public function index()
{
    $todos = $this->Todos->find()->all();
    $this->set(compact('todos'));
}</code></pre>
  <p>「全部取って画面へ渡す」だけのシンプルな形です。</p>
</section>

<section class="lesson" id="view">
  <h2>3. 詳細表示（Read）</h2>
<pre data-lang="php"><code>public function view($id = null)
{
    $todo = $this->Todos->get($id);
    $this->set(compact('todo'));
}</code></pre>
</section>

<section class="lesson" id="add">
  <h2>4. 新規登録（Create）</h2>
  <div class="tip">
    <span class="tip-label">流れ（暗記用）</span>
    <ol>
      <li>空のEntityを用意</li>
      <li>POSTなら入力を流し込む</li>
      <li>save できたら Flash＋一覧へ</li>
      <li>失敗ならエラー表示</li>
    </ol>
  </div>
<pre data-lang="php"><code>public function add()
{
    $todo = $this->Todos->newEmptyEntity();
    if ($this->request->is('post')) {
        $todo = $this->Todos->patchEntity($todo, $this->request->getData());
        if ($this->Todos->save($todo)) {
            $this->Flash->success('登録しました');
            return $this->redirect(['action' => 'index']);
        }
        $this->Flash->error('登録に失敗しました');
    }
    $this->set(compact('todo'));
}</code></pre>
</section>

<section class="lesson" id="new-entity">
  <h2>5. Entityの作成</h2>
<pre data-lang="php"><code>$todo = $this->Todos->newEmptyEntity();           // 空
$todo = $this->Todos->newEntity(['title' => '原稿']); // 最初から値あり</code></pre>
</section>

<section class="lesson" id="patch">
  <h2>6. <code>patchEntity()</code></h2>
  <div class="callout">フォームの入力をEntityに貼り付け＋チェック（バリデーション）</div>
<pre data-lang="php"><code>$todo = $this->Todos->patchEntity($todo, $this->request->getData());</code></pre>
</section>

<section class="lesson" id="save">
  <h2>7. <code>save()</code></h2>
  <div class="callout">DBに保存。成功したらデータ、失敗したら false</div>
<pre data-lang="php"><code>if ($this->Todos->save($todo)) {
    // 成功
}</code></pre>
</section>

<section class="lesson" id="edit">
  <h2>8. 更新（Update）</h2>
  <p>新規との違いは「先に既存データを get する」ことです。</p>
<pre data-lang="php"><code>public function edit($id = null)
{
    $todo = $this->Todos->get($id);
    if ($this->request->is(['post', 'put', 'patch'])) {
        $todo = $this->Todos->patchEntity($todo, $this->request->getData());
        if ($this->Todos->save($todo)) {
            $this->Flash->success('更新しました');
            return $this->redirect(['action' => 'index']);
        }
        $this->Flash->error('更新に失敗しました');
    }
    $this->set(compact('todo'));
}</code></pre>
</section>

<section class="lesson" id="delete">
  <h2>9. 削除（Delete）</h2>
<pre data-lang="php"><code>public function delete($id = null)
{
    $this->request->allowMethod(['post', 'delete']);
    $todo = $this->Todos->get($id);
    if ($this->Todos->delete($todo)) {
        $this->Flash->success('削除しました');
    } else {
        $this->Flash->error('削除に失敗しました');
    }
    return $this->redirect(['action' => 'index']);
}</code></pre>
  <div class="warn">
    <span class="warn-label">なぜ allowMethod？</span>
    <p>URLを直接開いただけ（GET）で消えないようにする安全策です。</p>
  </div>
</section>

<section class="lesson" id="validation">
  <h2>10. バリデーション</h2>
  <div class="callout">入力ルール。「タイトル必須」などをTableに書く</div>
<pre data-lang="php"><code>public function validationDefault(Validator $validator): Validator
{
    $validator
        ->scalar('title')
        ->maxLength('title', 100)
        ->notEmptyString('title');
    return $validator;
}</code></pre>
</section>

<section class="lesson" id="exercise">
  <h2>第6章 CRUD総合演習</h2>
  <div class="exercise">
    <div class="exercise-label">EXERCISE</div>
    <ol>
      <li>index / view / add / edit / delete の骨格を写経する</li>
      <li>title 必須バリデーションを入れる</li>
      <li>成功・失敗で Flash を出し分ける</li>
    </ol>
  </div>
</section>`
  },

  '07': {
    title: 'Session',
    lead: 'Sessionは「サーバー側のメモ帳」。ログイン状態の保存に使います。',
    prev: { file: 'ch06.html', title: '第6章 CRUD' },
    next: { file: 'ch08.html', title: '第8章 Component' },
    body: `
<section class="lesson" id="what-is-session">
  <h2>1. Sessionとは</h2>
  <div class="callout"><code>Session</code>＝その人専用の、サーバー側の一時メモ</div>
  <div class="analogy">
    <span class="analogy-label">たとえ</span>
    <p>コインロッカーです。ブラウザは鍵（Cookie）だけ持ち、中身はサーバー側に置きます。</p>
  </div>
</section>

<section class="lesson" id="read">
  <h2>2. Sessionの取得</h2>
<pre data-lang="php"><code>$session = $this->request->getSession();
$userId = $session->read('user_id');</code></pre>
</section>

<section class="lesson" id="write">
  <h2>3. Sessionへの書き込み</h2>
<pre data-lang="php"><code>$this->request->getSession()->write('user_id', 10);
$this->request->getSession()->write('Auth.User', [
    'id' => 10,
    'name' => 'Taro',
]);</code></pre>
  <p><code>Auth.User</code> のように点で階層を作れます。</p>
</section>

<section class="lesson" id="check">
  <h2>4. Sessionの存在チェック</h2>
<pre data-lang="php"><code>if ($this->request->getSession()->check('user_id')) {
    // メモがある
}</code></pre>
</section>

<section class="lesson" id="delete">
  <h2>5. Sessionの削除</h2>
<pre data-lang="php"><code>$session->delete('user_id'); // 1項目消す
$session->destroy();         // 全部捨てる（ログアウト向き）</code></pre>
</section>

<section class="lesson" id="login-idea">
  <h2>6. ログイン情報をSessionで扱う考え方</h2>
  <div class="callout">ログイン成功 → ユーザー情報を書く / 以降のページ → 読み出して「ログイン中」と判断</div>
<pre data-lang="php"><code>// ログイン成功時
$session->write('Auth.User', $user);</code></pre>
</section>

<section class="lesson" id="logged-in">
  <h2>7. ログイン状態の判定</h2>
<pre data-lang="php"><code>public function isLoggedIn(): bool
{
    return $this->request->getSession()->check('Auth.User.id');
}</code></pre>
  <div class="note-box">
    <span class="note-label">補足</span>
    <p>本格アプリでは認証プラグインを使うことも多いです。でも中身のイメージは「Sessionに誰かを覚えている」です。</p>
  </div>
</section>

<section class="lesson" id="exercise">
  <h2>第7章 やってみよう</h2>
  <div class="exercise">
    <div class="exercise-label">EXERCISE</div>
    <ol>
      <li>user_id を Session に書く（ログイン風）</li>
      <li>別Actionで読み出して表示</li>
      <li>ログアウトで消す</li>
      <li>無いときは一覧を見せない</li>
    </ol>
  </div>
</section>`
  },

  '08': {
    title: 'Component',
    lead: '同じ受付処理を、何度もコピペしないための部品です。',
    prev: { file: 'ch07.html', title: '第7章 Session' },
    next: { file: 'ch09.html', title: '第9章 Pagination' },
    body: `
<section class="lesson" id="what-is-component">
  <h2>1. Componentとは</h2>
  <div class="callout"><code>Component</code>＝Controller用の再利用パーツ</div>
</section>

<section class="lesson" id="why">
  <h2>2. Componentを使う理由</h2>
  <div class="analogy">
    <span class="analogy-label">たとえ</span>
    <p>どの窓口でも「会員証チェック」が必要なら、チェック係を1人雇って使い回します。それがComponentです。</p>
  </div>
</section>

<section class="lesson" id="use">
  <h2>3. ControllerからComponentを利用</h2>
<pre data-lang="php"><code>public function initialize(): void
{
    parent::initialize();
    $this->loadComponent('Flash');
    $this->loadComponent('AuthCheck');
}</code></pre>
</section>

<section class="lesson" id="extract">
  <h2>4. 共通処理をComponent化</h2>
<pre data-lang="php"><code>// ログイン必須チェックの例（イメージ）
public function requireLogin(): void
{
    $controller = $this->getController();
    $session = $controller->getRequest()->getSession();
    if (!$session->check('Auth.User.id')) {
        $controller->Flash->error('ログインしてください');
        $controller->redirect(['controller' => 'Users', 'action' => 'login']);
    }
}</code></pre>
  <div class="tip">
    <span class="tip-label">始め方</span>
    <p>まずControllerに直接書いて動かす → 同じ処理が2回出たらComponentにする、で十分です。</p>
  </div>
</section>

<section class="lesson" id="exercise">
  <h2>第8章 やってみよう</h2>
  <div class="exercise">
    <div class="exercise-label">EXERCISE</div>
    <ol>
      <li>ログインチェックをComponentに切り出す設計を紙に書く</li>
      <li>2つのControllerから使う場面を想像する</li>
    </ol>
  </div>
</section>`
  },

  '09': {
    title: 'Pagination',
    lead: '件数が多いときは、ページに分けて少しずつ表示します。',
    prev: { file: 'ch08.html', title: '第8章 Component' },
    next: { file: 'ch10.html', title: '第10章 Transaction' },
    body: `
<section class="lesson" id="what-is-paging">
  <h2>1. ページングとは</h2>
  <div class="callout">結果を「1ページあたり○件」に分けて見せる仕組み</div>
  <div class="analogy">
    <span class="analogy-label">たとえ</span>
    <p>本の目次や、検索結果の「1 2 3 …」ボタンです。</p>
  </div>
</section>

<section class="lesson" id="why">
  <h2>2. なぜPaginationが必要なのか</h2>
  <p>1万件を一度に出すと、遅いし読めません。10件ずつにすると快適です。</p>
</section>

<section class="lesson" id="paginate">
  <h2>3. <code>paginate()</code></h2>
<pre data-lang="php"><code>$todos = $this->paginate($this->Todos->find());
$this->set(compact('todos'));</code></pre>
</section>

<section class="lesson" id="limit">
  <h2>4. 件数設定</h2>
<pre data-lang="php"><code>public array $paginate = [
    'limit' => 10,  // 1ページ10件
];</code></pre>
</section>

<section class="lesson" id="order">
  <h2>5. 並び順</h2>
<pre data-lang="php"><code>public array $paginate = [
    'limit' => 10,
    'order' => ['Todos.id' => 'desc'],
];</code></pre>
</section>

<section class="lesson" id="search">
  <h2>6. 検索＋Pagination</h2>
  <p>先に where で絞り、そのクエリを paginate に渡します。</p>
<pre data-lang="php"><code>$q = $this->request->getQuery('q');
$query = $this->Todos->find();
if ($q !== null && $q !== '') {
    $query->where(['title LIKE' => '%' . $q . '%']);
}
$todos = $this->paginate($query);</code></pre>
</section>

<section class="lesson" id="view-links">
  <h2>7. View側でページリンクを表示</h2>
<pre data-lang="ctp" data-label="VIEW"><code>&lt;?= $this->Paginator->prev('前へ') ?&gt;
&lt;?= $this->Paginator->numbers() ?&gt;
&lt;?= $this->Paginator->next('次へ') ?&gt;</code></pre>
</section>

<section class="lesson" id="exercise">
  <h2>第9章 やってみよう</h2>
  <div class="exercise">
    <div class="exercise-label">EXERCISE</div>
    <ol>
      <li>limit を 10 にする</li>
      <li>検索語があるときだけ where する</li>
      <li>前へ・次へリンクをViewに置く</li>
    </ol>
  </div>
</section>`
  },

  '10': {
    title: 'Transaction',
    lead: '複数の保存を「全部成功」か「全部なかったこと」にまとめる仕組みです。',
    prev: { file: 'ch09.html', title: '第9章 Pagination' },
    next: { file: 'ch11.html', title: '第11章 ログイン・権限制御' },
    body: `
<section class="lesson" id="what-is-tx">
  <h2>1. Transactionとは</h2>
  <div class="callout">複数のDB操作を、1セットとして扱うこと</div>
</section>

<section class="lesson" id="why">
  <h2>2. なぜ必要なのか</h2>
  <div class="analogy">
    <span class="analogy-label">たとえ</span>
    <p>口座Aから下ろして口座Bに入れる途中で失敗したら、片方だけ減っては困ります。両方まとめて確定／取消が必要です。</p>
  </div>
</section>

<section class="lesson" id="begin">
  <h2>3. BEGIN / COMMIT / ROLLBACK</h2>
  <ul>
    <li><code>BEGIN</code> … セット開始</li>
    <li><code>COMMIT</code> … 全部OKなので確定</li>
    <li><code>ROLLBACK</code> … 失敗したので取り消し</li>
  </ul>
</section>

<section class="lesson" id="cake">
  <h2>4. CakePHPでTransactionを使う</h2>
  <p>おすすめは「任せきり」の書き方です。</p>
<pre data-lang="php"><code>$connection = $this->Todos->getConnection();
$connection->transactional(function () {
    // ここで複数 save
    // 例外が出たら自動で rollback
    return true;
});</code></pre>
</section>

<section class="lesson" id="multi">
  <h2>5. 複数のDB更新</h2>
<pre data-lang="php"><code>$connection->transactional(function () use ($order, $items) {
    $this->Orders->saveOrFail($order);
    foreach ($items as $item) {
        $this->OrderItems->saveOrFail($item);
    }
    return true;
});</code></pre>
  <p><code>saveOrFail</code> は失敗時に例外を出すので、Transactionと相性がよいです。</p>
</section>

<section class="lesson" id="fail">
  <h2>6. 途中で失敗した場合</h2>
  <div class="callout">1つでも失敗 → 全部なかったことになる（ROLLBACK）</div>
</section>

<section class="lesson" id="exception">
  <h2>7. 例外処理との組み合わせ</h2>
<pre data-lang="php"><code>try {
    $connection->transactional(function () use ($todo, $log) {
        $this->Todos->saveOrFail($todo);
        $this->Logs->saveOrFail($log);
        return true;
    });
    $this->Flash->success('完了');
} catch (\\Throwable $e) {
    $this->Flash->error('処理に失敗しました');
}</code></pre>
</section>

<section class="lesson" id="exercise">
  <h2>第10章 やってみよう</h2>
  <div class="exercise">
    <div class="exercise-label">EXERCISE</div>
    <ol>
      <li>「TODO保存＋ログ保存」を1セットにすると書く</li>
      <li>2つ目が失敗したら1つ目も消える理由を説明する</li>
    </ol>
  </div>
</section>`
  },

  '11': {
    title: 'ログイン・権限制御',
    lead: '「誰か」と「何をしてよいか」は別問題です。順番に押さえます。',
    prev: { file: 'ch10.html', title: '第10章 Transaction' },
    next: { file: 'ch12.html', title: '第12章 ログ・エラー処理' },
    body: `
<section class="lesson" id="authz">
  <h2>1. 認証と認可の違い</h2>
  <div class="callout"><code>認証</code>＝あなたは誰？　／　<code>認可</code>＝それしていい？</div>
  <div class="analogy">
    <span class="analogy-label">たとえ</span>
    <p>社員証で入場＝認証。会議室を予約できる権限＝認可。</p>
  </div>
</section>

<section class="lesson" id="user">
  <h2>2. ログインユーザーとは</h2>
  <p>今サイトを使っている、ログイン済みの人です。Sessionなどに情報が入っています。</p>
</section>

<section class="lesson" id="get-user">
  <h2>3. ログインユーザー情報の取得</h2>
<pre data-lang="php"><code>$user = $this->request->getSession()->read('Auth.User');
$userId = $user['id'] ?? null;</code></pre>
</section>

<section class="lesson" id="guest">
  <h2>4. 未ログイン判定</h2>
<pre data-lang="php"><code>if (!$this->request->getSession()->check('Auth.User.id')) {
    $this->Flash->error('ログインしてください');
    return $this->redirect(['controller' => 'Users', 'action' => 'login']);
}</code></pre>
</section>

<section class="lesson" id="permission">
  <h2>5. 権限とは</h2>
  <div class="callout">「その操作をしてよいか」のルール</div>
  <p>例: 一般は自分のTODOだけ。管理者は全部。</p>
</section>

<section class="lesson" id="roles">
  <h2>6. 一般ユーザー / 管理者</h2>
<pre data-lang="php"><code>$role = $this->request->getSession()->read('Auth.User.role');
if ($role !== 'admin') {
    // 管理者専用ページならここで拒否
}</code></pre>
</section>

<section class="lesson" id="own-data">
  <h2>7. 対象データを操作できるか確認</h2>
  <p>URLを直打ちされても守れるようにします。</p>
<pre data-lang="php"><code>$todo = $this->Todos->get($id);
if ($todo->user_id !== $userId && $role !== 'admin') {
    throw new \\Cake\\Http\\Exception\\ForbiddenException('権限がありません');
}</code></pre>
</section>

<section class="lesson" id="denied">
  <h2>8. 権限がない場合の処理</h2>
  <ul>
    <li>403（禁止）を返す</li>
    <li>Flashして一覧へ戻す</li>
    <li>（上級）存在しないように 404 にする</li>
  </ul>
</section>

<section class="lesson" id="exercise">
  <h2>第11章 やってみよう</h2>
  <div class="exercise">
    <div class="exercise-label">EXERCISE</div>
    <ol>
      <li>自分のTODOだけ編集できる条件を日本語で書く</li>
      <li>管理者例外を1行で足す</li>
    </ol>
  </div>
</section>`
  },

  '12': {
    title: 'ログ・エラー処理',
    lead: 'ユーザーには短く、自分たちには詳しく。失敗に備える章です。',
    prev: { file: 'ch11.html', title: '第11章 ログイン・権限制御' },
    next: { file: 'ch13.html', title: '第13章 CSV出力' },
    body: `
<section class="lesson" id="what-is-log">
  <h2>1. ログとは</h2>
  <div class="callout">アプリの出来事をファイルなどに残した記録</div>
</section>

<section class="lesson" id="why">
  <h2>2. なぜログを残すのか</h2>
  <p>本番では詳細エラーを画面に出せません。後から原因を追うために必要です。</p>
</section>

<section class="lesson" id="cake-log">
  <h2>3. CakePHPでログ出力</h2>
<pre data-lang="php"><code>use Cake\\Log\\Log;

Log::write('info', '一覧を表示しました');
Log::error('保存失敗: ' . $e->getMessage());</code></pre>
</section>

<section class="lesson" id="levels">
  <h2>4. info / warning / error</h2>
  <ul>
    <li><code>info</code> … 普通の記録</li>
    <li><code>warning</code> … 変だけど動いている</li>
    <li><code>error</code> … 失敗</li>
  </ul>
</section>

<section class="lesson" id="exception">
  <h2>5. Exception</h2>
  <div class="callout">「ここで止めたい異常」を表すもの。throw すると処理が中断される</div>
</section>

<section class="lesson" id="try-catch">
  <h2>6. try / catch</h2>
  <div class="analogy">
    <span class="analogy-label">たとえ</span>
    <p>try＝挑戦。catch＝失敗したときの受け網。</p>
  </div>
<pre data-lang="php"><code>try {
    $this->Todos->saveOrFail($todo);
} catch (\\Throwable $e) {
    Log::error($e->getMessage());
    $this->Flash->error('保存に失敗しました');
}</code></pre>
</section>

<section class="lesson" id="on-error">
  <h2>7. エラー時の処理</h2>
  <div class="tip">
    <span class="tip-label">基本パターン</span>
    <ol>
      <li>ユーザーには短い Flash</li>
      <li>ログには詳細</li>
      <li>必要ならROLLBACK</li>
      <li>安全な画面へ戻す</li>
    </ol>
  </div>
</section>

<section class="lesson" id="exercise">
  <h2>第12章 やってみよう</h2>
  <div class="exercise">
    <div class="exercise-label">EXERCISE</div>
    <ol>
      <li>失敗時に Log::error する catch を書く</li>
      <li>ユーザー向け文面は1行にする</li>
    </ol>
  </div>
</section>`
  },

  '13': {
    title: 'CSV出力',
    lead: '表データをファイルにして渡す、業務で頻出の機能です。',
    prev: { file: 'ch12.html', title: '第12章 ログ・エラー処理' },
    next: { file: 'ch14.html', title: '第14章 TODO機能を一から作る' },
    body: `
<section class="lesson" id="what-is-csv">
  <h2>1. CSVとは</h2>
  <div class="callout">カンマで区切ったテキスト。Excelや他システム連携でよく使う</div>
<pre data-lang="text" data-label="CSV"><code>ID,タイトル,完了
1,書類提出,0
2,買い物,1</code></pre>
</section>

<section class="lesson" id="fetch">
  <h2>2. DBから対象データ取得</h2>
<pre data-lang="php"><code>$todos = $this->Todos->find()
    ->where(['user_id' => $userId])
    ->all();</code></pre>
</section>

<section class="lesson" id="transform">
  <h2>3. CSV用にデータを加工</h2>
  <p>1行目は見出し、2行目からデータ、が分かりやすいです。</p>
<pre data-lang="php"><code>$rows = [];
$rows[] = ['ID', 'タイトル', '完了'];
foreach ($todos as $todo) {
    $rows[] = [$todo->id, $todo->title, $todo->done ? '1' : '0'];
}</code></pre>
</section>

<section class="lesson" id="response">
  <h2>4. CSVレスポンス</h2>
  <p>ブラウザに「これはダウンロード用」と伝えます。</p>
<pre data-lang="php"><code>$this->response = $this->response->withType('csv');
$this->response = $this->response->withDownload('todos.csv');</code></pre>
</section>

<section class="lesson" id="download">
  <h2>5. ファイルとして出力</h2>
<pre data-lang="php"><code>public function export()
{
    $todos = $this->Todos->find()->all();
    $fh = fopen('php://temp', 'r+');
    fputcsv($fh, ['ID', 'Title', 'Done']);
    foreach ($todos as $todo) {
        fputcsv($fh, [$todo->id, $todo->title, (int)$todo->done]);
    }
    rewind($fh);
    $csv = stream_get_contents($fh);
    fclose($fh);

    return $this->response
        ->withType('csv')
        ->withDownload('todos.csv')
        ->withStringBody($csv);
}</code></pre>
</section>

<section class="lesson" id="encoding">
  <h2>6. 日本語・文字コードについて</h2>
  <div class="warn">
    <span class="warn-label">Excelで文字化けしたら</span>
    <p>UTF-8の先頭に BOM を付ける、または SJIS に変換する、のどれかが必要なことがあります。</p>
  </div>
<pre data-lang="php"><code>$csv = "\\xEF\\xBB\\xBF" . $csv; // UTF-8 BOM の例</code></pre>
</section>

<section class="lesson" id="exercise">
  <h2>第13章 やってみよう</h2>
  <div class="exercise">
    <div class="exercise-label">EXERCISE</div>
    <ol>
      <li>見出し＋データ行の配列を作る</li>
      <li>ダウンロード用レスポンスの骨格を写経する</li>
      <li>日本語タイトルで文字化けしないか確認する</li>
    </ol>
  </div>
</section>`
  },

  '14': {
    title: 'TODO機能を一から作る',
    lead: '今までの部品を、1つのTODOアプリに組み立てます。完成イメージを持って進みましょう。',
    prev: { file: 'ch13.html', title: '第13章 CSV出力' },
    next: null,
    body: `
<section class="lesson" id="table">
  <h2>1. TODOテーブルを理解</h2>
  <div class="callout">最低限の列: id / user_id / title / done / created / modified</div>
<pre data-lang="sql"><code>CREATE TABLE todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  done TINYINT(1) NOT NULL DEFAULT 0,
  created DATETIME,
  modified DATETIME
);</code></pre>
  <div class="tip">
    <span class="tip-label">意味</span>
    <p><code>user_id</code>＝誰のTODOか。<code>done</code>＝終わったか（0/1）。</p>
  </div>
</section>

<section class="lesson" id="index">
  <h2>2. TODO一覧取得</h2>
  <p>ログイン中ユーザーの分だけ、新しい順でページングします。</p>
<pre data-lang="php"><code>public function index()
{
    $userId = $this->request->getSession()->read('Auth.User.id');
    $query = $this->Todos->find()
        ->where(['user_id' => $userId])
        ->orderBy(['id' => 'DESC']);
    $todos = $this->paginate($query);
    $this->set(compact('todos'));
}</code></pre>
</section>

<section class="lesson" id="view">
  <h2>3. TODO詳細</h2>
<pre data-lang="php"><code>public function view($id = null)
{
    $todo = $this->Todos->get($id);
    $this->assertOwned($todo); // 自分のものか確認
    $this->set(compact('todo'));
}</code></pre>
</section>

<section class="lesson" id="add">
  <h2>4. TODO登録</h2>
  <div class="warn">
    <span class="warn-label">忘れやすい点</span>
    <p>フォームに無くても、<code>user_id</code> はサーバー側で必ずセットします（改ざん防止）。</p>
  </div>
<pre data-lang="php"><code>$data = $this->request->getData();
$data['user_id'] = $this->request->getSession()->read('Auth.User.id');
$todo = $this->Todos->patchEntity($todo, $data);</code></pre>
</section>

<section class="lesson" id="edit">
  <h2>5. TODO編集</h2>
  <p>get → 権限チェック → patch → save、の流れです（第6章＋第11章）。</p>
</section>

<section class="lesson" id="delete">
  <h2>6. TODO削除</h2>
  <p>POSTのみ許可 → get → 権限チェック → delete → 一覧へ。</p>
</section>

<section class="lesson" id="search">
  <h2>7. 検索</h2>
<pre data-lang="php"><code>$q = $this->request->getQuery('q');
if ($q) {
    $query->where(['title LIKE' => '%' . $q . '%']);
}</code></pre>
</section>

<section class="lesson" id="pagination">
  <h2>8. Pagination</h2>
<pre data-lang="php"><code>public array $paginate = [
    'limit' => 10,
    'order' => ['Todos.id' => 'desc'],
];</code></pre>
</section>

<section class="lesson" id="user-link">
  <h2>9. ログインユーザーとの紐付け</h2>
  <div class="callout">登録時に user_id を付ける / 一覧は自分のIDで絞る</div>
</section>

<section class="lesson" id="auth">
  <h2>10. 権限チェック</h2>
<pre data-lang="php"><code>private function assertOwned($todo): void
{
    $userId = $this->request->getSession()->read('Auth.User.id');
    $role = $this->request->getSession()->read('Auth.User.role');
    if ($todo->user_id !== $userId && $role !== 'admin') {
        throw new \\Cake\\Http\\Exception\\ForbiddenException();
    }
}</code></pre>
</section>

<section class="lesson" id="transaction">
  <h2>11. Transaction</h2>
  <p>「TODO保存＋操作ログ」などを1セットにするとき（第10章）に使います。</p>
</section>

<section class="lesson" id="error">
  <h2>12. エラー処理</h2>
  <p>失敗したら Flash（短い）＋ Log（詳しい）。</p>
</section>

<section class="lesson" id="csv">
  <h2>13. CSV出力</h2>
  <p>自分のTODOだけ export（第13章）すれば完成です。</p>
  <div class="callout">ここまで動けば「業務CRUD」の最低ラインはクリアです</div>
  <div class="exercise">
    <div class="exercise-label">FINAL</div>
    <h3>完成チェック（はい/いいえ）</h3>
    <ol>
      <li>未ログインで一覧に入れない</li>
      <li>他人のTODOをURL直打ちしても編集できない</li>
      <li>検索とページングが動く</li>
      <li>登録・更新・削除ができる</li>
      <li>CSVがダウンロードできる</li>
      <li>失敗時にログが残る</li>
    </ol>
  </div>
</section>`
  }
};

function layout(id, meta) {
  const prev = meta.prev
    ? `<a href="${meta.prev.file}"><span class="dir">前へ</span><span class="title">${meta.prev.title}</span></a>`
    : `<a href="../index.html"><span class="dir">前へ</span><span class="title">学習目次</span></a>`;
  const next = meta.next
    ? `<a class="next" href="${meta.next.file}"><span class="dir">次へ</span><span class="title">${meta.next.title}</span></a>`
    : `<a class="next" href="../index.html"><span class="dir">次へ</span><span class="title">学習目次へ戻る</span></a>`;

  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>第${parseInt(id, 10)}章 ${meta.title} — CakePHP 0から実務まで</title>
  <link rel="stylesheet" href="../css/style.css" />
</head>
<body data-chapter="${id}">
  <div id="site-nav" class="site-nav" aria-label="サイトナビ"></div>
  <div class="app">
    <aside class="sidebar" aria-label="目次">
      <a class="brand" href="../index.html">
        <div class="brand-title">CakePHP 0から実務まで</div>
        <div class="brand-sub">たまたまに · 初心者向け全14章</div>
      </a>
      <nav id="sidebar-nav"></nav>
    </aside>
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
    <main class="main">
      <div class="topbar">
        <button type="button" class="menu-btn" id="menu-btn" aria-label="メニュー">メニュー</button>
        <span>第${parseInt(id, 10)}章</span>
      </div>
      <div class="content">
        <header class="chapter-head">
          <div class="eyebrow">第${parseInt(id, 10)}章 · 初心者向け</div>
          <h1>${meta.title}</h1>
          <p class="lead">${meta.lead}</p>
        </header>
        ${meta.body}
        <nav class="pager">${prev}${next}</nav>
      </div>
    </main>
  </div>
  <script src="../js/site.js"></script>
  <script src="../js/curriculum.js"></script>
  <script src="../js/app.js"></script>
</body>
</html>
`;
}

const outDir = path.join(__dirname, 'chapters');
fs.mkdirSync(outDir, { recursive: true });

for (const [id, meta] of Object.entries(chapters)) {
  const file = path.join(outDir, `ch${id}.html`);
  fs.writeFileSync(file, layout(id, meta), 'utf8');
  console.log('wrote', file);
}
console.log('done');
