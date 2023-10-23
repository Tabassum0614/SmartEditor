import React from 'react'

function alert(prop) {

   const capitalize=(word)=>
   {
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
   }

  return (
     <div style={{height: '50px'}}>
     {prop.alert &&<strong> <div className={`alert alert-${prop.alert.alerttype} alert-dismissible fade show`} role="alert">
  {capitalize(prop.alert.alerttype)}:{prop.alert.alertmsg}
  
</div></strong>}
    </div>
  )
}

export default alert
