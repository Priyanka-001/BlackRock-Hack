import React from 'react'
import Navbar from '../Navbar'

import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSquareYoutube } from "react-icons/fa6";

import "../../styles/stocksbeg.scss";

const ForExBeg = () => {
    const [difficultyLevel, setDifficultyLevel] = useState("easy");
    const navigate = useNavigate();

    const links = {
        "Introduction": {   
            video: "https://www.youtube.com/watch?v=NhFlqFVBmxc&t=10s&pp=ygUnaW50cm9kdWN0aW9uIHRvIGZvcmVpZ24gZXhjaGFuZ2UgbWFya2V0",
            },
        "Currency Pairs": {
            video: "https://www.youtube.com/watch?v=RMADDeFVkBA&list=PLT6_Bt_TKitIBM5d1QFprg8V-lis4_qWO&index=2&pp=iAQB",
        },
        "Terminologies Part-1 ": {
            video: "https://www.youtube.com/watch?v=vqYGdEFEy2s&list=PLT6_Bt_TKitIBM5d1QFprg8V-lis4_qWO&index=3&pp=iAQB",
        },
        "Terminologies Part-2 ": {
            video: "https://www.youtube.com/watch?v=E-_1ruIzojc&list=PLT6_Bt_TKitIBM5d1QFprg8V-lis4_qWO&index=4&pp=iAQB",
        },


        // Add more topics with their respective video URLs and thumbnail images MEDIUM
        "Introduction to Pip Value": {
            video: "https://www.youtube.com/watch?v=pZvWfwS1264&list=PLT6_Bt_TKitIBM5d1QFprg8V-lis4_qWO&index=5&pp=iAQB",
        },
        "Types of Market Order": {
            video: "https://www.youtube.com/watch?v=b5cIQHbW_wI&list=PLT6_Bt_TKitIBM5d1QFprg8V-lis4_qWO&index=7&pp=iAQB",
        },
        "Types of Order Style": {
            video: "https://www.youtube.com/watch?v=iWFgQo_QUBE&list=PLT6_Bt_TKitIBM5d1QFprg8V-lis4_qWO&index=9&pp=iAQB",
        },


        //HARD
        "Market Structure": {
            video: "​​https://www.youtube.com/watch?v=AJNzpaHzaJM&list=PLT6_Bt_TKitIBM5d1QFprg8V-lis4_qWO&index=10&pp=iAQB",
        },
        "Candlesticks Guide": {
            video: "https://www.youtube.com/watch?v=uyEXXpuE8KE&list=PLT6_Bt_TKitIBM5d1QFprg8V-lis4_qWO&index=12&pp=iAQB",
        },
    };

    const easyTopics = [
        "Introduction",
        "Currency Pairs",
        "Terminologies Part-1 ",
        "Terminologies Part-2 ",
      ];
    
      const mediumTopics = [
        "Introduction to Pip Value",
        "Types of Market Order",
        "Types of Order Style",
      ];
    
      const hardTopics = [
        "Market Structure",
        "Candlesticks Guide",
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

export default ForExBeg