import { createStore } from "vuex";
import { config } from "vuex-module-decorators";

import AuthModule from "@/store/modules/AuthModule";
import BodyModule from "@/store/modules/BodyModule";
import BreadcrumbsModule from "@/store/modules/BreadcrumbsModule";
import ConfigModule from "@/store/modules/ConfigModule";

config.rawError = true;

import ModuleStore from '@/modules/Store';

const store = createStore({
    modules: {
        AuthModule,
        BodyModule,
        BreadcrumbsModule,
        ConfigModule,
        ...ModuleStore
    },
});

export default store;
