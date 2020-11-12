<template>
  <div id="home-page">
    <section class="banner">
      <b-container>
        <b-row class="mb-3">
          <b-col sm="12" md="6">
            <div class="elementor-spacer">
              <div class="elementor-spacer-inner"></div>
            </div>
            <div class="banner-widget-heading pa-2">
              <h1>{{$t('homepage.banner.header')}}</h1>
            </div>
            <div class="banner-widget-text pa-2">
              <p>{{$t('homepage.banner.text')}}</p>
            </div>
          </b-col>
          <b-col sm="12" md="6">
            <picture>
              <source srcset="../assets/img/header-zmot.webp" type="image/webp" />
              <source srcset="../assets/img/header-zmot.jpg" type="image/jpg" />
              <b-img src="../assets/img/header-zmot.jpg" fluid alt="women persona using cell phone, sitting on a side of a big cell phone with an ecommerce website. There is a nice landscape with plants"></b-img>
            </picture>
          </b-col>
        </b-row>
        <b-row class="logos">
          <b-col>
            <picture>
              <source srcset="../assets/img/logos/google-white-logo.webp" type="image/webp" />
              <source srcset="../assets/img/logos/google-white-logo.png" type="image/png" />
              <b-img fluid src="../assets/img/logos/google-white-logo.png" alt="Google's logo white color"></b-img>
            </picture>
          </b-col>
          <b-col>
            <picture>
              <source srcset="../assets/img/logos/digitalks-white-logo.png" type="image/png" />
              <source srcset="../assets/img/logos/digitalks-white-logo.webp" type="image/webp" />
              <b-img fluid src="../assets/img/logos/digitalks-white-logo.png" alt="Digitalk's logo white color"></b-img>
            </picture>
          </b-col>
          <b-col>
            <picture>
              <source srcset="../assets/img/logos/logo-profissional-de-ecommerce.webp" type="image/webp" />
              <source srcset="../assets/img/logos/logo-profissional-de-ecommerce.png" type="image/png" />
              <b-img fluid src="../assets/img/logos/logo-profissional-de-ecommerce.png" alt="Profissional de ecommerce logo white color"></b-img>
            </picture>
          </b-col>
          <b-col>
            <picture>
              <source srcset="../assets/img/logos/logo-startupi-white.webp" type="image/webp" />
              <source srcset="../assets/img/logos/logo-startupi-white.png" type="image/png" />
              <b-img fluid src="../assets/img/logos/logo-startupi-white.png" alt="Startupi's logo white color"></b-img>
            </picture>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <LazyHydrate when-visible>
      <section class="why-zmot">
        <b-container>
          <h2 class="text-center">{{$t('homepage.why_do_you_need_ZMOT.header')}}</h2>
          <p class="text-center">
            {{$t('homepage.why_do_you_need_ZMOT.text1')}}
            <strong>{{$t('homepage.why_do_you_need_ZMOT.text2')}}</strong>
            {{$t('homepage.why_do_you_need_ZMOT.text3')}}
            <strong>{{$t('homepage.why_do_you_need_ZMOT.text4')}}</strong>
            {{$t('homepage.why_do_you_need_ZMOT.text5')}}
          </p>
          <div class="feature__list">
            <b-row class="feature__item" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
              <b-col class="feature__item-img" sm="12" md="6">
                <picture>
                  <source srcset="../assets/img/why-do-you-need/searching_block.webp" type="image/webp" />
                  <source srcset="../assets/img/why-do-you-need/searching_block.png" type="image/png" />
                  <b-img src="../assets/img/why-do-you-need/searching_block.png" fluid alt="Why do you need Image"></b-img>
                </picture>
              </b-col>
              <b-col class="feature__item-content-wrapper" sm="12" md="6">
                <div class="feature__item-content">
                    <h3> {{$t('homepage.why_do_you_need_ZMOT.category_1_header')}}</h3>
                    <p>{{$t('homepage.why_do_you_need_ZMOT.category_1_text')}}</p>
                </div>
              </b-col>
            </b-row>
            <b-row class="feature__item" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
              <b-col class="feature__item-content-wrapper" sm="12" md="6">
                <div class="feature__item-content text-right">
                  <h3>{{$t('homepage.why_do_you_need_ZMOT.category_2_header')}}</h3>
                  <p>{{$t('homepage.why_do_you_need_ZMOT.category_2_text')}}</p>
                </div>
              </b-col>
              <b-col class="feature__item-img" sm="12" md="6">
                <picture>
                  <source srcset="../assets/img/why-do-you-need/service-mobile.webp" type="image/webp" />
                  <source srcset="../assets/img/why-do-you-need/service-mobile.png" type="image/png" />
                  <b-img src="../assets/img/why-do-you-need/service-mobile.webp" fluid alt="Service Mobile Image"></b-img>
                </picture>
              </b-col>
            </b-row>
            <b-row class="feature__item" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
              <b-col class="feature__item-img" sm="12" md="6">
                <picture>
                  <source srcset="../assets/img/why-do-you-need/why_do_you_need_zmot-review.webp" type="image/webp" />
                  <source srcset="../assets/img/why-do-you-need/why_do_you_need_zmot-review.png" type="image/png" />
                  <b-img src="../assets/img/why-do-you-need/why_do_you_need_zmot-review.webp" fluid alt="Why do you need zmot review Image"></b-img>
                </picture>
              </b-col>
              <b-col class="feature__item-content-wrapper" sm="12" md="6">
                  <div class="feature__item-content">
                    <h3>{{$t('homepage.why_do_you_need_ZMOT.category_3_header')}}</h3>
                    <p>{{$t('homepage.why_do_you_need_ZMOT.category_3_text')}}</p>
                  </div>
              </b-col>
            </b-row>
          </div>
        </b-container>
      </section>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <section class="specialists" data-aos="fade-down" data-aos-easing="linear" data-aos-once="true"
               data-aos-duration="500">
        <b-container>
          <h2 class="text-center">{{$t('homepage.specialist.header')}}</h2>
          <p class="text-center">{{$t('homepage.specialist.text')}}</p>
          <div class="specialist__items">
            <client-only placeholder="Loading...">
              <agile :options='agileOptions'>
                <div class="slide slide--1">
                  <b-card no-body class="overflow-hidden spec__card">
                    <b-card-body>
                      <b-card-text>
                        “{{$t('homepage.specialist.slide_1_text')}}”
                      </b-card-text>
                      <div class="spec__card-meta">
                        <div class="sec__card-meta-avatar">
                          <picture>
                            <source srcset="../assets/img/Specialist/NeilPatel.webp" type="image/webp"/>
                            <source srcset="../assets/img/Specialist/NeilPatel.jpg" type="image/jpeg"/>
                            <b-img v-bind="specialist_avatar" src="../assets/img/Specialist/NeilPatel.jpg" fluid
                                   alt="Neil Patel Photo"></b-img>
                          </picture>
                        </div>
                        <div class="spec__card-meta-details">
                          <div class="name">
                            Neil Patel
                          </div>
                          <div class="job">
                            Marketing Guru
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-card>
                </div>
                <div class="slide slide--2">
                  <b-card no-body class="overflow-hidden spec__card">
                    <b-card-body>
                      <b-card-text>
                        “{{$t('homepage.specialist.slide_2_text')}}”
                      </b-card-text>
                      <div class="spec__card-meta">
                        <div class="sec__card-meta-avatar">
                          <picture>
                            <source srcset="../assets/img/Specialist/Jim_Lecinsk.webp" type="image/webp"/>
                            <source srcset="../assets/img/Specialist/Jim_Lecinsk.jpeg" type="image/jpeg"/>
                            <b-img v-bind="specialist_avatar" src="../assets/img/Specialist/Jim_Lecinsk.jpeg" fluid
                                   alt="Jim Lecinsk Photo"></b-img>
                          </picture>
                        </div>
                        <div class="spec__card-meta-details">
                          <div class="name">
                            Jim Lecinski
                          </div>
                          <div class="job">
                            ZMOT Author
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-card>
                </div>
                <div class="slide slide--3">
                  <b-card no-body class="overflow-hidden spec__card">
                    <b-card-body>
                      <b-card-text>
                        “{{$t('homepage.specialist.slide_3_text')}}”
                      </b-card-text>
                      <div class="spec__card-meta">
                        <div class="sec__card-meta-avatar">
                          <picture>
                            <source srcset="../assets/img/Specialist/David_Meerman_Scott.webp" type="image/webp"/>
                            <source srcset="../assets/img/Specialist/David_Meerman_Scott.png" type="image/png"/>
                            <b-img v-bind="specialist_avatar" src="../assets/img/Specialist/David_Meerman_Scott.png"
                                   fluid alt="David Meerman Scott Photo"></b-img>
                          </picture>
                        </div>
                        <div class="spec__card-meta-details">
                          <div class="name">
                            David M.Scott
                          </div>
                          <div class="job">
                            Marketing & Sales Visionary
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-card>
                </div>
                <div class="slide slide--4">
                  <b-card no-body class="overflow-hidden spec__card">
                    <b-card-body>
                      <b-card-text>
                        “{{$t('homepage.specialist.slide_4_text')}}”
                      </b-card-text>
                      <div class="spec__card-meta">
                        <div class="sec__card-meta-avatar">
                          <picture>
                            <source srcset="../assets/img/Specialist/avinash_kaushik.webp" type="image/webp"/>
                            <source srcset="../assets/img/Specialist/avinash_kaushik.png" type="image/png"/>
                            <b-img v-bind="specialist_avatar" src="../assets/img/Specialist/avinash_kaushik.png" fluid
                                   alt="Avinash Kaushik Photo"></b-img>
                          </picture>
                        </div>
                        <div class="spec__card-meta-details">
                          <div class="name">
                            Avinash Kaushik
                          </div>
                          <div class="job">
                            Digital Marketing Evangelist
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-card>
                </div>
                <div class="slide slide--5">
                  <b-card no-body class="overflow-hidden spec__card">
                    <b-card-body>
                      <b-card-text>
                        “{{$t('homepage.specialist.slide_5_text')}}”
                      </b-card-text>
                      <div class="spec__card-meta">
                        <div class="sec__card-meta-avatar">
                          <picture>
                            <source srcset="../assets/img/Specialist/bryan_eisenberg.webp" type="image/webp"/>
                            <source srcset="../assets/img/Specialist/bryan_eisenberg.png" type="image/png"/>
                            <b-img v-bind="specialist_avatar" src="../assets/img/Specialist/bryan_eisenberg.png" fluid
                                   alt="Bryan Eisenberg Photo"></b-img>
                          </picture>
                        </div>
                        <div class="spec__card-meta-details">
                          <div class="name">
                            Bryan Eisenberg
                          </div>
                          <div class="job">
                            Digital Marketing Pioneer
                          </div>
                        </div>
                      </div>
                    </b-card-body>
                  </b-card>
                </div>

                <template slot="prevButton">
                  <font-awesome-icon :icon="['fas', 'arrow-left']"/>
                </template>
                <template slot="nextButton">
                  <font-awesome-icon :icon="['fas', 'arrow-right']"/>
                </template>
              </agile>
            </client-only>
          </div>
        </b-container>
      </section>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <section class="services" data-aos="fade-zoom" data-aos-once="true">
        <b-container>
          <h2 class="text-center">{{$t('homepage.services.header')}}</h2>
          <p class="text-center"  id="zmot-audit">
            {{$t('homepage.services.sub_header')}}
          </p>
          <b-row >
            <b-col md="6" sm="12" align-self="center">
              <picture>
                <source srcset="../assets/img/services/service-zmot_audit.webp" type="image/webp" />
                <source srcset="../assets/img/services/service-zmot_audit.png" type="image/png" />
                <img src="../assets/img/services/service-zmot_audit.png" alt="Service Zmot Audito Image" />
              </picture>
            </b-col>
            <b-col md="6" sm="12">
              <b-card class="service--item mb-3">
                <b-card-text>
                  <h2 class="h3 mb-4">{{$t('homepage.services.service_1_header')}}</h2>
                  <div>
                    <p class="mb-5 medium text-justify">
                        <span >{{$t('homepage.services.service_1_description')}}</span>
                    </p>
                  </div>
                  <nuxt-link :to="localePath('zmot-audit')">
                    <a class="btn btn-purple rounded-pill" data-ga-slug="Get a Quote" role="button" tabindex="0"
                    id="CheckServicePage">
                      <span>
                          {{$t('homepage.services.get_a_quote')}}
                      </span>
                    </a>
                  </nuxt-link>
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
          <b-row >
            <b-col md="6" sm="12">
              <b-card class="service--item mb-3 text-right">
                <b-card-text>
                  <h2 class="h3 mb-4">{{$t('homepage.services.service_2_header')}}</h2>
                  <div>
                    <p class="mb-5 medium text-justify">
                        <span>{{$t('homepage.services.service_2_description')}}</span>
                    </p>
                  </div>
                  <nuxt-link :to="localePath('lectures-events')">
                    <a class="btn btn-purple rounded-pill" data-ga-slug="Get a Quote" role="button" tabindex="0"
                    id="CheckServicePage">
                      <span>
                          {{$t('homepage.services.get_a_quote')}}
                      </span>
                    </a>
                  </nuxt-link>
                </b-card-text>
              </b-card>
            </b-col>
            <b-col md="6" sm="12" align-self="center">
              <picture id="lectures">
                <source srcset="../assets/img/services/service-lecture.webp" type="image/webp" />
                <source srcset="../assets/img/services/service-lecture.png" type="image/png" />
                <img src="../assets/img/services/service-lecture.webp" alt="Service Lecture Image" />
              </picture>
            </b-col>
          </b-row>
          <b-row >
            <b-col md="6" sm="12" align-self="center">
              <picture id="courses">
                <source srcset="../assets/img/services/service-online_course.webp" type="image/webp" />
                <source srcset="../assets/img/services/service-online_course.png" type="image/png" />
                <img src="../assets/img/services/service-online_course.webp" alt="Service Online Course Image" />
              </picture>
            </b-col>
            <b-col md="6" sm="12">
              <b-card class="service--item mb-3">
                <b-card-text>
                  <h2 class="h3 mb-4">{{$t('homepage.services.service_3_header')}}</h2>
                  <div>
                    <p class="mb-5 medium text-justify">
                      <span>
                        {{$t('homepage.services.service_3_description')}}
                      </span>
                    </p>
                  </div>
                  <nuxt-link :to="localePath('online-courses')">
                    <a class="btn btn-purple rounded-pill" data-ga-slug="Get a Quote" role="button" tabindex="0"
                    id="CheckServicePage">
                      <span>
                          {{$t('homepage.services.get_a_quote')}}
                      </span>
                    </a>
                  </nuxt-link>
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <section class="say-about-us" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true">
        <b-container>
          <h2 class="text-center">
              {{$t('homepage.what_say.header')}}
          </h2>
          <p class="text-center">{{$t('homepage.what_say.text')}}</p>
          <div class="testimonial-list">
            <b-row class="testimonial-item-wrapper">
              <b-col>
                <div class="testimonial-item">
                  <blockquote class="testimonial-item__quote">
                    {{$t('homepage.what_say.talking_1')}}
                  </blockquote>
                  <span class="testimonial-item__author">
                    <picture>
                      <source srcset="../assets/img/Testominal/paulo-gomes.webp" type="image/webp" />
                      <source srcset="../assets/img/Testominal/paulo-gomes.jpeg" type="image/jpeg" />
                      <b-img v-bind="testimonial_avatar" src="../assets/img/Testominal/paulo-gomes.webp" fluid alt="Paulo gomes Photo"></b-img>
                    </picture>
                    Paulo Gomes
                  </span>
                </div>

              </b-col>
              <b-col>
                <div class="testimonial-item">
                  <blockquote class="testimonial-item__quote">
                    {{$t('homepage.what_say.talking_2')}}
                  </blockquote>
                  <span class="testimonial-item__author">
                    <picture>
                      <source srcset="../assets/img/Testominal/elvissilva.webp" type="image/webp" />
                      <source srcset="../assets/img/Testominal/elvissilva.jpeg" type="image/jpeg" />
                      <b-img v-bind="testimonial_avatar" src="../assets/img/Testominal/elvissilva.webp" fluid alt="Elvissilva Photo"></b-img>
                    </picture>
                    Elvis Silva
                  </span>
                </div>
              </b-col>
            </b-row>
            <b-row class="testimonial-item-wrapper">
              <b-col offset-md="3" md="6">
                <div class="testimonial-item">
                  <blockquote class="testimonial-item__quote">
                    {{$t('homepage.what_say.talking_3')}}
                  </blockquote>
                  <span class="testimonial-item__author">
                    <picture>
                      <source srcset="../assets/img/Testominal/Eduardo-Moiolli-Congresso-Apdespbr-2.webp" type="image/webp" />
                      <source srcset="../assets/img/Testominal/Eduardo-Moiolli-Congresso-Apdespbr-2.png" type="image/png" />
                      <b-img v-bind="testimonial_avatar" src="../assets/img/Testominal/Eduardo-Moiolli-Congresso-Apdespbr-2.webp" fluid alt="Eduardo Moiolli Congresso Apdespbr"></b-img>
                    </picture>
                    Eduardo Maiolli
                  </span>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-container>
      </section>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <section class="blogs mt-5 mb-5" data-aos="fade-down" data-aos-easing="linear" data-aos-once="true" data-aos-duration="500">
        <b-container>
          <h2 class="text-center">Blog</h2>
          <p class="text-center">{{$t('homepage.blog.text')}}</p>
          <div class="blog--list">
            <b-row>
              <b-col md="4" sm="12" v-for="(post, index) of stickyPosts" :key="post.id">
                <b-card
                  :img-src="require('../assets/img/blog/home-blog-' + index + '.png')"
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="mb-2 blog--card"
                >
                  <div class="card-meta">
                    <span class="text-small">{{ moment(post.date).format('MMMM Do YYYY') }}</span>
                  </div>
                  <div class="card-title">

                    <nuxt-link
                      :to="localePath({
                        name: 'blog-slug',
                        params: { slug: post.slug }
                      })"
                    id="AcessBlogHome-Headline"
                    >
                      {{post.title.rendered}}
                    </nuxt-link>
                  </div>
                  <nuxt-link
                    :to="localePath({
                      name: 'blog-slug',
                      params: { slug: post.slug }
                    })"
                     class="btn btn-purple rounded-pill"
                     id="AcessBlogHome-Button"
                  >
                    {{$t('homepage.blog.read_more')}}
                  </nuxt-link>
                </b-card>
              </b-col>
            </b-row>
          </div>
        </b-container>
      </section>
    </LazyHydrate>

    <client-only>
      <LazyHydrate when-visible>
        <NewsLetter slot-scope="{ hydrated }" v-if="hydrated" />
      </LazyHydrate>
    </client-only>
  </div>
