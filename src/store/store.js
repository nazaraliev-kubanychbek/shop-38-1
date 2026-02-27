import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import axios from 'axios';

export const useCategoryStore = create(devtools(
    immer(
        set => {
            return {

                categories: [],
                getCategories: () =>{
                    axios('https://fakestoreapi.com/products/categories')
                    .then(({data}) =>{
                        set(state =>{
                            state.categories = data
                        })
                    })
                },

            }
        }
    )
));