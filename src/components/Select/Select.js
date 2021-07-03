import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const Wrapper = styled.div`
  color: ${COLORS.gray700};
  position: relative;
  width: min-content;

  &:hover {
    color: revert;
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 10px;
  pointer-events: none;
`;

const SelectMenu = styled.select`
  color: inherit;
  padding: 12px 58px 12px 16px;
  font-size: 1rem;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  border: none;
  appearance: none;
  cursor: pointer;
  width: var(--width);
`;

const HiddenLabel = styled.div`
  width: max-content;
  visibility: hidden;

  /* Take it out of flow and hide behind the wrapper*/
  position: absolute;
  top: 0;
  left: 0;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  let [width, setWidth] = useState();

  //Make sure the useEffect do no run on initial render
  let notInitialRender = useRef(false);

  //get width of the text content so the select element grow and shrink accordingly
  useEffect(() => {
    if (notInitialRender.current) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const elemWidth = document
        .querySelector(".displayValue")
        .getBoundingClientRect().width;

      // eslint-disable-next-line react-hooks/exhaustive-deps
      setWidth((width = elemWidth));
    } else {
      notInitialRender.current = true;
    }
  }, [displayedValue]);

  return (
    <Wrapper>
      <SelectMenu
        value={value}
        onChange={onChange}
        style={{ "--width": `${width + 74}px` }}
      >
        {children}
      </SelectMenu>
      <IconWrapper id="chevron-down" size="24px" strokeWidth="2" />
      <HiddenLabel className="displayValue">{displayedValue}</HiddenLabel>
    </Wrapper>
  );
};

export default Select;
