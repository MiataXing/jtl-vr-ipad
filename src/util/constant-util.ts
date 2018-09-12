import {Lang} from '../lang/lang';

const zhLang = Lang.zh;
const enLang = Lang.en;

export const UserCenterRouteList: Array<any> = [
    {
        routeName: zhLang.usercenter.studied_courses_long,
        className: 'studied-couses-icon',
    },
    {
        routeName: zhLang.usercenter.uploaded_couses_long,
        className: 'uploaded-couses-icon',
    },
    {
        routeName: zhLang.usercenter.initiate_activities_long,
        className: 'initiated-activities-icon',
    },
    {
        routeName: zhLang.usercenter.faviroute_courses_long,
        className: 'favourite-couses-icon',
    },
    {
        routeName: zhLang.usercenter.followed_people_long,
        className: 'followed-people-icon',
    },
    {
        routeName: zhLang.usercenter.my_tickets_long,
        className: 'my-tickets-icon',
    },
    {
        routeName: zhLang.usercenter.my_income_long,
        className: 'my-income-icon',
    },
    {
        routeName: zhLang.usercenter.my_messages_long,
        className: 'my-messages-icon',
    },
    {
        routeName: zhLang.login.log_out,
        className: 'log-out-icon',
    },
];

export const SideMenuRouteList: Array<any> = [
    {
        routeNameZh: zhLang.menu.homepage,
        routeNameEn: enLang.menu.homepage,
        className: 'homepage-icon',
        routePath: 'HomePage',
    },
    {
        routeNameZh: zhLang.menu.marketingpage,
        routeNameEn: enLang.menu.marketingpage,
        className: 'marketing-icon',
        routePath: 'UserCenterPage'
    }
]