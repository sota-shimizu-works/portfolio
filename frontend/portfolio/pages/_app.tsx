import '@/styles/global.scss'; // SCSSをインポート
import { config } from '@fortawesome/fontawesome-svg-core'; // Font Awesomeを設定
import '@fortawesome/fontawesome-svg-core/styles.css'; // Font AwesomeのCSSをインポート
config.autoAddCss = false; // Font Awesomeの自動CSS追加を無効化
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
