import React, {useState} from 'react';
import axios from 'axios';

const Pokemon = (props) => {

  const [updateNameInputBox, setUpdateNameInputBox] = useState(false);
  const [newName, setNewName] = useState('');

  const changeNameToggle = () => {
    setUpdateNameInputBox(!updateNameInputBox);
  }

  const handleChange = (e) => {
    setNewName(e.target.value);
  }

  const changeName = () => {
    axios.put(`/pokemon/${props.pokemon._id}`, {name: newName})
      .then(response => {
        console.log(response);
        props.getAll();
      })
      .catch(err => {
        console.error(err);
      })
  }

  const handleDelete = () => {
    axios.delete(`/pokemon/${props.pokemon._id}`)
      .then(response => {
        console.log(response);
        props.getAll();
      })
      .catch(err => {
        console.error(err);
      })
  }

  return (
    <div>
      <div onClick={changeNameToggle}>{props.pokemon.name}</div>
      {updateNameInputBox ?
        <div>
          <input name='name' value={newName} onChange={handleChange}></input>
          <button onClick={changeName}>Update</button>
          <button onClick={changeNameToggle}>Cancel</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
        :
        null
      }
      <img src={props.pokemon.img}></img>
    </div>
  );
}

export default Pokemon;