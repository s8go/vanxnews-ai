// import alanBtn from "@alan-ai/alan-sdk-web";
import React, {useState} from "react"

function Header(){
  const [greet, setGreet] = useState<string>("Alan welcomes you")

  // useEffect(()=>{
  //   alanBtn({
  //     key: "lka"
  //   })

  // }, [])

  function change():void{
    setGreet("What can I do for you")
  }

  return (<>
  <div className={"head"} onClick={change}>
  {greet}
  </div>
  </>)
}

export default Header;