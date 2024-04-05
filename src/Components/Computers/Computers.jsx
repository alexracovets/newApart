import { useGLTF } from '@react-three/drei';
import { useControls } from 'leva';
import PropTypes from "prop-types";

Computers.propTypes = {
    computer: PropTypes.object,
};

export default function Computers({ computer }) {
    const { nodes, materials } = useGLTF('./model/computer/computer.glb');

    const test = useControls({
        positionX: -7.85,
        positionY: 1,
        positionZ: -5,
        rotationX: 0,
        rotationY: Math.PI / 2,
        rotationZ: 0
    })

    return (
        <group
            scale={[0.002, 0.002, 0.002]}
            position={computer ? computer.position : [test.positionX, test.positionY, test.positionZ]}
            rotation={computer ? computer.rotation : [test.rotationX, test.rotationY, test.rotationZ]}>
            <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
            <mesh geometry={nodes.Mouse_MouseTop_0.geometry} material={materials.MouseTop} />
        </group>
    );
}

useGLTF.preload('./model/computer/computer.glb');