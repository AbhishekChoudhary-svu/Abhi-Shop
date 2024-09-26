import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductById } from '../store/productSlice'
import { addToCart } from '../store/cartSlice'

export default function ProductDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { currentProduct, status, error } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchProductById(id))
  }, [id, dispatch])

  const handleAddToCart = () => {
    dispatch(addToCart(currentProduct))
  }

  if (status === 'loading') {
    return <div className="text-center py-12">Loading...</div>
  }

  if (status === 'failed') {
    return <div className="text-center py-12 text-red-500">{error}</div>
  }

  if (!currentProduct) {
    return <div className="text-center py-12">Product not found</div>
  }

  return (
    <div className="py-12 flow-root  bg-gradient-to-r from-indigo-100 to-purple-100">
      <div className="max-w-5xl float-left  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <img src={currentProduct.images} alt={currentProduct.title} className="mix-blend-multiply rounded-lg shadow-md mb-4 w-full h-64 object-cover md:h-auto" />
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{currentProduct.title}</h2>
            <p className="text-gray-600 text-sm mb-4 capitalize">{currentProduct.category.name}</p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700">Price:</span>
                <span className="text-gray-600">${currentProduct.price.toFixed(2)}</span>
              </div>
              <div>
                <span className="font-bold text-gray-700">Availability:</span>
                <span className="text-gray-600">In Stock</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 text-xl">Description:</span>
              <p className="text-gray-600 font-medium text-md mt-2">{currentProduct.description}</p>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-gradient-to-l from-blue-400 to bg-purple-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}