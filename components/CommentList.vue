<template>
  <b-container v-if="!loading">
    <b-row>
      <b-col class="header" md="12" sm="12">
        <span> Responses </span>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12" sm="12" v-for="item of items" :key="item.id">
        <Comment
          :comment="item"
          :replies="replies"
          :author="author"
          :postId="postId"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import Comment from "@/components/Comment";
  export default {
    name: "CommentList",
    props: ["author", "replies", "postId"],
    components: {
      'Comment': Comment
    },
    data: () => ({
      loading: true,
      items: null
    }),
    methods: {

    },
    mounted() {
      this.items = this.replies && this.replies.filter(reply => reply.parent === 0);
    },
    created() {
      this.$nextTick(function () {
        this.loading = false;
      })
    }
  };
</script>

<style lang="sass" scoped>
  .header
    font-size: 1.5em !important
    font-weight: 600 !important
    line-height: 1.8 !important
    margin: 20px 0
</style>
