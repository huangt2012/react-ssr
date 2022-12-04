import Index from '../pages/index';
import List from '../pages/list/list';
import { matchPath } from 'react-router'

const routeList = [
    {
        path:'/index',
        component:Index,
        exact: true //是否精确匹配
    },
    {
        path: '/list',
        component: List,
        exact: true,
    }
]

export default routeList;