<template>
  <!--begin::Menu wrapper-->
  <div
    v-if="headerMenuDisplay"
    class="app-header-menu app-header-mobile-drawer align-items-stretch"
    data-kt-drawer="true"
    data-kt-drawer-name="app-header-menu"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="225px"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_app_header_menu_toggle"
    data-kt-swapper="true"
    data-kt-swapper-mode="{default: 'append', lg: 'prepend'}"
    data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}"
  >
    <!--begin::Menu-->
    <div
      class="menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0"
      id="kt_app_header_menu"
      data-kt-menu="true"
    >
      <router-link to="/" v-if="inModule() && ModuleConfig && ModuleConfig.modules && ModuleConfig.modules.length > 1" class="menu-item p-3">
            <i class="las la-undo fs-2qx"><span></span></i>        
        </router-link>
        <div v-if="inModule()" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" class="menu-item menu-lg-down-accordion me-lg-1">
            <span class="py-3">
                <span class="h1">{{inModule().topHeading}}</span>
            </span>
        </div>
        <div v-else data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" class="menu-item menu-lg-down-accordion me-lg-1">
            <span class="py-3">
                <span class="h1">{{sitenamefull}}</span>
            </span>
        </div>
      <!--end:Menu item-->
    </div>
    <!--end::Menu-->
  </div>
  <div v-else class="align-items-stretch"></div>
  <!--end::Menu wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { version } from "@/core/helpers/documentation";
import { headerMenuDisplay } from "@/core/helpers/config";
import ModuleConfig from '@/modules/Module';
import { useRoute } from "vue-router";
export default defineComponent({
    name: "header-menu",
    components: {
    },
    setup() {
        const route = useRoute();
        const sitenamefull = process.env.VUE_APP_SITENAME_FULL;

        const hasActiveChildren = (match) => {
            return route.path.indexOf(match) !== -1;
        };

        const inModule = () => {
            let r;
            ModuleConfig.modules.forEach((v) => {
                if (hasActiveChildren(v.route)) {
                r = v;          
                }
            });
            return r;
        }

        return {
            version,
            headerMenuDisplay,
            inModule, hasActiveChildren, 
            sitenamefull
        };
    },
});
</script>
