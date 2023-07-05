import defaultLayoutStyle from './defaultLayout.module.css';
import { RxAvatar } from 'react-icons/rx';
import { Outlet } from 'react-router';
import { Text } from '@chakra-ui/react';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <div className={defaultLayoutStyle['page-wrapper']}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

const Header = () => {
  return (
    <header className={defaultLayoutStyle['header-bar']}>
      <div>
        <Text fontSize={'4xl'} color={'white'}>
          Books
        </Text>
      </div>
      <div>
        <div className={defaultLayoutStyle['avatar-wrapper']}>
          <RxAvatar className={defaultLayoutStyle.avatar} />
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return <footer>Hello From Footer</footer>;
};
