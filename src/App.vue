<template>
  <div
    id="app"
    class="min-h-vh100 h-full text-center bg-background text-on-background"
  >
    <component :is="$route.meta.layout || 'div'">
      <router-view />
    </component>
    <SnackBar :showSnackBar="showPrivacySnackBar">
      <div
        class="flex items-center justify-between text-on-primary w-full h-12 tg-caption-mobile leading-4 p-4 
          bg-primary"
      >
        <p>
          Gotta agree to
          <a
            class="underline cursor-pointer"
            target="_blank"
            href="https://hub.paulchrisluke.com/-temporary-slug-7a760197-2d5d-4314-876c-ade5923d6dd8"
          >
            terms and conditions
          </a>
        </p>
        <p
          class="text-button uppercase cursor-pointer"
          @click="setSnackBarCookie"
        >
          Agree
        </p>
      </div>
    </SnackBar>

    <!-- overlay message -->
    <transition name="fade">
      <div
        v-if="overlayModel.title || overlayModel.message"
        class="w-full h-full fixed block top-0
        left-0 z-110"
      >
        <BaseOverlaySuccess
          :title="overlayModel.title"
          :message="overlayModel.message"
        />
      </div>
    </transition>

    <DrawerAuth
      @close="isDrawerOpenAuthUpdate(false)"
      :isOpen="isDrawerOpenAuthGet"
    ></DrawerAuth>
  </div>
</template>
<script>
import BaseOverlaySuccess from '@/components/BaseOverlaySuccess.vue';
import SnackBar from '@/components/SnackBar.vue';
import { mapGetters, mapActions } from 'vuex';
import vhFix from '@/mixins/vhFix.js';
import cookie from '@/utils/cookie';
import DrawerAuth from '@/components/auth/DrawerAuth';

export default {
  name: 'App',
  data() {
    return {
      showPrivacySnackBar: true
    };
  },
  mixins: [vhFix],
  components: { BaseOverlaySuccess, SnackBar, DrawerAuth },
  computed: {
    ...mapGetters('global', ['isDrawerOpenAuthGet']),
    ...mapGetters('overlay', {
      overlayModel: 'model'
    })
  },
  beforeMount() {
    let showSnackBar = cookie.getCookie('privacy-snackbar');
    //if bannerCookie === 1 that means user has seen the banner and dismissed it
    if (showSnackBar == 1) {
      this.showPrivacySnackBar = false;
    } else {
      this.showPrivacySnackBar = true;
    }
  },
  methods: {
    ...mapActions('global', ['isDrawerOpenAuthUpdate']),
    setSnackBarCookie() {
      this.showPrivacySnackBar = false;
      // set cookie with name 'snackbar'. Set value to 1 which means true. Set expiration to 7 days.
      cookie.setCookie('privacy-snackbar', 1, 365);
    }
  }
};
</script>
<style>
html,
body {
  scroll-behavior: smooth;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
