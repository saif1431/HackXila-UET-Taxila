import React from 'react'
import HackIdeaCompetition from '../components/Modules Components/HackIdeaCompetition'
import PromptEngineerCompi from '../components/Modules Components/PromptEngineerCompi'
import SpeedTyping from '../components/Modules Components/SpeedTyping'
import QuizCompitition from '../components/Modules Components/QuizCompitition'

function OurModules() {
  return (
    <div className='mt-22 lg:px-12 px-4 '>
 <HackIdeaCompetition/>
 <QuizCompitition/>
 <PromptEngineerCompi/>
 <SpeedTyping/>
    </div>
  )
}

export default OurModules
