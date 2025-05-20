<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  label: string
  images: string[]
}
const props = defineProps<Props>()

const isOpen = ref(false)
const currentIndex = ref(0)

function openGallery(index = 0) {
  currentIndex.value = index
  isOpen.value = true
}
function closeGallery() {
  isOpen.value = false
}
function prevImage() {
  if (props.images.length === 0) return
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}
function nextImage() {
  if (props.images.length === 0) return
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}
</script>

<template>
  <div class="gallery-card">
    <img
      :src="images[0]"
      :alt="label"
      class="gallery-img"
      @click="openGallery(0)"
      style="cursor: pointer"
    />
    <div class="gallery-label">{{ label }}</div>

    <div v-if="isOpen" class="gallery-overlay" @click="closeGallery">
      <div class="gallery-popup" @click.stop>
        <button class="close-btn" @click="closeGallery">&times;</button>
        <button class="arrow left" @click.stop="prevImage">&#8592;</button>
        <img :src="images[currentIndex]" :alt="label" class="popup-img" />
        <button class="arrow right" @click.stop="nextImage">&#8594;</button>
        <div class="popup-label">{{ label }} ({{ currentIndex + 1 }}/{{ images.length }})</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f7fafd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  min-width: 120px;
}
.gallery-img {
  width: 100%;
  height: 140px;
  background: #eee;
  cursor: pointer;
}
.gallery-label {
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
  color: #fff;
  background: #0c4da2;
  padding: 12px 0;
  letter-spacing: 1px;
}
.gallery-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}
.gallery-popup {
  position: relative;
  background: #222;
  border-radius: 8px;
  padding: 32px 48px 24px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.popup-img {
  max-width: 80vw;
  max-height: 70vh;
  object-fit: contain;
  background: #fff;
  border-radius: 4px;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 20px;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
}
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #fff;
  font-size: 2.5rem;
  cursor: pointer;
  z-index: 1;
}
.arrow.left {
  left: 10px;
}
.arrow.right {
  right: 10px;
}
.popup-label {
  color: #fff;
  margin-top: 12px;
  font-size: 1.1rem;
  text-align: center;
}
</style>
