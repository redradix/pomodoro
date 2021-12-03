import { createPomodoro } from './main.js'

describe('Create Pomodoro', () => {
  it('creates pomodoro with default duration', () => {
    const pomodoro = createPomodoro()
    expect(pomodoro.getDuration()).toEqual(25)
  })
})
