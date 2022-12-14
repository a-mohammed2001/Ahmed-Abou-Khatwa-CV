import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/portfolio/portfolio.module.scss';

export default function Portfolio() {
  const  projects_list = [
    {
      name: "Qari BookStore",
      img: '/images/Qari Bookstore.png',
      demo_link:"https://qari-bookstore.vercel.app/",
      github_link:"https://github.com/a-mohammed2001/Qari-Bookstore",
    },
    {
      name: "Ertugrul New Version Clone (React.js)",
      img: '/images/ertugrul.jpg',
      demo_link:"https://a-mohammed2001.github.io/Ertugrul_New_Version_Clone_React_Js/",
      github_link:"https://github.com/a-mohammed2001/Ertugrul_New_Version_Clone_React_Js",
    }, 
    {
      name: "Zat Blogs",
      img: '/images/zat-blogs.jpg',
      demo_link:"https://zat-blogs.vercel.app/",
      github_link:"https://github.com/a-mohammed2001/zat-blogs",
    }, 
    {
      name: "Rest Countries Api",
      img: '/images/rest countries api.jpg',
      demo_link:"https://rest-api-countries-search.vercel.app/",
      github_link:"https://github.com/a-mohammed2001/REST_Countries_Search_API",
    },

    {
      name: "Quran Sound player",
      img: '/images/quran Sound player.png',
      demo_link:"https://quran-sound-player.vercel.app/",
      github_link:"https://github.com/a-mohammed2001/quran_Sound_player",
    },
    {
      name: "Am furniture",
      img: '/images/am-furniture.png',
      demo_link:"https://am-furniture.vercel.app/",
      github_link:"https://github.com/a-mohammed2001/Am_Furniture",
    },
    {
      name: "Quiz App",
      img: '/images/Quiz App.jpg',
      demo_link:"https://quiz-app-delta-two.vercel.app/",
      github_link:"https://github.com/a-mohammed2001/Quiz_App",
    },
    {
      name: "Github Users search",
      img: '/images/github users search.jpg',
      demo_link:"https://github-users-search-app.vercel.app/",
      github_link:"https://github.com/a-mohammed2001/GitHub-users-search-app",
    },
  ];
  const projects_map = projects_list
  .map((project,i) =>{
    return(
      <div key={i} className={styles.project}>
      <Link href={project.demo_link}>
      <a target="_blank">
        <header className={styles.project_header}>
          <Image src={project.img} width={1100} height={1100} />
        </header>
        <div className={styles.project_name}><h3>{project.name}</h3></div>
      </a>
      </Link>
    </div>
    )
  });
    return (
      <div className={styles.portfolio}>
      <h2>Projects</h2>
      <div className={styles.projects} id="projects">  
      {projects_map}
      </div>
    </div>
    
    )
}
