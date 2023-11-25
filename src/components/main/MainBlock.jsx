import React from 'react'
import style from './style.module.css'
export default function MainBlock() {
  return (
    <main className={style.container}>
      <div className={style.first_main_block}>
        <h1 className={style.h1}>
          Зарабатывайте больше{' '}
          <span className={style.decor_elem}>с WELBEX</span>
        </h1>
        <p className={style.slogon}>
          Развиваем и контролируем
          <br /> продажи за вас
        </p>
      </div>
      <div className={style.second_main_block}>
        <h2 className={style.h2}>
          Вместе с <span>бесплатной</span> <span>консультацией</span> мы дарим:
        </h2>
        <div className={style.sevices_block_info}>
          <div className={style.sevices_block_item1}>
            <div className={style.line_decor}></div>
            <p className={style.title}>Виджеты</p>
            <p className={style.description} style={{ marginBottom: '3rem' }}>
              30 готовых решений
            </p>
          </div>
          <div className={style.sevices_block_item2}>
            <div className={style.line_decor}></div>
            <p className={style.title}>Dashboard</p>
            <p className={style.description}>с показателями вашего бизнеса</p>
          </div>
          <div className={style.sevices_block_item3}>
            <div className={style.line_decor}></div>
            <p className={style.title}>Skype Аудит</p>
            <p className={style.description}>отдела продажи CRM системы</p>
          </div>
          <div className={style.sevices_block_item4}>
            <div className={style.line_decor}></div>
            <p className={style.title}>35 дней</p>
            <p className={style.description}>использования CRM</p>
          </div>
        </div>
        <div className={style.button}>Получить консультацию</div>
      </div>
    </main>
  )
}
