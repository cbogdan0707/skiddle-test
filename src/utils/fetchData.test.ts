import { fetchEvents } from './fetchData';

const mockEventsResponse = {
  error: 0,
  totalcount: '340',
  pagecount: 20,
  results: [
    {
      id: '13812685',
      EventCode: 'FEST',
      eventname: 'Centreforce 883 Presents Pineapple In The Park',
      cancelled: '0',
      cancellationDate: '',
      cancellationType: '',
      cancellationReason: '',
      rescheduledDate: '',
      venue: {
        id: 85412,
        name: 'Colesdale Farm',
        address: 'Colesdale Farm, Northaw Road West, Northaw',
        town: 'Potters Bar',
        postcode_lookup: 'Enfield',
        postcode: 'EN6 4QZ',
        country: 'GB',
        phone: '',
        latitude: 51.699813,
        longitude: -0.124076,
        type: 'Outdoors',
        rating: 4,
      },
      imageurl:
        'https://d31fr2pwly4c4s.cloudfront.net/3/d/7/1287981_0_centreforce-883-presents-pineapple-in-the-park_th.jpg',
      largeimageurl:
        'https://d31fr2pwly4c4s.cloudfront.net/3/d/7/1287981_0_centreforce-883-presents-pineapple-in-the-park.jpg',
      link:
        'https://www.skiddle.com/whats-on/Enfield/Colesdale-Farm/Centreforce-883-Presents-Pineapple-In-The-Park/13812685/',
      date: '2020-09-13',
      startdate: '2020-09-13T12:00:00+00:00',
      enddate: '2020-09-13T21:00:00+00:00',
      description:
        'Centreforce 883 Presents Pineapple In The Park featuring The Real Thing, Odyssey, The Artful Dodget & many more! ',
      openingtimes: {
        doorsopen: '12:00',
        doorsclose: '21:00',
        lastentry: '18:00',
      },
      minage: '18',
      imgoing: null,
      goingtos: 0,
      goingtocount: '404',
      tickets: true,
      entryprice: '25',
      eventvisibility: 'public',
      rep: {
        enabled: false,
      },
    },
    {
      id: '13816465',
      EventCode: 'FILM',
      eventname: 'COOL RUNNINGS (1993) Cert PG',
      cancelled: '0',
      cancellationDate: '',
      cancellationType: '',
      cancellationReason: '',
      rescheduledDate: '',
      venue: {
        id: 103399,
        name: 'The Kingsway Cinema Kings Heath',
        address: '69 High Street, Kings Heath',
        town: 'Birmingham',
        postcode_lookup: 'Birmingham',
        postcode: 'B14 7BH',
        country: 'GB',
        phone: '',
        latitude: 52.4366978,
        longitude: -1.8918567,
        type: 'Theatre',
        rating: 0,
      },
      imageurl:
        'https://d31fr2pwly4c4s.cloudfront.net/9/3/2/1289539_0_cool-runnings-1993cert-pg_th.jpg',
      largeimageurl:
        'https://d31fr2pwly4c4s.cloudfront.net/9/3/2/1289539_0_cool-runnings-1993cert-pg.jpg',
      link:
        'https://www.skiddle.com/whats-on/Birmingham/The-Kingsway-Cinema-Kings-Heath/COOL-RUNNINGS-1993-Cert-PG/13816465/',
      date: '2020-09-13',
      startdate: '2020-09-13T17:00:00+00:00',
      enddate: '2020-09-13T19:00:00+00:00',
      description:
        'A Jamaican bobsleigh team fights many odds, including a reluctant coach, to compete in the 1988 Winter Olympics. ',
      openingtimes: {
        doorsopen: '17:00',
        doorsclose: '19:00',
        lastentry: '17:00',
      },
      minage: '5',
      imgoing: null,
      goingtos: 0,
      goingtocount: '4',
      tickets: true,
      entryprice: 'From £6 to £12 NO EXTRA FEES',
      eventvisibility: 'public',
      rep: {
        enabled: false,
      },
    },
  ],
  elastic: {
    timing: 6,
  },
  requestId: 'api_5f5df67ecc9d42.76032360',
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockEventsResponse),
  })
);

describe('fetching events', () => {
  it('returns valid response when request is succesfull', async () => {
    const response = await fetchEvents('man');
    expect(response).toEqual(mockEventsResponse);
  });
});
