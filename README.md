# My Portfolio Site

This project is a [React](https://reactjs.org/) application, and is my portfolio website.

You can find the live site [here](https://ariahallow.dev)

## Purpose

Hello, welcome to my website! This site is a showcase of a few of the things that I do for work. The menu details a few different pages to look over.

- The Skills page details the software and development tools that I use the most often, and while it's not a comprehensive list of every tool that I've used in my life, they are the spread of them that I feel confident in.
- In Projects you'll find an array of published applications and other projects that I've been proud to work on.
- Resume is a dynamic page that automatically pulls data from Skills and Projects components to stay up-to-date. It also provides a PDF download option.
- And Contact Me has a few ways to reach out/find me online!

### LinkedIn

If you didn't find this via my linkedIn you can visit it at [this location](https://www.linkedin.com/in/zakariah-om/)

### Github

My github is linked [here](https://github.com/becomingaria)

## Special Features

### Dynamic Resume

The Resume component automatically imports and displays data from other components:

- Contact information is pulled from the Contact component
- Skills are imported from the Skills component
- Projects are imported from the Projects component

This ensures that whenever I update my portfolio content, the resume stays current without manual updates. For more details on how this works, see the [documentation](./src/docs/DynamicResume.md).
