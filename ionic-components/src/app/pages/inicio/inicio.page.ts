import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"]
})
export class InicioPage implements OnInit {
  public components: IComponent[] = [
    {
      icon: "american-football",
      name: "alert",
      redirectTo: "/alert"
    },
    {
      icon: "appstore",
      name: "action sheet",
      redirectTo: "/action-sheet"
    }
  ];
  constructor() {}

  ngOnInit() {}
}

export interface IComponent {
  icon?: string;
  name: string;
  redirectTo: string;
}
