import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PokemonList from './PokemonList.jsx';

const App = () => {

  const [allData, setAllDate] = useState([]);
  const [filter, setFilter] = useState('');
  const [insertBox, setInsertBox] = useState(false);
  const [newPoke, setNewPoke] = useState({name: '', type: '', img: ''});

  useEffect(() => {
    getAll();
  }, [])

  useEffect(() => {
    getType();
  }, [filter]);


  const getAll = () => {
    axios.get('/pokemon')
      .then(response => {
        setAllDate(response.data);
      })
      .catch(err => {
        console.error(err);
      })
  }

  const getType = () => {
    axios.get(`/pokemon/${filter}`)
    .then(response => {
      setAllDate(response.data);
      console.log('get new data', allData);
    })
    .then()
    .catch(err => {
      console.error(err);
    })
  }

  // filter data ????
  const filteredData = (e) => {
    setFilter(e.target.value);
    console.log(filter);
    // getType();
  }

  const insertBoxToggle = () => {
    setInsertBox(!insertBox);
  }

  const addNewPoke = (e) => {
    setNewPoke(prev => {
      return {...prev,
              [e.target.name]: e.target.value}
    })
  }

  const handleSubmit = () => {
    axios.post('/pokemon', newPoke)
      .then(response => {
        console.log(response);
        getAll();
      })
      .catch(err => {
        console.error(err);
      })
  }

  // const pokeData = filter ? allData.slice().filter(data => {data.type === filter}) : allData;

  // console.log('pokeData', pokeData);

  return (
    <div>
      <div>
        <h1>Pokemon!</h1>
        <button onClick={getAll}>Show All</button>
        <select id="type" onChange={filteredData}>
          <option>Sort by Type</option>
          <option>Grass</option>
          <option>Fire</option>
          <option>Water</option>
          <option>Normal</option>
          <option>Poison</option>
          <option>Electric</option>
          <option>Ground</option>
          <option>Fighting</option>
          <option>Psychic</option>
          <option>Rock</option>
          <option>Ghost</option>
          <option>Dragon</option>
        </select>
        <br />
        <br />
        <div>
          {insertBox ?
            <div>
              <form>
                <input
                  name="name"
                  value={newPoke.name}
                  placeholder="name"
                  onChange={addNewPoke}>
                </input>
                <input
                  name="type"
                  value={newPoke.type}
                  placeholder="type"
                  onChange={addNewPoke}>
                </input>
                <input
                  name="img"
                  value={newPoke.img}
                  placeholder="img"
                  onChange={addNewPoke}>
                </input>
                <button onClick={handleSubmit}>Add</button>
              </form>
            </div>
            :
            <button onClick={insertBoxToggle}>INSERT</button>
          }
        </div>
        <br />
        <br />
        <PokemonList pokedex={allData} getAll={getAll}/>
      </div>
    </div>

  )
}

export default App;