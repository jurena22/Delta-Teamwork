import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MentorModel } from 'src/app/model/mentor.model';
import { MentorService } from 'src/app/services/mentor.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss']
})
export class MentorComponent implements OnInit {

  mentorArray: MentorModel[] = [];
  mentorData?: MentorModel;
  dataSubscription?: Subscription;

  mentor?: MentorModel = {
    id: "1",
    name: "Csurgó Szabolcs",
    title: "Bio Chip Architecture Director",
    about_one: "Használja ki az agilis keretrendszereket a magas szintű áttekintésekhez szükséges robusztus összefoglaló elkészítéséhez. A vállalati stratégia iteratív megközelítései elősegítik az együttműködésen alapuló gondolkodást az általános értékjavaslat előmozdítása érdekében. A munkahelyi sokszínűség és felhatalmazás révén szervesen növelje a bomlasztó innováció holisztikus világképét.",
    about_two: "Hozzon az asztalra win-win túlélési stratégiákat a proaktív dominancia biztosítása érdekében. A nap végén, a jövőre nézve, az X generációból kialakult új normális az áramvonalas felhőmegoldás felé tartó kifutópályán van. A felhasználók által generált, valós idejű tartalomnak több érintkezési pontja lesz az offshoringhoz.",
    about_three: "Használja ki az alacsonyan lógó gyümölcsöket a bétateszteléshez szükséges hozzáadott értékű tevékenység meghatározásához. A digitális szakadék felülírása a DevOps további kattintásokkal. A nanotechnológiai merítés az információs autópálya mentén lezárja a hurkot a kizárólag a végeredményre való összpontosítással.",
    about_four: "Podcasting operatív változásmenedzsment a munkafolyamatokon belül, hogy létrehozzon egy keretrendszert. A zökkenőmentes kulcsfontosságú teljesítménymutatók offline vétele a hosszú távú teljesítmény maximalizálása érdekében. A labdán való szemmel tartás, miközben mély merülést végez a start-up mentalitáson, hogy levezesse a konvergenciát a platformok közötti integráción.",
    phone: "06901234567",
    email: "csurgo.szabolcs@progmasters.com",
    imgURL:"..\assets\images\mentors\szabi-normal.png"
  };

  constructor(private router: Router, private mentorService: MentorService) { }

  ngOnInit(): void {
    this.dataSubscription = this.mentorService.mentorObs$.subscribe({
      next: (data: MentorModel[]) => this.mentorArray = data
    })
  }

  goToMentor(id: string | undefined) {
    if (id) {
      this.router.navigate(['rolunk', id])
    }
  }


  goBackToTeachers(){
    this.router.navigate(["rolunk"])
  }

  goToEnroll(){
    this.router.navigate(["jelentkezes"])
  }

  ngOnDestroy(): void {
    // console.log('laci mentor leíratkozás');
    this.dataSubscription?.unsubscribe();
  }

}
