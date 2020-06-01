import React from "react";
import { graphql } from "gatsby";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Link from "../components/link";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SideBar from "../components/sideBar";

const useStyles = makeStyles(theme => ({
  articlesWrapper: {
    [theme.breakpoints.up("md")]: {
      paddingRight: theme.spacing(4),
    },
  },
  siteSideBar: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
    },
  },
}));

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const classes = useStyles();

  return (
    <Layout>
      <SEO title="All posts" />
      <Grid container>
        <Grid container item xs={12} md={9} className={classes.articlesWrapper}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <article key={node.fields.slug}>
                <header>
                  {/* <h3
                  style={{
                    marginBottom: 20,
                  }}
                > */}
                  <Link
                    style={{ boxShadow: `none` }}
                    to={node.fields.slug}
                    variant="h4"
                    display="block"
                  >
                    {title}
                  </Link>
                  {/* </h3> */}
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <Typography
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </article>
            );
          })}
          {/* {[...new Array(12)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join("\n")} */}
        </Grid>
        <Grid item container xs={12} md={3} className={classes.siteSideBar}>
          <SideBar />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
