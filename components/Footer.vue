<template>
    <div class="app-footer">
        <b-container>
            <b-row>
                <b-col md="4" sm="12">
                    <b-img-lazy
                      v-bind="footerLogo"
                      :src="require('~/assets/img/zmot-logo.png').src"
                      :srcset="require('~/assets/img/zmot-logo.png').srcSet"
                      :blank-src="require('~/assets/img/zmot-logo.png').placeholder"
                      class="footer-new-holder-right-holder__brand footer-logo"
                      alt="Zmot Logo"
                    />
                    <p>
                        {{$t('footer.text')}}
                    </p>
                </b-col>
                <b-col md="8" sm="12">
                    <b-row class="mt-3">
                        <b-col md="4" sm="12">
                            <h5>{{$t('footer.services.text')}}</h5>
                            <ul>
                                <li><a href="/#zmot-audit">{{$t('homepage.services.service_1_header')}}</a></li>
                                <li><a href="/#lectures">{{$t('homepage.services.service_2_header')}}</a></li>
                                <li><a href="/#courses">{{$t('homepage.services.service_3_header')}}</a></li>
                            </ul>
                        </b-col>
                        <b-col md="4" sm="12">
                            <h5>{{$t('footer.knowledge.text')}}</h5>
                            <ul>
                                <li><nuxt-link :to="localePath($t('navs.blog.link'))">{{$t('footer.blog')}}</nuxt-link></li>
                                <li><a href="/#newsletter">{{$t('footer.newsletter')}}</a></li>
                            </ul>
                        </b-col>
                        <b-col md="4" sm="12">
                            <h5>{{$t('footer.legal.text')}}</h5>
                            <ul>
                                <li><nuxt-link :to="localePath($t('navs.privacy.link'))">{{$t('footer.privacy_policy.text')}}</nuxt-link></li>
                            </ul>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col md="2" sm="12">
                    <div class="social-links mt-3">
                        <b-link href="https://www.linkedin.com/company/zmot-institute" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" /></b-link>
                        <b-link href="https://www.facebook.com/ZMOT-Institute-110524633996597" target="_blank"><font-awesome-icon :icon="['fab', 'facebook-f']" /></b-link>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
    export default {
        name: "Footer",
        data: () => ({footerLogo: {blank: false, width: 300, class:'m2'}}),
        methods: {}
    };
</script>
