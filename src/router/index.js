import { createWebHistory, createRouter } from 'vue-router';
import MainPage from "@/views/MainPage.vue"
import EmployerSearchedResult from "@/components/EmployerSearchedResult.vue"
import ContactUs from "@/components/ContactUs.vue"
import LoginPage from "../views/LoginPage.vue"
import RegisterEmployeePage from "@/views/RegisterEmployeePage.vue"
import UserPersonal from "@/components/UserPersonal.vue"
import UserUniCert from "@/components/UserUniCert.vue"
import UserSkills from "@/components/UserSkills.vue"
import UserJobResume from "@/components/userJobResume.vue"
import UserInterests from "@/components/UserInterests.vue"
import UserForeignLanguage from "@/components/UserForeignLanguage.vue"
import JobRegister from "@/components/JobRegister.vue"
import UserSentRequestStatus from "@/components/UserSentRequestStatus.vue"
import AllJobsPage from "@/components/AllJobsPage.vue"
import UserSentJobStatus from "@/components/UserSentJobStatus.vue"
import UserMessages from "@/components/UserMessages.vue"
const appRoutes = [
    {
        path: "/",
        name: "Main",
        component: MainPage
    },
    {
        path: '/employersearchedresult',
        component: EmployerSearchedResult
    },
    {
        path: "/contactus",
        component: ContactUs
    },
    {

        path: "/login/:tab",
        name: "Login",
        component: LoginPage

    },
    {
        path: "/UserSentJobStatus",
        component: UserSentJobStatus
    },
    {
        path: "/x",
        component: () => import("@/components/UserPersonal.vue")
    },
    {
        path: "/userinfo",
        component: RegisterEmployeePage,
        children: [
            {
                path: "",
                component: UserPersonal
            },
            {
                path: "personal",
                component: UserPersonal
            },
            {
                path: "unicert",
                component: UserUniCert
            },
            {
                path: "skills",
                component: UserSkills
            },
            {
                path: "jobresume",
                component: UserJobResume
            },
            {
                path: "interests",
                component: UserInterests
            },
            {
                path: "foreignlanguage",
                component: UserForeignLanguage
            },
        ]

    },
    {
        path: "/employerReg/:employeeCode",
        component: JobRegister
    },
    {
        path: "/userMessages",
        component: UserMessages
    },
    {
        path: "/َappliedRequstsByYou",
        component: UserSentRequestStatus
    },
    {
        path: "/allJobsPage",
        component: AllJobsPage
    },
    {
        path: "/َappliedJobsByYou",
        component: UserSentJobStatus
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: appRoutes
})

export default router;