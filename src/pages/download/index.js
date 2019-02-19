import React, {PureComponent} from 'react';
import {Content,
       
        InfoWrapper,
        InfoItem,
        Layout
            } from './style';

class Download extends PureComponent{
    render(){
        return (
          <Content>
            <Layout>
                <InfoWrapper>
                    <InfoItem className="col-xs-24 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                        <div className="info">123</div>
                    </InfoItem>
                    <InfoItem className="col-xs-24 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                        <div className="info">123</div>
                    </InfoItem >
                    <InfoItem className="col-xs-24 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                         <div className="info">123</div>
                    </InfoItem>
                    <InfoItem className="col-xs-24 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                        <div className="info">123</div>
                    </InfoItem>    
                </InfoWrapper>
            </Layout>
          </Content>
        )
    }
}

export default Download;