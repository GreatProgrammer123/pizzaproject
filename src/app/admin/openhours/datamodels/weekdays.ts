export class Weekdays {
  days = ["poniedziałek", "wtorek", "środa", "czwartek", "piątek","sobota","niedziela"];
  filtereddays: string[];

  daysautocomp(text) {
    if (!text) text = "";
    text = text.toLocaleUpperCase();
    this.filtereddays = this.days.filter(d => d.toLocaleUpperCase().startsWith(text)); 
  }

  dayexists(day: string): boolean {
    let d = this.days.find(d => d == day);
    if (d) return true;
    return false;
  }



}
