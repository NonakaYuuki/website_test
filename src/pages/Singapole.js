import Header from '../components/Header';
import { Grid } from '@mui/material';
import Button from "../components/button";
import Footer from '../components/Footer';
import '../css/table.css'
import ChapterHeading from '../components/ChapterHeading';
import SubChapterHeading from '../components/SubChapterHeading';
import BulletList from '../components/List'
import DashedList from '../components/dashedList'
import ListWithTitle from '../components/ListWithTitle'

const Form = () => {
    return (
        <div><Header />
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 auto', maxWidth: '1400px', marginTop: 80, marginBottom: 0 }}>

        {/* 左側の広告 */}
        <div style={{ width: '20%', backgroundColor: '#f0f0f0' }}>
          広告スペース
        </div>

        {/* ブログポストのコンテンツ */}
        <div style={{ flex: '1', padding: '0 20px', fontFamily: 'Noto Sans', fontSize: '18px', lineHeight: '2' }}>
          <h1>ナイトサファリついでに日帰りマレーシア</h1>
          <h5>2024/2/27</h5>
          <p>こんにちは！天才ブロガーの、のにゃです。<br></br>
            今回はシンガポールから日帰りでマレーシアに行った方法を書いていきたいと思います。<br></br>
            結論、マレーシアにはシンガポール動物園から2時間弱で行くことが可能です！しかも、シンガポールとマレーシア国境の保安検査は甘いので弾丸で難なく行くことができます。
          <ChapterHeading tilte={'マレーシアへの行き方'} />
          <br></br>
          <SubChapterHeading title={'マレーシアへの行き方'} />
          <br></br>
          <BulletList items={[<ul><li>項目1<ul><li>サブ項目１</li><li>サブ項目2</li></ul></li></ul>, <ul><li>項目1</li></ul>, <ul><li>項目1</li></ul>]} />
          <br></br>
          ☑️ ポイント
          <DashedList items={['・aaa', '・いやや', '・おほほ']} />
          <br></br>
          <ListWithTitle title={'ahahahahaha'} content={'・内容'}/>
            {/* <br></br>
            <br></br>
            ・間違えて昼の動物園のチケット買ったこと
            ・ゆっくり自分のペースで回れて、間近で動物を見ることができる
            ・マレーシアに弾丸で行ったこと
            ・入国混んでたこと
            ・シンガポールの入国審査カードを他国から入国する際に作ってて、弾丸マレーシア行ったため、入国カードの内容を変更しなければならないと思ったが、変更せずにもう一つ新しく作って問題なかったこと。
            ・ジョホールバルは日本文化入りすぎててマレーシアらしさがなかったこと
            ・マレーシアの入国荷物検査もなくガバガバだったこと
            ・マレーシアなんか臭かったこと
            ・ナイトサファリ日本人多すぎたこと
            ・ナイトサファリ間近では動物を見れないこと
            
            <h3>旅程</h3>
            14:00 シンガポール動物園（昼の動物園）着<br></br>
            17:00 シンガポール動物園（昼の動物園）発<br></br>
            18:30 ジョホールバル（マレーシア）着<br></br>
            19:00 ジョホールバル（マレーシア）発<br></br>
            20:30 シンガポール動物園（ナイトサファリ）着<br></br>

            <br></br>
            まずは、シンガポール動物園らしい写真を一つ載せておきます。 */}
          </p>

        <h2>旅程</h2>
<table border="1" style={{ margin: '0 auto' }} className="blue-background">
 
  <tr>
  <td>　14:00　シンガポール動物園（昼の動物園）着</td>
  </tr>
  <tr>
    <td>　17:00　シンガポール動物園（昼の動物園）発</td>
  </tr>
  <tr>
    <td>　18:30　ジョホールバル（マレーシア）着</td>
  </tr>
  <tr>
    <td>　19:00　ジョホールバル（マレーシア）発</td>
  </tr>
  <tr>
  <td>　20:30　シンガポール動物園（ナイトサファリ）着</td>
  </tr>
</table>

<h2>体験</h2>

<h3>間違えて昼の動物園のチケットを買ってしまった</h3>
<p>シンガポールから日帰りでマレーシアへの旅行を計画しました。最初に訪れたのはシンガポール動物園でしたが、間違えて昼の動物園のチケットを買ってしまいました。しかし、昼の動物園でもゆっくりと自分のペースで回ることができ、間近で動物を見ることができました。</p>

<h3>マレーシア入国時のハプニング</h3>
<p>マレーシアへの入国は思ったよりも混雑しており、シンガポールの入国審査カードを持参していたため、少し不安でした。しかし、新たに入国カードを作成する必要はなく、スムーズに入国することができました。</p>

<h3>ジョホールバルの印象</h3>
<p>ジョホールバルに到着した際、日本文化が入り込んでおり、マレーシアらしい雰囲気を感じることができませんでした。また、入国時の荷物検査が緩く、驚くほどガバガバでした。さらに、周囲の匂いも若干不快でした。</p>

<h3>ナイトサファリの体験</h3>
<p>夜にはシンガポールに戻り、ナイトサファリに向かいました。しかし、日本人観光客が多く、動物を間近で見ることができなかったのが残念でした。</p>

<p>以上が、シンガポールから日帰りでマレーシアに旅行した際の体験記です。予期せぬ出来事もありましたが、思い出に残る一日となりました。</p>
  

        {/* 画像 */}
        <img src="/images/s_rabbit.jpeg" alt="ブログの画像" style={{ width: '800px', height: '700px', objectFit: 'cover' }} />
        {/* 画像の説明 */}
        <p>シンガポール動物園といえばこれ！！</p>

        <p>
          次にメガネザル！
        </p>

        {/* 画像 */}
        <img src="/images/s_monkey.jpeg" alt="ブログの画像" style={{ width: '500px', height: '500px', }} />
        {/* 画像の説明 */}
        <p>画像の説明をここに追加</p>

        {/* 画像 */}
        <img src="/images/m_star.jpeg" alt="ブログの画像" style={{ width: '800px', height: '500px', objectFit: 'cover' }} />
        {/* 画像の説明 */}
        <p>画像の説明をここに追加</p>
        </div>

        {/* 右側の広告 */}
        <div style={{ width: '20%', backgroundColor: '#f0f0f0' }}>
          広告スペース
        </div>

      </div>
      <Footer />
      </div>
    )
} 
export default Form;