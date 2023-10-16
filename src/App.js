
import "./styleSheets/App.css";

import Background from "./components/Background"
import GameNameSign from "./components/GameNameSign";
import StartSign from "./components/MenuSign";
import RulesSign from "./components/MenuSign";
import PlayAgainSign from "./components/MenuSign";
import Rules from "./components/Rules";
import Filter from "./components/Filter"
import MemoGame from "./components/MemoGame";
import HpBar from "./components/HpBar";
import Slime from "./components/Slime";

import startImage from "./sources/start.png"
import rulesImage from "./sources/rules.png"
import playAgainImage from "./sources/playAgainSign.png"
import hpBar from "./sources/hpBar.png"
import hpBar2 from "./sources/hpBar2.png"

import { useState, useEffect } from "react";
import {motion} from "framer-motion"




function App() {
  

  
  
  const[rulesPressed, setRulesPressed] = useState(false);
  
  const[filterOn, setFilterOn] = useState(false);
  let filter;
  if(filterOn){
    filter = <Filter/>
  } else {
    filter = <></>
  }

  const [uiOn, setUiOn] = useState(true);

  const [win, setWin] = useState(false);
  const [endGame, setEndGame] = useState(false);
  
  function functionstart(){
    setUiOn(!uiOn); 
    setWin(false);
    setHp(100);
    setEndGame(false);   
  }

  //estado de barra de vida cuando cambia el hp voy cambiando la imagen de la barra
  const [hp, setHp] = useState(100)

  
  function curar(curacion){
    if(hp+curacion > 100){
      setHp(100);
    }
    else{
      setHp(hp+curacion)
    }  
    console.log(hp);  
  }

  
  function dañar(danio){    
    if(hp-danio < 0){
      setHp(0);
    }
    else{
      setHp(hp-danio);
    }
    console.log(hp);
  }


  


  return (    
    <div className="app-container">
      
      <Background/>
      {/* {filterOn ?
        <Filter/>
        :
        <></>
      }  */}
      {/* representacion condicional pero la condicion esta arriba usando filterOn y hace variar lo que va en filter */}
      {filter}    

      {uiOn ?   
        <>
          <GameNameSign/>
          <StartSign
            image = {startImage}
            delay = {6}
            name = "start"
            handleClick={()=>{functionstart()}}
            handleonMouseOver={true}
            handleonMouseOut={false}
            xInitial={-800}
            yInitial={0}
          />
          <RulesSign
            image = {rulesImage}
            delay = {6.5}
            name = "rules"
            handleClick = {()=>{setRulesPressed(!rulesPressed);
                                setFilterOn(true);
                          }}
            handleonMouseOver={true}
            handleonMouseOut={false} 
            xInitial={-800}
            yInitial={0}
          />
        </>
        :
        <>
          {
            (!endGame)?
              <MemoGame 
                curar={curar}
                dañar={dañar}
                actualHp={hp}
                setWin ={setWin}
                setEndGame = {setEndGame}
              />
            :
            <></>          
          }
          <HpBar    
            hpValue ={hp}   
          />
          <Slime
            hpValue={hp}
            win={win}
          />
          {endGame ?
            <PlayAgainSign
              image = {playAgainImage}
              delay = {0}
              name = "playAgain"
              handleClick={()=>{functionstart()}}
              handleonMouseOver={false}
              handleonMouseOut={false} 
              xInitial={0}
              yInitial={-800}
            />
            :
            <></>  
          }
        </>
      } 
        
      {rulesPressed ?   //se renderiza y elimina el componente que muestra las reglas
        <Rules
          filterOn = {setFilterOn}
          rulesContentOn = {setRulesPressed}
        />
        :
        <></>
      }
          
    </div>
  ); 
}
              
      

export default App;
