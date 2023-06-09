import Headding from "@/components/Utils/Headding"
import LittleHeadding from "@/components/Utils/LittleHeadding"
import Skill from "@/components/Utils/Skill"
import SkillsArray from "@/constants/MySkills"
import Styles from "@/styles/components/MySkills.module.scss"

export default function MySkills() {

    return (
        <>
            <Headding>MySkills</Headding>

            <LittleHeadding>Front-end</LittleHeadding>

            <div className={Styles.section}>
                <div className={`${Styles.skills} ${Styles.frontend}`}>
                    {SkillsArray.frontend.map((item, index) => (
                        <div key={index} className={Styles.skill}>
                            <Skill data={item} />
                        </div>
                    ))}
                </div>
            </div>

            <LittleHeadding>Back-end</LittleHeadding>

            <div className={Styles.section}>
                <div className={`${Styles.skills} ${Styles.backend}`}>
                    {SkillsArray.backend.map((item, index) => (
                        <div key={index} className={Styles.skill}>
                            <Skill data={item} />
                        </div>
                    ))}
                </div>
            </div>

            <LittleHeadding>Other</LittleHeadding>

            <div className={Styles.section}>
                <div className={`${Styles.skills} ${Styles.backend}`}>
                    {SkillsArray.other.map((item, index) => (
                        <div key={index} className={Styles.skill}>
                            <Skill data={item} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}