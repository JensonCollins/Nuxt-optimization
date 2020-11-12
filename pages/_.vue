<script>
  export default {
    asyncData ({ app, redirect }) {
      const locale = app && app.i18n && app.i18n.locale;
      if (locale === 'en') {
        return redirect(`/`);
      } else {
        return redirect(`/${locale}`);
      }
    }
  }
</script>
