import { Pipe, PipeTransform } from '@angular/core';
import { InternModel } from 'src/app/core/models/intern-model';

@Pipe({
  name: 'internInitial'
})
export class InternInitialPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (value instanceof InternModel) {
      if (args.length) {
        // Parameters was passed
        const config: any = args[0]; // First parameter passed (my config {inverse: true})
        if (config.inverse) {
          return config.toLowerCase ? this.nameFirst(value).toLowerCase() : this.nameFirst(value);
        } else {
          return config.toLowerCase ? this.firstNameFirst(value).toLowerCase() : this.firstNameFirst(value);
        }
      }
      return this.firstNameFirst(value);
    }

    throw new Error(`Expect arg to be an instance of InternModel`);
    
  }

  private getInitial(value: string): string {
    if (value === '') {
      return '?';
    }

    return value.charAt(0);
  }

  private nameFirst(value: any): string {
    return this.getInitial(value.getLastName()) + this.getInitial(value.getFirstName());
  }

  private firstNameFirst(value: any): string {
    return this.getInitial(value.getFirstName()) + this.getInitial(value.getLastName());
  }
}
