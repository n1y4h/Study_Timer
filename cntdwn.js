class CountdownTimer {
    constructor({
        selector, 
        targetDate
    }) {
        this.selector = selector
        this.targetDate = targetDate
        this.refs = {
            minutes: document.querySelector(`${this.selector} [data-value="minutes"]`),
            seconds: document.querySelector(`${this.selector} [data-value="seconds"]`),
        }
    }

    getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date())
       const minutes = Math.floor((total / 1000 / 60) % 60)
       const seconds = Math.floor((total / 1000) % 60)
       return {
           total,
           minutes,
           seconds
       }

    }

    updateTimer({ minutes, seconds }) {
        this.refs.minutes.textContent = minutes
        this.refs.seconds.textContent = seconds

    }

   startTimer(){
       const timer = this.getTimeRemaining(this.targetDate)
       this.updateTimer(timer)
       setInterval(() => {
           const timer = this.getTimeRemaining(this.targetDate)
           this.updateTimer(timer)
       }, 1000)
   }
}

const timer1 = new ContdownTimer({
    selector: '#timer',
    targetDate: targetDate = Math.floor(ctchUp + energy-level + mot-level)
})
timer1.startTimer()