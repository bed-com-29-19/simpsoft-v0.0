import * as React from "react";
import ThemeRegistry from "./components/themeRegistry/themeRegistry";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "./components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIMPSOFT",
  description: "Simplifying Technologies",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <Layout>{children}</Layout>
        </ThemeRegistry>
      </body>
    </html>
  );
}

export default React.memo(RootLayout);
