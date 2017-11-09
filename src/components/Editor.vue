<template>
  <div id="editor">
    <Topbar />
    <ol>
      <li v-show="currentTab==0">
        <Profile />
      </li>
      <li v-show="currentTab==1">
        <Company />
      </li>
      <li v-show="currentTab==2">
        <Education />
      </li>
      <li v-show="currentTab==3">
        <Skill />
      </li>
      <li v-show="currentTab==4">
        <Projects />
      </li>
    </ol>
    <div class="btn">
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary" v-on:click='show=false'><i class="el-icon-share"></i>点击预览</el-button>
        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script>
  import Topbar from './Topbar'
  import Profile from './Profile'
  import ArrayEditor from './ArrayEditor'
  import Skill from './Skill'
  import Company from './Company'
  import Education from './Education'
  import Projects from './Projects'

  export default{
//    props:['currentTab','resume','icons','show'],
    components:{
        Topbar,Profile,ArrayEditor,Skill,Company,Education,Projects
    },
    computed:{
      currentTab:{
        get(){
          return this.$store.state.currentTab.tab
        }
      },
      show:{
        get(){
          return this.$store.state.preview
        },
        set(i){
          return this.$store.commit("preview",i)
        }
      }
    },
    /*methods:{
        addCompany(){
            this.resume.company.push({name:'',department:'',position:'',date:'',content:''})
        },
      removeCompany(index){
           this.resume.company.splice(index,1)
      }
    }*/
  }
</script>

<style lang="scss">
  $color:#409EFF;
  #editor{
    ol{
      padding: 50px;
    }
    .btn{
      position: fixed; bottom: 0; right: 0;
    }
  }
</style>
