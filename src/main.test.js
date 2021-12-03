import { createPomodoro } from './main.js'

describe('Pomodoro', () => {
  it('creates pomodoro with default duration', () => {
    const pomodoro = createPomodoro()

    expect(pomodoro.getDuration()).toEqual(25)
  })

  it('creates pomodoro with custom duration', () => {
    const pomodoro = createPomodoro(10)

    expect(pomodoro.getDuration()).toEqual(10)
  })

  it('not started pomodoro returns default time', () => {
    const pomodoro = createPomodoro()
    const duration = pomodoro.getDuration()

    expect(pomodoro.getRemainingTime()).toEqual(duration * 60 * 1000)
  })

  it('starts pomodoro and decrements duration', done => {
    const pomodoro = createPomodoro()
    const remainingTime1 = pomodoro.getRemainingTime()

    pomodoro.start()

    setTimeout(() => {
      const remainingTime2 = pomodoro.getRemainingTime()
      expect(remainingTime2).toBeLessThan(remainingTime1)

      setTimeout(() => {
        expect(pomodoro.getRemainingTime()).toBeLessThan(remainingTime2)
        done()
      }, 5)
    }, 5)
  })

  it('decreases until over', done => {
    const oneMsInMinutes = 1 / 60 / 1000
    const pomodoro = createPomodoro(oneMsInMinutes)

    pomodoro.start()

    setTimeout(() => {
      expect(pomodoro.getRemainingTime()).toEqual(0)
      done()
    }, 5)
  })

  it('takes a break', done => {
    const pomodoro = createPomodoro()

    pomodoro.takeBreak()

    setTimeout(() => {
      const breakRemainingTime = pomodoro.getBreakRemainingTime()
      expect(breakRemainingTime).toBeLessThan(5 * 60 * 1000)
      
      setTimeout(() => {
        expect(pomodoro.getBreakRemainingTime()).toBeLessThan(breakRemainingTime)
        done()
      }, 5)
    }, 5)
  })
})
