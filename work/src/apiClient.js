
export const userRegister=async (data)=>{

    const response= await fetch('http://localhost:3000/api/users/register',{
         method:'POST',
         credentials:"include",
         headers:{
             'Content-Type':"application/json"
         },
         body:JSON.stringify(data)
     })
 
     const responseBody=await response.json()
     if(!response.ok){
         console.error(responseBody)
         throw new Error(responseBody.message)                 //If you write "error fetching" , then it will be displayed in mutation function
     }
     return responseBody
 
 }
 
 export const userLogin=async(data)=>{
 
    const response= await fetch('http://localhost:3000/api/auth/login',{
         method:'POST',
         credentials:'include',
         headers:{
             'Content-type':"application/json"
         },
         body:JSON.stringify(data)
 
     })
     const responseBody=await response.json()
 
 
     if(!response.ok){
         console.error(responseBody)
         throw new Error("Error fetching user at login",responseBody.message)
     }
    
     return responseBody
 
 }
 
 export const validateToken=async()=>{
     const response=await fetch('http://localhost:3000/api/auth/validateToken',{
         credentials:'include'
     })
 
     if(!response.ok){
 
         throw new Error("Somekind of problem in validating token")
     }
     return response.json()
 }
 
 export const userLogout=async()=>{
 const response=await fetch('http://localhost:3000/api/auth/logout',{
 method:'POST',
 credentials:'include'
 })
 
 if(!response.ok){
     throw new Error("Error happened at logout")
 }
 
 }