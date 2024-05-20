import React from 'react';
import Navigationbar from './Navigationbar';

function Home(){

    return (
        <>
        <div className='userhome'>
        <Navigationbar/>
           <h2>Where Every Tail Wags and Every Paw Finds Its Way <br></br><br></br> Welcome to Your Pet's Perfect Playground!</h2>
            <div className='usercard'>
                <div className='card1'>
                    <img src='https://img.freepik.com/premium-photo/cute-dog-day-dog-spa-with-fluffy-robes-dog-care-routine-luxury-dog-life_962764-90471.jpg' alt='news1'/>
                    <p>Daily Routine Care</p>
                    <a href='https://www.msdvetmanual.com/dog-owners/routine-care-and-breeding-of-dogs/routine-health-care-of-dogs'>Click here to view more</a>
                </div>
                <div className='card1'>
                    <img src='https://images.unsplash.com/photo-1608408891486-f5cade977d19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGV0JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D' alt='news1'/>
                    <p>Food Habits of Pets</p>
                    <a href='https://bmcvetres.biomedcentral.com/articles/10.1186/s12917-023-03823-w#:~:text=The%20majority%20of%20dogs%20(70.7,metal%20(37.6%25)%20for%20cats.'>Click here to view more</a>
                </div>
                <div className='card1'>
                    <img src='https://www.shutterstock.com/image-photo/vet-examining-dog-cat-puppy-600nw-1479238910.jpg' alt='news1'/>
                    <p>Health Care of Pets</p>
                    <a href='https://vetiqpetcare.com/pet-articles/'>Click here to view more</a>
                </div>
            </div>
            <div className='block'>
            <div className='block1'>
                <h1>4+ Rating</h1>
                <h3>Most Trusted </h3>
            </div>
            <div className='block1'>
                <h1>Friendly Services</h1>
                <h3>250+ Customers</h3>
            </div>
            <div className='block1'>
                <h1>15+</h1>
                <h3>Years of Experience</h3>
            </div>
            <div className='block1'>
                <h1>50+ Doctors</h1>
                <h3>Well knowledgeable</h3>
            </div>
            </div>
        </div>
        </>
    )
}

export default Home;