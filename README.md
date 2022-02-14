# RubyFlix

RubyFlix is a proof of concept application for finding movies, adding movies to a watchlist and reviewing them.

RubyFlix is the final project for phase 3 of <a href="https://flatironschool.com/courses/coding-bootcamp/">Flatiron School's Software Engineering</a> bootcamp. This is the frontend repo for the project, built with React.js with custom CSS and styled components using the<a href="https://mui.com/">MUI library</a>. The <a href="https://github.com/michael-neis/rubyflix-backend">backend</a> is in a seperate repo, built with Ruby.

## Launch

To run RubyFlix locally, clone down both this repo and the <a href="https://github.com/michael-neis/rubyflix-backend">backend repo</a>.

Then, navigate into the backend directory and run `rake db:migrate` to set up the database associations and `bundle install` to install all of the gems in the gemfile. Because RubyFlix is a proof of concept project, all of the data is hand crafted in the `seeds.rb` file. Run `rake db:seed` to fill the database with that seed data. Finally, run `bundle exec rake server` in the command line to launch the server for the frontend to make fetches to.

Now that the backend is set up, navigate into the frontend directory and run `npm install`. With the backennd server running, run `npm start` from within the frontend directory to launch the application in the browser.

## Walkthrough

This app only includes one "user", with some seed data already filling out reviews and watchlist items. This also means that the notifications bar and "suggested to me" tab are both empty.

Clicking on the title of the movie card at any point in this application will direct you to the details of that movie, where you can add and edit reveiws as well as add or remove them from the watchlist.

The first tab is the "search" tab. In this tab, the user can sort through movies by genre or search directly by title. 

In the "watchlist" tab, the user can view what movies they have added to their watchlist, as well as remove them.

In the "reviews" tab, the user cas view the movies they have reviewed, with their rating being shown in the number of stars.

The "find something new" tab implements a custom algorithm that will find a movie suggestion based on the user's current highest rated movies. The algorithm, being handeled on the backend, will not suggest movies that the user has already reviewed, ensuring the suggestion is in fact something new. Clicking the "find me a new movie" button repeatedly will continue to suggest a new movie on every click. Note, because I seeded the data myself, there is a very limited list of movies, so the suggestions may repeat themselves frequently. 

<img width="1792" alt="DRNK screenshot" src="https://user-images.githubusercontent.com/90716315/153480144-ee581382-8bf5-4b4c-8f4b-86fcd1305592.png">

## Created By

#### Mike Neis
- GitHub: https://github.com/michael-neis
- LinkedIn: https://www.linkedin.com/in/michael-neis
- Email: michael.neis12@gmail.com
