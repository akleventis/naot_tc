import { useRouter } from "next/router";
const bannerText = 'Learn casting and splinting techniques through intensive hands-on instruction and application from experienced certified orthopaedic technologists!';

const learningObjectivesTitle = 'Overall Learning Objectives'
const learningObjectives = [
    'Demonstrate proper casting technique for application and removal of upper and lower extremity casts and splints (achieve through lecture, demonstration, and hands-on practice).',
    'Recognize indications for various types of cast/splint treatment.',
    'Identify best practices for cast application and removal.',
    'Identify casting/splinting complications and their possible solutions',
    'Learn proper patient care protocols',
  ];

const hotelTitle = 'Hotel'
const hotelText = "A special room rate of $99 per night plus tax for a single/double occupancy is available for workshop participants at the Holiday Inn Chicago O'Hare Rosemont. You may make reservations by calling the hotel at 847-954-8600, and be sure to reference the room block for “National Association of Orthopaedic Technologists” to receive the special rate.";

const sponsorTitle = "Sponsored By"
const sponsorImageSrc = '../../bsn.png'

const flyerImageSrc= '../../casting_transparent.png'

const topicsTitle = 'Topics & Applications'
const topicsInfo = [
    'Cast Complications',
    'Short Arm',
    'Thumb Spica Cast',
    'Ulnar Arm Cast',
    'Long Arm Cast',
    'Short Arm Cast',
  ];

const certsTitle = "CEU/CME's"
const certsInfo = [
'OTC',
'OPA-C/OA-C',
'ATC',
'PA-C',
'BOC',
];

const logoSrc = '../../naot_logo.png'
const cityState = 'Chicago, IL'
const date = 'Sat July 15th, 2023'
const time = '8:00am - 5:00pm'
const addressTitle = 'Holiday Inn & Suites (Rosemont)'
const addressStreet='10233 West Higgins Rd.'
const cityStateZip = 'Rosemont, IL 60018'
const phoneNumber = '847-954-8600'

const facultyTitle = "Faculty"
const facultyInfo = 'Courses instructed by Certified Orthopaedic Technologists (OTC) credentialed by the National Board for Certification of Orthopaedic Technologists (NBCOT). Faculty will be nationally-recognized professionals with many years of experience in the field of orthopaedic technology.';


const registrationEnd = '6/30/2023';

const cancelTitle = "Cancellation"
const cancelText =
  'Written cancellations are required. Cancellations made up to two weeks before the workshop date are subject to a $25 processing fee. No refunds will be provided for cancellations within two weeks of the scheduled program. Substitutions are permitted at any time.';

const buyButtonID = "buy_btn_1NH9ViD6jiafmpE3gsUN6AHN"
const buyButtonKey = "pk_test_51NFfY3D6jiafmpE38xBE78d7ToSPLZd4s1P9idrr7Y9AE4VjjTwK1BdqmVFZMSmZ2vO8vUNXt9VosK5ty5DZmIDf00HQv2fvZv"

// map of city: city data
// if val not in map, route to home screen && clear query params
// use map to fill out all flyer details
// separate json file, json -> map conversion

export default function Event () {
    const router = useRouter()
    let city = router.query && router.query.city ? router.query.city : "";

    return (
        <main>
            <h1>{city}</h1>
        </main>
    )
}