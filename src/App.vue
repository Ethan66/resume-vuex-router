<template>
  <div id="app">
    <router-view name='nav'></router-view>
    <router-view name="edit"></router-view>
    <router-view name="preview"></router-view>
    <!--<Nav1 class="nav1" v-show="preview.show" />
    <Editor class="editor" v-show="preview.show"/>-->
    <!--<Preview v-show="!preview.show" />-->
  </div>
</template>

<script>
  import Nav1 from './components/Nav1'
  import Editor from './components/Editor'
  import Preview from './components/Preview'
  import AV from 'leancloud-storage'
  import store from './store/index'

  var APP_ID = 'VY7qo7LPaz8hXMTKfuDJmLzx-gzGzoHsz';
  var APP_KEY = 'EPqpohCLQs7y4SeXdkWiROFt';

  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  });


export default {
  name: 'app',
  store,
  components: {
    Nav1,Editor,Preview
  },
  computed:{
    preview:{
      get(){
        return this.$store.state.preview
      }
    },
    resume:{
      get(){
        return this.$store.state.resume
      }
    }
  },
  created(){
    this.fetchResumes()
  },
  data(){
      return {

      }
  },
  methods:{
    fetchResumes(){
      if(true){
        var query = new AV.Query('Allresumes');
        query.find()
          .then((resumes)=>{
            let avAllresumes = resumes[0]
            console.log(resumes[0])
            let id = avAllresumes.id
            console.log(id)
            this.setResume(JSON.parse(avAllresumes.attributes.content),id)
           /* this.resume = JSON.parse(avAllresumes.attributes.content)
            this.resume.id = id*/
          }, function(error){
            console.error(error)
          })
      }
    },
    setResume(content,id){
      this.$store.commit("getData",content)
      this.$store.commit("getId",id)
    },
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    display: flex;
  }
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .nav1{

  }
  /*.editor{
    flex: 1; background: #f2f2f2; margin-left: 24em;
  }*/

</style>
