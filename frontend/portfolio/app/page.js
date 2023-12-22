import styles from './page.module.scss'

export default function Home() {
  return (
    <main>


      <div className={styles.wrapper}>
        <div className={styles.texts}>
          <h2>清水 創太</h2>

          <p>
            1996年愛知県生まれ。小学校のHTMLの授業で初めてプログラミングを知り興味を持つ。母親が趣味でブログを作っていたため自宅にHTMLやCSSの参考書があり自宅で少しプログラミングに触れる。<br />
            <br />
            中学生の時ゲームプログラミングに興味を持ちGameSaladでゲーム制作を始める。高校生でUnityに興味を持ち、ゲームプログラミングを始めるが挫折する。<br />
            <br />
            高校生の時友達が所属している自主映画制作団体に誘われ映画のホームページの管理を任せられBloggerやWixを使ってホームページ制作を始める。<br />
            ホームページ制作の楽しさを知り進路をホームページ制作が学べる専門学校かつ4年生大学を弊学できる学校に決める。<br />
            専門学校では絵に描いたようなダメ学生生活を送り、退学へ。<br />
            退学後はバーや居酒屋でアルバイトをし自堕落を極める。21歳で再度勉強を始め就職へ。<br />
            ノンキャリアで採用してくれる会社はなかなかなく就活は難航したが、名古屋のデザイン会社が採用してくれたのでそこへ就職。<br />
            就職後はWordPressやLaravelなどPHPを中心に覚え、フリーランスへ転向、今に至る。
          </p>
        </div>
      </div>


      <div className={styles.wrapper}>
        <h2>Skills</h2>

        <div className={styles.skill}>
          <h3>FrontEnd</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>SCSS</li>
            <li>TypeScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>NextJS</li>
            <li>Shopify</li>
            <li>WordPress</li>
          </ul>
        </div>

        <div className={styles.skill}>
          <h3>BackEnd</h3>
          <ul>
            <li>PHP</li>
            <li>Laravel</li>
            <li>SQL</li>
            <li>MySQL</li>
            <li>Ruby</li>
            <li>RubyOnRails</li>
            <li>Java</li>
            <li>SpringBoot</li>
            <li>Linux</li>
            <li>CentOS</li>
          </ul>
        </div>

        <div className={styles.skill}>
          <h3>Other</h3>
          <ul>
            <li>XD</li>
            <li>Photoshop</li>
            <li>Illstrator</li>
            <li>AWS</li>
            <li>Vercel</li>
            <li>Github</li>
            <li>Bitbucket</li>
          </ul>
        </div>
      </div>


    </main>
  )
}
