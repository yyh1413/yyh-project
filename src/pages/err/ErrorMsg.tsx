import * as React from 'react'
import { connect } from 'react-redux'
import * as Actions from "./redux/actions";
import {Modal} from "antd";

interface IProps {
    msg?: string,
    msgType?: Actions.MsgType,
    handleClear: () => void
}

/** redux全局提示信息显示 */
class ErrorMsg extends React.Component<IProps> {

    public onOk= () => {
        this.props.handleClear();
    };

    public showModal(msg:string, msgType:Actions.MsgType){
        const MsgType = Actions.MsgType;
        switch (msgType) {
            case MsgType.success:
                return Modal.success({
                    title: '成功',
                    content: msg,
                    onOk: this.onOk
                });
            case MsgType.info:
                return Modal.info({
                    title: '提示',
                    content: msg,
                    onOk: this.onOk
                });
            case MsgType.warn:
                return Modal.warn({
                    title: '警告',
                    content: msg,
                    onOk: this.onOk
                });
            case MsgType.error:
                return Modal.error({
                    title: '错误',
                    content: msg,
                    onOk: this.onOk
                });
        }
    }

    public componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<{}>, snapshot?: any): void {
        const { msg, msgType } = this.props;
        if(msg && msgType){
            this.showModal(msg, msgType);
        }
    }

    public render() {
        return "";
    }
}


const mapStateToProps = (state:any, ownProps:any) => {
    return {...ownProps, ...state.msg};
};

const mapDispatcherToProps = (dispatch : any) => {
    return {
        handleClear:() => {
            dispatch(Actions.clearMsgAction());
        }
    }
};

export default connect(mapStateToProps, mapDispatcherToProps)(ErrorMsg);