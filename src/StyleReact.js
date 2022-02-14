import React from 'react';
import "./StyleReact.css";
import styles from './myStyles.module.css';
import styled from 'styled-components';

function StyleReact() {
    const Div = styled.div`  
    margin: 20px;  
    border: 5px dashed green;  
    &:hover {  
    background-color: ${(props) => props.hoverColor};  
    }  
    `;
    // const Div: any = styled.div`  
    // margin: 20px;  
    // border: 5px dashed green;  
    // &:hover {  
    // background-color: ${(props: any) => props.hoverColor};  
    // }  
    // `;

    const Title = styled.h1`  
    font-family: Arial;  
    font-size: 35px;  
    text-align: center;  
    color: palevioletred;  
    `;
    
    const Paragraph = styled.p`  
    font-size: 25px;  
    text-align: center;  
    background-Color: lightgreen;  
    `;
    return (
        <>
            <div className='container'>
                <h1 style={{ color: "Green" }}>Inline Style</h1>
            </div>
            <div className='stylesheets'>
                <h1>Css Stylesheet</h1>
            </div>
            <div>
                <h1 className={styles.mystyle}>CSS Module</h1>
                <p className={styles.parastyle}>It is CSS Module</p>
            </div>
            <div>
                <Title>Styled Components Example</Title>
                <p></p>
                <Div hoverColor="Orange">
                    <Paragraph>Hello JavaTpoint!!</Paragraph>
                </Div>
            </div>
        </>
    );
}

export default StyleReact;
