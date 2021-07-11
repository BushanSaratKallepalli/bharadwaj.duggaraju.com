import {createGlobalStyle} from "styled-components"

const AppWrapper = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Nunito&display=swap");

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    :root {
    --background-color: #3b4d61;
    }

    body {
    font-family: "Nunito", Tahoma, Geneva, Verdana, sans-serif;
    background: var(--background-color);
    }

`

export default AppWrapper