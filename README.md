# Inspire You
#### A collection of people and stories to motivate and encourage you on your journey to the best version of yourself!

### Features
For my project I built a website featuring a compliment button, list of inspirational quotes, and a storyboard. The compliment button allows users to receive random words of encouragement. Users can share words of wisdom and impact by entering quotes into the list alongside other inspirational ones. Lastly, the storyboard contains a collection of people and stories to motivate and boost users on their personal development journey.

### Challenges
I encountered issues with my main feature, the story board. I didn’t know how to make it so that the "inspo" (story) cards displayed right when users got to the page. Additionally, I experienced trouble getting new inspo cards to display on the page once they were submitted.

I overcame these challenges by seeking the insight of some other colleagues. Regarding the first issue, it was resolved by creating a function called “getAllInspos” which uses an axios get method to the website’s endpoint (which is the home page), and chains a promise. The promise contains a then method which passes in the callback function “inspoCallback.” The callback function is where the inspo cards I created for the home page are passed in as a parameter and returned in the function.

Regarding the second issue, it was resolved by removing the axios post method from my submit handler. The method was replaced with my “createInspo” function which already contained that method passing in the bodyObj as the parameter.


<img alt='inspo cover image' src=webshot.1.PNG>
