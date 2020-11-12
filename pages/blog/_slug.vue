<template>
  <div>
    <div id="blog" v-if="!isLoading">
      <b-container>
        <b-row>
          <!-- <SocialLinks/> -->
          <b-col md="9" sm="12">
            <div class="blog-main">
              <div class="blog-media">
                <b-img :src="post && post._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url" fluid alt="Post Image"></b-img>
              </div>
              <header class="blog-header">
                <h1 class="blog-title" v-html="post && post.title.rendered"></h1>
              </header>
              <div class="blog-info ">
                <div class="blog-date">
                  <time datetime="2019-03-08T17:10:45-03:00">Publicado em {{ moment(post && post.date).format('DD/MM/YYYY') }}</time>
                </div>
              </div>
              <div class="blog-content" v-html="post && post.content.rendered"></div>
            </div>
          </b-col>
          <b-col md="3" sm="12">
            <div class="sidebar-content">
              <div class="search">
                <h3 class="title">Pesquisar</h3>
                <b-form-input v-model="text" placeholder="Search here"></b-form-input>
              </div>
            </div>
          </b-col>
          <Author
            :author="post && post._embedded && post._embedded.author && post._embedded.author.length > 0 && post._embedded.author[0]"
          />
          <CommentList
            :author="post && post._embedded && post._embedded.author && post._embedded.author.length > 0 && post._embedded.author[0]"
            :replies="post && post._embedded && post._embedded.replies && post._embedded.replies.length > 0 && post._embedded.replies[0]"
            :postId="post && post.id"
          />
          <AddComment :postId="post && post.id" :commentId="0" />
        </b-row>
      </b-container>
    </div>
    <div v-else id="blog-loading">
      <loading :active.sync="isLoading"
               :can-cancel="false"
               :is-full-page="fullPage"
               :color="color"></loading>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import moment from 'moment';
  import Loading from 'vue-loading-overlay';
  import AddComment from "@/components/AddComment";
  import CommentList from "@/components/CommentList";
  import Author from "@/components/Author";
  import SocialLinks from "@/components/SocialLinks";
  import 'vue-loading-overlay/dist/vue-loading.css';

  export default {
    async asyncData({ params }) {
      const { data } = await axios.get(`https://thezmot.com/wp-json/wp/v2/posts?slug=${params.slug}&_embed=1`)
      console.log(data[0])
      return { post: data[0] }
    },
    head () {
      return {
        title: this.post.title.rendered,
        meta: [
          {
            hid: 'twitter-card',
            name: 'twitter:card',
            content: 'summary'
          },
          {
            hid: 'og-title',
            property: 'og:title',
            content: this.post.title.rendered
          },
          {
            hid: 'og-description',
            property: 'og:description',
            content: this.post.content.rendered
          },
          {
            hid: 'og-image',
            property: 'og:image',
            content: this.post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url
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
        'Loading': Loading,
        'AddComment': AddComment,
        'CommentList': CommentList,
        'Author': Author,
        'SocialLinks': SocialLinks
    },
    data: () => ({
        text: '',
        post: null,
        isLoading: true,
        fullPage: true,
        color: '#ff6600',
    }),
    mounted: function() {
        this.$nextTick(() => {
            this.getPost();
        });
        $nuxt.$emit('show-header-footer');
    },
    methods: {
        getPost: async function() {
            const result = await axios.get(`https://thezmot.com/wp-json/wp/v2/posts?slug=${this.$route.params.slug}&_embed=1`)
            this.post = result.data[0]
            this.isLoading = false
        },
        moment: function (date) {
            return moment(date);
        }
    }
}
</script>
