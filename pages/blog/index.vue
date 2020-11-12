<template>
  <div style="padding-top: 5rem;">
    <b-container v-if="!isLoading">
      <section v-if="!!totalNum" id="blogs">
        <nuxt-link
          v-for="post of posts" :key="post.id"
          :to="localePath({
              name: 'blog-slug',
              params: { slug: post.slug }
          })"
          class="blog--item" data-aos="fade-up" id="blog-card"
          >
          <b-card no-body class="overflow-hidden" >
            <b-row no-gutters >
              <b-col md="4" sm="4" xs="12">
                <b-card-img :src="post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url" alt="Post Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="8" sm="8" xs="12">
                <b-card-body :title="post.title.rendered">
                  <b-card-text v-html="post.excerpt.rendered"></b-card-text>
                  <!-- <div class="card-meta">
                    Mais de 2.000 profissionais de marketing já leram esse conteúdo
                  </div> -->
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </nuxt-link>
        <b-pagination-nav size="lg" v-model="currentPage" :link-gen="linkGen" :number-of-pages="totalNum" base-url="#" use-router></b-pagination-nav>
      </section>

      <section v-else id="blog">
        No blogs detected
      </section>
    </b-container>
    <b-container id="blogs-loading" v-else>
        <loading :active.sync="isLoading"
            :can-cancel="false"
            :is-full-page="fullPage"
            :color="color"></loading>
    </b-container>
    <NewsLetter />
  </div>

</template>

<script>
  import NewsLetter from "~/components/NewsLetter.vue";
  import axios from 'axios';
  import moment from 'moment';
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css';

  export default {
    head () {
      return {
        title: this.$t('blog.seo.title'),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$t('blog.seo.description')
          },
          {
            hid: 'twitter-card',
            name: 'twitter:card',
            content: 'summary'
          },
          {
            hid: 'og-title',
            property: 'og:title',
            content: this.$t('blog.seo.title')
          },
          {
            hid: 'og-description',
            property: 'og:description',
            content: this.$t('blog.seo.description')
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
      'Loading': Loading,
    },
    data () {
      return {
        rows: 100,
        currentPage: 1,
        totalNum: 0,
        posts: [],
        baseUrl: 'https://thezmot.com/wp-json/wp/v2/',
        perPage: 9,
        pages: [],
        fullPage: true,
        isLoading: true,
        color: '#ff6600',
      }
    },
    watch: {
      "$route.query.page"(value) {
        this.currentPage = value;
      }
    },
    async fetch () {
      this.isLoading = true;
      try {
        const result = await axios.get('https://thezmot.com/wp-json/wp/v2/posts')
        this.totalNum = result.data.length / 10 + 1;
      } catch(e) {
        this.totalNum = 0;
      } finally {
        this.initializeBlogContents();
      }
    },
    mounted: function() {
      $nuxt.$emit('show-header-footer');
    },
    methods: {
      moment: function (date) {
        return moment(date);
      },
      linkGen: function(pageNum) {
        return pageNum === 1 ? '?page=1' : `?page=${pageNum}`
      },
      initializeBlogContents: async function() {
        this.isLoading = true;
        if (!this.totalNum) {
          this.isLoading = false;
          return;
        }
        try {
          const result = await axios.get(`https://thezmot.com/wp-json/wp/v2/posts?per_page=10&page=${this.currentPage}&_embed=1`)
          this.posts = result &&
          result.data &&
          result.data.sort((post1, post2) => {
            const post1Date = new Date(post1.date_gmt);
            const post2Date = new Date(post2.date_gmt);

            if (post1Date - post2Date > 0) {
              return -1;
            } else {
              return 1;
            }
          });
        } catch(e) {
          this.posts = [];
        } finally {
          this.isLoading = false;
        }
      }
    }
  }
</script>
