import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/layout';
import { ThemeProvider } from './context/theme-provider';
import CityPage from './pages/city-page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { WeatherDashboard } from './pages/weather-dashboard';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ThemeProvider defaultTheme='dark'>
          <Layout>
            <Routes>
              <Route path='/' element={<WeatherDashboard />} />
              <Route path='/city/:cityName' element={<CityPage />} />
              <Route path='*' element={<div>Not Found</div>} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
