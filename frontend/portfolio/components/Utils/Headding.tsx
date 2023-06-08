import Styles from '@/styles/utils/Headding.module.scss'

export default function Headding({ children }) {
    return (
        <>
            <h2 className={Styles.headding}>{children}</h2>
        </>
    )
}