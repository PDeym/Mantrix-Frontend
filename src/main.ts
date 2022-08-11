import { createApp } from "vue";
import App from "./App.vue";

/*
TIP: To get started with clean router change path to @/router/clean.ts.
 */
import router from "@/modules/pais-template/router";
import store from "@/store";
import ElementPlus from "element-plus";
import i18n from "@/core/plugins/i18n";

//imports for app initialization
import ApiService from "@/modules/pais-template/core/services/ApiService";
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";

import "@/core/plugins/prismjs";
const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus);

ApiService.init(app);
initApexCharts(app);
initInlineSvg(app);
initVeeValidate();

// start:Modal configuration
import VueFinalModal from 'vue-final-modal';
import modal from '@/modules/pais-template/core/plugins/modal/index';
app.use(modal)
app.use(VueFinalModal(), {
    componentName: 'VueFinalModal',
    key: '$vfm',    
    dynamicContainerName: 'ModalsContainer'
});
// end:Modal configuration

app.use(i18n);

app.mount("#app");
