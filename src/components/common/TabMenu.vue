<script setup lang="ts">
interface TabItem {
  id: string
  label: string
}

interface Props {
  items: TabItem[]
  modelValue: string
}

defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const changeTab = (tabId: string) => {
  emit('update:modelValue', tabId)
}
</script>

<template>
  <div class="tab-menu">
    <button
      v-for="tab in items"
      :key="tab.id"
      :class="['tab-button', { active: modelValue === tab.id }]"
      @click="changeTab(tab.id)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<style scoped>
.tab-menu {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  margin-bottom: 30px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  padding-bottom: 5px;
}

.tab-button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70px;
  padding: 15px 15px;
  font-size: 16px;
  background: none;
  border: none;
  color: #555;
  cursor: pointer;
  position: relative;
  outline: none;
  white-space: pre-line;
  text-align: center;
}

.tab-button.active {
  color: #1a237e;
  font-weight: bold;
}

.tab-button.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #1a237e;
}

@media (max-width: 968px) {
  .tab-menu {
    padding-bottom: 10px;
  }

  .tab-button {
    padding: 8px 2px;
    min-height: 60px;
    min-width: 100px;
    font-size: 15px;
  }
}
</style>
