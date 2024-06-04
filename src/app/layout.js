import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';

export const metadata = {
  title: "Matoshri Technical Event Cell",
  description: "Matoshri Technical Event Cell",
  keywords: "Matoshri, Technical, Event, Cell , Technical Cell, Event Cell",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme ={theme}>
          {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
        
      </body>
    </html>
  );
}

