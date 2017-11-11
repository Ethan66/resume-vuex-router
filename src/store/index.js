import Vuex from 'vuex'
import Vue from 'vue'
import * as cookie from './cookie.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    currentTab:{
      tab:cookie.get('currentTab') || 0
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
      cookie.save('currentTab',state.currentTab.tab)
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
    },

    editItem(state,obj){            //{1:{company:{name:value}}},key=1,key1=company,key2=name
      for(let key in obj){   //key=1
        for(let key1 in obj[key]){  //key=1,key1=company
          for(let key2 in obj[key][key1]){    //key2=name
            state.resume[key1][key][key2]=obj[key][key1][key2]
          }
        }
      }
    },
  }
})
