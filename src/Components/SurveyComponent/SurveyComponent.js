import React from "react";
import { Image } from "react-bootstrap";
import WelcomeMessage from '../../Images/WelcomeMessage.svg';
import RaisedHands from '../../Images/RaisedHands.svg';
import './SurveyComponent.css';
import NextButton from '../../Images/NextButton.svg';
import { Button } from "@blueprintjs/core";
import SignUpForest from '../../Images/SignUpForest.svg';
import DotsZero from '../../Images/DotsZero.svg'
import DotsOne from '../../Images/DotsOne.svg'
import DotsTwo from '../../Images/DotsTwo.svg'
import { MainBarContext } from "../ApplicationScreen/ApplicationScreen";
import { useContext } from "react";
import SelectionCard from "../SelectionCard/SelectionCard";
import DotsThree from '../../Images/DotsThree.svg';
import DotsFour from '../../Images/DotsFour.svg';
import MiniSelectionCard from "../MiniSelectionCard/MiniSelectionCard";
import SubmitButton from  '../../Images/SubmitButton.svg';
import SurveyCard from '../../Images/SurveyCard.svg'
import Option from "../Option/Option";
import LetsGoButton from "../../Images/LetsGo.svg";

export default function SurveyComponent () {

    const [survey_status, set_survey_status] = useContext(MainBarContext);

    return (
        <>
            {survey_status === 0 && 
                <div id="survey-status-0">
                    <Image id="dots-zero" src={DotsZero}/>
                    <Image id="welcome-message-image" src={WelcomeMessage}/>
                    <Image id="raised-hands-image" src={RaisedHands}/>

                    <div id="welcome-page-initial-text">
                        <div id="welcome-hello-message" style={{paddingBottom: 40}}> Hello, welcome </div>
                        Congratulations on taking your first step towards your <br/>
                        sustainability journey. We are here to guide you through it <br/>
                        all -- one small step at a time. Please help us by answering <br/>
                        a few simple questions so we can curate the most <br/>
                        sustainable journey for you
                    </div>

                    <Button 
                        id="next-button"
                        onClick={() => set_survey_status((current) => current + 1)}
                    >
                        <Image id="next-button-image" src={NextButton}/>
                    </Button>
                </div>
            }

            {survey_status === 1 && 
                <div id="survey-status-1">
                    <Image id="dots-one" src={DotsOne}/>
                    <span id="status-1-text"> First, what are your motivations for using Sustainify? </span>
                    <span id="status-1-subtext">Feel free to check more than option</span>

                    <div id="selection-cards">
                        <SelectionCard id="selection-card-1" cardText="Learn about how to live a more sustainable life as an individual."></SelectionCard>
                    </div>

                    <div id="selection-cards">
                        <SelectionCard id="selection-card-1" cardText="Be more intentional about setting and following through with personal sustainability goals."></SelectionCard>
                    </div>

                    <div id="selection-cards">
                        <SelectionCard id="selection-card-1" cardText="Know about resources that are available in my community for living more sustainably."></SelectionCard>
                    </div>

                    <div id="selection-cards">
                        <SelectionCard id="selection-card-1" cardText="Some combination of the above - I’m just checking things out!"></SelectionCard>
                    </div>

                </div>
            }

            {survey_status === 2 && 
                <div id="survey-status-1">
                    <Image id="dots-two" src={DotsTwo}/>
                    <span id="status-2-text"> Now let us know about your current housing situation? </span>
                    {/* <span id="status-1-subtext">Feel free to check more than option</span> */}

                    <div id="selection-cards">
                        <SelectionCard id="selection-card-1" cardText="On-campus housing"></SelectionCard>
                    </div>

                   <div id="selection-cards">
                        <SelectionCard id="selection-card-1" cardText="Off-campus housing with roommates"></SelectionCard>
                    </div>

                    <div id="selection-cards">
                        <SelectionCard id="selection-card-1" cardText="Off-campus housing with housemates"></SelectionCard>
                    </div>

                    <div id="selection-cards">
                        <SelectionCard id="selection-card-1" cardText="Co-op housing"></SelectionCard>
                    </div>

                    <Button 
                        id="next-button-greater"
                        onClick={() => set_survey_status((current) => current + 1)}
                        >
                        <Image id="next-button-image" src={NextButton}/>
                    </Button>
                </div>



                
            }

            {survey_status === 3 && 
                <div id="survey-status-3">
                    <Image id="dots-three" src={DotsThree}/>
                    <div id="status-1-text"> What are your food preferences? </div>
                    <div id="status-3-subtext">Check all that apply: </div>
                    <Image id="survey-card" src={SurveyCard}/>

                    <div id="options-list">
                        <div className="option-class">
                            <Option text="Vegan"/>
                        </div>

                        <div className="option-class">
                            <Option text="Vegetarian"/>
                        </div>

                        <div className="option-class">
                            <Option text="No Red Meat"/>
                        </div>

                        <div className="option-class">
                            <Option text="Gluten Free"/>
                        </div>

                        <div className="option-class">
                            <Option text="Dairy Free"/>
                        </div>
                    </div>

                    <div id="none-option">
                        <Option text="None"/>
                    </div>

                    


                    {/* <span id="status-1-subtext">Feel free to check more than option</span> */}
                    

                </div>
            }

            {survey_status === 4 && 
                <div id="survey-status-1">
                    <Image id="dots-four" src={DotsFour}/>
                    <h3 id="status-4-text"> Almost there! What are the top three areas you want <br/> to focus on this month</h3>

                    <div>
                        <span className="mini-selection-cards">
                            <MiniSelectionCard text="Recycling"/>
                        </span>

                        <span className="mini-selection-cards">
                            <MiniSelectionCard text="Food Pantries"/>
                        </span>
                    </div>


                    <div>
                        <span className="mini-selection-cards">
                            <MiniSelectionCard text="Composting"/>
                        </span>

                        <span className="mini-selection-cards">
                            <MiniSelectionCard text="Grocery Stores"/>
                        </span>
                    </div>


                    <div>
                        <span className="mini-selection-cards">
                            <MiniSelectionCard text="Landfill"/>
                        </span>

                        <span className="mini-selection-cards">
                            <MiniSelectionCard text="Campus Dining"/>
                        </span>
                    </div>


                    <div>
                        <span className="mini-selection-cards">
                            <MiniSelectionCard text="Farmer's Markets"/>
                        </span>

                        <span className="mini-selection-cards">
                            <MiniSelectionCard text="Money Savers"/>
                        </span>
                    </div>

                    <Button 
                        id="next-button-greater"
                        onClick={() => set_survey_status((current) => current + 1)}
                    >
                        <Image id="submit-button-image" src={SubmitButton}/>
                    </Button>



                </div>
            }

            {
                survey_status === 5 && 
                <div>
                    <div id="survey-done-text"> You did it! </div>
                    <Image id="finished-raised-hands-image" src={RaisedHands}/>
                    <span id="fun-begins-text"> Now the fun begins. </span>
                    <Button 
                        id="lets-go-button"
                        onClick={(() => {
                            set_survey_status(6);
                        })}
                    >
                        <Image id="lets-go-button-image" src={LetsGoButton}/>
                    </Button>
                </div>
                
            }

            {survey_status > 0 && survey_status < 4 && 
                <Button 
                    id="next-button-greater"
                    onClick={() => set_survey_status((current) => current + 1)}
                >
                    <Image id="next-button-image" src={NextButton}/>
                </Button>
            }

            {survey_status < 6 && 
                <div id="welcome-signup-forest">
                    <Image id="welcome-signup-forest-image" src={SignUpForest}/>
                </div>
            }

        </>
    )
}