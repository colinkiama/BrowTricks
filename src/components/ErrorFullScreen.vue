<template>
  <div
    class="px-4 max-w-md mx-auto flex items-center justify-center"
    :class="[height]"
  >
    <BaseCard className="w-full justify-center">
      <div class="flex flex-col">
        <div class="text-error tg-body-mobile mb-6">
          <slot />
        </div>

        <div class="text-center">
          <Button :to="{ name: 'Home' }" title="Go home page" theme="none" />
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue';

export default {
  name: 'ErrorFullScreen',
  components: { BaseCard },
  props: {
    height: {
      type: String,
      default: 'h-vh100'
    }
  }
};
</script>

<style scoped></style>
