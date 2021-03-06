/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 
 import Header from "./header"
 import "./layout.css"
 import "./font.css"
 import Sidebar from "./sidebar"
 import Link from "./link"
 import Footer from "./footer"
 
 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)
 
   return (
     <div className="layout">
       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
       <Sidebar
         link1={
           <Link
             state="active"
             linkstate="active-link"
             icon="key"
             linkname="Log In"
             link="/"
           />
         }
         link2={
           <Link
             state=""
             linkstate=""
             icon=""
             linkname="Activate Account"
             link="404"
           />
         }
       />
       <main>{children}</main>
       <Footer />
     </div>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 