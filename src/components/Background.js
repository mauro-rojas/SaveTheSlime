import background from "../sources/background.gif";
import "../styleSheets/Background.css";
import { motion } from "framer-motion"

export default function Background(){

    

    return(
        <motion.div
            className="background-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0,0.4, 0.6,0.9, 1] }}
            transition ={{duration:3}}
        >
            <img src={background}
                 alt="game-background"
            />
        </motion.div>
    )
}