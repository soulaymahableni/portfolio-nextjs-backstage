import './globals.css';

export const metadata = {
  title: 'Portfolio - Hablani Soulayma',
  description: 'Mon portfolio personnel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
