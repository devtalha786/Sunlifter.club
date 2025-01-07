import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Custom404() {
    return (
        <>
            <Navbar />
            <div className='h-screen flex items-center justify-center flex-col gap-5'>
                <h1 className='text-4xl font-medium'>Coming Soon...</h1>
                <Link href="/" className='text-2xl font-medium underline'>
                    Return to Home
                </Link>
            </div>
            <Footer />
        </>
    );
}
