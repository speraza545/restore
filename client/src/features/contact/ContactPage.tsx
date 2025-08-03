import { decrement, increment } from "./CounterReducer"
import { Button, ButtonGroup, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../app/store/store";

export default function ContactPage() {
  const {data} = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch();

  return (
    <>
      <Typography variant='h2'>
        Contact Page
      </Typography>
      <Typography variant='body1'>
        the data is: {data}
      </Typography>
      <ButtonGroup>
        <Button onClick={() => dispatch(decrement(1))} color='error'>decrement</Button>
        <Button onClick={() => dispatch(increment(1))} color='secondary'>increment</Button>
        <Button onClick={() => dispatch(increment(5))} color='primary'>increment by 5</Button>
      </ButtonGroup>
    </>
  )
}