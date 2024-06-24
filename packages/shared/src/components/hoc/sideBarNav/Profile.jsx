import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './sidebar-nav.module.scss';
import markProfile from '../../../public/images/markProfile.svg';
import Icondropdown from '../../../public/images/Icondropdown.svg';
import classNames from 'classnames';

function Profile() {
  const [userOption, setUserOption] = useState(false);

  return (
    <div className={classNames(styles.profileWrapper, 'px-2.5')}>
      <div
        className={classNames(
          styles.profileContainer,
          'grid-row-3 grid grid-flow-col items-center gap-4 pt-3.5 pb-5'
        )}
        onClick={() => setUserOption(!userOption)}
      >
        <Image
          className="row-span-1 row-start-1 h-10 w-10 rounded-full"
          src={markProfile}
          alt="Mark Profile Icon"
          width="40px"
          height="40px"
        />
        <div
          className={classNames(
            styles.profileName,
            'font-medium '
          )}
        >
          <div className="row-span-2 row-start-2 mr-3 text-#000000">
            Mark Twain
            <div className="text-sm text-#282828 dark:text-#282828">
              My Account
            </div>
          </div>
        </div>
        <Image
          className={classNames(styles.profileImage, 'row-span-3 row-end-3')}
          src={Icondropdown}
          alt="Mark Profile Icon"
          width="6px"
          height="11px"
        />
      </div>
      {userOption && (
        <div className={classNames(styles.userOption, 'items-center')}>
          <Link href="/api/auth/logout">
            <a className="ml-9 mt-12 block text-sm text-#404040 dark:text-#404040">
              Sign out
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Profile;
