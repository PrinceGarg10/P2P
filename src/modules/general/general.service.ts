import * as _ from 'lodash';
import { Injectable } from '@nestjs/common';
import { RoleEnum } from '../common/constants/role';

@Injectable()
export class GeneralService {
  constructor(
  ) { }



  async states(): Promise<any[]> {
    return statesData;
  }

  getRole() {
    const roles: any = { ...RoleEnum }
    return Object.values(roles)
  }

}

const statesData = [
  {
    id: 1,
    name: 'ANDHRA PRADESH',
    cities: [
      {
        id: 4,
        name: 'Adilabad',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
      {
        id: 5,
        name: 'Anantapur',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
      {
        id: 6,
        name: 'Chittoor',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
      {
        id: 7,
        name: 'East Godavari',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
      {
        id: 8,
        name: 'Guntur',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
      {
        id: 9,
        name: 'Hyderabad',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
      {
        id: 10,
        name: 'Kadapa',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
      {
        id: 11,
        name: 'Karimnagar',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
      {
        id: 12,
        name: 'Khammam',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
      {
        id: 13,
        name: 'Krishna',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
      {
        id: 14,
        name: 'Kurnool',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
      {
        id: 15,
        name: 'Mahbubnagar',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
      {
        id: 16,
        name: 'Medak',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
      {
        id: 17,
        name: 'Nalgonda',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
      {
        id: 18,
        name: 'Nellore',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
      {
        id: 19,
        name: 'Nizamabad',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
      {
        id: 20,
        name: 'Prakasam',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
      {
        id: 21,
        name: 'Rangareddi',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
      {
        id: 22,
        name: 'Srikakulam',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
      {
        id: 23,
        name: 'Vishakhapatnam',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
      {
        id: 24,
        name: 'Vizianagaram',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
      {
        id: 25,
        name: 'Warangal',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
      {
        id: 26,
        name: 'West Godavari',
        state: {
          id: 1,
          name: 'ANDHRA PRADESH',
        },
      },
    ],
  },
  {
    id: 2,
    name: 'ASSAM',
    cities: [
      {
        id: 37,
        name: 'Barpeta',
        state: {
          id: 2,
          name: 'ASSAM',
        },
      },
      {
        id: 38,
        name: 'Bongaigaon',
        state: {
          id: 2,
          name: 'ASSAM',
        },
      },
      {
        id: 39,
        name: 'Cachar',
        state: {
          id: 2,
          name: 'ASSAM',
        },
      },
      {
        id: 40,
        name: 'Darrang',
        state: {
          id: 2,
          name: 'ASSAM',
        },
      },
      {
        id: 41,
        name: 'Dhemaji',
        state: {
          id: 2,
          name: 'ASSAM',
        },
      },
      {
        id: 42,
        name: 'Dhubri',
        state: {
          id: 2,
          name: 'ASSAM',
        },
      },
      {
        id: 43,
        name: 'Dibrugarh',
        state: {
          id: 2,
          name: 'ASSAM',
        },
      },
      {
        id: 44,
        name: 'Goalpara',
        state: {
          id: 2,
          name: 'ASSAM',
        },
      },
      {
        id: 45,
        name: 'Golaghat',
        state: {
          id: 2,
          name: 'ASSAM',
        },
      },
      {
        id: 46,
        name: 'Hailakandi',
        state: {
          id: 2,
          name: 'ASSAM',
        },
      },
      {
        id: 47,
        name: 'Jorhat',
        state: {
          id: 2,
          name: 'ASSAM',
        },
      },
      {
        id: 48,
        name: 'Karbi Anglong',
        state: {
          id: 2,
          name: 'ASSAM',
        },
      },
      {
        id: 49,
        name: 'Karimganj',
        state: {
          id: 2,
          name: 'ASSAM',
        },
      },
      {
        id: 50,
        name: 'Kokrajhar',
        state: {
          id: 2,
          name: 'ASSAM',
        },
      },
      {
        id: 51,
        name: 'Lakhimpur',
        state: {
          id: 2,
          name: 'ASSAM',
        },
      },
      {
        id: 52,
        name: 'Marigaon',
        state: {
          id: 2,
          name: 'ASSAM',
        },
      },
      {
        id: 53,
        name: 'Nagaon',
        state: {
          id: 2,
          name: 'ASSAM',
        },
      },
      {
        id: 54,
        name: 'Nalbari',
        state: {
          id: 2,
          name: 'ASSAM',
        },
      },
      {
        id: 55,
        name: 'North Cachar Hills',
        state: {
          id: 2,
          name: 'ASSAM',
        },
      },
      {
        id: 56,
        name: 'Sibsagar',
        state: {
          id: 2,
          name: 'ASSAM',
        },
      },
      {
        id: 57,
        name: 'Sonitpur',
        state: {
          id: 2,
          name: 'ASSAM',
        },
      },
      {
        id: 58,
        name: 'Tinsukia',
        state: {
          id: 2,
          name: 'ASSAM',
        },
      },
    ],
  },
  {
    id: 3,
    name: 'ARUNACHAL PRADESH',
    cities: [
      {
        id: 27,
        name: 'Anjaw',
        state: {
          id: 3,
          name: 'ARUNACHAL PRADESH',
        },
      },
      {
        id: 28,
        name: 'Changlang',
        state: {
          id: 3,
          name: 'ARUNACHAL PRADESH',
        },
      },
      {
        id: 29,
        name: 'East Kameng',
        state: {
          id: 3,
          name: 'ARUNACHAL PRADESH',
        },
      },
      {
        id: 30,
        name: 'Lohit',
        state: {
          id: 3,
          name: 'ARUNACHAL PRADESH',
        },
      },
      {
        id: 31,
        name: 'Lower Subansiri',
        state: {
          id: 3,
          name: 'ARUNACHAL PRADESH',
        },
      },
      {
        id: 32,
        name: 'Papum Pare',
        state: {
          id: 3,
          name: 'ARUNACHAL PRADESH',
        },
      },
      {
        id: 33,
        name: 'Tirap',
        state: {
          id: 3,
          name: 'ARUNACHAL PRADESH',
        },
      },
      {
        id: 34,
        name: 'Dibang Valley',
        state: {
          id: 3,
          name: 'ARUNACHAL PRADESH',
        },
      },
      {
        id: 35,
        name: 'Upper Subansiri',
        state: {
          id: 3,
          name: 'ARUNACHAL PRADESH',
        },
      },
      {
        id: 36,
        name: 'West Kameng',
        state: {
          id: 3,
          name: 'ARUNACHAL PRADESH',
        },
      },
    ],
  },
  {
    id: 4,
    name: 'BIHAR',
    cities: [
      {
        id: 59,
        name: 'Araria',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 60,
        name: 'Aurangabad',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 61,
        name: 'Banka',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 62,
        name: 'Begusarai',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 63,
        name: 'Bhagalpur',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 64,
        name: 'Bhojpur',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 65,
        name: 'Buxar',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 66,
        name: 'Darbhanga',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 67,
        name: 'Purba Champaran',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 68,
        name: 'Gaya',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 69,
        name: 'Gopalganj',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 70,
        name: 'Jamui',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 71,
        name: 'Jehanabad',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 72,
        name: 'Khagaria',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 73,
        name: 'Kishanganj',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 74,
        name: 'Kaimur',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 75,
        name: 'Katihar',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 76,
        name: 'Lakhisarai',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 77,
        name: 'Madhubani',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 78,
        name: 'Munger',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 79,
        name: 'Madhepura',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 80,
        name: 'Muzaffarpur',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 81,
        name: 'Nalanda',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 82,
        name: 'Nawada',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 83,
        name: 'Patna',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 84,
        name: 'Purnia',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 85,
        name: 'Rohtas',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 86,
        name: 'Saharsa',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 87,
        name: 'Samastipur',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 88,
        name: 'Sheohar',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 89,
        name: 'Sheikhpura',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 90,
        name: 'Saran',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 91,
        name: 'Sitamarhi',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 92,
        name: 'Supaul',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 93,
        name: 'Siwan',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 94,
        name: 'Vaishali',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
      {
        id: 95,
        name: 'Pashchim Champaran',
        state: {
          id: 4,
          name: 'BIHAR',
        },
      },
    ],
  },
  {
    id: 5,
    name: 'GUJRAT',
    cities: [
      {
        id: 125,
        name: 'Ahmedabad',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 126,
        name: 'Amreli District',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 127,
        name: 'Anand',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 128,
        name: 'Banaskantha',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 129,
        name: 'Bharuch',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 130,
        name: 'Bhavnagar',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 131,
        name: 'Dahod',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 132,
        name: 'The Dangs',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 133,
        name: 'Gandhinagar',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 134,
        name: 'Jamnagar',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 135,
        name: 'Junagadh',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 136,
        name: 'Kutch',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 137,
        name: 'Kheda',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 138,
        name: 'Mehsana',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 139,
        name: 'Narmada',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 140,
        name: 'Navsari',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 141,
        name: 'Patan',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 142,
        name: 'Panchmahal',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 143,
        name: 'Porbandar',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 144,
        name: 'Rajkot',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 145,
        name: 'Sabarkantha',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 146,
        name: 'Surendranagar',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 147,
        name: 'Surat',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 148,
        name: 'Vadodara',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
      {
        id: 149,
        name: 'Valsad',
        state: {
          id: 5,
          name: 'GUJRAT',
        },
      },
    ],
  },
  {
    id: 6,
    name: 'HARYANA',
    cities: [
      {
        id: 150,
        name: 'Ambala',
        state: {
          id: 6,
          name: 'HARYANA',
        },
      },
      {
        id: 151,
        name: 'Bhiwani',
        state: {
          id: 6,
          name: 'HARYANA',
        },
      },
      {
        id: 152,
        name: 'Faridabad',
        state: {
          id: 6,
          name: 'HARYANA',
        },
      },
      {
        id: 153,
        name: 'Fatehabad',
        state: {
          id: 6,
          name: 'HARYANA',
        },
      },
      {
        id: 154,
        name: 'Gurgaon',
        state: {
          id: 6,
          name: 'HARYANA',
        },
      },
      {
        id: 155,
        name: 'Hissar',
        state: {
          id: 6,
          name: 'HARYANA',
        },
      },
      {
        id: 156,
        name: 'Jhajjar',
        state: {
          id: 6,
          name: 'HARYANA',
        },
      },
      {
        id: 157,
        name: 'Jind',
        state: {
          id: 6,
          name: 'HARYANA',
        },
      },
      {
        id: 158,
        name: 'Karnal',
        state: {
          id: 6,
          name: 'HARYANA',
        },
      },
      {
        id: 159,
        name: 'Kaithal',
        state: {
          id: 6,
          name: 'HARYANA',
        },
      },
      {
        id: 160,
        name: 'Kurukshetra',
        state: {
          id: 6,
          name: 'HARYANA',
        },
      },
      {
        id: 161,
        name: 'Mahendragarh',
        state: {
          id: 6,
          name: 'HARYANA',
        },
      },
      {
        id: 162,
        name: 'Mewat',
        state: {
          id: 6,
          name: 'HARYANA',
        },
      },
      {
        id: 163,
        name: 'Panchkula',
        state: {
          id: 6,
          name: 'HARYANA',
        },
      },
      {
        id: 164,
        name: 'Panipat',
        state: {
          id: 6,
          name: 'HARYANA',
        },
      },
      {
        id: 165,
        name: 'Rewari',
        state: {
          id: 6,
          name: 'HARYANA',
        },
      },
      {
        id: 166,
        name: 'Rohtak',
        state: {
          id: 6,
          name: 'HARYANA',
        },
      },
      {
        id: 167,
        name: 'Sirsa',
        state: {
          id: 6,
          name: 'HARYANA',
        },
      },
      {
        id: 168,
        name: 'Sonepat',
        state: {
          id: 6,
          name: 'HARYANA',
        },
      },
      {
        id: 169,
        name: 'Yamuna Nagar',
        state: {
          id: 6,
          name: 'HARYANA',
        },
      },
      {
        id: 170,
        name: 'Palwal',
        state: {
          id: 6,
          name: 'HARYANA',
        },
      },
    ],
  },
  {
    id: 7,
    name: 'HIMACHAL PRADESH',
    cities: [
      {
        id: 171,
        name: 'Bilaspur',
        state: {
          id: 7,
          name: 'HIMACHAL PRADESH',
        },
      },
      {
        id: 172,
        name: 'Chamba',
        state: {
          id: 7,
          name: 'HIMACHAL PRADESH',
        },
      },
      {
        id: 173,
        name: 'Hamirpur',
        state: {
          id: 7,
          name: 'HIMACHAL PRADESH',
        },
      },
      {
        id: 174,
        name: 'Kangra',
        state: {
          id: 7,
          name: 'HIMACHAL PRADESH',
        },
      },
      {
        id: 175,
        name: 'Kinnaur',
        state: {
          id: 7,
          name: 'HIMACHAL PRADESH',
        },
      },
      {
        id: 176,
        name: 'Kulu',
        state: {
          id: 7,
          name: 'HIMACHAL PRADESH',
        },
      },
      {
        id: 177,
        name: 'Lahaul and Spiti',
        state: {
          id: 7,
          name: 'HIMACHAL PRADESH',
        },
      },
      {
        id: 178,
        name: 'Mandi',
        state: {
          id: 7,
          name: 'HIMACHAL PRADESH',
        },
      },
      {
        id: 179,
        name: 'Shimla',
        state: {
          id: 7,
          name: 'HIMACHAL PRADESH',
        },
      },
      {
        id: 180,
        name: 'Sirmaur',
        state: {
          id: 7,
          name: 'HIMACHAL PRADESH',
        },
      },
      {
        id: 181,
        name: 'Solan',
        state: {
          id: 7,
          name: 'HIMACHAL PRADESH',
        },
      },
      {
        id: 182,
        name: 'Una',
        state: {
          id: 7,
          name: 'HIMACHAL PRADESH',
        },
      },
    ],
  },
  {
    id: 8,
    name: 'JAMMU & KASHMIR',
    cities: [
      {
        id: 183,
        name: 'Anantnag',
        state: {
          id: 8,
          name: 'JAMMU & KASHMIR',
        },
      },
      {
        id: 184,
        name: 'Badgam',
        state: {
          id: 8,
          name: 'JAMMU & KASHMIR',
        },
      },
      {
        id: 185,
        name: 'Bandipore',
        state: {
          id: 8,
          name: 'JAMMU & KASHMIR',
        },
      },
      {
        id: 186,
        name: 'Baramula',
        state: {
          id: 8,
          name: 'JAMMU & KASHMIR',
        },
      },
      {
        id: 187,
        name: 'Doda',
        state: {
          id: 8,
          name: 'JAMMU & KASHMIR',
        },
      },
      {
        id: 188,
        name: 'Jammu',
        state: {
          id: 8,
          name: 'JAMMU & KASHMIR',
        },
      },
      {
        id: 189,
        name: 'Kargil',
        state: {
          id: 8,
          name: 'JAMMU & KASHMIR',
        },
      },
      {
        id: 190,
        name: 'Kathua',
        state: {
          id: 8,
          name: 'JAMMU & KASHMIR',
        },
      },
      {
        id: 191,
        name: 'Kupwara',
        state: {
          id: 8,
          name: 'JAMMU & KASHMIR',
        },
      },
      {
        id: 192,
        name: 'Leh',
        state: {
          id: 8,
          name: 'JAMMU & KASHMIR',
        },
      },
      {
        id: 193,
        name: 'Poonch',
        state: {
          id: 8,
          name: 'JAMMU & KASHMIR',
        },
      },
      {
        id: 194,
        name: 'Pulwama',
        state: {
          id: 8,
          name: 'JAMMU & KASHMIR',
        },
      },
      {
        id: 195,
        name: 'Rajauri',
        state: {
          id: 8,
          name: 'JAMMU & KASHMIR',
        },
      },
      {
        id: 196,
        name: 'Srinagar',
        state: {
          id: 8,
          name: 'JAMMU & KASHMIR',
        },
      },
      {
        id: 197,
        name: 'Samba',
        state: {
          id: 8,
          name: 'JAMMU & KASHMIR',
        },
      },
      {
        id: 198,
        name: 'Udhampur',
        state: {
          id: 8,
          name: 'JAMMU & KASHMIR',
        },
      },
    ],
  },
  {
    id: 9,
    name: 'KARNATAKA',
    cities: [
      {
        id: 219,
        name: 'Bidar',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 220,
        name: 'Belgaum',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 221,
        name: 'Bijapur',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 222,
        name: 'Bagalkot',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 223,
        name: 'Bellary',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 224,
        name: 'Bangalore Rural District',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 225,
        name: 'Bangalore Urban District',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 226,
        name: 'Chamarajnagar',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 227,
        name: 'Chikmagalur',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 228,
        name: 'Chitradurga',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 229,
        name: 'Davanagere',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 230,
        name: 'Dharwad',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 231,
        name: 'Dakshina Kannada',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 232,
        name: 'Gadag',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 233,
        name: 'Gulbarga',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 234,
        name: 'Hassan',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 235,
        name: 'Haveri District',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 236,
        name: 'Kodagu',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 237,
        name: 'Kolar',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 238,
        name: 'Koppal',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 239,
        name: 'Mandya',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 240,
        name: 'Mysore',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 241,
        name: 'Raichur',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 242,
        name: 'Shimoga',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 243,
        name: 'Tumkur',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 244,
        name: 'Udupi',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 245,
        name: 'Uttara Kannada',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 246,
        name: 'Ramanagara',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 247,
        name: 'Chikballapur',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
      {
        id: 248,
        name: 'Yadagiri',
        state: {
          id: 9,
          name: 'KARNATAKA',
        },
      },
    ],
  },
  {
    id: 10,
    name: 'KERALA',
    cities: [
      {
        id: 249,
        name: 'Alappuzha',
        state: {
          id: 10,
          name: 'KERALA',
        },
      },
      {
        id: 250,
        name: 'Ernakulam',
        state: {
          id: 10,
          name: 'KERALA',
        },
      },
      {
        id: 251,
        name: 'Idukki',
        state: {
          id: 10,
          name: 'KERALA',
        },
      },
      {
        id: 252,
        name: 'Kollam',
        state: {
          id: 10,
          name: 'KERALA',
        },
      },
      {
        id: 253,
        name: 'Kannur',
        state: {
          id: 10,
          name: 'KERALA',
        },
      },
      {
        id: 254,
        name: 'Kasaragod',
        state: {
          id: 10,
          name: 'KERALA',
        },
      },
      {
        id: 255,
        name: 'Kottayam',
        state: {
          id: 10,
          name: 'KERALA',
        },
      },
      {
        id: 256,
        name: 'Kozhikode',
        state: {
          id: 10,
          name: 'KERALA',
        },
      },
      {
        id: 257,
        name: 'Malappuram',
        state: {
          id: 10,
          name: 'KERALA',
        },
      },
      {
        id: 258,
        name: 'Palakkad',
        state: {
          id: 10,
          name: 'KERALA',
        },
      },
      {
        id: 259,
        name: 'Pathanamthitta',
        state: {
          id: 10,
          name: 'KERALA',
        },
      },
      {
        id: 260,
        name: 'Thrissur',
        state: {
          id: 10,
          name: 'KERALA',
        },
      },
      {
        id: 261,
        name: 'Thiruvananthapuram',
        state: {
          id: 10,
          name: 'KERALA',
        },
      },
      {
        id: 262,
        name: 'Wayanad',
        state: {
          id: 10,
          name: 'KERALA',
        },
      },
    ],
  },
  {
    id: 11,
    name: 'MADHYA PRADESH',
    cities: [
      {
        id: 263,
        name: 'Alirajpur',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 264,
        name: 'Anuppur',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 265,
        name: 'Ashok Nagar',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 266,
        name: 'Balaghat',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 267,
        name: 'Barwani',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 268,
        name: 'Betul',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 269,
        name: 'Bhind',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 270,
        name: 'Bhopal',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 271,
        name: 'Burhanpur',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 272,
        name: 'Chhatarpur',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 273,
        name: 'Chhindwara',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 274,
        name: 'Damoh',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 275,
        name: 'Datia',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 276,
        name: 'Dewas',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 277,
        name: 'Dhar',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 278,
        name: 'Dindori',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 279,
        name: 'Guna',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 280,
        name: 'Gwalior',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 281,
        name: 'Harda',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 282,
        name: 'Hoshangabad',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 283,
        name: 'Indore',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 284,
        name: 'Jabalpur',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 285,
        name: 'Jhabua',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 286,
        name: 'Katni',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 287,
        name: 'Khandwa',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 288,
        name: 'Khargone',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 289,
        name: 'Mandla',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 290,
        name: 'Mandsaur',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 291,
        name: 'Morena',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 292,
        name: 'Narsinghpur',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 293,
        name: 'Neemuch',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 294,
        name: 'Panna',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 295,
        name: 'Rewa',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 296,
        name: 'Rajgarh',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 297,
        name: 'Ratlam',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 298,
        name: 'Raisen',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 299,
        name: 'Sagar',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 300,
        name: 'Satna',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 301,
        name: 'Sehore',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 302,
        name: 'Seoni',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 303,
        name: 'Shahdol',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 304,
        name: 'Shajapur',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 305,
        name: 'Sheopur',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 306,
        name: 'Shivpuri',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 307,
        name: 'Sidhi',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 308,
        name: 'Singrauli',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 309,
        name: 'Tikamgarh',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 310,
        name: 'Ujjain',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 311,
        name: 'Umaria',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
      {
        id: 312,
        name: 'Vidisha',
        state: {
          id: 11,
          name: 'MADHYA PRADESH',
        },
      },
    ],
  },
  {
    id: 12,
    name: 'MAHARASHTRA',
    cities: [
      {
        id: 313,
        name: 'Ahmednagar',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 314,
        name: 'Akola',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 315,
        name: 'Amrawati',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 316,
        name: 'Aurangabad',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 317,
        name: 'Bhandara',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 318,
        name: 'Beed',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 319,
        name: 'Buldhana',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 320,
        name: 'Chandrapur',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 321,
        name: 'Dhule',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 322,
        name: 'Gadchiroli',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 323,
        name: 'Gondiya',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 324,
        name: 'Hingoli',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 325,
        name: 'Jalgaon',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 326,
        name: 'Jalna',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 327,
        name: 'Kolhapur',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 328,
        name: 'Latur',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 329,
        name: 'Mumbai City',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 330,
        name: 'Mumbai suburban',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 331,
        name: 'Nandurbar',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 332,
        name: 'Nanded',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 333,
        name: 'Nagpur',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 334,
        name: 'Nashik',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 335,
        name: 'Osmanabad',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 336,
        name: 'Parbhani',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 337,
        name: 'Pune',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 338,
        name: 'Raigad',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 339,
        name: 'Ratnagiri',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 340,
        name: 'Sindhudurg',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 341,
        name: 'Sangli',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 342,
        name: 'Solapur',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 343,
        name: 'Satara',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 344,
        name: 'Thane',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 345,
        name: 'Wardha',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 346,
        name: 'Washim',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
      {
        id: 347,
        name: 'Yavatmal',
        state: {
          id: 12,
          name: 'MAHARASHTRA',
        },
      },
    ],
  },
  {
    id: 13,
    name: 'MANIPUR',
    cities: [
      {
        id: 348,
        name: 'Bishnupur',
        state: {
          id: 13,
          name: 'MANIPUR',
        },
      },
      {
        id: 349,
        name: 'Churachandpur',
        state: {
          id: 13,
          name: 'MANIPUR',
        },
      },
      {
        id: 350,
        name: 'Chandel',
        state: {
          id: 13,
          name: 'MANIPUR',
        },
      },
      {
        id: 351,
        name: 'Imphal East',
        state: {
          id: 13,
          name: 'MANIPUR',
        },
      },
      {
        id: 352,
        name: 'Senapati',
        state: {
          id: 13,
          name: 'MANIPUR',
        },
      },
      {
        id: 353,
        name: 'Tamenglong',
        state: {
          id: 13,
          name: 'MANIPUR',
        },
      },
      {
        id: 354,
        name: 'Thoubal',
        state: {
          id: 13,
          name: 'MANIPUR',
        },
      },
      {
        id: 355,
        name: 'Ukhrul',
        state: {
          id: 13,
          name: 'MANIPUR',
        },
      },
      {
        id: 356,
        name: 'Imphal West',
        state: {
          id: 13,
          name: 'MANIPUR',
        },
      },
    ],
  },
  {
    id: 14,
    name: 'MEGHALAYA',
    cities: [
      {
        id: 357,
        name: 'East Garo Hills',
        state: {
          id: 14,
          name: 'MEGHALAYA',
        },
      },
      {
        id: 358,
        name: 'East Khasi Hills',
        state: {
          id: 14,
          name: 'MEGHALAYA',
        },
      },
      {
        id: 359,
        name: 'Jaintia Hills',
        state: {
          id: 14,
          name: 'MEGHALAYA',
        },
      },
      {
        id: 360,
        name: 'Ri-Bhoi',
        state: {
          id: 14,
          name: 'MEGHALAYA',
        },
      },
      {
        id: 361,
        name: 'South Garo Hills',
        state: {
          id: 14,
          name: 'MEGHALAYA',
        },
      },
      {
        id: 362,
        name: 'West Garo Hills',
        state: {
          id: 14,
          name: 'MEGHALAYA',
        },
      },
      {
        id: 363,
        name: 'West Khasi Hills',
        state: {
          id: 14,
          name: 'MEGHALAYA',
        },
      },
    ],
  },
  {
    id: 15,
    name: 'MIZORAM',
    cities: [
      {
        id: 364,
        name: 'Aizawl',
        state: {
          id: 15,
          name: 'MIZORAM',
        },
      },
      {
        id: 365,
        name: 'Champhai',
        state: {
          id: 15,
          name: 'MIZORAM',
        },
      },
      {
        id: 366,
        name: 'Kolasib',
        state: {
          id: 15,
          name: 'MIZORAM',
        },
      },
      {
        id: 367,
        name: 'Lawngtlai',
        state: {
          id: 15,
          name: 'MIZORAM',
        },
      },
      {
        id: 368,
        name: 'Lunglei',
        state: {
          id: 15,
          name: 'MIZORAM',
        },
      },
      {
        id: 369,
        name: 'Mamit',
        state: {
          id: 15,
          name: 'MIZORAM',
        },
      },
      {
        id: 370,
        name: 'Saiha',
        state: {
          id: 15,
          name: 'MIZORAM',
        },
      },
      {
        id: 371,
        name: 'Serchhip',
        state: {
          id: 15,
          name: 'MIZORAM',
        },
      },
    ],
  },
  {
    id: 16,
    name: 'NAGALAND',
    cities: [
      {
        id: 372,
        name: 'Dimapur',
        state: {
          id: 16,
          name: 'NAGALAND',
        },
      },
      {
        id: 373,
        name: 'Kohima',
        state: {
          id: 16,
          name: 'NAGALAND',
        },
      },
      {
        id: 374,
        name: 'Mokokchung',
        state: {
          id: 16,
          name: 'NAGALAND',
        },
      },
      {
        id: 375,
        name: 'Mon',
        state: {
          id: 16,
          name: 'NAGALAND',
        },
      },
      {
        id: 376,
        name: 'Phek',
        state: {
          id: 16,
          name: 'NAGALAND',
        },
      },
      {
        id: 377,
        name: 'Tuensang',
        state: {
          id: 16,
          name: 'NAGALAND',
        },
      },
      {
        id: 378,
        name: 'Wokha',
        state: {
          id: 16,
          name: 'NAGALAND',
        },
      },
      {
        id: 379,
        name: 'Zunheboto',
        state: {
          id: 16,
          name: 'NAGALAND',
        },
      },
    ],
  },
  {
    id: 17,
    name: 'ORISSA',
    cities: [
      {
        id: 380,
        name: 'Angul',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 381,
        name: 'Boudh',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 382,
        name: 'Bhadrak',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 383,
        name: 'Bolangir',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 384,
        name: 'Bargarh',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 385,
        name: 'Baleswar',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 386,
        name: 'Cuttack',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 387,
        name: 'Debagarh',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 388,
        name: 'Dhenkanal',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 389,
        name: 'Ganjam',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 390,
        name: 'Gajapati',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 391,
        name: 'Jharsuguda',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 392,
        name: 'Jajapur',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 393,
        name: 'Jagatsinghpur',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 394,
        name: 'Khordha',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 395,
        name: 'Kendujhar',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 396,
        name: 'Kalahandi',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 397,
        name: 'Kandhamal',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 398,
        name: 'Koraput',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 399,
        name: 'Kendrapara',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 400,
        name: 'Malkangiri',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 401,
        name: 'Mayurbhanj',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 402,
        name: 'Nabarangpur',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 403,
        name: 'Nuapada',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 404,
        name: 'Nayagarh',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 405,
        name: 'Puri',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 406,
        name: 'Rayagada',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 407,
        name: 'Sambalpur',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 408,
        name: 'Subarnapur',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
      {
        id: 409,
        name: 'Sundargarh',
        state: {
          id: 17,
          name: 'ORISSA',
        },
      },
    ],
  },
  {
    id: 18,
    name: 'PUNJAB',
    cities: [
      {
        id: 414,
        name: 'Amritsar',
        state: {
          id: 18,
          name: 'PUNJAB',
        },
      },
      {
        id: 415,
        name: 'Bathinda',
        state: {
          id: 18,
          name: 'PUNJAB',
        },
      },
      {
        id: 416,
        name: 'Firozpur',
        state: {
          id: 18,
          name: 'PUNJAB',
        },
      },
      {
        id: 417,
        name: 'Faridkot',
        state: {
          id: 18,
          name: 'PUNJAB',
        },
      },
      {
        id: 418,
        name: 'Fatehgarh Sahib',
        state: {
          id: 18,
          name: 'PUNJAB',
        },
      },
      {
        id: 419,
        name: 'Gurdaspur',
        state: {
          id: 18,
          name: 'PUNJAB',
        },
      },
      {
        id: 420,
        name: 'Hoshiarpur',
        state: {
          id: 18,
          name: 'PUNJAB',
        },
      },
      {
        id: 421,
        name: 'Jalandhar',
        state: {
          id: 18,
          name: 'PUNJAB',
        },
      },
      {
        id: 422,
        name: 'Kapurthala',
        state: {
          id: 18,
          name: 'PUNJAB',
        },
      },
      {
        id: 423,
        name: 'Ludhiana',
        state: {
          id: 18,
          name: 'PUNJAB',
        },
      },
      {
        id: 424,
        name: 'Mansa',
        state: {
          id: 18,
          name: 'PUNJAB',
        },
      },
      {
        id: 425,
        name: 'Moga',
        state: {
          id: 18,
          name: 'PUNJAB',
        },
      },
      {
        id: 426,
        name: 'Mukatsar',
        state: {
          id: 18,
          name: 'PUNJAB',
        },
      },
      {
        id: 427,
        name: 'Nawan Shehar',
        state: {
          id: 18,
          name: 'PUNJAB',
        },
      },
      {
        id: 428,
        name: 'Patiala',
        state: {
          id: 18,
          name: 'PUNJAB',
        },
      },
      {
        id: 429,
        name: 'Rupnagar',
        state: {
          id: 18,
          name: 'PUNJAB',
        },
      },
      {
        id: 430,
        name: 'Sangrur',
        state: {
          id: 18,
          name: 'PUNJAB',
        },
      },
    ],
  },
  {
    id: 19,
    name: 'RAJASTHAN',
    cities: [
      {
        id: 431,
        name: 'Ajmer',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 432,
        name: 'Alwar',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 433,
        name: 'Bikaner',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 434,
        name: 'Barmer',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 435,
        name: 'Banswara',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 436,
        name: 'Bharatpur',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 437,
        name: 'Baran',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 438,
        name: 'Bundi',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 439,
        name: 'Bhilwara',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 440,
        name: 'Churu',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 441,
        name: 'Chittorgarh',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 442,
        name: 'Dausa',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 443,
        name: 'Dholpur',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 444,
        name: 'Dungapur',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 445,
        name: 'Ganganagar',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 446,
        name: 'Hanumangarh',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 447,
        name: 'Juhnjhunun',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 448,
        name: 'Jalore',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 449,
        name: 'Jodhpur',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 450,
        name: 'Jaipur',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 451,
        name: 'Jaisalmer',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 452,
        name: 'Jhalawar',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 453,
        name: 'Karauli',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 454,
        name: 'Kota',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 455,
        name: 'Nagaur',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 456,
        name: 'Pali',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 457,
        name: 'Pratapgarh',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 458,
        name: 'Rajsamand',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 459,
        name: 'Sikar',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 460,
        name: 'Sawai Madhopur',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 461,
        name: 'Sirohi',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 462,
        name: 'Tonk',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
      {
        id: 463,
        name: 'Udaipur',
        state: {
          id: 19,
          name: 'RAJASTHAN',
        },
      },
    ],
  },
  {
    id: 20,
    name: 'SIKKIM',
    cities: [
      {
        id: 464,
        name: 'East Sikkim',
        state: {
          id: 20,
          name: 'SIKKIM',
        },
      },
      {
        id: 465,
        name: 'North Sikkim',
        state: {
          id: 20,
          name: 'SIKKIM',
        },
      },
      {
        id: 466,
        name: 'South Sikkim',
        state: {
          id: 20,
          name: 'SIKKIM',
        },
      },
      {
        id: 467,
        name: 'West Sikkim',
        state: {
          id: 20,
          name: 'SIKKIM',
        },
      },
    ],
  },
  {
    id: 21,
    name: 'TAMIL NADU',
    cities: [
      {
        id: 468,
        name: 'Ariyalur',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 469,
        name: 'Chennai',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 470,
        name: 'Coimbatore',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 471,
        name: 'Cuddalore',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 472,
        name: 'Dharmapuri',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 473,
        name: 'Dindigul',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 474,
        name: 'Erode',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 475,
        name: 'Kanchipuram',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 476,
        name: 'Kanyakumari',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 477,
        name: 'Karur',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 478,
        name: 'Madurai',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 479,
        name: 'Nagapattinam',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 480,
        name: 'The Nilgiris',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 481,
        name: 'Namakkal',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 482,
        name: 'Perambalur',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 483,
        name: 'Pudukkottai',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 484,
        name: 'Ramanathapuram',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 485,
        name: 'Salem',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 486,
        name: 'Sivagangai',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 487,
        name: 'Tiruppur',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 488,
        name: 'Tiruchirappalli',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 489,
        name: 'Theni',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 490,
        name: 'Tirunelveli',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 491,
        name: 'Thanjavur',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 492,
        name: 'Thoothukudi',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 493,
        name: 'Thiruvallur',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 494,
        name: 'Thiruvarur',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 495,
        name: 'Tiruvannamalai',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 496,
        name: 'Vellore',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
      {
        id: 497,
        name: 'Villupuram',
        state: {
          id: 21,
          name: 'TAMIL NADU',
        },
      },
    ],
  },
  {
    id: 22,
    name: 'TRIPURA',
    cities: [
      {
        id: 498,
        name: 'Dhalai',
        state: {
          id: 22,
          name: 'TRIPURA',
        },
      },
      {
        id: 499,
        name: 'North Tripura',
        state: {
          id: 22,
          name: 'TRIPURA',
        },
      },
      {
        id: 500,
        name: 'South Tripura',
        state: {
          id: 22,
          name: 'TRIPURA',
        },
      },
      {
        id: 501,
        name: 'West Tripura',
        state: {
          id: 22,
          name: 'TRIPURA',
        },
      },
    ],
  },
  {
    id: 23,
    name: 'UTTAR PRADESH',
    cities: [
      {
        id: 515,
        name: 'Agra',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 516,
        name: 'Allahabad',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 517,
        name: 'Aligarh',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 518,
        name: 'Ambedkar Nagar',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 519,
        name: 'Auraiya',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 520,
        name: 'Azamgarh',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 521,
        name: 'Barabanki',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 522,
        name: 'Badaun',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 523,
        name: 'Bagpat',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 524,
        name: 'Bahraich',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 525,
        name: 'Bijnor',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 526,
        name: 'Ballia',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 527,
        name: 'Banda',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 528,
        name: 'Balrampur',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 529,
        name: 'Bareilly',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 530,
        name: 'Basti',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 531,
        name: 'Bulandshahr',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 532,
        name: 'Chandauli',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 533,
        name: 'Chitrakoot',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 534,
        name: 'Deoria',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 535,
        name: 'Etah',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 536,
        name: 'Kanshiram Nagar',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 537,
        name: 'Etawah',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 538,
        name: 'Firozabad',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 539,
        name: 'Farrukhabad',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 540,
        name: 'Fatehpur',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 541,
        name: 'Faizabad',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 542,
        name: 'Gautam Buddha Nagar',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 543,
        name: 'Gonda',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 544,
        name: 'Ghazipur',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 545,
        name: 'Gorkakhpur',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 546,
        name: 'Ghaziabad',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 547,
        name: 'Hamirpur',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 548,
        name: 'Hardoi',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 549,
        name: 'Mahamaya Nagar',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 550,
        name: 'Jhansi',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 551,
        name: 'Jalaun',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 552,
        name: 'Jyotiba Phule Nagar',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 553,
        name: 'Jaunpur District',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 554,
        name: 'Kanpur Dehat',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 555,
        name: 'Kannauj',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 556,
        name: 'Kanpur Nagar',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 557,
        name: 'Kaushambi',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 558,
        name: 'Kushinagar',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 559,
        name: 'Lalitpur',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 560,
        name: 'Lakhimpur Kheri',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 561,
        name: 'Lucknow',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 562,
        name: 'Mau',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 563,
        name: 'Meerut',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 564,
        name: 'Maharajganj',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 565,
        name: 'Mahoba',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 566,
        name: 'Mirzapur',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 567,
        name: 'Moradabad',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 568,
        name: 'Mainpuri',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 569,
        name: 'Mathura',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 570,
        name: 'Muzaffarnagar',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 571,
        name: 'Pilibhit',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 572,
        name: 'Pratapgarh',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 573,
        name: 'Rampur',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 574,
        name: 'Rae Bareli',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 575,
        name: 'Saharanpur',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 576,
        name: 'Sitapur',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 577,
        name: 'Shahjahanpur',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 578,
        name: 'Sant Kabir Nagar',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 579,
        name: 'Siddharthnagar',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 580,
        name: 'Sonbhadra',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 581,
        name: 'Sant Ravidas Nagar',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 582,
        name: 'Sultanpur',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 583,
        name: 'Shravasti',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 584,
        name: 'Unnao',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
      {
        id: 585,
        name: 'Varanasi',
        state: {
          id: 23,
          name: 'UTTAR PRADESH',
        },
      },
    ],
  },
  {
    id: 24,
    name: 'WEST BENGAL',
    cities: [
      {
        id: 586,
        name: 'Birbhum',
        state: {
          id: 24,
          name: 'WEST BENGAL',
        },
      },
      {
        id: 587,
        name: 'Bankura',
        state: {
          id: 24,
          name: 'WEST BENGAL',
        },
      },
      {
        id: 588,
        name: 'Bardhaman',
        state: {
          id: 24,
          name: 'WEST BENGAL',
        },
      },
      {
        id: 589,
        name: 'Darjeeling',
        state: {
          id: 24,
          name: 'WEST BENGAL',
        },
      },
      {
        id: 590,
        name: 'Dakshin Dinajpur',
        state: {
          id: 24,
          name: 'WEST BENGAL',
        },
      },
      {
        id: 591,
        name: 'Hooghly',
        state: {
          id: 24,
          name: 'WEST BENGAL',
        },
      },
      {
        id: 592,
        name: 'Howrah',
        state: {
          id: 24,
          name: 'WEST BENGAL',
        },
      },
      {
        id: 593,
        name: 'Jalpaiguri',
        state: {
          id: 24,
          name: 'WEST BENGAL',
        },
      },
      {
        id: 594,
        name: 'Cooch Behar',
        state: {
          id: 24,
          name: 'WEST BENGAL',
        },
      },
      {
        id: 595,
        name: 'Kolkata',
        state: {
          id: 24,
          name: 'WEST BENGAL',
        },
      },
      {
        id: 596,
        name: 'Malda',
        state: {
          id: 24,
          name: 'WEST BENGAL',
        },
      },
      {
        id: 597,
        name: 'Midnapore',
        state: {
          id: 24,
          name: 'WEST BENGAL',
        },
      },
      {
        id: 598,
        name: 'Murshidabad',
        state: {
          id: 24,
          name: 'WEST BENGAL',
        },
      },
      {
        id: 599,
        name: 'Nadia',
        state: {
          id: 24,
          name: 'WEST BENGAL',
        },
      },
      {
        id: 600,
        name: 'North 24 Parganas',
        state: {
          id: 24,
          name: 'WEST BENGAL',
        },
      },
      {
        id: 601,
        name: 'South 24 Parganas',
        state: {
          id: 24,
          name: 'WEST BENGAL',
        },
      },
      {
        id: 602,
        name: 'Purulia',
        state: {
          id: 24,
          name: 'WEST BENGAL',
        },
      },
      {
        id: 603,
        name: 'Uttar Dinajpur',
        state: {
          id: 24,
          name: 'WEST BENGAL',
        },
      },
    ],
  },
  {
    id: 25,
    name: 'DELHI',
    cities: [
      {
        id: 114,
        name: 'Central Delhi',
        state: {
          id: 25,
          name: 'DELHI',
        },
      },
      {
        id: 115,
        name: 'East Delhi',
        state: {
          id: 25,
          name: 'DELHI',
        },
      },
      {
        id: 116,
        name: 'New Delhi',
        state: {
          id: 25,
          name: 'DELHI',
        },
      },
      {
        id: 117,
        name: 'North Delhi',
        state: {
          id: 25,
          name: 'DELHI',
        },
      },
      {
        id: 118,
        name: 'North East Delhi',
        state: {
          id: 25,
          name: 'DELHI',
        },
      },
      {
        id: 119,
        name: 'North West Delhi',
        state: {
          id: 25,
          name: 'DELHI',
        },
      },
      {
        id: 120,
        name: 'South Delhi',
        state: {
          id: 25,
          name: 'DELHI',
        },
      },
      {
        id: 121,
        name: 'South West Delhi',
        state: {
          id: 25,
          name: 'DELHI',
        },
      },
      {
        id: 122,
        name: 'West Delhi',
        state: {
          id: 25,
          name: 'DELHI',
        },
      },
    ],
  },
  {
    id: 26,
    name: 'GOA',
    cities: [
      {
        id: 123,
        name: 'North Goa',
        state: {
          id: 26,
          name: 'GOA',
        },
      },
      {
        id: 124,
        name: 'South Goa',
        state: {
          id: 26,
          name: 'GOA',
        },
      },
    ],
  },
  {
    id: 27,
    name: 'PONDICHERY',
    cities: [
      {
        id: 410,
        name: 'Karaikal',
        state: {
          id: 27,
          name: 'PONDICHERY',
        },
      },
      {
        id: 411,
        name: 'Mahe',
        state: {
          id: 27,
          name: 'PONDICHERY',
        },
      },
      {
        id: 412,
        name: 'Puducherry',
        state: {
          id: 27,
          name: 'PONDICHERY',
        },
      },
      {
        id: 413,
        name: 'Yanam',
        state: {
          id: 27,
          name: 'PONDICHERY',
        },
      },
    ],
  },
  {
    id: 28,
    name: 'LAKSHDWEEP',
    cities: [],
  },
  {
    id: 29,
    name: 'DAMAN & DIU',
    cities: [
      {
        id: 112,
        name: 'Diu',
        state: {
          id: 29,
          name: 'DAMAN & DIU',
        },
      },
      {
        id: 113,
        name: 'Daman',
        state: {
          id: 29,
          name: 'DAMAN & DIU',
        },
      },
    ],
  },
  {
    id: 30,
    name: 'DADRA & NAGAR',
    cities: [],
  },
  {
    id: 31,
    name: 'CHANDIGARH',
    cities: [],
  },
  {
    id: 32,
    name: 'ANDAMAN & NICOBAR',
    cities: [
      {
        id: 1,
        name: 'North and Middle Andaman',
        state: {
          id: 32,
          name: 'ANDAMAN & NICOBAR',
        },
      },
      {
        id: 2,
        name: 'South Andaman',
        state: {
          id: 32,
          name: 'ANDAMAN & NICOBAR',
        },
      },
      {
        id: 3,
        name: 'Nicobar',
        state: {
          id: 32,
          name: 'ANDAMAN & NICOBAR',
        },
      },
    ],
  },
  {
    id: 33,
    name: 'UTTARANCHAL',
    cities: [
      {
        id: 502,
        name: 'Almora',
        state: {
          id: 33,
          name: 'UTTARANCHAL',
        },
      },
      {
        id: 503,
        name: 'Bageshwar',
        state: {
          id: 33,
          name: 'UTTARANCHAL',
        },
      },
      {
        id: 504,
        name: 'Chamoli',
        state: {
          id: 33,
          name: 'UTTARANCHAL',
        },
      },
      {
        id: 505,
        name: 'Champawat',
        state: {
          id: 33,
          name: 'UTTARANCHAL',
        },
      },
      {
        id: 506,
        name: 'Dehradun',
        state: {
          id: 33,
          name: 'UTTARANCHAL',
        },
      },
      {
        id: 507,
        name: 'Haridwar',
        state: {
          id: 33,
          name: 'UTTARANCHAL',
        },
      },
      {
        id: 508,
        name: 'Nainital',
        state: {
          id: 33,
          name: 'UTTARANCHAL',
        },
      },
      {
        id: 509,
        name: 'Pauri Garhwal',
        state: {
          id: 33,
          name: 'UTTARANCHAL',
        },
      },
      {
        id: 510,
        name: 'Pithoragharh',
        state: {
          id: 33,
          name: 'UTTARANCHAL',
        },
      },
      {
        id: 511,
        name: 'Rudraprayag',
        state: {
          id: 33,
          name: 'UTTARANCHAL',
        },
      },
      {
        id: 512,
        name: 'Tehri Garhwal',
        state: {
          id: 33,
          name: 'UTTARANCHAL',
        },
      },
      {
        id: 513,
        name: 'Udham Singh Nagar',
        state: {
          id: 33,
          name: 'UTTARANCHAL',
        },
      },
      {
        id: 514,
        name: 'Uttarkashi',
        state: {
          id: 33,
          name: 'UTTARANCHAL',
        },
      },
    ],
  },
  {
    id: 34,
    name: 'JHARKHAND',
    cities: [
      {
        id: 199,
        name: 'Bokaro',
        state: {
          id: 34,
          name: 'JHARKHAND',
        },
      },
      {
        id: 200,
        name: 'Chatra',
        state: {
          id: 34,
          name: 'JHARKHAND',
        },
      },
      {
        id: 201,
        name: 'Deoghar',
        state: {
          id: 34,
          name: 'JHARKHAND',
        },
      },
      {
        id: 202,
        name: 'Dhanbad',
        state: {
          id: 34,
          name: 'JHARKHAND',
        },
      },
      {
        id: 203,
        name: 'Dumka',
        state: {
          id: 34,
          name: 'JHARKHAND',
        },
      },
      {
        id: 204,
        name: 'Purba Singhbhum',
        state: {
          id: 34,
          name: 'JHARKHAND',
        },
      },
      {
        id: 205,
        name: 'Garhwa',
        state: {
          id: 34,
          name: 'JHARKHAND',
        },
      },
      {
        id: 206,
        name: 'Giridih',
        state: {
          id: 34,
          name: 'JHARKHAND',
        },
      },
      {
        id: 207,
        name: 'Godda',
        state: {
          id: 34,
          name: 'JHARKHAND',
        },
      },
      {
        id: 208,
        name: 'Gumla',
        state: {
          id: 34,
          name: 'JHARKHAND',
        },
      },
      {
        id: 209,
        name: 'Hazaribagh',
        state: {
          id: 34,
          name: 'JHARKHAND',
        },
      },
      {
        id: 210,
        name: 'Koderma',
        state: {
          id: 34,
          name: 'JHARKHAND',
        },
      },
      {
        id: 211,
        name: 'Lohardaga',
        state: {
          id: 34,
          name: 'JHARKHAND',
        },
      },
      {
        id: 212,
        name: 'Pakur',
        state: {
          id: 34,
          name: 'JHARKHAND',
        },
      },
      {
        id: 213,
        name: 'Palamu',
        state: {
          id: 34,
          name: 'JHARKHAND',
        },
      },
      {
        id: 214,
        name: 'Ranchi',
        state: {
          id: 34,
          name: 'JHARKHAND',
        },
      },
      {
        id: 215,
        name: 'Sahibganj',
        state: {
          id: 34,
          name: 'JHARKHAND',
        },
      },
      {
        id: 216,
        name: 'Seraikela and Kharsawan',
        state: {
          id: 34,
          name: 'JHARKHAND',
        },
      },
      {
        id: 217,
        name: 'Pashchim Singhbhum',
        state: {
          id: 34,
          name: 'JHARKHAND',
        },
      },
      {
        id: 218,
        name: 'Ramgarh',
        state: {
          id: 34,
          name: 'JHARKHAND',
        },
      },
    ],
  },
  {
    id: 35,
    name: 'CHHATTISGARH',
    cities: [
      {
        id: 96,
        name: 'Bastar',
        state: {
          id: 35,
          name: 'CHATTISGARH',
        },
      },
      {
        id: 97,
        name: 'Bilaspur',
        state: {
          id: 35,
          name: 'CHATTISGARH',
        },
      },
      {
        id: 98,
        name: 'Dantewada',
        state: {
          id: 35,
          name: 'CHATTISGARH',
        },
      },
      {
        id: 99,
        name: 'Dhamtari',
        state: {
          id: 35,
          name: 'CHATTISGARH',
        },
      },
      {
        id: 100,
        name: 'Durg',
        state: {
          id: 35,
          name: 'CHATTISGARH',
        },
      },
      {
        id: 101,
        name: 'Jashpur',
        state: {
          id: 35,
          name: 'CHATTISGARH',
        },
      },
      {
        id: 102,
        name: 'Janjgir-Champa',
        state: {
          id: 35,
          name: 'CHATTISGARH',
        },
      },
      {
        id: 103,
        name: 'Korba',
        state: {
          id: 35,
          name: 'CHATTISGARH',
        },
      },
      {
        id: 104,
        name: 'Koriya',
        state: {
          id: 35,
          name: 'CHATTISGARH',
        },
      },
      {
        id: 105,
        name: 'Kanker',
        state: {
          id: 35,
          name: 'CHATTISGARH',
        },
      },
      {
        id: 106,
        name: 'Kawardha',
        state: {
          id: 35,
          name: 'CHATTISGARH',
        },
      },
      {
        id: 107,
        name: 'Mahasamund',
        state: {
          id: 35,
          name: 'CHATTISGARH',
        },
      },
      {
        id: 108,
        name: 'Raigarh',
        state: {
          id: 35,
          name: 'CHATTISGARH',
        },
      },
      {
        id: 109,
        name: 'Rajnandgaon',
        state: {
          id: 35,
          name: 'CHATTISGARH',
        },
      },
      {
        id: 110,
        name: 'Raipur',
        state: {
          id: 35,
          name: 'CHATTISGARH',
        },
      },
      {
        id: 111,
        name: 'Surguja',
        state: {
          id: 35,
          name: 'CHATTISGARH',
        },
      },
      {
        id: 604,
        name: "Balod",
        state: {
          id: 35,
          name: "CHATTISGARH",
        },
      },
      {
        id: 605,
        name: "Baloda Bazar",
        state: {
          id: 35,
          name: "CHATTISGARH",
        },
      },
      {
        id: 606,
        name: "Balrampur",
        state: {
          id: 35,
          name: "CHATTISGARH",
        },
      },
      {
        id: 607,
        name: "Bemetara",
        state: {
          id: 35,
          name: "CHATTISGARH",
        },
      },
      {
        id: 608,
        name: "Bijapur",
        state: {
          id: 35,
          name: "CHATTISGARH",
        },
      },
      {
        id: 609,
        name: "Gariaband",
        state: {
          id: 35,
          name: "CHATTISGARH",
        },
      },
      {
        id: 610,
        name: "Gaurella-Pendra-Marwahi",
        state: {
          id: 35,
          name: "CHATTISGARH",
        },
      },
      {
        id: 611,
        name: "Kabirdham",
        state: {
          id: 35,
          name: "CHATTISGARH",
        },
      },
      {
        id: 612,
        name: "Kondagaon",
        state: {
          id: 35,
          name: "CHATTISGARH",
        },
      },
      {
        id: 613,
        name: "Mungeli",
        state: {
          id: 35,
          name: "CHATTISGARH",
        },
      },
      {
        id: 614,
        name: "Narayanpur",
        state: {
          id: 35,
          name: "CHATTISGARH",
        },
      },
      {
        id: 615,
        name: "Sukma",
        state: {
          id: 35,
          name: "CHATTISGARH",
        },
      },
      {
        id: 616,
        name: "Surajpur",
        state: {
          id: 35,
          name: "CHATTISGARH",
        },
      },
      {
        id: 617,
        name: "Manendragarh district",
        state: {
          id: 35,
          name: "CHATTISGARH",
        },
      },
      {
        id: 618,
        name: "Mohla-Manpur-Chowki",
        state: {
          id: 35,
          name: "CHATTISGARH",
        },
      },
      {
        id: 619,
        name: "Sarangarh-Bilaigarh",
        state: {
          id: 35,
          name: "CHATTISGARH",
        },
      },
      {
        id: 620,
        name: "Shakti",
        state: {
          id: 35,
          name: "CHATTISGARH",
        },
      },

    ],
  },
];

export const StandardAndSection = {
  STANDARD: {
    PRE_PRIMARY: [
      'LKG', 'UKG', 'NURSERY'
    ],
    PRIMARY: [
      'I', 'II', 'III', 'IV', 'V'
    ],
    UPPER_PRIMARY: [
      'VI', 'VII', 'VIII'
    ],
    SECONDARY: [
      'IX', 'X'
    ],
    SENIOR_SECONDARY: [
      'XI', 'XII'
    ]
  },
  SECTION: ['A'],

}
