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
        {name: 'Occupation', component: <StepFour/>},
        {name: 'Height', component: <StepOne/>},
        {name: 'Residence', component: <StepThree/>},
        {name: 'Tabacco', component: <StepSix/>},
        {name: 'Annual Income', component: <StepFive/>},
        {name: 'Body Type', component: <StepTwo/>},
        {name: 'step check', component: <StepCheck/>}
    ]

export { steps }