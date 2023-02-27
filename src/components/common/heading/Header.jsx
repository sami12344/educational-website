import { Close, Menu } from '@/svg'
import Link from 'next/link'
import { useState } from 'react'
import PageHeader from './PageHead'
import h from './header.module.css'
const Header = () => {
  const [click, setClick] = useState(false)
  return (
    <>
      <PageHeader />
      <header className={h.header}>
        <nav className={h.navflexSb}>
          <ul
            className={click ? 'mobile-nav' : h.flexSb}
            onClick={() => setClick(false)}
          >
            <li>
              {' '}
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              {' '}
              <Link href={'/courses'}>All Courses</Link>
            </li>
            <li>
              {' '}
              <Link href={'/about'}>About</Link>
            </li>
            <li>
              {' '}
              <Link href={'/team'}>Team</Link>
            </li>
            <li>
              {' '}
              <Link href={'/pricing'}>Pricing</Link>
            </li>{' '}
            <li>
              {' '}
              <Link href={'/journal'}>Journal</Link>
            </li>{' '}
            <li>
              {' '}
              <Link href={'/contact'}>Contact</Link>
            </li>
          </ul>
          <div className={h.start}>
            <div className={h.button}>GET CERTIFICATE</div>
          </div>

          <button className={h.toggle} onClick={() => setClick(!click)}>
            {click ? <Close /> : <Menu />}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
