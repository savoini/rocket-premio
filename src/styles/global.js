import styled, { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body {
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        font-family: sans-serif;
        background-color: rgb(113, 89, 193);
        heigth: 100%
    }

    #root {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      flex-wrap: wrap;
    }

    label {
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 5px;
    }

    input[type='text'] {
      height: 40px;
      width: 100%;
      max-width: 350px;
      padding: 10px;
      border: 1px;
      background-color: rgb(232, 240, 254) !important;
      border-radius: 10px;
    }

    input[type='checkbox'] {
      margin: 15px;
    }

    button {
      height: 52px;
      width: 100%;
      min-width: 200px;
      max-width: 500px;
      color: #FFF;
      font-size: 18px;
      background: rgb(113, 89, 193, 0.8);
      border-radius: 10px;
      border: 2px;
      margin-top: 10px;
    }

    table, th, td {

    }

    th, td {
      padding: 15px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

`;

export const Header = styled.div`
  width: 100%;
  display: flex;
`;

export const SideBar = styled.div`
  flex-grow: 1;
  flex-wrap: wrap;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10px;
  border: 1px;
  padding: 40px;
  border-radius: 10px;
  background-color: #fff;

  h2 {
    text-align: center;
    height: 52px;
    width: 100%;
    font-size: 22px;
  }

  span {
    color: #f00;
    font-style: italic;
  }
`;

export const List = styled.div`
  background: rgba(255, 255, 255, 0.8);
  height: 100%;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.div`
  list-style: none;
  width: 100%;
  max-width: 250px;
  margin: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  img {
    border-radius: 50%;
    width: 64px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  span {
    font-size: 12px;
    color: #6c757d;
    font-style: italic;
  }
`;

export const Action = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex: 1;
  i {
    color: #f55;
  }
`;

export default GlobalStyle;
