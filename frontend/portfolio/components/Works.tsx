import Headding from "@/components/Utils/Headding"
import Styles from "@/styles/components/Works.module.scss"

export default function Works() {
    return (
        <>
            <Headding>Works</Headding>

            <div className={Styles.section}>

                <div className={Styles.description}>
                    <h3>コロナ感染者弁当受付システム</h3>
                    <p>
                        某自治体からコロナ感染者が支給されるお弁当、レトルト食の申し込みを受付するシステムを作成しました。<br />
                        フォームから住所やアレルギー情報などを入力してもらい、受付時刻から配食名簿、利用者統計、アレルギー管理シートなどの書き出しを行うことができます。<br />
                        30万人分の個人情報を扱うため暗号化処理や書き出し時にかかる負担を軽減するためAPI処理を作成などの対策を行いました。
                    </p>
                    <h4>使用技術</h4>
                    <ul>
                        <li>Linux</li>
                        <li>PHP</li>
                        <li>CakePHP3</li>
                    </ul>
                </div>

                <div className={Styles.description}>
                    <h3>E-ラーニングサービス</h3>
                    <p>
                        某学習塾で使用しているE-ラーニングシステムをlaravelに載せ替える業務を行いました。<br />
                        既存のシステムで使用してる認証と互換性を持たせる必要があるためLaravelから提供されている認証を利用せず作成する必要がありPHPで作成を行いました。
                    </p>
                    <h4>使用技術</h4>
                    <ul>
                        <li>Linux</li>
                        <li>PHP</li>
                        <li>laravel</li>
                    </ul>
                </div>

                <div className={Styles.description}>
                    <h3>REDE</h3>
                    <p>
                        発達障害のためのポータルサイトと放課後デイサービス事業者のための国保連請求システムの作成を行いました。<br />
                        技術選定、DB設計、インフラ設計、API設計、フレームワーク処理など多岐に渡り担当しました。
                    </p>
                    <h4>使用技術</h4>
                    <ul>
                        <li>NextJS</li>
                        <li>laravel</li>
                        <li>AWS</li>
                        <li>Jenkins</li>
                        <li>Swagger</li>
                    </ul>
                </div>
            </div>
        </>
    )
}