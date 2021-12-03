import { createPomodoro } from './main.js'

describe('Create Pomodoro', () => {
  it('creates pomodoro with default duration', () => {
    const pomodoro = createPomodoro()
    expect(pomodoro.getDuration()).toEqual(25)
  })
  it('creates pomodoro with custom duration', () => {
    const pomodoro = createPomodoro(10)
    expect(pomodoro.getDuration()).toEqual(10)
  })
})
