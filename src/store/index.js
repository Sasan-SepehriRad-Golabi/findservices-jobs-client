import { createStore } from "vuex";
const store = createStore({
    state: {
        fp: true,
        mol: false,
        uln: '',
        gc: null,
        uc: false,
        mr: 0,
        mu: 0,
        ic: false,
        sc: false,
        unc: false,
        flc: false,
        jrc: false,
        uty: -1,
        up: {
            upn: "",
            upln: "",
            upi: ""
        },
        wd: false,
        pgv: 0,
        pgd: false,
        snd: false,
        snt: "",
        snbg: "",
        searchedItem: null,
    },
    getters: {
        mol(state) {
            return state.mol;
        },
        uln(state) {
            return state.uln;
        }
    },
    mutations: {
        cmol(state) {
            state.mol = !state.mol;
        },
        culn(state, value) {
            state.uln = value;
        }
    },
    actions: {

    }
});
export default store;
