import { Facebook, Instagram, Twitter, Youtube } from '@/svg'
import h from './header.module.css'
const PageHeader = () => {
  return (
    <>
      <section className={h.head}>
        <div className={h.container}>
          <div className={h.logo}>
            <h1>Academia</h1>
            <span>online education & learning</span>
          </div>
          <div className={h.social}>
            <Facebook className={h.icon} />
            <Instagram className={h.icon} />
            <Twitter className={h.icon} />
            <Youtube className={h.icon} />
          </div>
        </div>
      </section>
    </>
  )
}

export default PageHeader
