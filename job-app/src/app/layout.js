import { Inter } from "next/font/google";
import "./globals.css";
import CommanLayout from "./ReduxProvider";
import CommanContainer from "./CommanContainer";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "./TheameProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Job Portal App",
  description: "Get Hired & Job From Job Portal App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CommanLayout>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <CommanContainer>
              <Header />
              {children}
              <Footer />
            </CommanContainer>
          </ThemeProvider>
        </CommanLayout>
      </body>
    </html>
  );
}
