import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import Home from './Home'

test('renders home react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Home />
    </Provider>,
  )

  expect(getByText(/home/i)).toBeInTheDocument()
})
