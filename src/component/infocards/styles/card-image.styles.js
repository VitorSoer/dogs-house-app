import styled, { css } from "styled-components";
export const DivImage = styled.div`
  min-height: 21.5rem;
  width: 100%;
  background-image: url("https://images.pexels.com/photos/10253959/pexels-photo-10253959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  background-position: center;
  background-size: cover;

  ${(props) =>
    props.apadrinhe &&
    css`
      background-image: url("https://images.unsplash.com/photo-1608096281339-5bcae1ec2f12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80");
    `}

  ${(props) =>
    props.ajude &&
    css`
      background-image: url("https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80");
    `}
  
${(props) =>
    props.adote &&
    css`
      background-image: url("https://images.unsplash.com/photo-1608097172838-f8094d967aa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80");
    `}
`;
