import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  public location_list: Array<any> = []
  public _search = inject(SearchService)

  SearchLocation(event: string) {
    if (event.length > 5) {
      this._search.SearchLocationByString(event).subscribe({
        next: (resp) => {
          this.location_list = resp.suggestions as Array<any>
          this.location_list = this.location_list.map((value) => {
            return value.value
          })
        },
        error: () => {

        },
        complete: () => {

        }
      })
    }
  }
}
