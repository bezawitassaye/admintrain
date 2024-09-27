
import "./globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: " admin",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
           <div className="container">
  
              {children}
       
            </div>

      </body>
    </html>
  );
}