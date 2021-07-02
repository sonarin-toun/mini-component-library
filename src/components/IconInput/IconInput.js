import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZE = {
  small: {
    "--padding": `4px 16px 4px 24px`,
    "--fontSize": `14px`,
    iconSize: "16",
    strokeWidth: "1",
    "--iconPositionTop": "4px",
  },
  large: {
    "--padding": `8px 24px 8px 36px`,
    "--fontSize": `21px`,
    iconSize: "24",
    strokeWidth: "2",
    "--iconPositionTop": "8px",
  },
};

const Wrapper = styled.form`
  position: relative;
  width: min-content;

  &:hover {
    > * {
      color: ${COLORS.black};
    }
  }
`;

const InputBase = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding: var(--padding);
  font-size: var(--fontSize);
  color: ${COLORS.gray700};
  font-weight: 700;
  width: var(--inputWidth);
  outline-offset: 4px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: var(--iconPositionTop);
  left: 0;
  position: absolute;
  color: ${COLORS.gray700};
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {

  const lowerCaseLabel = label.toLowerCase();
  const styles = SIZE[size];
  styles["--inputWidth"] = `${width}px`;

  function handleFocus() {
    document.querySelector(`#${lowerCaseLabel}`).focus();
  }

  return (
    <Wrapper>
      <label for={lowerCaseLabel}>
        <VisuallyHidden>{lowerCaseLabel}</VisuallyHidden>
      </label>
      <InputBase
        id={lowerCaseLabel}
        placeholder={placeholder}
        style={styles}
        name = {lowerCaseLabel}
        type = 'text'
      />
      <IconWrapper
        id={icon}
        style={styles}
        size={styles.iconSize}
        strokeWidth={styles.strokeWidth}
        onClick={handleFocus}
      />
    </Wrapper>
  );
};

export default IconInput;
