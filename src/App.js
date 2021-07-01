import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const Container = styled.View`
    flex: 1;
    background-Color: ${({ theme }) => theme.background};
    align-items: center;
    justify-content: center;
    `;

export default function App() {
    return (
        <ThemeProvider theme = {theme}>
            <Container></Container>
        </ThemeProvider>
    );
};
