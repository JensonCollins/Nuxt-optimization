<template>
  <div class="social-link">
    <div>
      <a href="https://whatsapp.com" target="_blank">
        <img class="social-image" src="../assets/img/social-links/whatsapp.svg" alt="Whatsapp Icon"/>
      </a>
    </div>
    <div>
      <a href="https://facebook.com" target="_blank">
        <img class="social-image" src="../assets/img/social-links/facebook.svg" alt="Facebook Icon"/>
      </a>
    </div>
    <div>
      <a href="https://m.facebook.com/messages" target="_blank">
        <img class="social-image messenger" src="../assets/img/social-links/facebook-messenger.svg" alt="Facebook Messenger Icon"/>
      </a>
    </div>
    <div>
      <img class="social-image envelope" src="../assets/img/social-links/envelope.svg" alt="Mail Icon"/>
    </div>
  </div>
</template>

<style>
  .social-link {
    position: fixed;
    top: 20%;
    left: 0;
    z-index: 100;
  }
  .social-image {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  .social-image.messenger {
    width: 33px;
    height: 32px;
    margin-left: -2px;
    z-index: 101;
  }
  .social-image.envelope {
    margin-top: -5px;
  }
</style>

<script>
  export default {
    name: "SocialLinks",
    data: () => ({
      footerLogo: {
        blank: false,
        width: 300,
        class:'m2'
      }}),
    methods: {}
  };
</script>
