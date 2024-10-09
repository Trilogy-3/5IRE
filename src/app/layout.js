import "./globals.css";
 
export const metadata = {
  title: "5ire",
  description: "5ire App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
