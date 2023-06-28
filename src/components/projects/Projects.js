import React from 'react'
import Title from '../home/Title'
import movieApp from "../../assets/images/movie-app.jpg";
import todo from "../../assets/images/todo.jpg";
import disney from "../../assets/images/disney.jpg"
import covid19 from "../../assets/images/covid19.jpg"
import rubyResorts from "../../assets/images/rubyresorts.jpg"
import ProjectsCard from './ProjectsCard';
import leaderboard from "../../assets/images/leaderboard.jpg"

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
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
          title="Disney plush clone"
          des=" This app is a clone of Disney plus website. I created this app using react and redux"
          src={disney}
          gitLink="https://github.com/gsmalik030/disney-with-react"
          link= "https://disneyplus-with-react.onrender.com/"
        />
        <ProjectsCard
          title="Covid 19 worldometer"
          des=" Covid-19 Worldometer is a mobile web application which provide the covid-19 statistics in the world."
          src={covid19}
          gitLink="https://github.com/gsmalik030/covid19-worldometer"
          link= "https://covid19-worldometer.onrender.com/"
        />
        <ProjectsCard
          title="Ruby Resorts"
          des="Ruby resorts is a hotel reservation website built with react and ruby on the rails"
          src={rubyResorts}
          gitLink="https://github.com/anthonymr/ruby-resorts-frontend"
          link="https://ruby-resorts-front-end.onrender.com/"
        />
        <ProjectsCard
          title="Leader Board"
          des=" Leaderboard is a web app tp keep record of the score for differen players for any game."
          src={leaderboard}
          gitLink="https://github.com/gsmalik030/leaderboard"
          link="https://leaderboard-7ozi.onrender.com/"
        />
        <ProjectsCard
          title="Todo app"
          des=" This is an app to keep record of your daily tasks. In this you can add tasks and mark them completed and delete them if you want."
          src={todo}
          gitLink="https://github.com/gsmalik030/todo-list-project"
          link="https://gsmalik030.github.io/todo-list-project/dist/index.html"
        />
      </div>
    </section>
  );
}

export default Projects