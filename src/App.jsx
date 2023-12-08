import React from 'react'
import Price from './components/Price'
import './App.css'
function App() {
const data = [
  {
    Plan:"FREE",
    price:"0",
    user:"single user",
    isuser:true,
    Storage:"5GB storage",
    isStorage:true,
    Publicproject:"Unlimited Public Project",
    isPublicproject:true,
  CommunityAccess:"Community Access",
  isCommunityAccess:true,
  PrivateProject:"Unlimited Private Project",
  isPrivateProject:false,
   support :"Dedicated Phone Support",
   issupport:false,
   subDomain:"free sub domain",
   issubDomain:false,
   reports:"Monthly Status Reports",
   isreports:false,
   

},
{
  Plan:"PLUS",
    price:"9",
    user:"5 user",
    isuser:true,
    Storage:"50GB storage",
    isStorage:true,
    Publicproject:"Unlimited Public Project",
    isPublicproject:true,
  CommunityAccess:"Community Access",
  isCommunityAccess:true,
  PrivateProject:"Unlimited Private Project",
  isPrivateProject:true,
   support:"Dedicated Phone Support",
   issupport:true,
   subDomain:"free sub domain",
   issubDomain:true,
   reports:"Monthly Status Reports",
   isreports:false,
},
{
  Plan:"PRO",
    price:"49",
    user:"multiple user",
    isuser:true,
    Storage:"150GB storage",
    isStorage:true,
    Publicproject:"Unlimited Public Project",
    isPublicproject:true,
  CommunityAccess:"Community Access",
  isCommunityAccess:true,
  PrivateProject:"Unlimited Private Project",
  isPrivateProject:true,
   support :"Dedicated Phone Support",
   issupport:true,
   subDomain:"free sub domain",
   issubDomain:true,
   reports:"Monthly Status Reports",
   isreports:true,
   
}
]
 return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
        data.map((e,i)=>{
          return <Price  data = {e} key= {i}/>
        })
      }
      </div>
      </div>
    </section>
  </>
   
  
}

export default App
