import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0 ;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    font-family: 'Roboto Slab', serif;

    @media screen and (max-width: 768px) {
    html {
      font-size: 14px; 
    }

    body {
      padding: 10px; 
    }
  }
  }
`;


export const Container = styled.div`
  width: 100%;
  min-height: 895px;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 25px;
 

  .title {
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    color: ${({theme}) => theme.COLORS.GREEN_DARK};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Input = styled.input`
  padding: 8px 24px;
  width: 224px;
  height: 50px;
  background: ${({theme}) => theme.COLORS.WHITE};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;

  font-weight: 700;
  font-size: 16px;
  font-family: 'Roboto Slab', serif;
  line-height: 24px;
  color: ${({theme}) => theme.COLORS.GREEN_DARK};

  &::placeholder {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: ${({theme}) => theme.COLORS.GREEN_DARK};
  }
`;

export const Flex = styled.div<{ direction?: string; justify?: string; align?: string; gap?: string }>`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  gap: ${(props) => props.gap || "16px"};
`;

type SpacerProps = {
  margin?: string;
};

export const Spacer = styled.div<SpacerProps>`
  width: 100%;
  margin: ${(props) => props.margin || "20px"};
`;

export const Button = styled.button`
  width: 112px;
  height: 50px;
  background: ${({theme}) => theme.COLORS.GREEN_500};
  border-radius: 10px;
  border: none;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({theme}) => theme.COLORS.WHITE};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.COLORS.GREEN_DARK};
    transition: .3s;
  }
  &:active {
    opacity: 0.6;
  }
`;

type ItemProps = {
  checked?: boolean; 
};

export const Item = styled.li<ItemProps>`
  padding: 13px 10px 13px 24px;
  width: 354px;
  min-height: 50px;
  background: ${(props) => (props.checked ?
    `${({theme}) => theme.COLORS.GREEN_DARK}` :
    `${({theme}) => theme.COLORS.WHITE}`)};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: ${(props) => (props.checked ? "line-through" : "")};
    text-decoration-thickness: 4px;
    text-decoration-color: ${({theme}) => theme.COLORS.GREEN_500} ;
    color: ${(props) => (props.checked ? 
      `${({theme}) => theme.COLORS.GREEN_DARK}` :
      `${({theme}) => theme.COLORS.GREEN_500}`)};

    width: 80%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }

  button {
    background: transparent;
    border: none;
    color: ${({theme}) => theme.COLORS.GREEN_500};
    cursor: pointer;

    &:hover {
    color: ${({theme}) => theme.COLORS.GREEN_DARK};
    transition: .3s;
  }
  &:active {
    opacity: 0.6;
  }
  }

  i {
    font-size: 24px;
    color: ${(props) => (props.checked ? 
      `${({theme}) => theme.COLORS.GREEN_500}` :
      `${({theme}) => theme.COLORS.BLACK}`)};
  }
`;
