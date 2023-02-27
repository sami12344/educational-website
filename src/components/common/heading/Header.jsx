import Link from 'next/link'
import PageHeader from './PageHead'
import h from './header.module.css'
const Header = () => {
  return (
    <>
      <PageHeader />
      <header className={h.header}>
        <nav className={h.flexSb}>
          <ul className={h.flexSb}>
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
        </nav>
      </header>
    </>
  )
}

export default Header
