<template>
  <Renderer resize antialias alpha :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 0.05 }">
        <Camera :position="{ z: 10 }" />
        <Scene>
          <PointLight color="#FF0000" :intensity="5.75" :position="{ x: 5, y: 5, z: 5 }" />
          <AmbientLight :intensity="0.25" />
          <Box>
              <StandardMaterial color="#FFFFFF" />
          </Box>
        </Scene>
    </Renderer>
</template>

<script setup lang="ts">
import { Renderer, Camera, Scene, Box, PointLight, AmbientLight, StandardMaterial } from "troisjs";
</script>
