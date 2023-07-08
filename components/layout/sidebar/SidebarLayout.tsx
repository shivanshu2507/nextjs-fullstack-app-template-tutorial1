import Link from 'next/link';
import styles from './SidebarLayout.module.css';

export interface ISidebarLayout {}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link legacyBehavior href="/">Home</Link>
      <Link legacyBehavior href="/about">about</Link>
    </nav>
  );
};

export default SidebarLayout;
