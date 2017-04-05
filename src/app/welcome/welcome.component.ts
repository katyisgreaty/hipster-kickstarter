import { Component } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(private router: Router){}
  
  projects: Project[] = [
    new Project("Edible Fannypack", "Nigel Gunderson", "Have you ever gotten so hungry on a hike or pub crawl that you wished you cute eat your fannypack? Well wish no more! The Edible Fannypack not only carries around your superfluous hipster accessories, it serves as an emergency snack! It comes in 3 flavors: Fruit, Cheddar Cheese, and Jalapeno. Your friends will be so bitter that you discovered it first.", 10000, "If we raise enough money, we plan to begin production right away. We will use the finest, rarest natural organic ingredients, all gluten-free of course. We will plant cheddar cheese trees all over the world to counter-act our carbon footprint.", "Included: Edible Fannypack in the flavor of your choice. Plus, if you are one of our first 100 investors, we will include our patented szechuan dipping sauce that comes in a convenient wooden flask.", 1),
    new Project("Moustache Bedazzler", "Matt Caswell", "Regular moustaches are so 2012. This Moustache Bedazzler will make you the hit of all of your ironic costume parties. You will be irresistable to all potential suitors! Options include: metallic, My Little Pony charms, glitter, neon, glow in the dark, camo. Let your moustache show the excitement you're too cool to show on your face.", 1000000, "When our fundraising goal is met, I will use the money to bribe my little sister into letting me use her bedazzler as a model. Don't worry, it's vintage from 1983, so you know it's authentic. I will craft the new machines in my woodshop from recycled materials.", "With each order, you will receive a handcrafted Moustache Bedazzler, plus styling guide and matching bedazzled monacle.", 2),
    new Project("Gluten Filter", "Joan", "Everyone knows that only idiots consume gluten. Now, you never have to be one of them. This product will allow you to filter the gluten out of any liquid, for healthy gluten-free consumption. Works best with organic micro-brews from Portland, but can be applied to any food if it has been thoroughly run through a food processor.", 25000, "I have already made twelve of these in my grandma's basement, so I've pretty much got the manufacturing covered.", "Comes with an artisinal recycled-paper straw.", 3)
  ];

  goToDetailPage(clickedProject: Project) {
  this.router.navigate(['projects', clickedProject.id]);
  };

}
