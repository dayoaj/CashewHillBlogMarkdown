import React from "react";
import { graphql } from "gatsby";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Link from "../components/link";
import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SideBar from "../components/sideBar";

const useStyles = makeStyles(theme => ({
  siteSideBar: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
    },
  },
}));

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
  const classes = useStyles();

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Grid container>
        <article>
          <Grid container item>
            <header>
              <h1
                style={{
                  marginTop: 10,
                  marginBottom: 0,
                }}
              >
                {post.frontmatter.title}
              </h1>
              <p
                style={{
                  display: `block`,
                  marginBottom: 10,
                }}
              >
                {post.frontmatter.date}
              </p>
            </header>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={12} md={9} className={classes.articlesWrapper}>
              <section dangerouslySetInnerHTML={{ __html: post.html }} />
              <hr
                style={{
                  marginBottom: 10,
                }}
              />
              <footer>
                <Bio />

                <nav>
                  <ul
                    style={{
                      display: `flex`,
                      flexWrap: `wrap`,
                      justifyContent: `space-between`,
                      listStyle: `none`,
                      padding: 0,
                    }}
                  >
                    <li>
                      {previous && (
                        <Link to={previous.fields.slug} rel="prev">
                          ← {previous.frontmatter.title}
                        </Link>
                      )}
                    </li>
                    <li>
                      {next && (
                        <Link to={next.fields.slug} rel="next">
                          {next.frontmatter.title} →
                        </Link>
                      )}
                    </li>
                  </ul>
                </nav>
              </footer>
            </Grid>

            <Grid item container xs={12} md={3} className={classes.siteSideBar}>
              <SideBar />
            </Grid>
          </Grid>
        </article>
      </Grid>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
