import { useThree } from '@react-three/fiber';
import { memo } from 'react';
import { Skybox } from '../../../assets';

const SkyBox3D = () => {
  const { scene } = useThree();
  scene.addNode(
    new SkyboxNode({
      url: Skybox,
      displayMode: 'stereoTopBottom',
    })
  );

  return null;
};

export default memo(SkyBox3D);
