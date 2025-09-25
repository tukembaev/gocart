import { createSlice } from '@reduxjs/toolkit'
import { productDummyData } from '@/assets/assets'

const productSlice = createSlice({
    name: 'product',
    initialState: {
        list: productDummyData,
          selectedCategories: [],
    },
    reducers: {
        setProduct: (state, action) => {
            state.list = action.payload
        },
        clearProduct: (state) => {
            state.list = []
        },
        setCategory: (state, action) => {
          if (state.selectedCategories?.includes(action.payload)) {
        state.selectedCategories = state.selectedCategories.filter(
          (category) => category !== action.payload
        );
      } else {
        state.selectedCategories.push(action.payload);
      }
        },
        clearCategory: (state) => {
         state.selectedCategory = null;
    },
        
    }
})

export const { setProduct, clearProduct,setCategory,clearCategory } = productSlice.actions

export default productSlice.reducer