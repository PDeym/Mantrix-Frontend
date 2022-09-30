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

// ADDED PLUGINS
import dragscrollNext from "vue-dragscroll";
app.directive('dragscroll', dragscrollNext);
const defaultoptions = {treeName:'blocks-tree'}
import VueBlocksTree from 'vue3-blocks-tree';
app.use(VueBlocksTree, defaultoptions);
import VueMaska from 'maska';
app.use(VueMaska);
import { createAcl, defineAclRules } from './modules/pais-template/components/acl';
import { Actions as ActionPais } from "@/modules/pais-template/store/enums/StoreEnums";
import JwtService from "./modules/pais-template/core/services/JwtService";


const user = () => {
    // console.log('get current user');
    // console.log(store.getters.appCurrentUser);
    // return store.getters.appCurrentUser;

    // ApiService.setHeader();
    // return store.dispatch(ActionPais.CURRENT_USER).then((response) => response.data);
    return store.getters.appCurrentUser;
}
//const user = store.getters.appCurrentUser;

const rules = () => defineAclRules<typeof user>((setRule) => {
    setRule('super-access', (user) => user.account_type === 'superadmin');
    setRule('developer-access', (user) => user.account_type === 'developer');
});

// CKEditor
import CKEditor from '@ckeditor/ckeditor5-vue';
app.use(CKEditor);

const simpleAcl = createAcl({
    user,
    rules,
    router,
    // other optional vue-simple-acl options here ...
});
app.use(simpleAcl);

app.use(i18n);

app.mount("#app");
