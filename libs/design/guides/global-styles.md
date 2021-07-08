# Global Styles
We intentionally do not touch base styles of dependent applications. The vast majority of our global style are a recommendation, not a necessity. If it makes sense for you to use our global styles, use them.

## Our Approach
As authors of `@daffodil/design`, we take an approach of "minimal modification". This means that we try as hard as we can to prevent our code from impacting any code in your existing application. When we provide styles, we generally try to limit any stylesheet modifications to our components and our components alone. If you find styles that violate this consideration, [please submit an issue](https://github.com/graycoreio/daffodil/issues/new?assignees=&labels=&template=other.md&title=%5BOTHER%5D).

## What does this mean for library consumers?
"Minimal Modification" can mean various things for library consumers.

First and foremost this can occasionally mean that your styles look different than ours. For example, if we use a certain font, and you would like to use another, then the letter-spacing of your font may cause slight differences in the rendering of a specific component. While we do our best to prevent these kinds of things, we are not omniscient, and we ask that [an issue be filed clearly describing what needs to be changed](https://github.com/graycoreio/daffodil/issues/new?assignees=lderrickable&labels=bug&template=bug_report.md&title=%5BBUG%5D).

This also means that "My First Component" tutorials are slightly more complicated for beginners because they will have to configure more than a novice would expect. We have considered this cost very closely and have attempted to find a happy medium between "unconfigurable" and "overly complicated". If there are confusing aspects that deserve further attention or discussion, [please submit a documentation request](https://github.com/graycoreio/daffodil/issues/new?assignees=xelaint&labels=docs&template=documentation.md&title=%5BDOCS%5D).

