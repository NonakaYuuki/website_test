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
          <h1>ナイトサファリよりも昼サファリに行け！</h1>
          <h5>2024/2/27</h5>
          <p>こんにちは！天才ブロガーの、のにゃです。<br></br>
            今回はシンガポールの人気スポットである動物園やナイトサファリについて書いていこうと思います。<br></br>
            結論、マレーシアにはシンガポール動物園から2時間弱で行くことが可能です！しかも、シンガポールとマレーシア国境の保安検査は甘いので弾丸で難なく行くことができます。
          </p>
          <br></br>
          
          <ListWithTitle title={'目次'} content={[<ul><li><a href="#section1">ナイトサファリとシンガポオール動物園の違い</a><ul><li><a href="#section1.1">場所</a></li><li><a href="#section1.2">営業時間</a></li><li><a href="#section1.3">予約方法</a></li><li><a href="#section1.4">楽しさ</a></li></ul></li></ul>, <ul><li><a href="#section2">実際に行った感想</a><ul><li><a href="#section2.1">シンガポオール動物園</a></li><li><a href="#section2.2">ナイトサファリ</a></li></ul></li></ul>]}/>

          <br></br>
          <ChapterHeading id={"section1"} tilte={'1. ナイトサファリとシンガポオール動物園の違い'} />
          <br></br>
          <SubChapterHeading id={"section1.1"} title={'1-1. 場所'} />
          <br></br>
          <img src="/images/zoo_map.png" alt="ブログの画像" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
          <br></br>
          <SubChapterHeading id={"section1.2"} title={'1-2. 営業時間'} />
          <br></br>
          <SubChapterHeading id={"section1.3"} title={'1-3. 予約方法'} />
          <br></br>
          <SubChapterHeading id={"section1.4"} title={'1-4. 楽しさ'} />
          <br></br>
          
          <ChapterHeading id={"section2"} tilte={'2. 実際に行った感想'} />
          <br></br>
          <SubChapterHeading id={"section2.1"} title={'2-1. ナイトサファリ'} />
          <br></br>
          <SubChapterHeading id={"section2.2"} title={'2-2. シンガポール動物園'} />
          <br></br>
          <img src="/images/s_monkey.jpeg" alt="ブログの画像" style={{ width: '50%', height: 'auto', }} />
          
         

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