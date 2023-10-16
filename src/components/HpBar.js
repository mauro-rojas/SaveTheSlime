
import "../styleSheets/HpBar.css"
import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"

import hpBar from "../sources/hpBar.png"

export default function HpBar({ hpValue }){
    
    
    
    const healthBar =useRef(null);

    useEffect(()=>{
        healthBar.current.style.width = `${hpValue}%`;
    },[hpValue]);

    const healthBarShadow =useRef(null);

    useEffect(()=>{
        healthBarShadow.current.style.width = `${hpValue}%`;
    },[hpValue]);
    
 

    return(
        <motion.div 
            className="hpBar-container"
            initial={{y:-1500}}
            animate={{y:0}}
            transition={{
                type: "spring",
                bounce: 0.2,
                delay:1.5,
                duration: 1,
                
            }}
        >
           
            <motion.img
                className="hpBar initial"
                src={hpBar}
                alt="hp-bar"
                initial={{scale:0.5}}
                animate={{scale:1}}
                transition={{delay:2.5,duration:1}}
            />
            

            <motion.div
                className="health-container"
                initial={{scale:0.5 }}
                animate={{scale:1}}
                transition={{delay:2.5,duration:1}}
            >
                <div
                    className={
                        (hpValue>60) ?
                            "fullHp"
                        :
                            (hpValue>30) ?
                                "halfHp"
                            :
                                "lowHp"
                    }
                    ref={healthBar}
                >
                </div>

                <div
                    className="health-shadow"
                    ref={healthBarShadow}
                ></div>

            </motion.div>
            
        </motion.div>
    )
}