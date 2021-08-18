import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "./header"
import Footer from "./footer"
import PropTypes from "prop-types"
import "./layout.scss"

import { useStaticQuery, graphql } from "gatsby"

const duration = 0.5

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allPrismicNavigation {
        edges {
          node {
            data {
              navigation_links {
                pages {
                  uid
                }
              }
              body {
                ... on PrismicNavigationBodyCategoryDropDown {
                  slice_label
                  primary {
                    parent_link {
                      uid
                    }
                    category_title
                  }
                  items {
                    link_to_page {
                      uid
                      document {
                        ... on PrismicPage {
                          data {
                            title_of_page {
                              text
                            }
                          }
                        }
                        ... on PrismicProjectCategory {
                          data {
                            title_of_page {
                              text
                            }
                          }
                        }
                      }
                    }
                  }
                }
                ... on PrismicNavigationBodyLink {
                  slice_label
                  primary {
                    link_to_page {
                      uid
                    }
                  }
                }
              }
            }
          }
        }
      }

      allFile(filter: { relativeDirectory: { eq: "flags" } }) {
        edges {
          node {
            relativeDirectory
            name
            childImageSharp {
              fluid(maxHeight: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Header
        navigationLinks={
          data.allPrismicNavigation.edges[0].node.data.navigation_links
        }
        navLinks={data.allPrismicNavigation.edges[0].node.data}
        imageAssets={data.allFile}
        siteTitle={data.site.siteMetadata.title}
      />

      <main className="main-blur">
        <AnimatePresence>
          <motion.main
            key={location && location.pathname}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </main>
      <Footer
        data={data.allPrismicNavigation.edges[0].node.data.navigation_links}
      />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
