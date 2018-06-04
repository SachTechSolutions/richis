import React from 'react'
import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'
import { StepThree } from './StepThree'
import { StepFour } from './StepFour'
import { StepFive } from './StepFive'
import { StepSix } from './StepSix'
import { StepCheck } from './StepCheck'

const steps = 
    [
        {name: 'Purpose', component: <StepOne/>},
        {name: 'Willingness', component: <StepTwo/>},
        {name: 'Marital', component: <StepThree/>},
        {name: 'How Treat', component: <StepFour/>},
        {name: 'Children', component: <StepFive/>},
        {name: 'Character', component: <StepSix/>},
        {name: 'step check', component: <StepCheck/>}
    ]

export { steps }