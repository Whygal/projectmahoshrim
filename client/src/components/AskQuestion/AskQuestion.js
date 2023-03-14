import { Radio, RadioGroup, FormControlLabel, Checkbox } from '@mui/material'
import React from 'react'

const Question = () => {
  return (
    <div>
     <label>מה השאלה?</label>
     <input type="text" name='name'/>
     <RadioGroup>
     <FormControlLabel value="AgreeToPublish" control={<Checkbox />} label="האם אתה מסכים לפרסם את השאלה?" />
     </RadioGroup>
    </div>
  )
}

export default Question