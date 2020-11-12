<template>
  <b-container>
    <b-row>
      <b-col md="10" sm="12" class="comment-item">
        <img class="avatar" alt="Commenter Photo" v-bind:src="comment && comment.author_avatar_urls['96']"/>
        <div>
          <div
            v-if="comment.author_url !== ''"
            class="author-name-link"
          >
            <b-link
              v-bind:href="comment.author_url"
            >
              {{comment && comment.author_name}}
            </b-link>
          </div>
          <div
            v-else
            class="author-name"
          >
            {{comment && comment.author_name}}
            <span v-if="comment.author === 1" class="author-badge">Author</span>
          </div>
          <div class="comment-date">
            {{moment(comment && comment.date).format('MM/DD/YYYY') + ' at ' + moment(comment && comment.date).format('hh:MM A')}}
          </div>
          <div v-html="comment && comment.content && comment.content.rendered"></div>
          <div class="response-label" v-on:click="toggleAddComment($event)">
            Responder
          </div>
        </div>
      </b-col>
      <b-col md="12" sm="12" v-if="visibleAddComment">
        <AddComment
          :commentId="comment.id"
          :postId="postId"
        />
      </b-col>
      <b-row>
        <b-col md="1" sm="12">

        </b-col>
        <b-col md="9" sm="12" v-for="child of children" :key="child.id">
          <Comment
            :comment="child"
            :replies="replies"
            :author="author"
            :postId="postId"
          />
        </b-col>
      </b-row>
    </b-row>
  </b-container>
</template>

<script>

  import moment from "moment";
  import AddComment from "./AddComment";

  export default {
    name: "Comment",
    props: ["comment", "replies", "author", "postId"],
    components: {
      "AddComment": AddComment
    },
    data: () => ({
      children: null,
      visibleAddComment: false
    }),
    created() {
      $nuxt.$on('hide-add-comment', (data) => {
        if (this.comment.id !== data.commentId) {
          this.visibleAddComment = false;
        }
      });
    },
    methods: {
      moment: function (date) {
        return moment(date);
      },
      getChildren() {
        const parentId = this.comment.id;
        const children = this.replies && this.replies.filter(reply => reply.parent === parentId);

        this.children = children;
      },
      toggleAddComment(event) {
        event.preventDefault();
        this.visibleAddComment = !this.visibleAddComment;
        $nuxt.$emit('hide-add-comment', {
          commentId: this.comment.id,
          visible: this.visibleAddComment
        });
      }
    },
    mounted() {
      this.getChildren();
    }
  };
</script>

<style lang="sass" scoped>
  .comment-item
    display: flex
    .avatar
      width: 100%
      height: 100%
      max-width: 60px !important
      max-height: 60px !important
      border-width: 3px
      border-style: solid
      border-color: #BBB
      margin-right: 20px
  .author-name-link
    a
      color: #1bb0ce
      font-weight: 600
      font-size: 1rem
      text-decoration: none
  .author-name
    font-weight: 600
    font-size: 1rem
    color: #444
  .author-badge
    color: #e46c38
  .comment-date
    font-size: 13px
    color: #888
    font-weight: 500
  .response-label
    color: #888
    font-size: 0.85em
    font-weight: 600
    margin: 0 0 20px 0
    cursor: pointer
</style>
