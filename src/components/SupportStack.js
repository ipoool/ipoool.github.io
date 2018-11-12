import React from 'react';

import gatsbyIcon from '../assets/gatsbyjs-icon.svg';
import travisIcon from '../assets/travis-ci-icon.svg';

export default function SupportStack() {
    return (
        <div style={{width:'100%', marginTop: '60px', padding: '10px'}}>
            <p style={{fontSize: '14px', margin: '0px', marginBottom: '15px', color: '#7f7f7f'}}>Powered by :</p>
            <div>
                <img src={gatsbyIcon} width="40px" style={{marginRight:'15px'}} />
                <img src={travisIcon} width="40px" />
            </div>
            <p style={{fontSize: '12px', margin: '0px', color: '#7f7f7f', textAlign: 'right'}}>Made with Love</p>
        </div>
    )
}