function request(url , data=false , method="GET"){
    return new Promise(async(resolve,reject)=>{
       
     const response = await fetch(process.env.REACT_APP_API_URL + url)
     const result = await response.json()
     if (result!==null){
      resolve(result)
      }else{
      reject(response.status)
   }
    })
}

export const get=(url)=>request(url)