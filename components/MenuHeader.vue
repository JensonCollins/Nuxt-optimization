<template>
  <b-navbar toggleable="lg" type="dark">
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <nuxt-link :to="localePath('index')">
        <b-navbar-brand>
          <b-img-lazy
            v-bind="logoProp"
            :src="require('~/assets/img/zmot-logo.png').src"
            :srcset="require('~/assets/img/zmot-logo.png').srcSet"
            :blank-src="require('~/assets/img/zmot-logo.png').placeholder"
            fluid
            alt="zmot-institute white logo"
          />
        </b-navbar-brand>
      </nuxt-link>

      <b-nav-item-dropdown right class="burger-langpicker">
        <template slot="button-content">
          <b-img v-if="flagVisible === 1" src="../assets/img/svg/en.svg" width="25" alt="EN Flag"></b-img>
          <b-img v-if="flagVisible === 2" src="../assets/img/svg/br.svg" width="25" alt="BR Flag"></b-img>
          <b-img v-if="flagVisible === 3" src="../assets/img/svg/es.svg" width="25" alt="ES Flag"></b-img>
        </template>
        <b-dropdown-item :to="switchLocalePath('en')">
          <b-img src="../assets/img/svg/en.svg" width="25" alt="USA flag"></b-img>
          English
        </b-dropdown-item>
        <b-dropdown-item :to="switchLocalePath('pt-br')">
          <b-img src="../assets/img/svg/br.svg" width="25" alt="Brazillian flag"></b-img>
          Português
        </b-dropdown-item>
        <b-dropdown-item :to="switchLocalePath('es')">
          <b-img src="../assets/img/svg/es.svg" width="25" alt="Spanish flag"></b-img>
          Español
        </b-dropdown-item>
      </b-nav-item-dropdown>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- Right aligned nav items -->
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <li class="pg-nav" v-b-toggle.nav-collapse>
            <nuxt-link :to="localePath('index')">{{$t('navs.home.title')}}</nuxt-link>
          </li>
          <li class="pg-nav" v-b-toggle.nav-collapse>
            <nuxt-link :to="localePath('blog')">{{$t('navs.blog.title')}}</nuxt-link>
          </li>
          <li class="pg-nav" v-b-toggle.nav-collapse>
            <nuxt-link :to="localePath('contact')">{{$t('navs.contact.title')}}</nuxt-link>
          </li>
          <b-nav-item-dropdown :text="localeToLang" right class="langpicker">
            <template slot="button-content">
              <b-img v-if="flagVisible === 1" src="../assets/img/svg/en.svg" width="25" alt="EN Flag"></b-img>
              <b-img v-if="flagVisible === 2" src="../assets/img/svg/br.svg" width="25" alt="BR Flag"></b-img>
              <b-img v-if="flagVisible === 3" src="../assets/img/svg/es.svg" width="25" alt="ES Flag"></b-img>
            </template>
            <b-dropdown-item :to="switchLocalePath('en')">
              <b-img src="../assets/img/svg/en.svg" width="25" alt="USA flag"></b-img>
              English
            </b-dropdown-item>
            <b-dropdown-item :to="switchLocalePath('pt-br')">
              <b-img src="../assets/img/svg/br.svg" width="25" alt="Brazillian flag"></b-img>
              Português
            </b-dropdown-item>
            <b-dropdown-item :to="switchLocalePath('es')">
              <b-img src="../assets/img/svg/es.svg" width="25" alt="Spanish flag"></b-img>
              Español
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
<style>

  @media screen and (max-width: 467px){
    .nuxt-link-active {
      width: 50%;
    }
    .navbar-brand {
      width: 100%;
    }

    .bv-example-row {
      display: flex;
      min-width: 250px;
    }

    .navbar-dark .navbar-toggler {
      width: 10%;
    }
  }

  nav.navbar {
    min-height: 80px;
  }

  nav.navbar .container ul.navbar-nav li.pg-nav {
    padding: 0;
    margin: 1.5rem 0 1.5rem 0;
  }

  nav.navbar .container ul.navbar-nav li.pg-nav a {
    background-color: transparent;
    padding: 0.25rem 1.25rem;
  }

  nav.navbar .container ul.navbar-nav li.pg-nav a:hover {
    text-decoration: underline;
  }

  .navbar-dark .navbar-toggler {
    outline: none;
    border: none;
  }

</style>
<script>

  export default {
    name: "MenuHeader",
    data: () => ({
      logoProp: {blank: false, width: 250, class: 'm2'},
    }),
    methods: {

    },
    computed: {
      localeToLang() {
        let lang = this.$i18n.locale
        if (lang == 'en')
          return 'English';
        else if (lang == 'pt-br')
          return 'Português';
        else if (lang == 'es')
          return 'Español';
      },
      flagVisible() {
        let lang = this.$i18n.locale
        if (lang == 'en')
          return 1;
        else if (lang == 'pt-br')
          return 2;
        else if (lang == 'es')
          return 3;
      }
    }
  };
</script>
