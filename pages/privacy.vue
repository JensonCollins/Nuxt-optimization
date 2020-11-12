<template>
  <div id="privacy-policy-page">

    <section>
        <b-container id="intro" class="mb-3">
          <h1>{{$t('privacy.intro.title')}}</h1>
          <p> {{$t('privacy.intro.text_1')}}</p>
          <p> {{$t('privacy.intro.text_2')}}</p>
          <p> {{$t('privacy.intro.text_3')}}</p>
        </b-container>
        <b-container id="consent" class="mb-3">
          <h2>{{$t('privacy.consent.title')}}</h2>
          <p> {{$t('privacy.consent.text_1')}}</p>
        </b-container>
        <b-container id="collected_info" class="mb-3">
          <h2>{{$t('privacy.collected_info.title')}}</h2>
          <p> {{$t('privacy.collected_info.text_1')}}</p>
          <p> {{$t('privacy.collected_info.text_2')}}</p>
          <p> {{$t('privacy.collected_info.text_3')}}</p>
        </b-container>
        <b-container id="used_info" class="mb-3">
          <h2>{{$t('privacy.used_info.title')}}</h2>
          <p> {{$t('privacy.used_info.text_1')}}</p>
          <ul>
          <li> {{$t('privacy.used_info.ul_1')}}</li>
          <li> {{$t('privacy.used_info.ul_2')}}</li>
          <li> {{$t('privacy.used_info.ul_3')}}</li>
          <li> {{$t('privacy.used_info.ul_4')}}</li>
          <li> {{$t('privacy.used_info.ul_5')}}</li>
          <li> {{$t('privacy.used_info.ul_6')}}</li>
          <li> {{$t('privacy.used_info.ul_7')}}</li>
          </ul>
        </b-container>
        <b-container id="log_files" class="mb-3">
          <h2>{{$t('privacy.log_files.title')}}</h2>
          <p> {{$t('privacy.log_files.text_1')}}</p>
        </b-container>
        <b-container id="cookies" class="mb-3">
          <h2>{{$t('privacy.cookies.title')}}</h2>
          <p> {{$t('privacy.cookies.text_1')}}</p>
          <p> {{$t('privacy.cookies.text_2')}}</p>
        </b-container>
        <b-container id="doubleclick" class="mb-3">
          <h2>{{$t('privacy.doubleclick.title')}}</h2>
          <p> {{$t('privacy.doubleclick.text_1')}}</p>
        </b-container>
         <b-container id="advertising_partners" class="mb-3">
          <h2>{{$t('privacy.advertising_partners.title')}}</h2>
          <p> {{$t('privacy.advertising_partners.text_1')}}</p>
          <p> {{$t('privacy.advertising_partners.text_2')}}</p>
        </b-container>
        <b-container id="advertising_partners_policy" class="mb-3">
          <h2>{{$t('privacy.advertising_partners_policy.title')}}</h2>
          <p> {{$t('privacy.advertising_partners_policy.text_1')}}</p>
          <p> {{$t('privacy.advertising_partners_policy.text_2')}}</p>
          <p> {{$t('privacy.advertising_partners_policy.text_3')}}</p>
        </b-container>
        <b-container id="3rd_partners_policy" class="mb-3">
          <h2>{{$t('privacy.3rd_partners_policy.title')}}</h2>
          <p> {{$t('privacy.3rd_partners_policy.text_1')}}</p>
          <p> {{$t('privacy.3rd_partners_policy.text_2')}}</p>
        </b-container>
        <b-container id="ccpa_privacy" class="mb-3">
          <h2>{{$t('privacy.ccpa_privacy.title')}}</h2>
          <p> {{$t('privacy.ccpa_privacy.text_1')}}</p>
          <p> {{$t('privacy.ccpa_privacy.text_2')}}</p>
          <p> {{$t('privacy.ccpa_privacy.text_3')}}</p>
          <p> {{$t('privacy.ccpa_privacy.text_4')}}</p>
          <p> {{$t('privacy.ccpa_privacy.text_5')}}</p>
        </b-container>
        <b-container id="gdpr_privacy" class="mb-3">
          <h2>{{$t('privacy.gdpr_privacy.title')}}</h2>
          <p> {{$t('privacy.gdpr_privacy.text_1')}}</p>
          <p> {{$t('privacy.gdpr_privacy.text_2')}}</p>
          <p> {{$t('privacy.gdpr_privacy.text_3')}}</p>
          <p> {{$t('privacy.gdpr_privacy.text_4')}}</p>
          <p> {{$t('privacy.gdpr_privacy.text_5')}}</p>
          <p> {{$t('privacy.gdpr_privacy.text_6')}}</p>
          <p> {{$t('privacy.gdpr_privacy.text_7')}}</p>
          <p> {{$t('privacy.gdpr_privacy.text_8')}}</p>
        </b-container>
        <b-container id="children" class="mb-3">
          <h2>{{$t('privacy.children.title')}}</h2>
          <p> {{$t('privacy.children.text_1')}}</p>
          <p> {{$t('privacy.children.text_2')}}</p>
        </b-container>
    </section>
  </div>

</template>

<script>

import axios from "axios";
import Loading from 'vue-loading-overlay';

export default {
    head () {
      return {
        title: this.$t('privacy.seo.title'),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$t('privacy.seo.description')
          },
          {
            hid: 'twitter-card',
            name: 'twitter:card',
            content: 'summary'
          },
          {
            hid: 'og-title',
            property: 'og:title',
            content: this.$t('privacy.seo.title')
          },
          {
            hid: 'og-description',
            property: 'og:description',
            content: this.$t('privacy.seo.description')
          },
          {
            hid: 'og-image',
            property: 'og:image',
            content: '../assets/img/header-zmot.webp'
          },
          {
            hid: 'og-url',
            property: 'og:url',
            content: this.$route.path
          }
        ]
      }
    },
    nuxtI18n: {
      paths: {
        en: '/privacy',
        es: '/privacidad',
        'pt-br':  '/privacidade'
      }
    },
    components: {
      'Loading': Loading
    },
}
</script>
