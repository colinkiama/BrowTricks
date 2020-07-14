<template>
  <div class="px-6">
    <div class="card bg-white border rounded-lg p-4">
      <h4 class="pb-4">Payment Method</h4>
      <div class="flex">
        <img
          class="w-12 h-12 mr-4"
          src="https://image.shutterstock.com/image-photo/image-260nw-267937022.jpg"
          alt=""
        />
        <div>
          <h4>Amex ****1234</h4>
          <h6>Expires 04/21</h6>
        </div>
      </div>
      <hr class="my-6" />
      <div class="flex justify-end">
        <Button
          :isRipple="false"
          class="text-on-secondary"
          background="bg-transparent"
          width="w-auto"
          title="Edit"
          @clicked="editBillingMethod(0)"
        />
        <Button
          :isRipple="false"
          class="text-error"
          background="bg-transparent"
          width="w-auto"
          title="Remove"
          @clicked="removeBillingMethod(0)"
        />
      </div>
    </div>
    <div class="">
      <Button
        :isRipple="false"
        class="text-on-surface text-opacity-medium my-8 border-dashed border-2 border-black border-opacity-disabled rounded-lg"
        background="bg-transparent"
        title="Add Payment Method"
        @clicked="addNewBillingMethod"
      />
    </div>
    <BillingMethodsModal
      @closeModal="isModalActive = false"
      @updateBillingMethod="updateBillingMethod"
      :selectedBilling="
        selectedIndex ? billingMethods[selectedIndex] : undefined
      "
      v-if="isModalActive"
    />
  </div>
</template>

<script>
import BillingMethodsModal from './BillingMethodsModal';
import Button from '@/components/Button.vue';

export default {
  name: 'BillingMethods',
  components: {
    BillingMethodsModal,
    Button
  },
  data() {
    return {
      selectedIndex: null,
      billingMethods: [],
      isModalActive: false
    };
  },
  methods: {
    removeBillingMethod(index) {
      this.billingMethods.splice(index, 1);
    },
    editBillingMethod(index) {
      this.selectedIndex = index;
      this.openModal();
    },
    updateBillingMethod(payload) {
      this.billingMethods.splice(this.selectedIndex, 1, payload);
    },
    addNewBillingMethod() {
      this.selectedIndex = this.billingMethods.length;
      this.openModal();
    },
    openModal() {
      this.isModalActive = true;
    }
  }
};
</script>
