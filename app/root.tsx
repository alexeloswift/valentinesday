// src/root.tsx
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  HashRouter,
  Routes,
  Route,
} from 'react-router';
import { lazy, Suspense } from 'react';
import Home from './routes/home';
import './app.css';
import { Analytics } from '@vercel/analytics/next';




// Lazy load the components that depend on the browser environment
const Yes = lazy(() => import('./routes/yes'));
const No = lazy(() => import('./routes/no'));

export const links = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/yes"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Yes />
              </Suspense>
            }
          />
          <Route
            path="/no"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <No />
              </Suspense>
            }
          />
        </Routes>
      </HashRouter>
          <Analytics />
    </>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}