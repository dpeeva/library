import React from "react"
import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import { App } from "./App"

test("renders App container", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  expect(screen.getByTestId("library-app")).not.toBeNull()
  expect(screen.getByTestId("library-app-header")).not.toBeNull()
  expect(screen.getByTestId("library-app-routes")).not.toBeNull()
})
