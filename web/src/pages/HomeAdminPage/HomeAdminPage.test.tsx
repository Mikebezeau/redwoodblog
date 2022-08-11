import { render } from '@redwoodjs/testing/web'

import HomeAdminPage from './HomeAdminPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HomeAdminPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeAdminPage />)
    }).not.toThrow()
  })
})
