import "./globals.css";

export const metadata = {
  title: "DriveGH | Premium Vehicles in Ghana",
  description:
    "DriveGH helps customers find quality vehicles and trusted automotive services in Ghana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
