import { Sphere } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as THREE from 'three';

Panorama.propTypes = {
    panoram: PropTypes.array
};
import { setTextureLoad } from '../../store/reducers/stateLoader';

export default function Panorama({ panoram }) {
    const dispatch = useDispatch();
    const cameraState = useSelector((state) => state.stateCamera);
    const hotspotsStateCurrent = useSelector((state) => state.stateHotspots.current);
    const [texture, setTexture] = useState(null);

    useEffect(() => {
        if (panoram) {
            const finder = hotspotsStateCurrent.id;
            const currentItem = panoram.find(item => item.id === finder);
            setTexture(currentItem.texture)
        }
    }, [hotspotsStateCurrent.id, panoram])

    useEffect(() => {

        if (panoram) {
            dispatch(setTextureLoad(true));
        }
    }, [panoram, dispatch])

    return (
        <Sphere args={[10, 60, 60]} scale={[1, 1, -1]} position={cameraState.position} rotation={hotspotsStateCurrent.textureRotation}>
            <meshStandardMaterial
                map={texture}
                side={THREE.DoubleSide}
                transparent
                opacity={1}
            />
        </Sphere>
    );
}
