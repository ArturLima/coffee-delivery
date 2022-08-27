import { createContext, ReactNode, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { items } from '../services/data'

interface CartProviderProps {
  children: ReactNode
}

interface Product {
  product: {
    id: number
    url: string
    amount: number
    price: string
    title: string
  }
}

interface CartContextData {
  cart: Product[]
  addProduct: (productId: number, amount: number) => Promise<void>
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>(() => {
    const result = localStorage.getItem('coffeeDelivery@Cart')

    return result === null ? [] : JSON.parse(result)
  })

  const addProduct = async (productId: number, amount: number) => {
    const { id, url, price, title } = items.find(
      (item) => item.id === productId,
    )!

    const CoffeeAlreadyExists = cart.find((coffee) => coffee.product.id === id)

    if (!CoffeeAlreadyExists) {
      const newItem: Product = {
        product: {
          id,
          url,
          amount,
          price,
          title,
        },
      }
      const newCart = [...cart, newItem]

      setCart(newCart)

      localStorage.setItem('coffeeDelivery@Cart', JSON.stringify(newCart))

      toast.success('Item adicionado com sucesso', {
        icon: '👍 ',
        style: { backgroundColor: '#07bc0c', color: 'white' },
      })
    } else {
      const newCart = cart.filter(({ product }) => product.id !== productId)

      const newCoffee = CoffeeAlreadyExists
      newCoffee.product.amount = amount

      const newUpdateCart = [...newCart, newCoffee]

      localStorage.removeItem('coffeeDelivery@Cart')

      localStorage.setItem('coffeeDelivery@Cart', JSON.stringify(newUpdateCart))

      setCart(newUpdateCart)

      toast.info('Item atualizado com sucesso', {
        icon: '👍 ',
        style: { backgroundColor: '#1E90FF', color: 'white' },
      })
    }
  }

  return (
    <CartContext.Provider value={{ cart, addProduct }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext)

  return context
}
