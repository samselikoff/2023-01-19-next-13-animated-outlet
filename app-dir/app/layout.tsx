import AnimatedOutlet from "./animated-outlet";
import "./globals.css";
import Header from "./header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body className="flex justify-center min-h-screen py-80">
        <div className="max-w-sm mx-auto bg-white shadow rounded w-full p-4">
          <Header />

          <AnimatedOutlet>{children}</AnimatedOutlet>
        </div>
      </body>
    </html>
  );
}
