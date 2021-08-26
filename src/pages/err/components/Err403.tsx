import * as React from 'react'
import { Result, Button } from 'antd';

interface IProps {
    history:any
}

class Err403 extends React.Component<IProps> {
    public render() {
        return (
            <Result
                status="403"
                title="403"
                subTitle="对不起，您没有此页面的访问权限。"
                extra={<Button type="primary" onClick={()=>{
                    this.props.history.push('/home');
                }
                }>返回主页</Button>}
            />
        )
    }
}

export default Err403;