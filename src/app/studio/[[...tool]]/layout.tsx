export const metadata = {
  title: 'HOOPKULTUR CMS',
  description: 'Content Management System für HOOPKULTUR',
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
