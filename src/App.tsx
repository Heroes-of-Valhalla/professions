import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import { Select } from "./components/Select";

interface Player {
  name: string,
  professions: string[]
}

interface Profession {
  name: string,
  key: string
}

function App() {
  const [players, setPlayers] = useState<Player[]>([])
  const [professions, setProfessions] = useState<Profession[]>([])

  const [profession, setProfession] = useState<string>('')

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Heroes-of-Valhalla/database/master/players.json')
      .then(r => r.json())
      .then(r => setPlayers(r))

    fetch('https://raw.githubusercontent.com/Heroes-of-Valhalla/database/master/professions.json')
      .then(r => r.json())
      .then(r => setProfessions(r))
  }, [])

  const filteredDatabase = profession && profession != "" ? players.filter(database => database.professions.includes(profession)) : players

  return (
    <>
      <div className="container mx-auto m-5">
        <img src="/dragon.png" alt="" className="mx-auto w-64" />
      </div>
      <div className="container mx-auto mt-5">
        <div className='block'>
          <Select value={profession} onChange={e => setProfession(e.target.value)}>
            <option value="">Selecione</option>
            {professions.map(profession => <option key={profession.key} value={profession.key}>{profession.name}</option>)}
          </Select>
        </div>
        <div className="mt-5 text-xl">
          <ul>
            {filteredDatabase.map(player => <ListItem>{player.name}</ListItem>)}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
