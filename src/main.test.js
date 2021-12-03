import { createPomodoro } from './main.js'

describe('un texto', () => {
  it('otro texto', () => {
    const pomodoro = createPomodoro()
    expect(pomodoro.getDuration()).toEqual(25)
  })
})