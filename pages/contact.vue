<template>
  <div id="contact-page">
      <section class="banner">
        <b-container>
            <b-row>
                <b-col md="6" sm="12">
                    <div class="elementor-spacer">
                        <div class="elementor-spacer-inner"></div>
                    </div>
                    <div class="banner-widget-heading pa-2">
                        <h2>{{$t('contact.banner.header')}}</h2>
                    </div>
                    <div class="banner-widget-text pa-2">
                        <p>{{$t('contact.banner.text')}}</p>
                    </div>
                    <div class="banner-buttons">
                      <b-row>
                        <b-col md="6" sm="12" class="button-wrapper">
                          <a href="https://wa.me/5548988087120" target="_blank"
                          id="ChatOnline"
                          >
                            <b-button pill variant="white"
                            >
                              {{$t('contact.banner.button.access_live_chat')}}
                            </b-button>
                          </a>
                        </b-col>
                        <b-col class="d-md-none d-lg-none d-sm-block mt-5">

                        </b-col>
                        <b-col md="6" sm="12" class="button-wrapper">
                          <a href="#send-email"
                          id="ChatEmail"
                          >
                            <b-button id="send-email" pill variant="white">{{$t('contact.banner.button.send_email')}}</b-button>
                          </a>
                        </b-col>
                      </b-row>
                    </div>
                </b-col>
                <b-col md="6" class="d-none d-md-block d-sm-none">
                  <picture>
                    <source srcset="../assets/img/contact/contact_hero.webp" type="image/webp" />
                    <source srcset="../assets/img/contact/contact_hero.png" type="image/png" />
                    <b-img src="../assets/img/contact/contact_hero.webp" fluid alt="Contact Hero Image"></b-img>
                  </picture>
                </b-col>
            </b-row>
        </b-container>
      </section>

      <section class="contact-form" id="contact-form">
          <b-container>
            <h2 class="text-center">{{$t('contact.form.contact')}}</h2>
            <p class="text-center">{{$t('contact.form.text')}}</p>
            <b-row>
              <b-form @submit.prevent="onSubmit">
                <b-col offset-md="1" md="9" sm="12">
                  <b-form-group>
                    <b-row>
                      <b-col md="4" sm="12">
                        <b-form-input type="text" v-model="name" required placeholder="Name"></b-form-input>
                      </b-col>
                      <b-col md="4" sm="12">
                        <b-form-input type="text" v-model="surname" required placeholder="Surname"></b-form-input>
                      </b-col>
                      <b-col md="4" sm="12">
                        <b-form-input type="email" v-model="email" required placeholder="Email"></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="12">
                        <b-form-textarea v-model="message" rows="5" required placeholder="Message"></b-form-textarea>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="6" class="d-none d-lg-block d-md-block d-sm-none">
                        <recaptcha
                          @error="onError"
                          @success="onSuccess"
                          @expired="onExpired"
                        />
                      </b-col>
                      <b-col sm="12" class="text-center text-md-left d-md-none d-lg-none d-sm-block mt-5 mb-5">
                        <recaptcha
                          @error="onError"
                          @success="onSuccess"
                          @expired="onExpired"
                        />
                      </b-col>
                      <b-col md="6" class="d-none d-lg-block d-md-block d-sm-none">
                        <!-- <b-button type="submit"  class="rounded-pill" variant="orange">{{$t('contact.form.send_email')}}</b-button> -->
                        <b-button type="submit"  class="btn-purple rounded-pill"
                        id="FormSendEmail"
                        >{{$t('contact.form.send_email')}}</b-button>
                      </b-col>
                      <b-col sm="12" class="text-center text-md-left d-md-none d-lg-none d-sm-block">
                        <b-button type="submit"  class="btn-purple">{{$t('contact.form.send_email')}}</b-button>
                      </b-col>
                    </b-row>
                  </b-form-group>
                </b-col>
              </b-form>
            </b-row>
          </b-container>
      </section>
    <div id="page-submitting" v-if="submitting">
      <loading
        :active.sync="submitting"
        :can-cancel="false"
        :is-full-page="true"
        color="orange"
      >
      </loading>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import Loading from 'vue-loading-overlay';
  import {hubSpotPortalId, contactFormGuid} from "@/config";

  export default {
    head () {
      return {
        title: this.$t('contact.seo.title'),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$t('contact.seo.description')
          },
          {
            hid: 'twitter-card',
            name: 'twitter:card',
            content: 'summary'
          },
          {
            hid: 'og-title',
            property: 'og:title',
            content: this.$t('contact.seo.title'),
          },
          {
            hid: 'og-description',
            property: 'og:description',
            content: this.$t('contact.seo.description')
          },
          {
            hid: 'og-image',
            property: 'og:image',
            content: '../assets/img/contact/contact_hero.webp'
          },
          {
            hid: 'og-url',
            property: 'og:url',
            content: this.$route.path
          }
        ]
      }
    },
    components: {
      'Loading': Loading
    },
    data: () => ({
      name: "",
      surname: "",
      email: "",
      message: "",
      submitting: false
    }),
    mounted: function() {
      $nuxt.$emit('show-header-footer');
    },
    methods: {
      async onSubmit() {
        try {
          const token = await this.$recaptcha.getResponse();
          console.log('ReCaptcha token:', token);
          this.submitting = true;
          const data = {
            fields: [
              {
                name: "email",
                value: this.email
              },
              {
                name: "firstname",
                value: this.name
              },
              {
                name: "lastname",
                value: this.surname
              },
              {
                name: "message",
                value: this.message
              }
            ]
          };

          await axios.post(
            `https://api.hsforms.com/submissions/v3/integration/submit/${hubSpotPortalId}/${contactFormGuid}`,
            data
          )
            .then(res => {
              this.submitting = false;
              this.showSuccessToast();
            })
            .catch((err) => {
              this.submitting = false;
              this.showErrorToast();
            });

          await this.$recaptcha.reset();
        } catch(err) {
          console.log(err);
        }
      },
      onError (error) {
        console.log('Error happened:', error);
      },
      onSuccess (token) {
        console.log('Succeeded:', token);
      },
      onExpired () {
        console.log('Expired');
      },
      showSuccessToast() {
        this.$swal({
          title: this.$t('online_courses.thank_you_title'),
          text: this.$t('online_courses.thank_you_message'),
          icon: "success",
          button: "OK",
        });
      },
      showErrorToast() {
        this.$swal({
          title: "Submit Failed",
          text: "Something went wrong with your submission.",
          icon: "error",
          button: "OK",
        });
      }
    }
}
</script>
