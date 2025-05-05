import "./globals.css";
import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import { ClerkProvider, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import Loader from '@/components/Loader';
import SessionWrapper from '@/components/SessionWrapper';
import CommentModal from '@/components/CommentModal';

export const metadata = {
  title: 'Next Social Media App',
  description: 'A social media app built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <SessionWrapper>
        <html lang='en'>
          <head>
            {/* Import Google Font Inter */}
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
              rel="stylesheet"
            />
          </head>
          <body className="font-sans antialiased">
            <ClerkLoading>
              <Loader />
            </ClerkLoading>
            <ClerkLoaded>
              <div className="flex justify-between max-w-6xl mx-auto">
                <div className="hidden sm:inline border-r h-screen sticky top-0">
                  <LeftSidebar />
                </div>

                <div className="w-2xl flex-1">{children}</div>
                <div className="lg:flex-col p-3 h-screen border-l hidden lg:flex w-[24rem]">
                  <RightSidebar />
                </div>
              </div>
              <CommentModal />
            </ClerkLoaded>
          </body>
        </html>
      </SessionWrapper>
    </ClerkProvider>
  );
}
