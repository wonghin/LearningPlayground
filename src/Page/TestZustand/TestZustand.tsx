import { Box, Button } from '@mui/material'
import React from 'react'
import create from 'zustand'
import { useBookStore } from '../../hook/useBookStore'
import shallow from 'zustand/shallow'


export const TestZustandPage = () => {
    // const amount = useBookStore(state => state.amount)
    // const title = useBookStore(state => state.title)
    // const amount = useBookStore(state => state.amount)
    // const updateAmount = useBookStore(state => state.updateAmount)
    // const decreaseAmount = useBookStore(state => state.decreaseAmount)

    const { amount, updateAmount, decreaseAmount } = useBookStore((state) => (
        { amount: state.amount, updateAmount: state.updateAmount, decreaseAmount: state.decreaseAmount }
    ))

    return (
        <Box sx={{ color: 'white' }}>
            <div>
                <h1> Books: {amount} </h1>

                <Button variant='outlined'
                    onClick={() => updateAmount(10)}
                > Update Amount </Button>

                <Button variant='outlined'
                    onClick={() => decreaseAmount(10)}
                >Decrease Amount</Button>

            </div>

        </Box>
    )
}
