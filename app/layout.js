export const metadata = {
  title: "Melting Metal",
  description: "Mobile Welding Repair Service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}