import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import 'antd/dist/reset.css';

import SideBarContainer from '@/layout/sidebar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='layout-container'>
      <SideBarContainer />
      <div className='koala-content'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
