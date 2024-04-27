import MainLayout from '@/layouts/MainLayout'
import Image from 'next/image'
import React from 'react'

const RightLayout = () => {

  return (
    <MainLayout>
        <section>
            <div>
                <div>
                <p>Exlore your first Collectible</p>
                </div>
                <div>
                    <h3>Meta Lives</h3>
                    <p>Live in Matrix</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint, consectetur iusto aliquid fuga nulla.</p>
                    <Image src="https://astrix.security/wp-content/uploads/2022/06/og.png" alt="" />
                </div>
                <div>

                </div>
            </div>
        </section>
    </MainLayout>
  )
}

export default RightLayout