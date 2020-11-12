<template>
  <b-container v-if="visible && !loading">
    <b-row>
      <b-col md="12" sm="12">
        <span class="header">{{$t('blog.add_comment.title')}}</span>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12" sm="12">
        <span class="info">{{$t('blog.add_comment.info')}}</span>
      </b-col>
    </b-row>
    <b-form @submit="onSubmit" @reset="onReset">
    <b-row>
      <b-col md="5" sm="12">
          <div class="submit-input">
            <b-form-input v-model="author" required placeholder="Name (required)"></b-form-input>
          </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="5" sm="12">
          <div class="submit-input">
            <b-form-input v-model="mail" type="email" required placeholder="E-Mail (required)"></b-form-input>
          </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="5" sm="12">
          <div class="submit-input">
            <b-form-input v-model="site" placeholder="Web site" type="url"></b-form-input>
          </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12" sm="12">
        <b-form-checkbox
          v-model="save_checked"
        >
          {{$t('blog.add_comment.save')}}
        </b-form-checkbox>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="10" sm="12">
        <div class="submit-input">
          <b-form-textarea
            id="textarea-rows"
            placeholder="Comment"
            v-model="comment"
            required
            rows="8"
          ></b-form-textarea>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="5" sm="12">
        <b-button type="submit" class="btn-submit">{{$t('blog.add_comment.submit')}}</b-button>
      </b-col>
    </b-row>
    </b-form>
  </b-container>
</template>

<script>
  import axios from "axios";

  export default {
    name: "AddComment",
    props: ["postId", "commentId"],
    components: {},
    created() {
      this.$nextTick(function () {
        this.loading = false
      });
      $nuxt.$on('hide-add-comment', (data) => {
        this.visible = !data.visible;
      });
    },
    data: () => ({
      loading: true,
      visible: true,
      author: '',
      mail: '',
      site: '',
      save_checked: false,
      comment: '',
    }),
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        this.addComment();
      },
      onReset(evt) {
        evt.preventDefault();
      },
      addComment: async function() {
        const commentData = {
          author: this.author,
          email: this.mail,
          url: this.site,
          'wp-comment-cookies-consent': this.save_checked,
          comment: this.comment,
          submit: 'Submit',
          comment_post_ID: this.postId,
          comment_parent: this.commentId
        };

        await axios.post(`https://thezmot.com/wp-comments-post.php`, commentData)
          .then(res => {

          })
          .catch((err) => {

          });
      },
    },
    mounted() {

    }
  };
</script>

<style lang="sass" scoped>
  .header
    font-size: 1.5em
    font-weight: 600
    line-height: 1.8
  .info
    font-size: 100%
    line-height: 1.5
    color: #444
  .row
    margin-top: 30px
  .submit-input
    input
      border-radius: 0
      &:focus
        box-shadow: none
        border-color: #e46c38
    input::placeholder
      color: #ced4da
    textarea
      border-radius: 0
      &:focus
        box-shadow: none
        border-color: #e46c38
    textarea::placeholder
      color: #ced4da
  .btn-submit
    background-color: #3D3D3D
    border-radius: 0
    color: white
    margin-bottom: 30px
</style>
