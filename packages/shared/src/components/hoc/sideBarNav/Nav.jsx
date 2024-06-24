import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import styles from './sidebar-nav.module.scss';
import currentPageKey from '../../utils/constants';
function Nav(props) {
  const { navData } = props;
  const router = useRouter();
  const isActive = (label) => {
    return (
      label.toLowerCase().replace(/\s/g, '') ===
        currentPageKey(router.pathname) ||
      label?.toLowerCase()?.includes(currentPageKey(router.pathname))
    );
  };
  return (
    <div>
      <nav className={styles.navContainer}>
        <ul className={styles.navList}>
          {navData &&
            navData.map((item, index) => {
              const { img, label, link } = item;
              return (
                <li
                  key={index}
                  className={classNames(
                    styles.navItem,
                    isActive(label) ? styles.active : ''
                  )}
                >
                  <Link href={`${link}`}>
                    <a>
                      <span className={styles.icon}>
                        {img && (
                          <Image
                            className="h-8 w-auto"
                            src={!isActive(label) ? img.src : img.srcActive}
                            width={img.width}
                            height={img.height}
                            alt={label}
                            title={label}
                          />
                        )}
                      </span>
                      <span className={styles.label}>{label}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
