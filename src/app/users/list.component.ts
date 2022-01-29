import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, first, map } from 'rxjs/operators';
import { AccountService } from '../_services';


@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit ,AfterViewInit{
    users = null;
    searchValue = ''
    @ViewChild('InputRef')InputRef:ElementRef;
    constructor(private accountService: AccountService) {}

    ngOnInit() {
        this.accountService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }

    deleteUser(id: string) {
        const user = this.users.find(x => x.id === id);
        user.isDeleting = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe(() => this.users = this.users.filter(x => x.id !== id));
    }
    ngAfterViewInit(): void {
        fromEvent<any>(this.InputRef.nativeElement,'keyup').pipe(
          map((event) => event.target.value),
          debounceTime(500),
          distinctUntilChanged()
        )
        .subscribe((res: any) => {
          console.log(res);
          this.searchValue = res;
        })
    }
}
