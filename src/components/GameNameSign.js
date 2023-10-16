import nameSign from "../sources/nameSign1.png";
import slimeText from "../sources/slimeText.gif";
import savior from "../sources/savior.gif";

import "../styleSheets/GameNameSign.css";  
import { animate, delay, motion } from "framer-motion";


export default function NameSign(){

    
    

    return(   
        <div             
            className="nameSign-container"    
        >
            
            <div
                className="gameName-container"
            >
                <motion.img
                    className="slimeText"
                    src={slimeText}
                    alt="slimeText"
                    animate={{ y:[-310, 0,-10 ,0]  }}
                    transition={{ delay:3, duration: 3.5 }}
                />

                <motion.img
                    className="savior"
                    src={savior}
                    alt="savior"
                    animate={{ y:[-310, 0,-10 ,0]  }}
                    transition={{ delay:3, duration: 3.5 }}
                />
                
                
            </div>
            <motion.img
                className="sign"
                src={nameSign}
                alt="name-sign"
                animate={{ y:[-310, 0,-10 ,0]  }}
                transition={{ delay:3, duration: 3.5 }}
            />
            

            
            
        </div>
    ) 
        
}