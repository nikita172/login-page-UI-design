import './mainsection.css'
import 'antd/dist/antd.min.css';
import { Form, Input, Button, Checkbox } from 'antd'
export default function Mainsection({setLoading,loading}) {
    const onFinish = (e) => {
        setLoading(true);
    }
 
  return (
    <div className='main'>
        <div className="mainLeft">
                    <div className='inputForm'>
                        <div className='inputTopDetails'>
                            <h1>Welcome Back</h1>
                            <span>Sub-title text goes here</span>
                        </div>

                        <Form onFinish={onFinish}>
                            <Form.Item style={{ marginBottom: "8px", width: "100%", }} name="email">
                                <Input placeholder="Email Address*" style={{ borderRadius: "4px" }}></Input>
                            </Form.Item>
                            <Form.Item style={{ marginBottom: "8px", width: "100%", }} name="password">
                                <Input placeholder="Password*" style={{ borderRadius: "4px" }}></Input>
                            </Form.Item>
                            <Form.Item style={{ marginBottom: "8px" }} name="username">
                                <Button block type='primary' style={{
                                    borderRadius: "4px", backgroundColor: "rgb(37, 37, 72)",
                                    borderColor: "rgb(37, 37, 72)", marginBottom: "0px"
                                }} htmlType='submit'>Log In</Button>
                            </Form.Item>
                        </Form>
                        <div className="inputBottomDetails">
                            <Checkbox style={{ color: "rgb(37, 37, 72)" }}
                            >Remember Password</Checkbox>
                            <a href="#" style={{ color: "rgb(37, 37, 72)" }} >Forget Password?</a>
                        </div>



                    </div>



                </div>
                <div className="mainRight">
                    <img src="https://www.applyboard.com/wp-content/uploads/2019/05/Blog_Header_Image-3-1.png" />
                </div>
            
    </div>
  )
}
