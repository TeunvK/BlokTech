# ![Logo](https://github.com/TeunvK/BlokTech/blob/main/assets/logo.png)

This repository is for a matching App made for BlokTech 21-22.
  
NextEp is a matching app that matches people that watch the same tv shows. This way you can connect with others and watch your favorite shows together. As of now I have only worked out the searching adding of tv shows to the users database and the random matching with different users.

## Using the application  
You can click on the deployment link in the about of my repo or via [here](fathomless-sea-67411.herokuapp.com/).  
Alternatively you can clone the repo yourself en run the server locally on your computer, see down below on how to install.  
Since I haven't worked on the registration / loggin in at all, you can log in with some of the following users for now,
Just copy and paste their name:
- Hans
- Senna
- Gertrude
- Jerry
- Petra


## installation

Clone the repo

> git clone <https://github.com/TeunvK/BlokTech.git>  
> cd BlokTech

Install the dependencies with:

> npm install  

Run the server with:

> npm run dev  

And go to: [localhost:3000](localhost:3000)

## Adding tv-shows
  If you log in you'll see something like this screen:

  # IMG
  if you click on add your favorite shows to your list, you find yourself on this page
# IMG
here you can add one of the most popular tv shows (according to the API I used) or search for a show yourself.
After you've added 1 or multiple shows, click on "add shows" and the shows will get added to your list and will be displayed on your profile page.

## Matching with other users
Clicking on "Match" will send you to the match page. Here you will get matched with a random user from the database (which aren't that many). You can then like or dislike the user you got matched with, if you click on dislike you will get matched with a new user. If you press like you get sent back to your home page, with the user added to your list of matches.

## Unmatching with users
On the home page you can view the users you've matched with, and you can also unmatch with them by pressing the little red X in the top right of the user. It will prompt a popup that asks if you really want to unmatch. If you click delete, the user will get removed from your matches.