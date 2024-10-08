import { Inter } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import "./globals.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link id="theme-css" rel="stylesheet" href="/themes/light/theme.css" />
      </head>
      <body className={inter.className}>
        <PrimeReactProvider
          value={{
            ripple: true,
          }}
        >
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
