import * as React from 'react'
import { Result, Button } from 'antd';

interface IProps {
    history:any
}

class Err403 extends React.Component<IProps> {
    public render() {
        return (
            <Result
                status="500"
                title="500"
                subTitle="服务器开小差了，请稍后再试。"
                extra={<Button type="primary" onClick={()=>{
                    this.props.history.push('/home');
                }
                }>返回主页</Button>}
            />
        )
    }
}

export default Err403;