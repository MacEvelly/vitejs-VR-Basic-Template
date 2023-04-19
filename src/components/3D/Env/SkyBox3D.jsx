import { useThree } from "@react-three/fiber";
import { memo } from "react"

const SkyBox3D = ()=>{
  const {scene} = useThree()
  scene.addNode(new SkyboxNode({
    url: 'media/textures/chess-pano-4k.png',
    displayMode: 'stereoTopBottom'
  }));

  return null;
}

export default memo(SkyBox3D)