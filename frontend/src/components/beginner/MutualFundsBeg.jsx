import React from 'react'
import Navbar from '../Navbar'

import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSquareYoutube } from "react-icons/fa6";

import "../../styles/stocksbeg.scss";

const MutualFundsBeg = () => {
    const navigate = useNavigate();
    const [difficultyLevel, setDifficultyLevel] = useState("easy");

    const links = {
        "What is Mutual Fund? An Intro": {   
            video: "https://www.youtube.com/watch?v=VZprdbUZstg&pp=ygUcaW50cm9kdWN0aW9uIHRvIG11dHVhbCBmdW5kcw%3D%3D",
            },
        "Types": {
            video: "https://www.youtube.com/watch?v=V5wn0oGe2Ss&pp=ygUVdHlwZXMgdG8gbXV0dWFsIGZ1bmRz",
        },
        "Terminology ": {
            video: "https://www.youtube.com/watch?v=aRIaA2kevlg&pp=ygUadGVybWlvbG9neSBvZiBtdXR1YWwgZnVuZHM%3D",
        },


        // Add more topics with their respective video URLs and thumbnail images MEDIUM
        "Pick the correct mutual fund": {
            video: "https://www.youtube.com/watch?v=hzAFmR5ll8Y&list=PLX2SHiKfualGsjgd7fKFC-JXRF6vO73hk&index=9&pp=iAQB",
        },
        "Select the right equity for the mutual fund": {
            video: "https://www.youtube.com/watch?v=thOejbtcBjo&pp=ygUYYW5hbHlzaXMgb2YgbXV0dWFsIGZ1bmRz",
        },


        //HARD
        "Analyzing Mutual Funds": {
            video: "https://www.youtube.com/watch?v=k6wLmbWgies&pp=ygUYYW5hbHlzaXMgb2YgbXV0dWFsIGZ1bmRz",
        },
    };

    const easyTopics = [
        "What is Mutual Fund? An Intro",
        "Types",
        "Terminology ",
      ];
    
      const mediumTopics = [
        "Pick the correct mutual fund",
        "Select the right equity for the mutual fund",
      ];
    
      const hardTopics = [
        "Analyzing Mutual Funds",
      ];
    
      const filteredTopics = () => {
        switch (difficultyLevel) {
          case "easy":
            return easyTopics;
          case "medium":
            return mediumTopics;
          case "hard":
            return hardTopics;
          default:
            return [];
        }
      };

    return (
        <div>
            <Navbar/>
            <main className='stockbeg'>
                <div className='back' onClick={()=>navigate("/beginner-dashboard")}><p>&lt;Back</p></div>
                <div className="levels">
                    <button
                        onClick={() => setDifficultyLevel("easy")}
                        className={`${difficultyLevel === "easy"?"easye":"disabled"}`}
                    >
                        Beginner
                    </button>
                    <button
                        onClick={() => setDifficultyLevel("medium")}
                        className={`${difficultyLevel === "medium"?"mediume":"disabled"}`}
                    >
                        Intermediate
                    </button>
                    <button
                        onClick={() => setDifficultyLevel("hard")}
                        className={`${difficultyLevel === "hard"?"harde":"disabled"}`}
                    >
                        Advanced
                    </button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Topics
                            </th>
                            <th>
                                Watch and Learn
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTopics().map((topic) => (
                        <tr key={topic}>
                            <td>
                            {topic}
                            </td>
                            <td>
                            <Link
                                to={links[topic].video}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-500"
                            >
                                <FaSquareYoutube size={50} color='red'/>
                            </Link>
                            </td>
                            
                        </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default MutualFundsBeg