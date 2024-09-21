import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ContentPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='min-h-screen h-full p-4'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
