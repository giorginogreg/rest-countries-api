# Frontend Mentor challenge - REST Countries API with color theme switcher

![Design preview for the REST Countries API with color theme switcher coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋 - The challenge

The challenge is to integrate the [REST Countries API](https://restcountries.com) to pull country data and display it like in the designs.

# Project structure
This project was built thanks to Angular v19. It is made of two principal pages, a main page (Home) and the detail page.  
It contains also a switch for enabling the dark mode or the light one.  
In the project it has been integrated font awesome as icon system

Users are able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

## Original requests

Your task is to build out the project to the designs inside the `/design` folder. 

In this challenge, you will find mobile and desktop designs in light and dark mode color schemes for both pages.

The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`. 

There are no assets for this challenge, as the country flags will be pulled from the [REST Countries API](https://restcountries.com) and you can use an icon font library for the icons.

There is also a [style-guide.md](style-guide.md) file containing the information you'll need, such as color palette and fonts.

## Approach followed for building the project

1. **Initialization step** - The project was created starting from the design assets provided by the [FrontendMentor website](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).   
At first I've created a brand new angular project, then I put up some tools like Husky so that my commit style was uniformed, and then I've installed also some packages  in a way that i could generate a changelog to keep track of my changes and to create a resume on the project.
3. **Designing step** - Then, I looked through the designs made to start planning out how I could tackle the project. Before adding any styles, i structured the content with HTML. Writing HTML first helped me to focus my attention on creating well-structured content. Then I wrote out the base styles for the project, including general content styles, such as `font-family` and `font-size`.
4. **Realization step** - Once the design of the project was clear, I started to write down the structure of the app, thanks to the Angular Router Module, writing HTML, CSS (via SASS), Typescript. 

## Submitting your solution

Submit your solution on the platform for the rest of the community to see. Follow our ["Complete guide to submitting solutions"](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) for tips on how to do this.

Remember, if you're looking for feedback on your solution, be sure to ask questions when submitting it. The more specific and detailed you are with your questions, the higher the chance you'll get valuable feedback from the community.

## Sharing your solution

There are multiple places you can share your solution:

1. Share your solution page in the **#finished-projects** channel of the [community](https://www.frontendmentor.io/community). 
2. Tweet [@frontendmentor](https://twitter.com/frontendmentor) and mention **@frontendmentor**, including the repo and live URLs in the tweet. We'd love to take a look at what you've built and help share it around.
3. Share your solution on other social channels like LinkedIn.
4. Blog about your experience building your project. Writing about your workflow, technical choices, and talking through your code is a brilliant way to reinforce what you've learned. Great platforms to write on are [dev.to](https://dev.to/), [Hashnode](https://hashnode.com/), and [CodeNewbie](https://community.codenewbie.org/).

We provide templates to help you share your solution once you've submitted it on the platform. Please do edit them and include specific questions when you're looking for feedback. 

The more specific you are with your questions the more likely it is that another member of the community will give you feedback.
