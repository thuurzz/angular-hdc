import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface People {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Dob;
  phone: string;
  cell: string;
  id: ID;
  picture: Picture;
  nat: string;
}

export interface Dob {
  date: string;
  age: number;
}

export interface ID {
  name: string;
  value: string | null;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number | string;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Street {
  number: number;
  name: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

async function getPeople() {
  const response = await fetch('https://randomuser.me/api/?results=10');
  const data = await response.json();
  const pessoas: People[] = data.results;
  return pessoas;
}
let data: People[];
getPeople()
  .then((resp) => (data = resp))
  .then(console.log)
  .catch((err) => console.log(err));

const DATA1: People[] = [
  {
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'Julia',
      last: 'Brar',
    },
    location: {
      street: {
        number: 3875,
        name: 'Alfred St',
      },
      city: 'Lloydminster',
      state: 'Yukon',
      country: 'Canada',
      postcode: 'J1Z 6M7',
      coordinates: {
        latitude: '-68.2726',
        longitude: '23.0428',
      },
      timezone: {
        offset: '+9:00',
        description: 'Tokyo, Seoul, Osaka, Sapporo, Yakutsk',
      },
    },
    email: 'julia.brar@example.com',
    login: {
      uuid: '918d628f-1ae2-4fd6-b390-b763152d6a86',
      username: 'beautifulpanda519',
      password: 'manolo',
      salt: 'N6k72x9m',
      md5: '09fe8bd92ef436753ac9057ba473d21d',
      sha1: 'e4838858e00e454df4af5e19a792554ca63a6d34',
      sha256:
        'cd44152fac5c5deae97ed445fb6d002275af89c071633b500ec392c0f602a8d5',
    },
    dob: {
      date: '1966-02-27T21:00:18.709Z',
      age: 56,
    },
    registered: {
      date: '2007-02-15T04:05:42.484Z',
      age: 15,
    },
    phone: 'J18 J65-3906',
    cell: 'K75 L23-2848',
    id: {
      name: 'SIN',
      value: '963686324',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/11.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/11.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/11.jpg',
    },
    nat: 'CA',
  },
  {
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'Nadja',
      last: 'Malešević',
    },
    location: {
      street: {
        number: 5040,
        name: 'Aljehinova',
      },
      city: 'Medveđa',
      state: 'South Bačka',
      country: 'Serbia',
      postcode: 83381,
      coordinates: {
        latitude: '81.0362',
        longitude: '-169.1745',
      },
      timezone: {
        offset: '-4:00',
        description: 'Atlantic Time (Canada), Caracas, La Paz',
      },
    },
    email: 'nadja.malesevic@example.com',
    login: {
      uuid: '96c87453-d7ea-44d8-8cdf-e2cf44f3c786',
      username: 'blackpanda127',
      password: 'skydive',
      salt: 'Ttk7CX0E',
      md5: 'c1ca24017883f0eeadea67c43e373c97',
      sha1: '0fd6046cedce45411e155ea9adc1f22ddbcb84f6',
      sha256:
        'a738c709736ef1d00e691570aaa24fe686c5c1a38f70db42361b307b3201d031',
    },
    dob: {
      date: '1964-12-22T18:27:28.265Z',
      age: 58,
    },
    registered: {
      date: '2009-06-03T23:36:49.004Z',
      age: 13,
    },
    phone: '027-1106-172',
    cell: '064-0261-602',
    id: {
      name: 'SID',
      value: '610926642',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/80.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/80.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/80.jpg',
    },
    nat: 'RS',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Elias',
      last: 'Christensen',
    },
    location: {
      street: {
        number: 9169,
        name: 'Hovedgaden',
      },
      city: 'Sundby/Erslev',
      state: 'Midtjylland',
      country: 'Denmark',
      postcode: 61032,
      coordinates: {
        latitude: '31.4781',
        longitude: '-20.0874',
      },
      timezone: {
        offset: '-3:30',
        description: 'Newfoundland',
      },
    },
    email: 'elias.christensen@example.com',
    login: {
      uuid: 'a7a12198-7224-4cba-b2dd-a4c595389ddc',
      username: 'blackbear812',
      password: 'jones1',
      salt: 'XIlZ7gLS',
      md5: '993bc0602c312fd66283f038b106890e',
      sha1: '384cd3b6e634e1c818bfad36bfe11e071f62fa2e',
      sha256:
        '58a5ef5a5b55cceebd025eeb92500d5b8b6b76cc9ca868c3f789ea1826da090d',
    },
    dob: {
      date: '1959-03-29T19:25:11.595Z',
      age: 63,
    },
    registered: {
      date: '2010-05-15T02:03:16.602Z',
      age: 12,
    },
    phone: '05119041',
    cell: '50247237',
    id: {
      name: 'CPR',
      value: '290359-2845',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/82.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/82.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/82.jpg',
    },
    nat: 'DK',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Nereu',
      last: 'Teixeira',
    },
    location: {
      street: {
        number: 3492,
        name: 'Travessa dos Açorianos',
      },
      city: 'Ananindeua',
      state: 'Mato Grosso do Sul',
      country: 'Brazil',
      postcode: 41934,
      coordinates: {
        latitude: '31.1766',
        longitude: '37.4623',
      },
      timezone: {
        offset: '+1:00',
        description: 'Brussels, Copenhagen, Madrid, Paris',
      },
    },
    email: 'nereu.teixeira@example.com',
    login: {
      uuid: '0b6f6057-1ad9-4c21-a4fe-5ff1562c8415',
      username: 'blackbutterfly178',
      password: 'delaney',
      salt: 'oMXgHjHz',
      md5: '798854daa04162542820e074df3ec0ae',
      sha1: '958f791cff1bb486c3713d345335fcd79b2226ca',
      sha256:
        '066fd7caf8ac166abba6ec0c4dd4094d8e3ef387c81559414f0db9e3f96f6412',
    },
    dob: {
      date: '1946-08-31T02:33:24.573Z',
      age: 76,
    },
    registered: {
      date: '2004-05-08T08:34:47.301Z',
      age: 18,
    },
    phone: '(88) 0937-9200',
    cell: '(72) 2444-5346',
    id: {
      name: 'CPF',
      value: '338.798.204-61',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/81.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/81.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/81.jpg',
    },
    nat: 'BR',
  },
  {
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'Gabrielle',
      last: 'Clark',
    },
    location: {
      street: {
        number: 3836,
        name: 'St. Catherine St',
      },
      city: 'Souris',
      state: 'Alberta',
      country: 'Canada',
      postcode: 'H1K 5Q1',
      coordinates: {
        latitude: '-15.2015',
        longitude: '128.3217',
      },
      timezone: {
        offset: '-9:00',
        description: 'Alaska',
      },
    },
    email: 'gabrielle.clark@example.com',
    login: {
      uuid: '6e826ca3-7e3c-4856-80f4-be949ea53662',
      username: 'yellowgorilla675',
      password: 'dadada',
      salt: 'j2u1TzFQ',
      md5: '49bb7acaeb7e25f397ac915448ef375b',
      sha1: 'cabde04eef9163d28538dcbb8b2e050bb6c287ca',
      sha256:
        '9f7c49f85d5386aaac9586bf5ed4be591e306388e2a226282faa702b26b98d5e',
    },
    dob: {
      date: '1977-01-03T05:09:13.085Z',
      age: 46,
    },
    registered: {
      date: '2007-07-12T10:50:31.427Z',
      age: 15,
    },
    phone: 'S03 Z27-5391',
    cell: 'Q16 Q36-1530',
    id: {
      name: 'SIN',
      value: '870614385',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/69.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/69.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/69.jpg',
    },
    nat: 'CA',
  },
  {
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'Patsy',
      last: 'Nguyen',
    },
    location: {
      street: {
        number: 6407,
        name: 'Spring St',
      },
      city: 'Elko',
      state: 'West Virginia',
      country: 'United States',
      postcode: 83970,
      coordinates: {
        latitude: '88.4291',
        longitude: '68.1736',
      },
      timezone: {
        offset: '-2:00',
        description: 'Mid-Atlantic',
      },
    },
    email: 'patsy.nguyen@example.com',
    login: {
      uuid: '7bdc9664-807d-4db4-af7c-f7d2b055d8b1',
      username: 'angrymouse157',
      password: 'dennis',
      salt: '0NLOQoVa',
      md5: 'dfaea02c20cea69f187056561ee18219',
      sha1: '7ba634f2229b629e13761a6ffa60a9c6537eeb92',
      sha256:
        '0e0ee7981bdcea9c8d568757ac28a7eacfc91ab635bef1500271fcb3b1a3fbfc',
    },
    dob: {
      date: '1954-09-25T02:24:53.419Z',
      age: 68,
    },
    registered: {
      date: '2021-02-10T15:48:57.826Z',
      age: 1,
    },
    phone: '(467) 804-6035',
    cell: '(939) 515-4588',
    id: {
      name: 'SSN',
      value: '187-41-5646',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/92.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/92.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/92.jpg',
    },
    nat: 'US',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Jeremy',
      last: 'Bergeron',
    },
    location: {
      street: {
        number: 553,
        name: 'Park Rd',
      },
      city: 'Princeton',
      state: 'Nova Scotia',
      country: 'Canada',
      postcode: 'W5V 6J0',
      coordinates: {
        latitude: '-61.7603',
        longitude: '-168.0641',
      },
      timezone: {
        offset: '-1:00',
        description: 'Azores, Cape Verde Islands',
      },
    },
    email: 'jeremy.bergeron@example.com',
    login: {
      uuid: 'a2c4704a-2a04-4a20-a4aa-7346415e5d69',
      username: 'orangegoose843',
      password: 'rochelle',
      salt: 'rp2lScXh',
      md5: '3c866caa43748f1b1a711f9f74f4bcf8',
      sha1: '1aecae7879d1bd678010c89b4a052eef30bf63a3',
      sha256:
        'b2f3152cf17fe01b856ee015b2d133388a7c2d6037084d7e7c3a5c4d34c63c96',
    },
    dob: {
      date: '1978-11-30T14:30:47.270Z',
      age: 44,
    },
    registered: {
      date: '2008-03-26T10:21:50.181Z',
      age: 14,
    },
    phone: 'J21 V19-3994',
    cell: 'U82 Z17-2662',
    id: {
      name: 'SIN',
      value: '084221902',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/12.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/12.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/12.jpg',
    },
    nat: 'CA',
  },
  {
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'Mya',
      last: 'Petit',
    },
    location: {
      street: {
        number: 9340,
        name: 'Boulevard de la Duchère',
      },
      city: 'Rouen',
      state: 'Drôme',
      country: 'France',
      postcode: 72633,
      coordinates: {
        latitude: '52.8856',
        longitude: '18.5326',
      },
      timezone: {
        offset: '-5:00',
        description: 'Eastern Time (US & Canada), Bogota, Lima',
      },
    },
    email: 'mya.petit@example.com',
    login: {
      uuid: '2df19b72-0c46-4d09-a2e1-738146b45c3d',
      username: 'sadpanda954',
      password: 'jonas',
      salt: '70xo85nO',
      md5: '86e72edd0202faba14dc0dbbe0e20d9e',
      sha1: '77d032850c3531edc0a18b846108b025dc140009',
      sha256:
        '1b1676e67ac3cbda11ba6fa95e307817de833e92422b659bdfb375b9ab572ac5',
    },
    dob: {
      date: '2000-06-09T22:13:00.390Z',
      age: 22,
    },
    registered: {
      date: '2017-07-26T05:43:58.143Z',
      age: 5,
    },
    phone: '03-67-21-55-75',
    cell: '06-50-38-75-34',
    id: {
      name: 'INSEE',
      value: '21000556366423 83',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/57.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/57.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/57.jpg',
    },
    nat: 'FR',
  },
  {
    gender: 'female',
    name: {
      title: 'Ms',
      first: 'Teresa',
      last: 'Vicente',
    },
    location: {
      street: {
        number: 1838,
        name: 'Calle Mota',
      },
      city: 'Bilbao',
      state: 'País Vasco',
      country: 'Spain',
      postcode: 52916,
      coordinates: {
        latitude: '-5.1659',
        longitude: '35.2018',
      },
      timezone: {
        offset: '-2:00',
        description: 'Mid-Atlantic',
      },
    },
    email: 'teresa.vicente@example.com',
    login: {
      uuid: '14bf75f0-6539-4c18-a864-21101dde0f5b',
      username: 'beautifulostrich744',
      password: 'forward',
      salt: 'P1MujfKp',
      md5: '811e74b8260c2b95b7f257b78c02813b',
      sha1: '2f2e1c7b200b6af68796af9f9bed9f60388428d5',
      sha256:
        '17318aaedccd1fa1fb2f7cb728fd18a9ded3a68886420477c8140be963ad0aa6',
    },
    dob: {
      date: '1956-05-04T20:10:10.248Z',
      age: 66,
    },
    registered: {
      date: '2003-10-31T16:59:29.774Z',
      age: 19,
    },
    phone: '988-140-006',
    cell: '651-228-342',
    id: {
      name: 'DNI',
      value: '62833896-G',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/84.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/84.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/84.jpg',
    },
    nat: 'ES',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Emil',
      last: 'Kircher',
    },
    location: {
      street: {
        number: 5357,
        name: 'Berliner Straße',
      },
      city: 'Wolframs-Eschenbach',
      state: 'Hessen',
      country: 'Germany',
      postcode: 31206,
      coordinates: {
        latitude: '82.5809',
        longitude: '-88.9066',
      },
      timezone: {
        offset: '-12:00',
        description: 'Eniwetok, Kwajalein',
      },
    },
    email: 'emil.kircher@example.com',
    login: {
      uuid: '00c34676-967a-464e-bec4-17b11873826d',
      username: 'yellowbear740',
      password: 'call',
      salt: '4q4oqtzh',
      md5: 'd736dec5329c48d9d9148281ef7756e8',
      sha1: '2b895fbbad3816916143c0e2ce5fe6987008808b',
      sha256:
        '459b81a21c8e357ad2b2c40fa33c4d88dd4e0837e3ebafe8dd22ab7e232e8589',
    },
    dob: {
      date: '1967-02-14T14:23:27.038Z',
      age: 55,
    },
    registered: {
      date: '2009-10-12T12:54:52.967Z',
      age: 13,
    },
    phone: '0084-0309261',
    cell: '0177-7042122',
    id: {
      name: 'SVNR',
      value: '51 140267 K 003',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/49.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/49.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/49.jpg',
    },
    nat: 'DE',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'name', 'cell', 'email', 'picture'];
  dataSource = data;
}
