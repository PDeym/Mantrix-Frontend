import { createStore } from "vuex";
import { config } from "vuex-module-decorators";

import AuthModule from "@/store/modules/AuthModule";
import BodyModule from "@/store/modules/BodyModule";
import ConfigModule from "@/modules/pais-template/store/modules/ConfigModule";
import ThemeModeModule from "@/store/modules/ThemeModeModule";

config.rawError = true;

import ModuleStore from '@/modules/Store';

const store = createStore({
  modules: {
    AuthModule,
    BodyModule,
    ConfigModule,
    ThemeModeModule,
    ...ModuleStore
  },
});

export default store;
