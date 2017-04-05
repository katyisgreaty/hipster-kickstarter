import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { PROJECTS } from './mock-project';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(projectId: number) {
    for (var i = 0; i <= PROJECTS.length - 1; i++) {
      if (PROJECTS[i].id === projectId) {
        return PROJECTS[i];
      }
    }
  }

}
