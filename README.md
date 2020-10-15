<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsy Portfolio
</h1>

## Key Takeaways
This project is built with Gatsby along with styled-components, framer-motion, and strapi. It does not use any scss and relies on Gatsby's GlobalStyles for global styling, styled-components for component specific styling that will usually reside in the same directory as the component itself. Lastly, framer is utilized in unison with styled-components for anything that demands animation.

### 10/14
Discovered that framer motion does not play well with Gatsby links and styled-components out of the box. However, there is a work around by importing gatsby links with the 'as' command:

```js
import { Link as GatsbyLink } from 'gatsby';
```

Then, you want to declare your styled-components like so:
```js
export const MyLink = styled(motion.custom(GatsbyLink))`
  //styles
`
```

Not the best, but it works.