import { ArrowRight, Vote } from "lucide-react";

{/* <div>
            <h1> Welcome to Grimoire </h1>
            <p> Grimoire is a web application that allows users to keep track of their favorite movies and TV shows. </p>
            <p> To get started, please log in or sign up. </p>
        </div> */}
export default function Landingpage() {
    return (
        <>
        <section>
            <div>
                <Vote/>
                <h3>Student Vote</h3>
            </div>
            <button>Login</button>
        </section>
        <section>
            <h1>Student Voting <span>Platform</span></h1> 
            <p>An easy way to create polls, collect votes, and analyze results for student organizations and educational institutions.</p>
            <button>Get started <ArrowRight/></button>
        </section>
        <section>
            <div>
                <h3>Create Polls</h3>
                <p className="caption"></p>
            </div>
        </section>
        </>
    )
}