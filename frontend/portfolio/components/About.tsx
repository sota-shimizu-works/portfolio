import { differenceInYears } from 'date-fns';
import { format } from 'date-fns';

import Styles from '@/styles/components/About.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function About() {

    const birthday: Date = new Date('1996-10-15');
    const currentDate: Date = new Date();
    const age: number = differenceInYears(currentDate, birthday);
    const formattedDate = format(birthday, 'yyyy/MM/dd');

    return (
        <>
            <div className={Styles.section}>
                <div className={Styles.icon}>
                    <FontAwesomeIcon icon={faCode} />
                </div>

                <div className={Styles.lists}>
                    <div className={Styles.list}>
                        <div className={Styles.nameWrap}>
                            <div className={Styles.name}>
                                <span>Shimizu</span>
                                <span>清水</span>
                            </div>
                            <div className={Styles.name}>
                                <span>Sota</span>
                                <span>創太</span>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.list}>
                        <h3>生年月日</h3>
                        <p>{formattedDate}({age})</p>
                    </div>
                    <div className={Styles.list}>
                        <h3>連絡先</h3>
                        <p><a href="mailto:shimizu.s.works@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> shimizu.s.works@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}