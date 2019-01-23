import React,{Component} from 'react';
import {
        DownloadWrapper,
        DownloadInfo
} from '../style';

class Download extends Component{
    render(){
        return (
            <DownloadWrapper>
                <img className="qrcode" alt="" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"/>
                <DownloadInfo>
                    <h3 className="title">下载简书手机App</h3>
                    <p className="desc">随时随地发现和创作内容</p>
                </DownloadInfo>
            </DownloadWrapper>
        )
    }
}

export default Download;