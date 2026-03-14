import Skill from './Skill'
import { skillList } from '../data.js'

function SkillList() {
    return (<>
        <div className="skill-list">
            {skillList.map((skill, index) => (
                <Skill
                    key={index}
                    skill={skill.skill}
                    emoji={skill.emoji}
                    color={skill.color}
                />
            ))}
        </div>
    </>)
}

export default SkillList