import React from 'react';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';

import {
  FaApple,
  FaFacebook,
  FaGooglePlay,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className={'w-full h-fit py-[5rem] mt-[5rem] bg-white'}>
      <Container>
        <div
          className={
            'w-full h-fit flex flex-row items-start justify-between gap-[1rem]'
          }>
          <div className={'flex-[1]'}>
            <Logo />
            Join our community and share your experience and thoughts.
            <ul
              className={
                'flex flex-row items-center justify-start gap-[0.25rem]'
              }>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaInstagramSquare />
              </li>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaYoutube />
              </li>
            </ul>
          </div>
          <ul className={'flex-[2] flex flex-row items-start justify-between'}>
            <li>
              <b>About</b>
              <ul>
                <li>About Us</li>
                <li>Partners</li>
                <li>Team</li>
                <li>Community</li>
              </ul>
            </li>
            <li>
              <b>Information</b>
              <ul>
                <li>Help center</li>
                <li>Money Refund</li>
                <li>Fraud Report</li>
                <li>Details</li>
              </ul>
            </li>
            <li>
              <b>User</b>
              <ul>
                <li>Login</li>
                <li>Become a seller</li>
                <li>Settings</li>
                <li>Orders</li>
              </ul>
            </li>
          </ul>
          <div
            className={
              'flex-[1] flex flex-col items-center justify-center gap-[1rem]'
            }>
            <button
              className={
                'w-[12rem] h-auto px-[0.75rem] py-[0.25rem] flex flex-row items-center justify-center gap-[0.5rem] bg-black text-white rounded-md'
              }>
              <div>
                <FaApple size={'2.5rem'} />
              </div>
              <div className={'flex flex-col'}>
                <small>Download On</small>
                <b>App Store</b>
              </div>
            </button>
            <button
              className={
                'w-[12rem] h-auto px-[0.75rem] py-[0.25rem] flex flex-row items-center justify-center gap-[0.5rem] bg-black text-white rounded-md'
              }>
              <div>
                <FaGooglePlay size={'2rem'} />
              </div>
              <div className={'flex flex-col'}>
                <small>Download On</small>
                <b>Google Play</b>
              </div>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
