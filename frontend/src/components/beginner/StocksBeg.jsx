import React from 'react'
import Navbar from '../Navbar'

import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSquareYoutube } from "react-icons/fa6";

import "../../styles/stocksbeg.scss";

const StocksBeg = () => {
    const [difficultyLevel, setDifficultyLevel] = useState("easy");
    const navigate = useNavigate();

    const links = {
        "Why is investing important?": {   
            video: "https://www.youtube.com/watch?v=I81xqr8HzBE&pp=ygUUd2h5IHNob3VsZCB3ZSBpbnZlc3Q%3D",
            },
        "Basics of investing Terms": {
            video: "https://www.youtube.com/watch?v=qIw-yFC-HNU&pp=ygUaaW50cm9kdWN0aW9uIHRvIGludmVzdG1lbnQ%3D",
        },
        "Terminology related to Stock Market ": {
            video: "https://www.youtube.com/watch?v=T37YvxMTofc&pp=ygUdaW50cm9kdWN0aW9uIHRvIHN0b2NrIG1hcmtldCA%3D",
        },


        // Add more topics with their respective video URLs and thumbnail images MEDIUM
        "Types of Charts in Stock Market": {
            video: "https://www.youtube.com/watch?v=nAxEFuTB-r0&ab_channel=365FinancialAnalystTutorials",
        },
        "Analysis in Stock Market": {
            video: "https://www.youtube.com/watch?v=yzRP-mA2eiE&t=109s&pp=ygUrZnVuZGFtZW50YWwgYW5hbHlzaXMgYW5kIHRlY2huaWNhbCBhbmFseXNpcw%3D%3D",
        },


        //HARD
        "CandleStick Graphs Guide": {
            video: "​​https://www.youtube.com/watch?v=tW13N4Hll88&pp=ygUWZ3JhcGhzIGluIHN0b2NrIG1hcmtldA%3D%3D",
        },
        "Fundamental Analysis": {
            video: "https://www.youtube.com/watch?v=3BOE1A8HXeE&pp=ygUrZnVuZGFtZW50YWwgYW5hbHlzaXMgb2Ygc3RvY2tzIGludmVzdG9wZWRpYQ%3D%3D",
        },
        "Understanding Risks": {
            video: "https://www.youtube.com/watch?v=TETSZeSoAlk&pp=ygUVcmlza3MgaW4gc3RvY2sgbWFya2V0",
        }
    };

    const easyTopics = [
        "Why is investing important?",
        "Basics of investing Terms",
        "Terminology related to Stock Market ",
      ];
    
      const mediumTopics = [
        "Types of Charts in Stock Market",
        "Analysis in Stock Market",
      ];
    
      const hardTopics = [
        "CandleStick Graphs Guide",
        "Fundamental Analysis",
        "Understanding Risks",
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

export default StocksBeg