import React from 'react';

import gatsbyIcon from '../assets/gatsbyjs-icon.svg';
import travisIcon from '../assets/travis-ci-icon.svg';
import heartIcon from '../assets/heart.svg';

export default function SupportStack() {
    return (
        <div style={{width:'100%', marginTop: '60px', padding: '10px', textAlign: 'center'}}>
            <p style={{fontSize: '14px', margin: '0px', marginBottom: '15px', color: '#7f7f7f'}}>THANK YOU</p>
            <div>
                <img src={gatsbyIcon} width="30px" style={{marginRight:'15px'}} />
                <img src={travisIcon} width="30px" />
            </div>
            <p style={{fontSize: '12px', margin: '0px', color: '#7f7f7f', textAlign: 'center'}}>
                <span style={{position: 'relative', top: '-6px', left: '-3px'}}>MADE WITH</span> 
                <img src={heartIcon} width="20" alt="Made with love" />
            </p>
        </div>
    )
}