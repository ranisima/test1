import React, {Component} from 'react';
import styled from 'styled-components';

const Body=styled.body`
height:100px;
border:11px solid red;
`
class Flex extends Component{
    render(){
        return(
                    <div>
                        <Body>

                        </Body>
                    </div>   
        );
    }
}
export default Flex;