import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

body {
    padding: 0;
    background-color: #fff;
    margin:0;
  }

  ul {
   list-style:none;
   margin:0;
   padding:0;
   li + li {
     margin-left:10px;
   }
  }
`;
