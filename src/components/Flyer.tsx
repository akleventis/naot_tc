import styles from '@/styles/Flyer.module.scss';
import { Container } from 'react-bootstrap';
import BuyButtonComponent from './BuyButton';

const headTitle: string = 'NATIONAL ASSOCIATION OF ORTHOPAEDIC TECHNOLOGISTS'
const bannerTitle: string = 'Chicago Casting & Splinting Skills Workshop';
const bannerText: string = 'Learn casting and splinting techniques through intensive hands-on instruction and application from experienced certified orthopaedic technologists!';

const learningObjectivesTitle: string = 'Overall Learning Objectives'
const learningObjectives: string[] = [
    'Demonstrate proper casting technique for application and removal of upper and lower extremity casts and splints (achieve through lecture, demonstration, and hands-on practice).',
    'Recognize indications for various types of cast/splint treat- ment.',
    'Identify best practices for cast application and removal.',
    'Identify casting/splinting complications and their possible solutions',
    'Learn proper patient care protocols',
  ];

const hotelTitle: string = 'hotel'
const hotelText: string = "A special room rate of $99 per night plus tax for a single/double occupancy is available for workshop participants at the Holiday Inn Chicago O'Hare Rosemont. You may make reservations by calling the hotel at 847-954-8600, and be sure to reference the room block for “National Association of Orthopaedic Technologists” to receive the special rate.";

const sponserImageSrc: string = '../../bsn.png'

const topicsTitle: string = 'Topics & Applications'
const topicsInfo: string[] = [
    'Cast Complications',
    'Short Arm',
    'Thumb Spica Cast',
    'Ulnar Arm Cast',
    'Long Arm Cast',
    'Short Arm Cast',
  ];

const certsTitle: string = "CEU/CME's"
const certsInfo: string[] = [
'OTC',
'OPA-C/OA-C',
'ATC',
'PA-C',
'BOC',
];

const logoSrc: string = '../../logo.png'
const cityState: string = 'Chicago, IL'
const date: string = 'Sat July 15th, 2023'
const time: string = '8:00am - 5:00pm'
const addressTitle: string = 'Holiday Inn & Suites (Rosemont)'
const addressStreet: string='10233 West Higgins Rd.'
const cityStateZip: string = 'Rosemont, IL 60018'
const phoneNumber: string = '847-954-8600'

const facultyTitle: string = "Faculty"
const facultyInfo: string = 'Courses instructed by Certified Orthopaedic Technologists (OTC) credentialed by the National Board for Certification of Orthopaedic Technologists (NBCOT). Faculty will be nationally-recognized professionals with many years of experience in the field of orthopaedic technology.';

const registrationFee: string = '$100';
const registrationEnd: string = '6/30/2023';
const cancellationText: string =
  'Cancellations must be made in writing. Cancelations are permitted up to two weeks prior to workshop date, and are assessed a $25 processing fee. Refunds are not provided for cancellations within two weeks of the scheduled program. Substitutions are permitted at any time.';

const buyButtonID = "buy_btn_1NH9ViD6jiafmpE3gsUN6AHN"
const buyButtonKey = "pk_test_51NFfY3D6jiafmpE38xBE78d7ToSPLZd4s1P9idrr7Y9AE4VjjTwK1BdqmVFZMSmZ2vO8vUNXt9VosK5ty5DZmIDf00HQv2fvZv"


function Title({text}: {text: string}) {
    return (
        <div>
            <h3>{text}</h3>
        </div>
    )
}

function Banner({title, text} : {title: string; text: string}) {
    return (
        <div>
            <div>
                <h5>{title}</h5>
            </div>
            <div>
                <p>{text}</p>
            </div>
        </div>
    )
} 

function TextInfo({title, text}: {title: string; text: string}){
    return (
        <div>
            <div>
                <h5>{title}</h5>
            </div>
            <div>
                <p>{text}</p>
            </div>
        </div>
    )
}

function ListInfoLG({title, listItems}: {title: string; listItems: string[]}){
    return (
        <div>
            <div>
                <h5>{title}</h5>
            </div>
            <div>
                <ul>
                    {listItems.map((text, i) => (
                        <li key={i}>{text}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

function ListInfoSM({title, listItems}: {title: string; listItems: string[]}){
    return (
        <div>
            <div>
                <h5>{title}</h5>
            </div>
            <div>
                <ul>
                    {listItems.map((text, i) => (
                        <li key={i}>{text}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

function Sponser({title, imageSRC}: {title: string; imageSRC: string}){

    return (
        <div>
            <div>
                <h5>{title}</h5>
            </div>
            <div>
                <img src={imageSRC} alt='sponser' width='200'/>
            </div>
        </div>
    )
}

function Footer({logoSrc, cityState, date, time, addressTitle, addressStreet, cityStateZip, phoneNumber}: {logoSrc: string; cityState: string; date: string; time: string; addressTitle: string; addressStreet: string; cityStateZip: string; phoneNumber: string}){
    return (
        <div>
            <div>
                <h5>{cityState}</h5>
                <div>
                    <p>{date}</p>
                    <p>{time}</p>
                </div>
            </div>
            <div>
                <p>{addressTitle}</p>
                <p>{addressStreet}</p>
                <p>{cityStateZip}</p>
                <p>{phoneNumber}</p>
            </div>
        </div>
    )
}

export default function Flyer(){
    return (
        <>
        <Container>
            <Title text={headTitle}/>
            <Banner title={bannerTitle} text={bannerText}/>

            <ListInfoLG title={learningObjectivesTitle} listItems={learningObjectives}/>

            <TextInfo title={hotelTitle} text={hotelText} />
            <TextInfo title={facultyTitle} text={facultyInfo} />

            <ListInfoSM title={topicsTitle} listItems={topicsInfo}/>
            <ListInfoSM title={certsTitle} listItems={certsInfo}/>
            
            <Sponser title='Sponsered By' imageSRC={sponserImageSrc}/>

            <Footer logoSrc={logoSrc} cityState={cityState} date={date} time={time} addressTitle={addressTitle} addressStreet={addressStreet} cityStateZip={cityStateZip} phoneNumber={phoneNumber}/>
            <BuyButtonComponent buyButtonID={buyButtonID} buyButtonKey={buyButtonKey} />
        </Container>
        </>
    )
}
