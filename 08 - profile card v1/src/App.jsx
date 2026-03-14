import Intro from "./components/Intro"
import Avatar from "./components/Avatar"
import SkillList from "./components/SkillList"

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  )
}

export default App