<template>
  <div class="mt-8 max-w-6xl mx-auto">
    <!-- request by text -->
    <!-- <div class="py-6 px-2 max-w-sm mx-auto">
        <Button
          v-if="hasNotificationEmail"
          class="rounded-full"
          :href="`mailto:${this.client.email}`"
          :title="`Request by email ${this.client.email}`"
        />
        <Button
          v-else-if="hasNotificationPhone"
          class="rounded-full"
          @clicked="sendRequest('SMS')"
          :title="`Request by text ${this.client.phoneNumber}`"
        />
      </div> -->

    <!-- uploader -->
    <MediaManager :files="currentFiles" @change="updateFiles" class="mb-4">
      <template #uploadButton>
        <MediaUploader
          :files="currentFiles"
          @change="updateFiles"
          :uploadPreset="uploadPreset"
        />
      </template>
      <template #title>
        <div class="tg-body-mobile ">
          <span class="text-on-background text-opacity-high">Uploads</span>
        </div>
      </template>
    </MediaManager>
  </div>
</template>

<script>
import MediaManager from '@/components/uploader/MediaManager.vue';
import MediaUploader from '@/components/uploader/MediaUploader.vue';
import { mapActions } from 'vuex';
import { get } from 'lodash-es';

export default {
  name: 'ClientUploads',
  props: {
    tenantSlug: {
      type: String,
      required: true
    },
    clientId: {
      type: [String, Number],
      required: true
    }
  },
  components: {
    MediaManager,
    MediaUploader
  },
  data() {
    return {
      uploadPreset: process.env.VUE_APP_UPLOADER_MEDIA_PRESET,
      client: null
    };
  },
  async created() {
    this._fetchClient();
  },
  computed: {
    hasNotificationEmail() {
      const notificationTypes = get(this.client, 'notificationTypes', []);
      return notificationTypes.includes('email');
    },
    hasNotificationPhone() {
      const notificationTypes = get(this.client, 'notificationTypes', []);
      return notificationTypes.includes('phone');
    },
    currentFiles() {
      return [
        ...get(this.client, 'images', []).map(item => ({
          ...item,
          resourceType: 'image'
        })),
        ...get(this.client, 'videos', []).map(item => ({
          ...item,
          resourceType: 'video'
        }))
      ];
    }
  },
  methods: {
    ...mapActions('client', ['updateClient', 'fetchClient']),
    async _fetchClient() {
      this.client = await this.fetchClient({
        params: {
          clientId: this.clientId,
          tenantSlug: this.tenantSlug
        }
      }).catch(() => {
        console.log('error in getting client');
      });
    },

    updateFiles(files) {
      console.log('files before updatefiles', files);
      const filesAdapted = files.map(item => ({
        ...item,
        url: item.url,
        publicId: item.publicId
      }));
      console.log('files after', filesAdapted);
      const images = filesAdapted.filter(item => item.resourceType === 'image');
      const videos = filesAdapted.filter(item => item.resourceType === 'video');
      const updatedInfo = {
        ...this.client,
        images,
        videos
      };
      this.updateClient({
        tenantSlug: this.tenantSlug,
        clientId: this.clientId,
        body: updatedInfo
      })
        .then(() => {
          this._fetchClient();
        })
        .catch(error => {
          console.log('Update client error', error.response);
        });
    }
  }
};
</script>
