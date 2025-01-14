import PauseCircleIcon from '@mui/icons-material/PauseCircle'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import RestoreIcon from '@mui/icons-material/Restore'
import { IconButton } from '@mui/material'

interface ButtonProps {
  isActive: boolean
  toggleActive: () => void
  handleStart: () => void
  handleReset: () => void
  totalSeconds: number
}

function Button({ isActive, toggleActive, handleStart, handleReset, totalSeconds }: ButtonProps) {
  return (
    <>
      <IconButton onClick={isActive ? toggleActive : handleStart}>
        {isActive ? <PauseCircleIcon color="error" /> : <PlayCircleIcon color="primary" />}
      </IconButton>
      <IconButton onClick={handleReset} disabled={!isActive && totalSeconds === 0}>
        <RestoreIcon color="success" />
      </IconButton>
    </>
  )
}

export default Button
