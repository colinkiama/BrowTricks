<template>
  <div class="px-6">
    <div class="my-4">
      <h6 class="tg-body-mobile text-on-background text-opacity-high">
        Select your preferred notification method:
      </h6>
    </div>
    <div>
      <div
        class="my-8"
        v-for="(notificationType, key) in notificationTypes"
        :key="key"
      >
        <CheckBox
          v-model="selectedNotificationTypes"
          :value="notificationType.value"
        >
          <template #label>
            <div class="tg-body-mobile flex flex-wrap">
              <span class="mx-1 text-on-background text-opacity-high"
                >{{ notificationType.name }} to:</span
              >
              <span
                class="mx-1 text-on-background text-opacity-medium break-all"
                >{{ authDetail[notificationType.key] }}</span
              >
            </div>
          </template>
        </CheckBox>
      </div>
      <div
        v-if="$v.selectedNotificationTypes.$error"
        class="text-error tg-body-mobile"
      >
        You should provide at least one notification method.
      </div>
    </div>
  </div>
</template>

<script>
import CheckBox from '@/components/inputs/CheckBox';
import { mapState, mapGetters, mapMutations } from 'vuex';
import { required } from 'vuelidate/lib/validators';

export default {
  name: 'Notifications',
  components: { CheckBox },
  data() {
    return {};
  },
  validations: {
    selectedNotificationTypes: {
      required
    }
  },
  computed: {
    ...mapState('tenant', ['notificationTypes']),
    ...mapGetters('tenant', [
      'getSelectedNotificationTypes',
      'getEmail',
      'getPhone'
    ]),
    selectedNotificationTypes: {
      get() {
        return this.getSelectedNotificationTypes;
      },
      set(value) {
        this.updateSelectedNotificationTypes(value);
      }
    },
    authDetail() {
      return {
        email: this.getEmail,
        phone: this.getPhone
      };
    }
  },
  methods: {
    ...mapMutations('tenant', ['updateSelectedNotificationTypes'])
  }
};
</script>
