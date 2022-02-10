import { Layout } from "./src/components"
import React from "react"
import "./src/styles/global.css"

export const wrapRootElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
