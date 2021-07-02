/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";


const SIZE = {
  small: {
    "--containerHeight": `8px`,
    "--borderRadius": `4px`,
    "--innerBarHeight": `8px`,
    "--innerBorderRadius": `0px`,
    "--padding": `none`
  },
  medium: {
    "--containerHeight": `12px`,
    "--borderRadius": `8px`,
    "--innerBarHeight": `12px`,
    "--innerBorderRadius": `0px`,
    "--padding": `none`
  },
  large: {
    "--containerHeight": `24px`,
    "--borderRadius": `8px`,
    "--innerBarHeight": `16px`,
    "--innerBorderRadius": `0px`,
    "--padding": `4px`
  }
}

const ProgressBarBase = styled.progress`
  
  &[value] {
    /*reset appearancen*/
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    /*Sizing*/
    width: 370px;
    
    /*Progress Bar Container*/
    &::-webkit-progress-bar {
      background-color: ${COLORS.transparentGray15};
      border-radius: var(--borderRadius);
      height: var(--containerHeight);
      display: flex;
      box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
      padding: var(--padding);
    }

    /*Progress Bar Value*/
    &::-webkit-progress-value {
      background-color: ${COLORS.primary};
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border-top-right-radius: var(--innerBorderRadius);
      border-bottom-right-radius: var(--innerBorderRadius);
      height: var(--innerBarHeight);
    }
  }
`;

const ProgressBar = ({ value, size }) => {

  const styles = SIZE[size];
  if (value > 99) styles['--innerBorderRadius'] = '4px'; 

  return <ProgressBarBase max="100" value={value} style={styles}/>;
};



export default ProgressBar;
