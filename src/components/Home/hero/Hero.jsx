import React from 'react'
import h from './hero.module.css'
import { RightArrow } from '@/svg'
import Title from '@/components/common/title/Title'
const Hero = () => {
  return (
    <>
      <section className={h.hero}>
        <div className={h.container}>
          <div className={h.row}>
            <Title
              subtitle='WELCOME TO ACADEMIA'
              title='Best Online Education Expertise'
            />
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className={h.button}>
              <button className={h.primary_btn}>
                GET STARTED NOW <RightArrow />
              </button>
              <button className={h.scondary_btn}>
                VIEW COURSE <RightArrow />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className={h.margin}></div>
    </>
  )
}

export default Hero