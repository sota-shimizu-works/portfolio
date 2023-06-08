import Headding from "@/components/Utils/Headding"
import Skill from "@/components/Utils/Skill"
import SkillsArray from "@/constants/MySkills"
import Styles from "@/styles/components/MySkills.module.scss"

export default function MySkills() {

    return (
        <>
            <Headding>MySkills</Headding>

            <div className={Styles.section}>
                <div className={`${Styles.skills} ${Styles.frontend}`}>
                    {SkillsArray.frontend.map((item, index) => (
                        <div key={index} className={Styles.skill}>
                            <Skill data={item} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}