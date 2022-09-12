import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    body: "#FFFFFF"
}

export const darkTheme = {
    body:"#2A2D39"
}

export const GlobalStyles = createGlobalStyle `
    body {
        background-color:${(props) => props.theme.body}
    }
`;