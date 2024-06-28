import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import s from './Loader.module.scss';
import { useEffect, useState } from "react";

function Loader() {
    const [isLoad, setIsLoad] = useState(false);
    const isLoadModel = useSelector((state) => state.stateLoader.isLoadModel);
    const isLoadTextures = useSelector((state) => state.stateLoader.isLoadTextures);

    useEffect(() => {
        setTimeout(() => setIsLoad(isLoadModel && isLoadTextures), 500) 
    }, [isLoadModel, isLoadTextures])

    return (
        <AnimatePresence>
            {!isLoad ?
                <motion.div
                    className={s.loader__wrapper}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    exit={{ opacity: 0, scale: 2 }}
                >
                    <div className={s.loader}></div>
                </motion.div>
                :
                null
            }
        </AnimatePresence>
    )
}

export default Loader
