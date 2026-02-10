import TypeOut from "./TypeOut";
import profileImage from '../images/me.png';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Options for the third part of the description with proper job title capitalization
const thirdOptions = [
    "Game Master",
    "Drinker of Coffee",
    "Human Being",
    "Maker of Coffee and Syrups",
    "Maker of Things",
    "Expert on Life",
    "Lister of Accomplishments",
    "Maker of Portfolio Websites That Typeout Things",
    "Someone Who Gets Bored Easily",
    "Someone Who Is a Little Too Obsessed with Dungeons and Dragons",
    "Someone Who Is a Little Too Obsessed with Making Things",
    "Someone Who Is a Little Too Obsessed with Things That Relate to Dungeons and Dragons. Like Seriously I Have an Entire Bookshelf Full of D&D Books Next to My Other Bookshelf Covered in D&D Books. It's a Problem. I Need Help. Please Send Help, or at Least a Pizza. I Could Really Go for a Pizza Right Now. I Mean, Who Doesn't Love Pizza? It's Like the Perfect Food. You Can Have It for Breakfast, Lunch, or Dinner. And Don't Even Get Me Started on the Toppings. Pineapple on Pizza? Yes, Please! But I Digress. There Are More Important Things to Talk About. Like How I Really Need to Stop Rambling and Get Back to the Point. Are You Still Reading This? If So, Congratulations! You've Made It to the End of My Ramble. I Hope You Enjoyed It. If Not, Well, I Guess That's Just Too Bad. But Hey, at Least You Got to Read Something Interesting, Right? So Thanks for Sticking Around. You're a Trooper. Now Go Grab a Slice of Pizza and Enjoy the Rest of Your Day!",
    "Magical Being",
    "Parent of Two Dachsunds",
    "Someone Who Is a Little Too Obsessed with Their Dachsunds",
    "Someone Who Used to Play Halo 3 in High School",
    "Some Kind of an Egg",
    "A Gifted Child Who Is Now a Burnt Out Adult",
    "Former Art Student Who Is Now a Software Developer",
    "Standup Comedian",
    "A Piece of Stardust Looking for Their Place in the Universe",
];

const Header = () => {
    const [typedDescription, setTypedDescription] = useState("");

    useEffect(() => {
        // Randomly select one of the third options
        const randomIndex = Math.floor(Math.random() * thirdOptions.length);
        const selectedOption = thirdOptions[randomIndex];

        // Create the full description
        const fullDescription = `Software Manager, Writer, and ${selectedOption}`;
        setTypedDescription(fullDescription);
    }, []);

    return (
        <motion.div
            className="main-header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <header>
                <h1>
                    <TypeOut inputString="Aria's Portfolio" time="300" typeSpeed={100} />
                </h1>
                {/* Profile Image */}
                <div className="profile-section">
                    <div className='image-container'>
                        <img className='glow' src={profileImage} alt="Aria's profile" />
                    </div>

                    {/* Typed Message with Random Third Option */}
                    <div className="typed-description">
                        {typedDescription && (
                            <TypeOut inputString={typedDescription} time="3000" typeSpeed={100} />
                        )}
                    </div>
                </div>
            </header>

        </motion.div>
    );
};

export default Header;