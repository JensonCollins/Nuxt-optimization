<template>
  <div v-if="isOpen" class="cookie" data-aos="zoom-in" data-aos-once="true">
    <b-container fluid="md">
        <b-row>
            <b-col md="8">
                <div class="cookie-warning">
                    {{$t('cookie.text_1')}} 
                    <nuxt-link :to="localePath($t('cookie.link'))">{{$t('cookie.text_2')}}</nuxt-link>
                    {{$t('cookie.text_3')}} 
                </div>
            </b-col>
            <b-col md="2" offset-md="2">
                <b-button @click="accept($event)" 
                id="CookieAccept"
                class="button-cookie">{{ $t('cookie.accept') }}</b-button>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "CookieMessage",
  props: {
    buttonTextAccept: {
      type: String,
      default: "Accept"
    },
    buttonTextDeny: {
      type: String,
      default: "Decline"
    },
    message: {
      type: String,
      default:
        "We use cookies to provide our services and for analytics and marketing. To find out more about our use of cookies, please see our Privacy Policy. By continuing to browse our website, you agree to our use of cookies."
    },
    position: {
      type: String,
      default: "top"
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    containerPosition() {
      return `cookie--${this.position}`;
    }
  },
  created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true;
    }
  },
  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem("GDPR:accepted", true);
      }
    },
    accept(event) {
      event.preventDefault();
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem("GDPR:accepted", true);
      }
    },
    deny() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem("GDPR:accepted", false);
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.cookie
  width: 100%
  z-index: 1000001
  position: fixed
  bottom: 0
  background-color: #6747c7
  padding: 1rem 0
  a
    color: white
    text-decoration: underline 
  .row
    align-items: center
  .cookie-warning
    color: white
    font-size: 1rem
    font-weight: 500
    margin-bottom: 2rem
  .button-cookie
    background-color: #28a745
    border-color: #28a745
    width: inherit
    padding: 1rem
    text-transform: uppercase 
  &__link
    color: #ffffff
    text-decoration: underline
    transition: all .25s
    &:hover
      text-decoration: none
  button
    color: white
    font-size: 1.3rem
</style>