</template>

<script>
  import axios from 'axios';
  import moment from 'moment';
  import LazyHydrate from 'vue-lazy-hydration';
  import NewsLetter from "@/components/NewsLetter.vue";

  export default {
    head () {
      return {
        title: this.$t('homepage.seo.title'),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$t('homepage.seo.description'),
          },
          {
            hid: 'twitter-card',
            name: 'twitter:card',
            content: 'summary'
          },
          {
            hid: 'og-title',
            property: 'og:title',
            content: this.$t('homepage.seo.title')
          },
          {
            hid: 'og-description',
            property: 'og:description',
            content: this.$t('homepage.seo.description')
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
    components: {
      'NewsLetter': NewsLetter,
      LazyHydrate,
    },
    data: () => ({
        testimonial_avatar: {blank: false, width: 36, height: 36, class:'m1'},
        specialist_avatar: {blank: false, width: 85, height: 85, class:'m2'},
        agileOptions: {
            autoplay: true,
            mobileFirst: true,
            navButtons: false,
            centerMode: true,
            infinite: true,
            slidesToShow: 1,
            dots: true,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                         slidesToShow: 2
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                         slidesToShow: 3
                    }
                }
            ]
        },
        apiUrl: 'https://thezmot.com/wp-json/wp/v2/posts?include[]=490&include[]=147&include[]=584',
        stickyPosts: []
    }),
    mounted: function () {
      $nuxt.$emit('show-header-footer');
    },
    async fetch () {
      try {
        const result = await axios.get('https://thezmot.com/wp-json/wp/v2/posts?include[]=490&include[]=147&include[]=584');
        this.stickyPosts = result.data && result.data.reverse();
      } catch(e) {
        this.stickyPosts = [];
      } finally {
      }
    },
    methods: {
      moment: function (date) {
        return moment(date);
      }
    }
}
</script>
