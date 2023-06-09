import Styles from '@/styles/utils/LittleHeadding.module.scss'

export default function LittleHeadding({ children }) {
    return (
        <>
            <h3 className={Styles.headding}>{children}</h3>
        </>
    )
}