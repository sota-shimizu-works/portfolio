import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faDatabase, faCode, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { faReact, faVuejs, faHtml5, faCss3, faSass, faJs, faShopify, faPhp, faLaravel, faLinux, faAws, faJava, faGithub, faBitbucket } from '@fortawesome/free-brands-svg-icons';


import Styles from "@/styles/utils/Skill.module.scss"

export default function Skill(props) {

    function Icon(name) {
        switch (name) {
            case 'HTML5':
                return <FontAwesomeIcon icon={faHtml5} />;
            case 'CSS':
                return <FontAwesomeIcon icon={faCss3} />;
            case 'Sass/SCSS':
                return <FontAwesomeIcon icon={faSass} />;
            case 'JavaScript/TypeScript':
                return <FontAwesomeIcon icon={faJs} />;
            case 'React/NextJS':
                return <FontAwesomeIcon icon={faReact} />;
            case 'VueJS':
                return <FontAwesomeIcon icon={faVuejs} />;
            case 'Shopify':
                return <FontAwesomeIcon icon={faShopify} />;
            case 'PHP':
                return <FontAwesomeIcon icon={faPhp} />;
            case 'laravel':
                return <FontAwesomeIcon icon={faLaravel} />;
            case 'SQL/MySQL':
                return <FontAwesomeIcon icon={faDatabase} />;
            case 'Ruby/RubyOnRails':
                return <FontAwesomeIcon icon={faCode} />;
            case 'Java/SpringBoot':
                return <FontAwesomeIcon icon={faJava} />;
            case 'Linux/CentOS':
                return <FontAwesomeIcon icon={faLinux} />;
            case 'XD/Photoshop/Illstrator':
                return <FontAwesomeIcon icon={faPenNib} />;
            case 'AWS':
                return <FontAwesomeIcon icon={faAws} />;
            case 'Github':
                return <FontAwesomeIcon icon={faGithub} />;
            case 'BitBucket':
                return <FontAwesomeIcon icon={faBitbucket} />;
            default:
                return <FontAwesomeIcon icon={faCode} />;
        }
    }

    return (
        <>
            <div className={Styles.wrap}>
                <div className={Styles.icon} data-understanding={props.data.understanding}>
                    {Icon(props.data.name)}
                </div>
                <p>{props.data.name}</p>
            </div>
        </>
    )
}