import "../styleSheets/Rules.css"
import buttonCloseUP from "../sources/buttonCloseUp.png"
import buttonCloseDown from "../sources/buttonCloseDown.png"
import hachuela from "../sources/hachuela1.png"
import licuadora from "../sources/licuadora.png"

import {motion, spring} from "framer-motion"
import { useState } from "react"



export default function Rules({filterOn, rulesContentOn}){

    const [crossIcon, setCrossIcon] = useState(true)

    return(
        <motion.div 
            className="rules"
            initial={{x:-500, y:200, scale:0}}
            animate={{x:0, y:0, scale:1}}            
            transition={{type:"spring", duration:1}}
        >



            <motion.img    
                className="close-button"
                src={crossIcon ? buttonCloseUP: buttonCloseDown}
                alt="button close"
                onClick={()=>{filterOn(false);
                            rulesContentOn(false);                
                }}
                whileHover={{scale:[1, 1.5, 1],rotate:0}}
                whileTap={()=>setCrossIcon(!crossIcon)}
                animate={{scale:[1, 1.5, 1],
                          rotate:360
                }}
                transition={{delay:0.2, duration:1}}
            />
            
            
            <p className="rules-text">
                Nuestro slime es muy gloton y debemos alimentarlo encontrando todos sus alimentos favoritos. <br/> <br/>
                Contamos con fichas las que tendremos que dar vuelta hasta encontrar todos los pares, pero cuidado, cada vez que  
                no encontremos alimentos iguales el slime recibira daño. <br/> <br/>
                Ademas de los alimentos dentro de las fichas hay algunos objetos especiales que aparecen 4 veces y  tienen efectos negativos. <br/> <br/>
                    <img src={licuadora} alt="licuadora"/> Licuadora : Al encontrar uno, siempre queda visible y al encontrar los 4 mezclara todas las fichas. <br/><br/>
                    <img src={hachuela} alt="hachuela"/> Hachuela : Al encontrar 2 el slime recibira daño. <br/><br/>
                
            </p>
        </motion.div>
    )
}