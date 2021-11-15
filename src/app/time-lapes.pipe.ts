import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeLapes'
})
export class TimeLapesPipe implements PipeTransform {


  transform(value: any): string {
    let endTime = new Date();
    let startTime = value;
    let timeDiff = endTime.getTime() - startTime.getTime();
    timeDiff = timeDiff/1000;
    let seconds = Math.floor(timeDiff%60);
    let secondAsString = seconds < 10 ? '0' + seconds: seconds;
    timeDiff =  Math.floor(timeDiff/60);
    let minutes = timeDiff % 60;
    let minutesAsString = minutes < 10 ? '0' + minutes : minutes;
    timeDiff = Math.floor(timeDiff/60);
    let hours = timeDiff % 24;
    let hoursAsString = hours < 10 ? '0' + hours: hours;
    timeDiff= Math.floor(timeDiff/24);
    let days = timeDiff;

    if (days== 0){
      return hoursAsString + ' hrs :' +minutesAsString + ' mins :' + secondAsString + 'secs';
    }else {
      return days + 'days :' + hoursAsString + ' hrs :' +minutesAsString + ' mins :' + secondAsString + 'secs';
    }
  }

}
