<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  src: string
  alt: string
}

defineProps<Props>()
const isOpen = ref(false)

const openPopup = () => {
  isOpen.value = true
}

const closePopup = () => {
  isOpen.value = false
}
</script>

<template>
  <div class="image-popup-wrapper">
    <img :src="src" :alt="alt" class="spec-image" @click="openPopup" />

    <!-- 팝업 오버레이 -->
    <div v-if="isOpen" class="popup-overlay" @click="closePopup">
      <div class="popup-content" @click.stop>
        <button class="close-button" @click="closePopup">&times;</button>
        <img :src="src" :alt="alt" class="popup-image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-popup-wrapper {
  display: inline-block;
}

.spec-image {
  max-width: 100%;
  height: auto;
  cursor: pointer;
  transition: opacity 0.3s;
}

.spec-image:hover {
  opacity: 0.8;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  position: relative;
  max-width: 90%;
  max-height: 90vh;
}

.popup-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}

.close-button {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
  padding: 5px;
}

.close-button:hover {
  opacity: 0.8;
}
</style>
