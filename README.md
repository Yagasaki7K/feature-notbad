# Feature Not Bad by Felippe Regazio

Original Project: [https://github.com/felippe-regazio/notbad](https://github.com/felippe-regazio/notbad)

## How to use it in your projects?

First, fork the project.

Then, access `App.tsx` and copy everything inside it - if you just want a personalized page - in the case of Next, you can copy and change the name of the function instead of using App.

The application is already written in Typescript, so it is already adapted and working.

On line 109, `infoButtonAction` is the developer's information if the user clicks on the information button present in the feature.

On line 105, `closeButtonAction` you can change the action when user clicks on X.

On line 133, in the `submit` function, through there you will process the information, whether you call a backend, whether you call a webhook, is up to you.

The `index.css` file has all the project content, it tried to be adapted for Styled Components, but it didn't work, possibly something to do with server-side rendering - I didn't test it in depth.

Therefore, you can use it globally and it will not interfere with other classes already written. As in my case, which I used in another project with styled-components, and declared it globally, it didn't interfere. Pay attention to styling classes through the className and not through the tag in your projects, otherwise, some things may actually be conflicting, check the code to find out what may interfere globally.

If you have any questions, you can look for me on Twitter > @Yagasaki7K and I'll help you.

Feel free to clone this project and give suggestions for improvements through pull requests or use it in your projects.
