import React from 'react';
import AdminSiteLogo from '../AdminSiteLogo';
import Profile from '../Profile';
import styles from './sidebar-nav.module.scss';

function SideNav(NavComponent, logo) {
  const { alt, title, tool } = logo;
  const SideNav = (props) => {
    return (
      <div className={styles.sideBarWrapper}>
        <div className={styles.sideBarContainer}>
          <AdminSiteLogo alt={alt} title={title} tool={tool} />
          <NavComponent {...props} />
        </div>
        <Profile {...props} />
      </div>
    );
  };
  return SideNav;
}

export default SideNav;
