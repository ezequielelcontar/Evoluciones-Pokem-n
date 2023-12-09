//Components
import {Button} from "./components/Button";
import { Card } from "./components/Card";
//Styles
import './sass/App.scss'
//Icons
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";
//Hooks
import { useState } from "react";

const App = () => {

  const [pokemonId, setPokemonId] = useState(1);

  function prevClick () {
      (pokemonId === 1)?
      setPokemonId(1):
      setPokemonId(pokemonId - 1)
  }
  function nextClick () {
    setPokemonId(pokemonId + 1)

  }

  return(
    <>
      <div className="card-container">
        <Card />
      </div>
      <div className="buttons-containers">
        <Button icon={<TiArrowLeftOutline/>} 
        handleClick = {prevClick}
        />
        {pokemonId}
        <Button icon={<TiArrowRightOutline/>} 
        handleClick = {nextClick}
        />
      </div>
    </>
  )
}

export {App};