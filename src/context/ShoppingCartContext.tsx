import { createContext, ReactNode, useContext, useState  } from "react"
import { ShoppingCart } from "../components/ShoppingCart"
import { useLocalStorage } from "../hooks/useLocalStorage"


type ShoppingCartProviderProps = {
    children : ReactNode
}

type CartItem = {
    title: string
    quantity: number
  }

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity : ( tittle : string) => string
    increaseCartQuantity : ( tittle : string) => void
    decreaseCartQuantity : ( tittle : string) => void
    removeFromCart : ( tittle : string) => void
    cartQuantity: number
    cartItems: CartItem[]

}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  )

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )
        
        const openCart = () => setIsOpen(true)
        const closeCart = () => setIsOpen(false)
        function getItemQuantity ( title : string){
            return cartItems.find( item => item.title === title)?.quantity || 0
        }

        function increaseCartQuantity(title: number) {
          setCartItems(currItems => {
            if (currItems.find(item => item.title === title) == null) {
              return [...currItems, { title, quantity: 1 }]
            } else {
              return currItems.map(item => {
                if (item.title === title) {
                  return { ...item, quantity: item.quantity + 1 }
                } else {
                  return item
                }
              })
            }
          })
        }
        function decreaseCartQuantity(title: number) {
          setCartItems(currItems => {
            if (currItems.find(item => item.title === title)?.quantity === 1) {
              return currItems.filter(item => item.title !== title)
            } else {
              return currItems.map(item => {
                if (item.title === title) {
                  return { ...item, quantity: item.quantity - 1 }
                } else {
                  return item
                }
              })
            }
          })
        }
        function removeFromCart(title: number) {
          setCartItems(currItems => {
            return currItems.filter(item => item.title !== title)
          })
        }
      
        return (
          <ShoppingCartContext.Provider
            value={{
              getItemQuantity,
              increaseCartQuantity,
              decreaseCartQuantity,
              removeFromCart,
              openCart,
              closeCart,
              cartItems,
              cartQuantity,
            }}
          >
            {children}
            <ShoppingCart isOpen={isOpen} />
          </ShoppingCartContext.Provider>
        )
      }