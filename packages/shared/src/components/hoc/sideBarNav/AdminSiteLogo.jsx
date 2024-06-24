import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/images/bark-admin-tool-logo.svg';

function AdminSiteLogo(props) {
  const { alt, title, tool } = props;
  return (
    <div className="">
      <Link href={`/${tool}`}>
        <a>
          <Image
            className="h-8 w-auto"
            src={logo}
            width="69px"
            height="24px"
            alt={alt}
            title={title}
          />
        </a>
      </Link>
    </div>
  );
}

export default AdminSiteLogo;
