export function save(key,value){
  document.cookie=key+'='+value
}
export function get(key){
  let str=document.cookie
  let result=0
  let arr=str.split(";")
  let arr1=arr.map((value,index)=>{
    return value.split("=")
  })
  arr1.forEach((value,index)=>{
    if(value[0]==' '+key){
      result=value[1]
    }
  })
  return result
}
