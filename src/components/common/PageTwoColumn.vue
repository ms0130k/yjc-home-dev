<script setup lang="ts">
interface Props {
  leftWidth?: string
  rightWidth?: string
}
withDefaults(defineProps<Props>(), {
  leftWidth: '280px',
  rightWidth: '1fr',
})
</script>

<template>
  <div class="two-column-layout">
    <aside class="left" :style="{ flexBasis: leftWidth }">
      <slot name="left" />
    </aside>
    <section class="right" :style="{ flexBasis: rightWidth }">
      <slot name="right" />
    </section>
  </div>
</template>

<style scoped>
.two-column-layout {
  display: flex;
  gap: 32px;
  max-width: 1250px;
  margin: 0 auto 40px auto;
  align-items: flex-start;
}
.left {
  min-width: 220px;
  max-width: 320px;
  flex-shrink: 0;
}
.right {
  flex: 1 1 0;
  min-width: 0;
}
@media (max-width: 900px) {
  .two-column-layout {
    flex-direction: column;
    gap: 24px;
  }
  .left,
  .right {
    max-width: 100%;
    min-width: 0;
  }
  .left {
    display: none;
  }
}
</style>
