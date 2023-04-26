import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();
  console.log('🚀 ⁝ NavBar ⁝ router:', router);

  return (
    <nav>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>

      <style jsx>
        {`
          nav {
            background-color: #738d9d;
            color: #d6e1e9;
          }
          Link > a {
            text-decoration: none;
          }
        `}
      </style>
    </nav>
  );
}
