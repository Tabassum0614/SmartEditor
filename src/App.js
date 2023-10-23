import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import React,{useState} from 'react'



function App() {
  const [mode,setTheme]=useState("light")
  const [alert,setalert]=useState(null)

  const showAlert=(msg,type)=>
  {
    setalert({alertmsg:msg,alerttype:type})

    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  

  const handletheme=()=>
  {
    if(mode==='light')
    {
      setTheme("dark");
      document.body.style.backgroundColor="#1e3754";
      showAlert("Dark mode enabled!","success")
      document.title="iSmart Editor-Dark Mode";

      // setInterval(() => {
      //   document.title="iSmart Editor-Dark Mode";
      // }, 2000);

      // setInterval(() => {
      //   document.title="iSmart Editor-Light Mode";
      // }, 1500);
    }
    else
    {
      setTheme("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode enabled!","success")
      document.title="iSmart Editor-Light Mode"


    }
  }

  return (
    <>
    
    <Navbar title="iSmart Editor" aboutus="About Us" contactus="Contact us" mode={mode} handletheme={handletheme} />
    <Alert alert={alert} />
    <Textform showAlert={showAlert} heading="Enter Text to analyze" mode={mode} />
  </>
  );
}

export default App;
