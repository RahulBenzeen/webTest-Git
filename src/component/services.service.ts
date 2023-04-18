import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _httpClient: HttpClient) { }

  data = [{
    name: "rahul bhardwaj",
    role: "developer",
    experience: '2 years',
    project: "angular based, react based and node js "
  }]


  data$: BehaviorSubject<any> = new BehaviorSubject<any>(null);


  setData(data: any) {
    this.data$.next(data);
  }


  getPersonalData() {
    return this.data
  }
  url = 'https://google.com/'

  getFilterSchema(req: any) {
    return this._httpClient.post(this.url, req)
  }


  //new experiments


  private globalObject: any = {};

  setGlobalValue(key: string, value: any) {
    this.globalObject[key] = value;
  }

  resetGlobalValue(key: string) {
    delete this.globalObject[key];
  }

  getGlobalObject() {
    return this.globalObject;
  }

  resetGlobalObject() {
    this.globalObject = {};
  }

  myGlobalObject = {
    name: '',
    age: 0,
    email: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: ''
    }
  }



  myFilterObject: any = [{
    filterlabel: 'Personal Data'
  },
  {
    filterType: {
      name: 'Inventory Id',
      selectedFilters1: {
        name: 'Latest',
        value: ''
      },
      selectedFilters2: {
        name: 'Moderate',
        value: ''
      },
      selectedFilters3: {
        name: 'Old',
        value: ''
      }
    }
  },
  {
    filterType: {
      name: 'Model',
      selectedFilters1: {
        name: 'Range Rover',
        value: ''
      },
      selectedFilters2: {
        name: 'Bmw series',
        value: ''
      },
      selectedFilters3: {
        name: 'dodge',
        value: ''
      }
    }
  }, {
    filterType: {
      name: 'make',
      selectedFilters1: {
        name: 'mercedes',
        value: ''
      },
      selectedFilters2: {
        name: 'bmw',
        value: ''
      },
      selectedFilters3: {
        name: 'maruti',
        value: ''
      }
    }
  },
  ]



  resetMyAppliedFilters() {
    // this.myFilterObject[1].filterType.selectedFilters1.value=''
    this.myFilterObject = [
      {
        filterlabel: 'Personal Data'
      },
      {
        filterType: {
          name: 'Inventory Id',
          selectedFilters1: {
            name: 'Latest',
            value: '',
            flag: false
          },
          selectedFilters2: {
            name: 'Moderate',
            value: '',
            flag: false
          },
          selectedFilters3: {
            name: 'Old',
            value: '',
            flag: false
          }
        }
      },
      {
        filterType: {
          name: 'Model',
          selectedFilters1: {
            name: 'Range Rover',
            value: '',
            flag: false
          },
          selectedFilters2: {
            name: 'Bmw series',
            value: '',
            flag: false
          },
          selectedFilters3: {
            name: 'dodge',
            value: '',
            flag: false
          }
        }
      }, {
        filterType: {
          name: 'make',
          selectedFilters1: {
            name: 'mercedes',
            value: '',
            flag: false
          },
          selectedFilters2: {
            name: 'bmw',
            value: '',
            flag: false
          },
          selectedFilters3: {
            name: 'maruti',
            value: '',
            flag: false
          }
        }
      },
    ]
  }

  updateMyFilters(req: any) {

    console.log('my req body');
    console.log(req);

    this.myFilterObject = [
      {
        filterlabel: 'Personal Data'
      },
      {
        filterType: {
          name: 'Inventory Id',
          selectedFilters1: {
            name: 'Latest',
            value: req[1].filterType.selectedFilters1.value
          },
          selectedFilters2: {
            name: 'Moderate',
            value: req[1].filterType.selectedFilters2.value
          },
          selectedFilters3: {
            name: 'Old',
            value: req[1].filterType.selectedFilters3.value
          }
        }
      },
      {
        filterType: {
          name: 'Model',
          selectedFilters1: {
            name: 'Range Rover',
            value: req[2].filterType.selectedFilters1.value
          },
          selectedFilters2: {
            name: 'Bmw series',
            value: req[2].filterType.selectedFilters2.value
          },
          selectedFilters3: {
            name: 'dodge',
            value: req[2].filterType.selectedFilters3.value
          }
        }
      }, {
        filterType: {
          name: 'make',
          selectedFilters1: {
            name: 'mercedes',
            value: req[3].filterType.selectedFilters1.value
          },
          selectedFilters2: {
            name: 'bmw',
            value: req[3].filterType.selectedFilters2.value
          },
          selectedFilters3: {
            name: 'maruti',
            value: req[3].filterType.selectedFilters3.value
          }
        }
      },
    ];



  }

}