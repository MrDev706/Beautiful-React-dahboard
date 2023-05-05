import React from 'react'


const style1 = {
  "padding": "6px 13px",
 "boxSizing": "border-box",
 "border" : "1px solid blue",
 "fontSize": "20px",
 "background": "transparent",
 "color" : "blue",
 "borderRadius": "10px",
"margin" :"10px 0"

}
function LogoCompo() {
  return (
    <>
    <button style={style1}>Dashboard logo</button>
    </>
  )
}

export default LogoCompo