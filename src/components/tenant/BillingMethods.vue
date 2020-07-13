<template>
  <div class="px-6">
    <div class="card bg-white border rounded-lg p-4">
      <h4 class="pb-4">Payment Method</h4>
      <div class="flex">
        <img class="w-12 h-12 mr-4" src="https://image.shutterstock.com/image-photo/image-260nw-267937022.jpg" alt="">
        <div>
          <h4>Amex ****1234</h4>
          <h6>Expires 04/21</h6>
        </div>
      </div>
      <hr class="my-6" />
      <div class="flex justify-end">
        <div>Remove</div>
        <div>Edit</div>
      </div>
    </div>
    <div class="my-8 border-dashed border-2 border-black border-opacity-disabled rounded-lg p-4 text-center uppercase">
      Add Payment Method
    </div>
  </div>
</template>

<script>
export default {
  name: 'BillingMethods'
}
</script>
