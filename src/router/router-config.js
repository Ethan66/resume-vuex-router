import Nav1 from '../components/Nav1'
import Editor from '../components/Editor'
import Preview from '../components/Preview'
import Company from '../components/Company.vue'
import Topbar from '../components/Topbar'
import Profile from '../components/Profile'
import Skill from '../components/Skill'
import Education from '../components/Education'
import Projects from '../components/Projects'

export default [
  { path: '/', redirect: '/edit/Person Info'},
  { path: '/edit/', components: {nav:Nav1,edit:Editor},
    children:[
        {path:'Person Info',component:Profile},
        {path:'Experience',component:Company},
        {path:'Education',component:Education},
        {path:'Skills',component:Skill},
        {path:'Projects',component:Projects},
      ]
  },
  {path:'/preview/',components:{preview:Preview}},
];
