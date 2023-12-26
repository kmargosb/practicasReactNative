import React from 'react'
import './CreditCard.css';

export function CreditCard() {
  const array = [
    {
      type: "https://c0.klipartz.com/pngpicture/371/4/gratis-png-visa-tarjeta-de-debito-tarjeta-de-credito-logo-mastercard-visa.png",
      number: "1234 5678 9876 5432",
      expirationMonth: 10,
      expirationYear: 25,
      bank: "Banesco",
      owner: "Nelson Camargo",
      cssClass: "banesco",
      bgColor: "#4DA799",
      txColor: "white"
    },
    {
      type: "https://e7.pngegg.com/pngimages/910/492/png-clipart-mastercard-logo-credit-card-visa-brand-mastercard-text-label.png",
      number: "1234 5678 9876 5432",
      expirationMonth: 10,
      expirationYear: 25,
      bank: "ING",
      owner: "Pepito Perez",
      cssClass: "white",
      bgColor: "#EEEEEE",
      txColor: "black"
    },
    {
      type: "https://c0.klipartz.com/pngpicture/371/4/gratis-png-visa-tarjeta-de-debito-tarjeta-de-credito-logo-mastercard-visa.png",
      number: "1234 5678 9876 5432",
      expirationMonth: 10,
      expirationYear: 25,
      bank: "Santander",
      owner: "Jhon Smith",
      cssClass: "yellow",
      bgColor: "#D8BB65",
      txColor: "white"
    }
  ]

  return (
    <div className="flex justify-between items-center h-screen px-28 gap-10">
      {array.map((card, i) => {
        return (
          <div key={i} className={`p-20 gap-2 h-44 shadow-xl ${card.cssClass} bg-[${card.bgColor}] text-[${card.txColor}]`}>
            <div className='flex justify-end'>
              <img className='w-12' src={card.type} alt='card'></img>
            </div>
            <p className='text-2xl tracking-widest font-bold'>{card.number}</p>
            <div className='flex gap-4 text-xl'>
              <div>
                <p>Expires {card.expirationMonth}/{card.expirationYear}</p>
              </div>
              <div>
                {card.bank}
              </div>
            </div>
            <h3 className='flex justify-start text-xl'>{card.owner}</h3>
          </div>
        )
      })}
    </div>
  )
}
