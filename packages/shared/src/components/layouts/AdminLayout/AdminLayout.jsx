import Head from 'next/head';
//import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import MerchSideNav from '../../SideBarNav/MerchSideNav';
import HappySideNav from '../../SideBarNav/HappySideNav';
import styles from './admin-layout.module.scss';
import { useRouter } from 'next/router';

//export default withPageAuthRequired(function AdminLayout({ children }) {
export default function AdminLayout({ children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Bark Shop - Admin Merch Tools</title>
      </Head>
      <h1 className="sr-only">Admin Merch Tools</h1>

      <main className="lg:min-w-1/2 lg:flex lg:min-h-full">
        <section>
          {router?.asPath?.includes('/merch') ? (
            <MerchSideNav />
          ) : router?.asPath?.includes('/happy') ? (
            <HappySideNav />
          ) : (
            ''
          )}
        </section>
        <section className={styles.rightLayout}>
          <div>{children}</div>
        </section>
      </main>
    </>
  );
};
