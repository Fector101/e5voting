import { TrendingUp, Tv, ChartNoAxesColumn, ChartColumn, Vote, ChevronRight, ArrowRight, Clock, Users } from "lucide-react"
// import Carousel from "../components/ui/carousel/Carousel"
// import SectionPreview from "./../components/js/SectionPreview"
// import Recommendations from "./../components/js/Recommendations"
// import LoginComponent from "../components/ui/login-signup/LoginForm"
import '../components/css/homepage.css'
function Myprogress(){
    return(
        <div className="progress-range">
            <div className="progress-value"></div>
        </div>
    )
}
export default function Homepage({ top_movies_data__ }) {

    return (
        <div className="home-page page">
            <section className="heading">
                <div>
                    <h1>Dashboard</h1>
                    <p className="caption">Welcome back, Admin User</p>
                </div>
                <button className="primary-btn">Create New Poll</button>
            </section>
            <section className="preview-stats-box">
                <div className="card">
                        <div className="row title-box">
                            <span>
                                <h3> Total Polls</h3>
                                <strong>3</strong>
                            </span>
                            <ChartColumn className="badge blue" />
                        </div>
                        <div>
                            <Myprogress />
                            <p>2 active</p>
                        </div>
                </div>
                <div className="card">
                        <div className="row title-box">
                            <span>
                                <h3> Total Polls</h3>
                                <strong>3</strong>
                            </span>
                            <Vote className="badge green"/>
                        </div>
                        <div className="row icon-row">
                            <TrendingUp/>
                            <p className="caption">Active participation</p>
                        </div>
                </div>
                <div className="card">
                        <div className="row title-box">
                            <span>
                                <h3> Total Votes</h3>
                                <strong>3</strong>
                            </span>
                            <Clock className="badge purple"/>
                        </div>
                        <div>
                            <a>View active polls <ArrowRight/></a>
                        </div>
                </div>
                <div className="card vote-item">
                        <div className="row title-box">
                            <span>
                                <h3> Most Popular </h3>
                                <strong className="strong">Cafeteria Menu Changes</strong>
                            </span>
                            <Users className="badge yellow"/>
                        </div>
                        <div className="row">
                            <p>174 votes</p>
                        </div>
                </div>
            </section>
            {/* <main>
                {top_movies_data__ && <Carousel data={top_movies_data__.results?.slice(0, 7)} />}
            </main>
            {top_movies_data__ &&
                <>
                    <SectionPreview title={'Trending'} icon={<TrendingUp />} data_info={{ types: ['Movies', 'TV Shows'], active: 'Movies' }} data={top_movies_data__.results} url='trending' />
                    <SectionPreview title={'Top'} icon={<ChartNoAxesColumn />} data_info={{ types: ['Movies', 'TV Shows'], active: 'Movies' }} data={top_movies_data__.results} url='top' />
                    <SectionPreview title={'Ongoing'} icon={<Tv />} data_info={{ types: ['TV Shows'] }} data={top_movies_data__.results} url='ongoing' />
                    <Recommendations data={top_movies_data__.results.slice(0, 6)} />
                    <div className="SectionPreview">
                        <LoginComponent />
                    </div>
                </>
            } */}
        </div>
    )
}
// {/* add ongoing,top,trending,Upcoming to Movies/Shows page */}
// {/* <SectionPreview title={'Upcoming'} icon={<Clock3 />} data_info={{types:['Movies','TV Shows'],active:'Movies'}} data={top_movies_data__.results}/> */}