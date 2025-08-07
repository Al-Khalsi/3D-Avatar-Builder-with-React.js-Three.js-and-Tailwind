import { useGLTF } from '@react-three/drei';
import useAvatarStore from '../store';

const Avatar = () => {
  const { avatarConfig } = useAvatarStore();
  
  // const headModel = useGLTF(`/models/heads/${avatarConfig.head}.glb`);
  // const hairModel = useGLTF(`/models/hair/${avatarConfig.hair}.glb`);
  
  return (
    <group>
      {/* سر */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={avatarConfig.skinColor === 'skin-1' ? '#FFDBAC' : 
                                   avatarConfig.skinColor === 'skin-2' ? '#E5BA73' : '#C68642'} />
      </mesh>
      
      {/* body */}
      <mesh position={[0, 0.75, 0]}>
        <boxGeometry args={[1, 1.5, 0.5]} />
        <meshStandardMaterial color="#2E86AB" />
      </mesh>
      
      {/* hands */}
      <group>
        <mesh position={[-0.6, 0.75, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.8]} />
          <meshStandardMaterial color={avatarConfig.skinColor === 'skin-1' ? '#FFDBAC' : 
                                      avatarConfig.skinColor === 'skin-2' ? '#E5BA73' : '#C68642'} />
        </mesh>
        <mesh position={[0.6, 0.75, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.8]} />
          <meshStandardMaterial color={avatarConfig.skinColor === 'skin-1' ? '#FFDBAC' : 
                                      avatarConfig.skinColor === 'skin-2' ? '#E5BA73' : '#C68642'} />
        </mesh>
      </group>
      
      {/* legs */}
      <group>
        <mesh position={[-0.25, -0.6, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 1]} />
          <meshStandardMaterial color="#1F1F1F" />
        </mesh>
        <mesh position={[0.25, -0.6, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 1]} />
          <meshStandardMaterial color="#1F1F1F" />
        </mesh>
      </group>
    </group>
  );
};

export default Avatar;