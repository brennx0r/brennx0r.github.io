---
title: Updating website; Woes Insue!
date: "2018-12-03"
---

After not updating my site for a couple of months, I was looking to update with a new blog post. As it turns out, I had forgotten the setup/layout for the Gatsby starter I was using, so updating it was very difficult. I ended up scrapping the whole thing for another starter template which is much simpler, easier to read and extend.

Other woes I ran into had to deal with the npm module `gh-pages`, caching and deployment. In trying to deploy to repo `brennx0r.github.io`, master branch - I kept getting this error:

> bash
> fatal: A branch named 'master' already exists.
> 
> npm ERR! code ELIFECYCLE
> npm ERR! errno 1
> npm ERR! gatsby-starter-blog@1.0.0 deploy: `gatsby build && gh-pages -d public -b > master -r git@github.com:brennx0r/brennx0r.github.io.git`
> npm ERR! Exit status 1
> npm ERR! 

After scouring a number of sites (and frustratingly getting the 'answer' of referring back to the Gatsby reference material which does not explain how to fix the problem), I was finally able to see some documentation via the `gh-pages` readme about a potential solution which ended up resolving it for me:  Clearing the cache for `gh-pages` via `node_modules/gh-pages/.cache`.  

Passing along this information to folks who may also be looking for a fix. 💜 ✨

![alt text](https://imgs.xkcd.com/comics/wisdom_of_the_ancients.png "Wisdom of the Ancients")
