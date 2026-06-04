---
title: Colophon - Kisei's personal space
---
## Foreword

I designed and built this site myself. Everything about this site is open source and published on my [Gitlab](https://gitlab.com/DoctorKisei/tuanson-portfolio) if you'd like to poke (or fork) around. Building my own portfolio which later evolved into something more personal, for me quite frankly is a little bit overkill. But I had and still having a lot of fun building and tinkering it. 

## Technologies

This site is built by using [Hugo](https://gohugo.io/) - it's a static site builder designed with heavy text content websites in mind. It does lots of useful things for me like partials which acting like consistent components throughout my site, image optimization through Hugo pipeline. 

I use plain <abbr title="Hypertext Markup Language">HTML</abbr>, <abbr title='Cascading Style Sheet'>CSS</abbr> and some JavaScript to build and design the interface. All of my project content, page content are written in normal Markdown. 

## Development

The HTML of this site is [structurally semantic](https://developer.mozilla.org/en-US/curriculum/core/semantic-html/). This is mandatory for <strong>accessibility</strong>. This also means I can maintain my site better and troubleshoot easier. A win-win.

I use [progressive enhancement](https://www.gov.uk/service-manual/technology/using-progressive-enhancement) method which means I will always design my site with HTML first, and CSS second, and only with added functionality coming from JS. This means my site uses very little JS as possible to provide an "unified" experience for as many visitor as possible.

## Hosting

For hosting this page, I use [GitLab Pages](https://docs.gitlab.com/user/project/pages/), which provides me automatic deployment from my Gitlab repo, automatic HTTPS.

For managing domain, I use [Porkbun](https://porkbun.com/), which is miles better than GoDaddy or my local domain provider. 

## Design

### Layout

This site is optimized for as many kinds of screens as possible. This philosophy coming from [Be the browser’s mentor, not its micromanager](https://buildexcellentwebsit.es/). In CSS, I created many composable layouts or also known as "algorithmic layout" from [Every Layout](https://every-layout.dev/). Because of that, my site is very flexible, the layout is consistent and I worry less about using arbitrary media screen breakpoints.

### Typography

I am always fond of those geometric, round font. They look easier to read and you can differentiate between characters in a word when you reading them on screen (or in print form).

For body text, I used [Work Sans](https://weiweihuanghuang.github.io/Work-Sans/), a free sans-serif font. I liked Open Sans because it is very readable at both large and small font size, you can clearly see some characters that are often being misinterpreted like B and 8, 0 and O or l and I. Work Sans also support many symbols too.

For font used in headings and logo, I used [Redaction](https://www.redaction.us/), which is also a free serif font. I like this font a lot, since it has some quirks: its font variants with number like 10, 30, 50 and 70; similar to how the font getting "redacted" by being more and more "pixelated". 

## Accessibility

Accessibility is and has always been my core philosophy behind of my design. I welcome accessibility as my main <strong>constraints</strong> to express my design and also to challenge my creativity.

For theme, there are two color modes are available for personal preference: light and dark. 

For color palette, I used [Rose Pine](https://rosepinetheme.com/) theme, with my own twists and modifications for colors to be at least meet WCAG 2 4.5 colour contrast criteria.

For animations, I've added simple <strong>animations</strong> and <strong>page transitions</strong> with the goal of enhancing interactions. I also accommodate <strong>reduced motion preferences</strong> for who having motor sickness or have issues with tracking things that have movement. Back then, I used [Swup](https://swup.js.org/) as page transition library with [GSAP](https://gsap.com/) as animation but due to accessibility issue I decided to retire them altogether.

The javascript features of this site as enhancements only. They do not inhibit access or functionality. I also manually test <strong>keyboard-only navigation</strong> (yes I tested it by pressing <kbd>Tab</kbd> constantly). 

Unfortunately, I can't know for sure how I can test screen readers to know what issues my site will create for them. If you can help me with this, please <a>contact me</a>.
## Inspiration

Like many other web designers or web developers (you can call them the wizards of the web), I've <em>borrowed</em> many ideas from external sources.

[Jarema's colophon](https://jarema.me/colophon/) inspired me to write my own colophon page. Their site looks so clean and slick, you will want to check them around.

Thank you to [Vale](https://vale.rocks/portfolio/88x31-buttons-badges) and their fantastic web badges. Their web badges are like those hidden gems that once you just see them, they will invite you over and over to inspect their beauty one more time.

Thank you to [Mark Wyner's colophon](https://markwyner.com/colophon/) page to inspire me how to structure my colophon writing content. Big fonts so anyone can read, subtle animations that not obscuring your content and elevate the thoughtfulness of the site, what's not to like?

## A few notes

You can treat this page as my living document that will be constantly improved, revised and be structured all over again. 

This page was last updated at **<time datetime="2026-05-25T23:50:00+07:00">May 25, 2026 at 23:50 GMT+7</time>**.