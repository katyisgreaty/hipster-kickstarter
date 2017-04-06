import { Pipe, PipeTransform } from '@angular/core';
import {Project} from './project.model';
import { FirebaseListObservable } from 'angularfire2';

@Pipe({
  name: 'goalPipe',
  pure: false
})
export class GoalPipePipe implements PipeTransform {

  // projects: FirebaseListObservable<any[]>;
  transform(input: Project[], desiredGoalFilter) {
    // console.log("Hi");
    // console.log(input);
    var output: Project[] = [];
    if(desiredGoalFilter === "underTwenty") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].goal < 20000) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
