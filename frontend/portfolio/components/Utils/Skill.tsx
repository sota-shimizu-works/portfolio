import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faVuejs } from '@fortawesome/free-brands-svg-icons';


import Styles from "@/styles/utils/Skill.module.scss"

export default function Skill(props) {

    function Icon(name) {
        switch (name) {
            case 'React':
                return <FontAwesomeIcon icon={faReact} />;
            case 'NextJS':
                return <FontAwesomeIcon icon={faReact} />;
            case 'VueJS':
                return <FontAwesomeIcon icon={faVuejs} />;
            default:
                return <FontAwesomeIcon icon={faQuestion} />;
        }
    }

    return (
        <>
            <div className={Styles.wrap}>
                <div className={Styles.icon} data-understanding={props.data.understanding}>
                    {Icon(props.data.name)}
                </div>
            </div>
        </>
    )
}