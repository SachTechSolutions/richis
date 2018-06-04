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
      {name: 'Height', component: <StepOne/>},
      {name: 'Body Type', component: <StepTwo/>},
      {name: 'Residence', component: <StepThree/>},
      {name: 'Occupation', component: <StepFour/>},
      {name: 'Annual Income', component: <StepFive/>},
      {name: 'Tabacco', component: <StepSix/>},
      {name: 'step check', component: <StepCheck/>}
    ]

export { steps }