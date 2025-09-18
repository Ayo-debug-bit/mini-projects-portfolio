import "../styles/globals.css"
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Mini Projects Portfolio",
  description: "Showcasing my JavaScript & React projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}