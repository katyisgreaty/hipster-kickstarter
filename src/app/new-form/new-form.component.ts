import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css'],
  providers: [ProjectService]
})
export class NewFormComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(title: string, starter: string, description: string, goal: number, plans: string, swag: string) {
    var newProject: Project = new Project(title, starter, description, goal, plans, swag);
    this.projectService.addProject(newProject);
  }

}
