<template>
  <b-container v-if="!loading">
    <b-row>
      <b-col md="12" sm="12" class="comment-item">
        <img class="avatar" alt="Author Photo" v-bind:src="author && author.avatar_urls['96']"/>
        <div>
          <div
            v-if="author && author.link !== ''"
            class="author-name-link"
          >
            <b-link
              v-bind:href="author.link"
            >
              {{author && author.name}}
            </b-link>
          </div>
          <div v-html="author && author.description"></div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
  export default {
    name: "Author",
    props: ["author"],
    components: {

    },
    data: () => ({
      loading: true
    }),
    methods: {

    },
    created() {
      this.$nextTick(function () {
        this.loading = false;
      })
    }
  };
</script>

<style lang="sass" scoped>
  .comment-item
    padding: 40px 0
    display: flex
    .avatar
      width: 100%
      height: 100%
      max-width: 96px !important
      max-height: 96px !important
      border-width: 3px
      border-radius: 50%
      border-style: solid
      border-color: #BBB
      margin-right: 20px
    .author-name-link
      a
        color: #444
        font-weight: 600
        font-size: 1.3rem
        text-decoration: none
</style>
