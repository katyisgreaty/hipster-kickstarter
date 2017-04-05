import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ProjectService]
})
export class WelcomeComponent implements OnInit {
  projects: Project[];

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetailPage(clickedProject: Project) {
  this.router.navigate(['projects', clickedProject.id]);
  };

}
