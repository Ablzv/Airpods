import React from 'react'

function AirPodsImage({ src, alt, className = '' }) {
  return <img src={src} alt={alt} className={`object-contain ${className}`} />
}

function PhoneCard({ name, price, image }) {
  return (
    <article className="flex h-[180px] w-[160px] flex-col items-center justify-between bg-white px-[10px] pb-[11px] pt-[12px] text-center shadow-[0_7px_20px_rgba(0,0,0,0.18)]">
      <h3 className="text-[13px] font-bold text-black">{name}</h3>
      <AirPodsImage src={image} alt={name} className="h-[112px] w-[105px]" />
      <p className="text-[8px] uppercase text-[#333]">Starting at {price}</p>
      <button type="button" className="mt-[7px] h-[24px] w-full bg-black text-[9px] font-medium uppercase text-white transition-colors hover:bg-[#343434]">
        View
      </button>
    </article>
  )
}

function Main() {
  const phones = [
    { name: 'iPhone 11 Pro', price: '$999', image: '/images/iphone-11-pro.png' },
    { name: 'iPhone 11', price: '$699', image: '/images/iphone-11.png' },
    { name: 'iPhone SE', price: '$399', image: '/images/iphone-se.png' },
    { name: 'iPhone XR', price: '$599', image: '/images/iphone-xr.png' },
  ]

  return (
    <main className="w-full bg-[#151515] text-white">
      <section className="mx-auto flex h-[300px] max-w-[980px] items-center px-[20px] lg:px-0">
        <div className="grid h-full w-full grid-cols-1 items-center md:grid-cols-2">
          <p className="mx-auto max-w-[410px] text-[17px] leading-[1.35] md:mx-0">
            We refined the details of comfort, creating a new class of in-ear headphones
            with a customizable fit that forms an exceptional seal for Active Noise
            Cancellation. You'll feel your music, not your headphones.
          </p>

          <div className="flex h-[300px] items-center justify-center overflow-hidden">
            <AirPodsImage
              src="/63266c_0ce5a922e1594585a0b924a89074b555_mv2 1.png"
              alt="Black AirPods and charging case"
              className="h-[280px] w-[430px]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto h-[570px] max-w-[980px] px-[20px] lg:px-0">
        <div className="grid h-[330px] grid-cols-1 items-center gap-[30px] md:grid-cols-2">
          <div className="grid h-full grid-cols-1 items-end">
            <div className="flex h-[220px] items-end justify-center">
              <AirPodsImage
                src="/static_comfort__hpa4w2unnt26_large 1 (1).png"
                alt="AirPods charging case"
                className="h-[220px] w-[360px]"
              />
            </div>

            <p className="mx-auto mb-[8px] max-w-[310px] text-[15px] leading-[1.45] md:ml-[70px]">
              Use the force sensor to easily control music and calls, and switch between
              Active Noise Cancellation and Transparency mode.
            </p>
          </div>

          <div className="grid h-full grid-cols-1 items-start">
            <div className="mx-auto flex h-[220px] items-center justify-center">
              <AirPodsImage
                src="/airpods-pro-large2 1.png"
                alt="White AirPod"
                className="h-[220px] w-[320px]"
              />
            </div>

            <p className="mx-auto mt-[4px] max-w-[320px] text-[15px] leading-[1.45] md:mx-0">
              Designed to keep up with you, AirPods Pro are sweat and water resistant, and
              they feature an expanded mesh microphone port that improves call clarity in
              windy situations.
            </p>
          </div>
        </div>

        <div className="mt-[35px] grid grid-cols-1 place-items-center gap-[20px] sm:grid-cols-2 md:grid-cols-4">
          {phones.map((phone) => (
            <PhoneCard key={phone.name} {...phone} />
          ))}
        </div>
      </section>

      <section className="mx-auto flex h-[300px] max-w-[980px] items-center px-[20px] lg:px-0">
        <div className="grid h-full w-full grid-cols-1 items-center md:grid-cols-2">
          <p className="mx-auto max-w-[410px] text-[17px] leading-[1.35] md:mx-0">
            The Wireless Charging Case delivers more than 24 hours of battery life to keep
            you and your AirPods Pro on the go. And it's compatible with Qi-certified
            chargers.
          </p>

          <div className="flex h-[300px] items-center justify-center overflow-hidden">
            <AirPodsImage
              src="/Product.png"
              alt="AirPods wireless charging case"
              className="h-[280px] w-[480px]"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
