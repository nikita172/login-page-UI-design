import   './header.css'
import 'antd/dist/antd.min.css';
import {Button} from'antd'
export default function Header() {
  return (
    <div className='header'>
        
        <h1 className='headerLeft'>ATools.</h1>       
        
        <div className='headerRight'>
            <Button type="primary" style={{ background: "rgb(37, 37, 72)", color: "white", 
        paddingLeft:"30px",paddingRight:"30px", borderColor: "rgb(37, 37, 72)",borderRadius:"5px"}} 
        className='headerButton'>Start Free Trial</Button>
            <Button type="primary" style={{ background: "goldenrod", color: "white", 
        paddingLeft:"30px",paddingRight:"30px", borderColor:"goldenrod",borderRadius:"5px"}}>Login</Button>
        </div>
    </div>
  )
}
