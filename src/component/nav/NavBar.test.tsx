import { render, screen } from '@testing-library/react'
import { describe } from 'vitest'
import NavBar from './NavBar'
import { BrowserRouter } from 'react-router-dom'


describe("",()=>{
    it("",()=>{
        render( <BrowserRouter>
            <NavBar />
          </BrowserRouter>)
          const paragraph = screen.getByText(/flight/i)
       expect(paragraph).toBeInTheDocument()
       expect (paragraph).toHaveTextContent(/flight/i)
    })
})