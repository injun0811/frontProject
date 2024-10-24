import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store } from './store';
import { Provider } from 'react-redux';
import GlobalStyle from './styled/GlobalStyle.js';
import { ThemeProvider } from 'styled-components';
import { theme } from './styled/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <Provider store={store}>
        <ThemeProvider theme={{ theme }}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </Provider>
    // </React.StrictMode>
);
