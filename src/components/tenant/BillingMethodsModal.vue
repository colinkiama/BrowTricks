<template>
  <div class="time-picker-modal" v-if="$v.billingInfo">
    <div
      class="absolute w-screen min-h-screen top-0 left-0 bg-background z-50"
      @click="$emit('closeModal')"
    >
      <div class="sm:flex justify-center items-center h-full">
        <div
          @click.stop
          class="sm:w-128 min-h-full shadow-2xl sm:border border-background border-opacity-disabled"
        >
          <div class="w-full h-full px-4 sm:px-8">
            <div class="py-2">
              <span class="flex">
                <CloseIcon
                  @click="$emit('closeModal')"
                  class="cursor-pointer text-on-background text-opacity-medium"
                />
              </span>
            </div>
            <div class="bg-white py-6 px-4 rounded-lg">
              <material-input
                v-model="$v.billingInfo.cardHolder.$model"
                label="Card Holder"
                labelBg="bg-white"
                :error="
                  $v.billingInfo.cardHolder.$dirty &&
                    !$v.billingInfo.cardHolder.required
                "
              >
                <span
                  v-if="
                    $v.billingInfo.cardHolder.$dirty &&
                      !$v.billingInfo.cardHolder.required
                  "
                  class="text-red-600 text-xs"
                >
                  Card Holder is required
                </span>
              </material-input>
              <material-input
                v-model="$v.billingInfo.cardNumber.$model"
                label="Card Number"
                labelBg="bg-white"
                :error="
                  $v.billingInfo.cardNumber.$dirty &&
                    !$v.billingInfo.cardNumber.required
                "
              >
                <span
                  v-if="
                    $v.billingInfo.cardNumber.$dirty &&
                      !$v.billingInfo.cardNumber.required
                  "
                  class="text-red-600 text-xs"
                >
                  Card Number is required
                </span>
              </material-input>
              <material-input
                v-model="$v.billingInfo.expirationDate.$model"
                label="Expiration Date"
                labelBg="bg-white"
                :error="
                  $v.billingInfo.expirationDate.$dirty &&
                    !$v.billingInfo.expirationDate.required
                "
              >
                <span
                  v-if="
                    $v.billingInfo.expirationDate.$dirty &&
                      !$v.billingInfo.expirationDate.required
                  "
                  class="text-red-600 text-xs"
                >
                  Expiration Date is required
                </span>
              </material-input>
              <material-input
                v-model="$v.billingInfo.ccv.$model"
                label="CCV"
                labelBg="bg-white"
                :error="
                  $v.billingInfo.ccv.$dirty && !$v.billingInfo.ccv.required
                "
              >
                <span
                  v-if="
                    $v.billingInfo.ccv.$dirty && !$v.billingInfo.ccv.required
                  "
                  class="text-red-600 text-xs"
                >
                  CVV is required
                </span>
              </material-input>
            </div>
            <div class="my-6 bg-white py-6 px-4 rounded-lg">
              <material-input
                v-model="$v.billingInfo.address.country.$model"
                label="Country"
                labelBg="bg-white"
                :error="
                  $v.billingInfo.address.country.$dirty &&
                    !$v.billingInfo.address.country.required
                "
              >
                <span
                  v-if="
                    $v.billingInfo.address.country.$dirty &&
                      !$v.billingInfo.address.country.required
                  "
                  class="text-red-600 text-xs"
                >
                  Country is required
                </span>
              </material-input>
              <material-input
                v-model="$v.billingInfo.address.billingAddress.$model"
                label="Billing Address"
                labelBg="bg-white"
                :error="
                  $v.billingInfo.address.billingAddress.$dirty &&
                    !$v.billingInfo.address.billingAddress.required
                "
              >
                <span
                  v-if="
                    $v.billingInfo.address.billingAddress.$dirty &&
                      !$v.billingInfo.address.billingAddress.required
                  "
                  class="text-red-600 text-xs"
                >
                  Billing Address is required
                </span>
              </material-input>
              <material-input
                v-model="$v.billingInfo.address.apartment.$model"
                label="Apartment #"
                labelBg="bg-white"
                :error="
                  $v.billingInfo.address.apartment.$dirty &&
                    !$v.billingInfo.address.apartment.required
                "
              >
                <span
                  v-if="
                    $v.billingInfo.address.apartment.$dirty &&
                      !$v.billingInfo.address.apartment.required
                  "
                  class="text-red-600 text-xs"
                >
                  Apartment is required
                </span>
              </material-input>
              <material-input
                v-model="$v.billingInfo.address.city.$model"
                label="City"
                labelBg="bg-white"
                :error="
                  $v.billingInfo.address.city.$dirty &&
                    !$v.billingInfo.address.city.required
                "
              >
                <span
                  v-if="
                    $v.billingInfo.address.city.$dirty &&
                      !$v.billingInfo.address.city.required
                  "
                  class="text-red-600 text-xs"
                >
                  City is required
                </span>
              </material-input>
              <material-input
                v-model="$v.billingInfo.address.zipCode.$model"
                label="Zip Code"
                labelBg="bg-white"
                :error="
                  $v.billingInfo.address.zipCode.$dirty &&
                    !$v.billingInfo.address.zipCode.required
                "
              >
                <span
                  v-if="
                    $v.billingInfo.address.zipCode.$dirty &&
                      !$v.billingInfo.address.zipCode.required
                  "
                  class="text-red-600 text-xs"
                >
                  Zip Code is required
                </span>
              </material-input>

              <material-input
                v-model="$v.billingInfo.address.state.$model"
                label="State"
                labelBg="bg-white"
                :error="
                  $v.billingInfo.address.state.$dirty &&
                    !$v.billingInfo.address.state.required
                "
              >
                <span
                  v-if="
                    $v.billingInfo.address.state.$dirty &&
                      !$v.billingInfo.address.state.required
                  "
                  class="text-red-600 text-xs"
                >
                  State is required
                </span>
              </material-input>
            </div>
            <div class="py-4">
              <Button
                @clicked="savePaymentMethod"
                class="tg-color-label-mobile rounded-full"
                title="Save"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';
import CloseIcon from '@/assets/icons/close.svg';
import MaterialInput from '@/components/inputs/MaterialInput';
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'BillingMethodsModal',
  props: {
    selectedBilling: {
      required: true
    }
  },
  validations: {
    billingInfo: {
      required,
      cardHolder: {
        required
      },
      cardNumber: {
        required
      },
      expirationDate: {
        required
      },
      ccv: {
        required
      },
      address: {
        country: {
          required
        },
        billingAddress: {
          required
        },
        apartment: {
          required
        },
        city: {
          required
        },
        zipCode: {
          required
        },
        state: {
          required
        }
      }
    }
  },
  data() {
    return {
      billingData: {
        cardHolder: '',
        cardNumber: '',
        expirationDate: '',
        ccv: null,
        address: {
          country: '',
          billingAddress: '',
          apartment: '',
          city: '',
          zipCode: '',
          state: ''
        }
      }
    };
  },
  components: {
    Button,
    CloseIcon,
    MaterialInput
  },
  methods: {
    async savePaymentMethod() {
      await this.$emit('updateBillingMethod', {});
      this.$emit('closeModal');
    }
  },
  computed: {
    billingInfo: {
      get() {
        return this.selectedBilling
          ? { ...this.selectedBilling }
          : { ...this.billingData };
      }
    }
  }
};
</script>
