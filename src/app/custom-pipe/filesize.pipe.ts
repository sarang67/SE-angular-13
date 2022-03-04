import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'Filesize' })
export class FileSizePipe implements PipeTransform {
  transform(value: any, size = 'mb') {
    const convertToMB = value / 1024 / 1024;
    return convertToMB.toFixed(2) + size;
  }
}
