import Nav1 from '../components/Nav1'
import Editor from '../components/Editor'
import Preview from '../components/Preview'
import Company from '../components/Company.vue'
import Topbar from '../components/Topbar'
import Profile from '../components/Profile'
import Skill from '../components/Skill'
import Education from '../components/Education'
import Projects from '../components/Projects'

//当然真正应用的路由不会这么简单，vue-router也提供动态路由，嵌套路由等等，详见vue-router文档
export default [
  { path: '/', redirect: '/edit'},
  { path: '/edit/', components: {nav:Nav1,edit:Editor} },
  {path:'/preview/',components:{preview:Preview}}
];
