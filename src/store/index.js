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
    addItem(state,obj){
      for(let key in obj){
        state.resume[key].push(obj[key])
      }
    },
    removeItem(state,obj){
      for(let key in obj){
        state.resume[key].splice(obj[key],1)
      }
    },

    getData(state,content){
      state.resume=content
    },
    getId(state,id){
      state.resume.id=id
    },

    editProfile(state,obj){
      for(let key in obj){
        state.resume.profile[key]=obj[key]
      }
    }
  }
})
