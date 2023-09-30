import { createApp } from 'vue';
import App from './App.vue';

/**
 * TIP: To get started with clean router change path to @/router/clean.ts.
 */
import router from '@/modules/pais-template/router';
import store from '@/store';
import ElementPlus from 'element-plus';
import i18n from '@/core/plugins/i18n';

//imports for app initialization
import ApiService from '@/modules/pais-template/core/services/ApiService';
import { initApexCharts } from '@/core/plugins/apexcharts';
import { initInlineSvg } from '@/core/plugins/inline-svg';
import { initVeeValidate } from '@/core/plugins/vee-validate';

import '@/core/plugins/prismjs';
const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus);

ApiService.init(app);
initApexCharts(app);
initInlineSvg(app);
initVeeValidate();

// start:Modal configuration
import { vfmPlugin } from 'vue-final-modal';
import modal from '@/modules/pais-template/core/plugins/modal/index';
app.use(modal);
app.use(vfmPlugin(), {
  componentName: 'VueFinalModal',
  key: '$vfm',
  dynamicContainerName: 'ModalsContainer',
});
// end:Modal configuration

// ADDED PLUGINS
<<<<<<< HEAD
import panZoom from '@/modules/pauis/packages/vue-panzoom';
app.use(panZoom)
import dragscrollNext from "vue-dragscroll";
=======
import dragscrollNext from 'vue-dragscroll';
>>>>>>> 842364e3db7c8e76ffa52432ebeb8e723305c5a9
app.directive('dragscroll', dragscrollNext);
const defaultoptions = { treeName: 'blocks-tree', nodeName: 'blocks-node' };
import VueBlocksTree from 'vue3-blocks-tree';
// import 'vue3-blocks-tree/dist/vue3-blocks-tree.css';
app.use(VueBlocksTree, defaultoptions);
import VueMaska from 'maska';
app.use(VueMaska);
import {
  createAcl,
  defineAclRules,
} from './modules/pais-template/components/acl';

const user = () => {
  return store.getters.appCurrentUser;
};
//const user = store.getters.appCurrentUser;

const rules = () =>
  defineAclRules<typeof user>((setRule) => {
    setRule('super-access', (user) => {
      return user.account_type === 'superadmin';
    });
    setRule('developer-access', (user) => user.account_type === 'developer');
    // This access will identify if the user is superadmin or developer
    setRule('higher-access', (user) =>
      ['superadmin', 'developer'].indexOf(user.account_type) !== -1
        ? true
        : false
    );
    // This access will identify if the user is normal access
    setRule('normal-access', (user) =>
      ['normal'].indexOf(user.account_type) !== -1 ? true : false
    );
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

app.mount('#app');
