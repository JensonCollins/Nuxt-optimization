import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faLinkedin, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import LazyHydrate from 'vue-lazy-hydration';
Vue.use(LazyHydrate);

library.add(faFacebookF, faLinkedin, faInstagram, faTwitter, faArrowLeft, faArrowRight);
Vue.component("font-awesome-icon", FontAwesomeIcon);
