import React from 'react';
import Title from '../home/Title';
import movieApp from '../../assets/images/movie-app.jpg';
import todo from '../../assets/images/math.jpg';
import budget from '../../assets/images/budget.jpg';
import covid19 from '../../assets/images/covid19.jpg';
import rubyResorts from '../../assets/images/rubyresorts.jpg';
import ProjectsCard from './ProjectsCard';
import leaderboard from '../../assets/images/leaderboard.jpg';

const Projects = () => (
  <section
    id="projects"
    className="w-full py-20 border-b-[1px] border-b-black"
  >
    <div className="flex  items-center text-center">
      <Title
        title="My Projects"
        des="My Projects"
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-6 ">
      <ProjectsCard
        title="Movie app"
        des=" This is a movie app where you can watch all the latest movies and tv shows."
        src={movieApp}
        gitLink="https://github.com/gsmalik030/movie-app"
        link="https://movie-app-v3rg.onrender.com/"
      />
      <ProjectsCard
        title="My Budget App"
        des="This is an app where you can keep record of your monthly spending and create your budget."
        src={budget}
        gitLink="https://github.com/gsmalik030/my-budget-app"
        link="https://my-budget-app-nhy1.onrender.com/"
      />
      <ProjectsCard
        title="Covid 19 worldometer"
        des=" Covid-19 Worldometer is a mobile web application which provide the covid-19 statistics in the world."
        src={covid19}
        gitLink="https://github.com/gsmalik030/covid19-worldometer"
        link="https://covid19-worldometer.onrender.com/"
      />
      <ProjectsCard
        title="Ruby Resorts"
        des="Ruby resorts is a hotel reservation website built with react and ruby on the rails."
        src={rubyResorts}
        gitLink="https://github.com/anthonymr/ruby-resorts-frontend"
        link="https://ruby-resorts-front-end.onrender.com/"
      />
      <ProjectsCard
        title="Leader Board"
        des=" Leaderboard is a web app to keep record of the score for different players for any game."
        src={leaderboard}
        gitLink="https://github.com/gsmalik030/leaderboard"
        link="https://leaderboard-7ozi.onrender.com/"
      />
      <ProjectsCard
        title="Math Magicians"
        des="Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to Make simple calculations."
        src={todo}
        gitLink="https://github.com/gsmalik030/Math-Magicians"
        link="https://math-magicians-ohr8.onrender.com"
      />
    </div>
  </section>
);

export default Projects;
