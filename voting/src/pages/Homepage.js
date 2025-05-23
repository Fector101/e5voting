import { TrendingUp, Tv, ChartNoAxesColumn, ChartColumn, Vote, ChevronRight, ArrowRight, Clock, Users, MoveRight, Plus } from "lucide-react"
// import Carousel from "../components/ui/carousel/Carousel"
// import SectionPreview from "./../components/js/SectionPreview"
// import Recommendations from "./../components/js/Recommendations"
// import LoginComponent from "../components/ui/login-signup/LoginForm"
import '../components/css/homepage.css'
function Myprogress({value}) {
    console.log(value+'%')
    return (
        <div className="progress-range" style={{'width':'100%',backgroundColor:'#cac8c8',height:'10px',borderRadius:'5px',marginBottom:'4px',overflow:'hidden'}}>
            <div style={{width:value+'%',backgroundColor:'#4ec9e6',height:'100%'}} className="progress-value"></div>
        </div>
    )
}
function VotingStats({ title, des, runners_info_tuple }) {
    // runners_info_tuple =[['name',140]]   
    // runners_info_tuple =[['name','votes'],...]   
    const total_votes = runners_info_tuple.reduce((sum, [, votes]) => sum + votes, 0);
    console.log(total_votes,'---')
    return (
        <div className="voting-stats-card">
            <h4>{title}</h4>
            <p className="caption">{des}</p>
            <div className="runners-box">
                {runners_info_tuple?.map(([name, votes], i) => {
                    const percentage = total_votes > 0 ? ((votes / total_votes) * 100).toFixed(2) : 0;
                    console.log(total_votes,'---')

                    return (
                        <div>
                            <div className="row">
                                <p>{name}</p>
                                <p className="caption">{votes} votes</p>
                            </div>
                            <Myprogress value={percentage}/>
                        </div>)
                })}
            </div>
            <p>Total votes: {total_votes}</p>
            <a className="view-all-votes-btn primary-btn">View Details <ArrowRight /></a>
        </div>
    )
}
export default function Homepage({ top_movies_data__ }) {
    const votingStatsArray = [
        {
            title: "Best Student Representative",
            des: "Vote for the best candidate to represent the student body.",
            runners_info_tuple: [
                ["Alice Johnson", 250],
                ["Bob Smith", 180],
                ["Charlie Brown", 320],
                ["Diana Prince", 210]
            ]
        },
        {
            title: "Sports Captain Election",
            des: "Choose the next leader for our sports team.",
            runners_info_tuple: [
                ["Ethan Williams", 200],
                ["Sophie Turner", 340],
                ["Liam Brown", 275]
            ]
        },
        {
            title: "Best Club of the Year",
            des: "Vote for your favorite club on campus.",
            runners_info_tuple: [
                ["Drama Club", 410],
                ["Robotics Club", 350],
                ["Music Club", 290]
            ]
        }
    ];

    // Usage in a component


    return (
        <div className="home-page page">
            <section className="heading">
                <div>
                    <h1>Dashboard</h1>
                    <p className="caption">Welcome back, Admin User</p>
                </div>
                <button className="primary-btn">
                    <Plus/>
                    Create New Poll</button>
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
                        <Myprogress value='30' />
                        <p>2 active</p>
                    </div>
                </div>
                <div className="card">
                    <div className="row title-box">
                        <span>
                            <h3> Total Votes</h3>
                            <strong>273</strong>
                        </span>
                        <Vote className="badge green" />
                    </div>
                    <div className="row icon-row">
                        <TrendingUp />
                        <p className="caption">Active participation</p>
                    </div>
                </div>
                <div className="card">
                    <div className="row title-box">
                        <span>
                            <h3> Active Polls</h3>
                            <strong>2</strong>
                        </span>
                        <Clock className="badge purple" />
                    </div>
                    <div>
                        <a>View active polls <ArrowRight /></a>
                    </div>
                </div>
                <div className="card vote-item">
                    <div className="row title-box">
                        <span>
                            <h3> Most Popular </h3>
                            <strong className="strong">Cafeteria Menu Changes</strong>
                        </span>
                        <Users className="badge yellow" />
                    </div>
                    <div className="row">
                        <p>174 votes</p>
                    </div>
                </div>
            </section>

            <section className="recent-votings">
                <div className="heading">
                    <h3>Recent Active Polls</h3>
                    <button>View All</button>
                </div>
                <div className="main-votings-box">
                    {votingStatsArray.map((votingData, index) => (
                        <VotingStats key={index} {...votingData} />
                    ))}
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