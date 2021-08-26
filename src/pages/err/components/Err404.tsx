import * as React from 'react'
import { Result, Button } from 'antd';

interface IProps {
    history:any
}

class Err403 extends React.Component<IProps> {
    public render() {
        return (
            <Result
                status="404"
                title="404"
                subTitle="对不起，没有找到此页面。"
                extra={<Button type="primary" onClick={()=>{
                    this.props.history.push('/home');
                }
                }>返回主页</Button>}
            />
        )
    }
}

export default Err403;