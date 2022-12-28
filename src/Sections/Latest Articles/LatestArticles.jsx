import React from 'react'
import '../../styles/LastestArticles.scss'

const LatestArticles = () => {
  return (
    <section className='latestarticles_container '>
      <article className='container '>
        <h4>Latest Articles</h4>
          <div className='grid articles'>
            <div className='box'>
               <img src='/images/image-currency.jpg' alt='money' className='image' />
              <span>By Claire Robinson</span>
               <h5 className='heading'>Receive money in any currency with no fees </h5>
            <p className='subheading'> The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single … </p>
          </div>
          <div className='box'>
            <img src='/images/image-restaurant.jpg' alt='restaurant ' className='image' />
            <span>By Wilson Hutton</span>
            <h5 className='heading'>Treat yourself without worrying about money </h5>
            <p className='subheading'> Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you … </p>
          </div>
          <div className='box'>
            <img src='/images/image-plane.jpg' alt='airplane' className='image' />
            <span> By Wilson Hutton</span>
            <h5 className='heading'>Take your Easybank card wherever you go </h5>
            <p className='subheading'> We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you … </p>
          </div>
          <div className='box'>
            <img src='/images/image-confetti.jpg' alt='confettii' className='image' />
            <span>By Claire Robinson</span>
            <h5 className='heading'>Our invite-only Beta accounts are now live! </h5>
            <p className='subheading'>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... </p>
          </div>
          </div>
      </article>
    </section>
  )
}

export default LatestArticles
