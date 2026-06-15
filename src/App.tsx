import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Layout/Header';
import Nav from './components/Layout/Nav';
import Footer from './components/Layout/Footer';
import PageTransition from './components/PageTransition/PageTransition';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

// Lazy‑loaded pages (code splitting)
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Suspense fallback={<LoadingSpinner />}>
                <Home />
              </Suspense>
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <Suspense fallback={<LoadingSpinner />}>
                <About />
              </Suspense>
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Suspense fallback={<LoadingSpinner />}>
                <Contact />
              </Suspense>
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Header />
        <Nav />
        <main style={{ flex: 1 }}>
          <AnimatedRoutes />
        </main>
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
