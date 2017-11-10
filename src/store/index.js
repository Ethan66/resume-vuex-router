import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    currentTab:{
      tab:0
    },
    preview:{
      show:true
    },
    icons:['user','gongwenbao','xueshimao','skill','xiangmu']
    ,
    resume:{
      profile:{
        name:'',height:'',education:'',workDirection:'',email:'',number:'',age:'',website:'',imageUrl:'',address:'',summary:''
      },
      company:[
        {name:'',department:'',position:'',date:'',content:''}
      ],
      education:[
        {name:'',degree:'',profession:'',date:'',award:''}
      ],
      skills:[
        {name:'',scope:'',grade:''}
      ],
      projects:[
        {website:'',module:'',position:'',date:'',summary:''}
      ]
    }
  },
  mutations: {
    increment (state,value) {
      state.count+=value
    },
    switchTab(state,i){
      state.currentTab.tab=i
    },
    preview(state,i){
      state.preview.show=i
    },
    addCompany(state,empty){
      state.resume.company.push(empty)
    },
    removeCompany(state,index){
      state.resume.company.splice(index,1)
    },
    addEducation(state,empty){
      state.resume.education.push(empty)
    },
    removeEducation(state,index){
      state.resume.education.splice(index,1)
    },
    addProject(state,empty){
      state.resume.projects.push(empty)
    },
    removeProject(state,index){
      state.resume.projects.splice(index,1)
    },
    removeSkill(state,index){
      state.resume.skills.splice(index,1)
    },
    addSkill(state,key){
      state.remuse.skills.push(key)
    },

    getData(state,content){
      state.resume=content
    },
    getId(state,id){
      state.resume.id=id
    }
  }
})
