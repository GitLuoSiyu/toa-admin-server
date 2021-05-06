import Layout from '@/layout'
const Login = () => import('@/views/login')
const Notfound = () => import('@/views/404')

// 用户管理
const User = () => import('@/views/system/user')

// 角色管理
const Role = () => import('@/views/system/role')

// 菜单管理
const Menu = () => import('@/views/system/menu')

// 部门管理
const Dept = () => import('@/views/system/dept')

// 岗位管理
const Post = () => import('@/views/system/post')

// 字典管理
const Dict = () => import('@/views/system/dict')

// 参数设置
const Config = () => import('@/views/system/config')

// 通知公告
const Notice = () => import('@/views/system/notice')

/**
 * hidden: true                 如果在模板中使用该选项,则不会在侧栏显示该路由(例如：Dashboard),如果是在第一个子路由中使用,侧栏则只显示第一个子路由的名字和图标(例如: Form)
 * alwaysShow: true             如果设置为true它则会始终显示根菜单,无视自路由长度,没有设置的话,就会折叠起来(不清楚为什么没有作用,可能是我写错位置了?)
 * redirect: noredirect         若设置为noredirect则顶部面包屑不能够为其重定向.
 * onlyShowfirst: false         若该设置为true时，将会无视其有多少个孩子路由，只会显示第一个子路由并将其设置为根菜单
 * name:'router-name'           路由名称,此项为必须填写项
 * meta : {
    title: 'title'               这里的名字决定了面包屑和侧栏的名字
    icon: 'svg-name'             当你在svg文件夹内加入了你的图标,那么在这里填写图标名他就会显示在侧栏
  }
 **/

export default [
  { path: '/login', component: Login, hidden: true },
  { path: '*', component: Notfound, hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '主页',
    hidden: true,
    children: [{
      path: 'dashboard',
      name: '工作台',
      component: () => import('@/components/LandingPage')
    }]
  },
  {
    path: '/system',
    component: Layout,
    meta: { title: '菜单管理', icon: 'el-icon-setting' },
    children: [{
      path: 'user',
      meta: { title: '用户管理', icon: 'el-icon-edit' },
      component: User,
      name: '用户管理'
    },
    {
      path: 'role',
      meta: { title: '角色管理', icon: 'el-icon-user' },
      component: Role,
      name: '角色管理'
    },
    {
      path: 'menu',
      meta: { title: '菜单管理', icon: 'el-icon-folder-opened' },
      component: Menu,
      name: '菜单管理'
    },
    {
      path: 'dept',
      meta: { title: '部门管理', icon: 'el-icon-set-up' },
      component: Dept,
      name: '部门管理'
    },
    {
      path: 'post',
      meta: { title: '岗位管理', icon: 'el-icon-date' },
      component: Post,
      name: '岗位管理'
    },
    {
      path: 'dict',
      meta: { title: '字典管理', icon: 'el-icon-document' },
      component: Dict,
      name: '字典管理'
    },
    {
      path: 'config',
      meta: { title: '参数设置', icon: 'el-icon-paperclip' },
      component: Config,
      name: '参数设置'
    },
    {
      path: 'notice',
      meta: { title: '通知公告', icon: 'el-icon-chat-line-square' },
      component: Notice,
      name: '通知公告'
    }]
  },
  {
    path: '/form',
    component: Layout,
    meta: { title: '日志管理', icon: 'el-icon-copy-document' },
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '操作日志', icon: 'el-icon-stopwatch' }
      },
      {
        path: 'index2',
        name: 'Form2',
        component: () => import('@/views/form/index'),
        meta: { title: '登录日志', icon: 'el-icon-stopwatch' }
      }
    ]
  }
]
