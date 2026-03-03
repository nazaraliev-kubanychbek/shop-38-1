import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import axios from 'axios';

export const useCategoryStore = create(devtools(
    immer(
        set => {
            return {

                categories: [],
                getCategories: () => {
                    axios('https://fakestoreapi.com/products/categories')
                        .then(({ data }) => {
                            set(state => {
                                state.categories = data
                            })
                        })
                },

            }
        }
    )
));


export const useCartStore = create(
    persist(
        devtools(
            immer(
                set => {
                    return {
                        products: [],
                        addCart: (product) => {
                            set(state => {
                                const idx = state.products.findIndex(item => item.id === product.id);
                                if (idx > -1) {
                                    state.products[idx].count++;
                                } else {
                                    state.products = [{
                                        ...product,
                                        count: 1
                                    }, ...state.products]
                                }
                            })
                        },
                        decrementCart: (product) => {
                            set(state =>{
                                const idx = state.products.findIndex(item => item.id === product.id);
                                if(state.products[idx].count > 1) state.products[idx].count--;
                            })
                        },
                        deleteCart: (product) =>{
                            set(state =>{
                                state.products = state.products.filter(item =>{
                                    return item.id !== product.id
                                })
                            })
                        },
                         
                    }
                }
            )
        ),
        {
            name: 'shop-cart'
        }
    )
);