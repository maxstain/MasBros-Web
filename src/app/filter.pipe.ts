import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  transform(Items: any[], searchText: string): any[] {
    if (!Items) {
      return [];
    }
    if (!searchText) {
      return [];
    }
    searchText = searchText.toLocaleLowerCase();

    return Items.filter(item => {
      return item.toLocaleLowerCase().includes(searchText);
    });
  }
}
