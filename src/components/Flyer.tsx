import styles from '@/styles/Flyer.module.scss';
import { Container } from 'react-bootstrap';
import BuyButtonComponent from './BuyButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

function Banner({text} : {text: string}) {
    return (
        <div className={styles.Banner_container}>{text}</div>
    )
}
function TextInfo({title, text}: {title: string; text: string}){
    return (
        <div className={`${styles.TextInfo_container}`}>
            <div>
                <h5 className={`${styles.title}`}>{title}</h5>
            </div>
            <div>
                <p>{text}</p>
            </div>
        </div>
    )
}

function ListInfoLG({title, listItems}: {title: string; listItems: string[]}){
    return (
        <div className={styles.ListInfoLG_container}>
            <div>
                <h5 className={`${styles.title}`}>{title}</h5>
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
        <div className={`${styles.ListInfoSM_container} mb-3`}>
            <div>
                <h5 className={`${styles.title}`}>{title}</h5>
            </div>
            <div >
                <Row className={styles.row}>
                    {listItems.map((text, i) => (
                        <Col key={i} sm={6} className='p-0'>{text}</Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

function Sponsor({title, imageSRC}: {title: string; imageSRC: string}){

    return (
        <div className={styles.Sponsor_container}>
            <div>
                <h5 className={`${styles.title}`}>{title}</h5>
            </div>
            <div>
                <img src={imageSRC} alt='sponsor' width='200'/>
            </div>
        </div>
    )
}

function Footer({logoSrc, cityState, date, time, addressTitle, addressStreet, cityStateZip, phoneNumber}: {logoSrc: string; cityState: string; date: string; time: string; addressTitle: string; addressStreet: string; cityStateZip: string; phoneNumber: string}){
    return (
        <div className={styles.Footer_container}>
            <div className='d-flex justify-content-center p-2'>
                <img src={logoSrc} width='200px' />
            </div>
            <div className={styles.datetime_container}>
                <h5>{cityState}</h5>
                <div>
                    <p>{date}</p>
                    <p>{time}</p>
                </div>
            </div>
            <div className={styles.address_container}>
                <p>{addressTitle}</p>
                <p>{addressStreet}</p>
                <p>{cityStateZip}</p>
                <p>{phoneNumber}</p>
            </div>
        </div>
    )
}

function Register({endDateText, buyButtonID, buyButtonKey}: {endDateText: string; buyButtonID: string; buyButtonKey: string}) {
    return (
        <div className={styles.Register_container}>
            <BuyButtonComponent buyButtonID={buyButtonID} buyButtonKey={buyButtonKey} />
            <div>Registration ends: {registrationEnd}</div>
        </div>
    )
}

export default function Flyer(){
    return (
        <>
            <div className={`${styles.flyer_container} m-0 p-0 position-relative`}>
                <Banner text={bannerText} />

                <div className={styles.mobileWrap}>
                    <ListInfoLG title={learningObjectivesTitle} listItems={learningObjectives}/>
                </div>

                {/* float right */}
                <div className={styles.abs_0}>
                    <img src={flyerImageSrc} alt='flyer-img' width='100%'/>
                </div>

                {/* float right */}
                <div className={styles.mobileWrap}>
                    <div className={styles.abs_1}>
                        <ListInfoSM title={topicsTitle} listItems={topicsInfo}/>
                        <ListInfoSM title={certsTitle} listItems={certsInfo}/>
                    </div>
                </div>

                <div className={styles.mobileWrap}>
                    <TextInfo title={facultyTitle} text={facultyInfo} />
                </div>

                <div className={styles.mobileWrap}>
                    <TextInfo title={hotelTitle} text={hotelText} />
                </div>

                <div className={styles.mobileWrap}>
                    <Register endDateText={registrationEnd} buyButtonID={buyButtonID} buyButtonKey={buyButtonKey}/>
                </div>

                <div className={styles.mobileWrap}>
                    <TextInfo title={cancelTitle} text={cancelText}/>
                </div>

                {/* float right */}
                <div className={styles.mobileWrap}>
                    <div className={styles.abs_2}>
                        <Sponsor title={sponsorTitle} imageSRC={sponsorImageSrc}/>
                    </div>
                </div>


                {/* float right */}
                <div className={styles.mobileWrap}>
                    <div className={styles.abs_3}>
                        <Footer logoSrc={logoSrc} cityState={cityState} date={date} time={time} addressTitle={addressTitle} addressStreet={addressStreet} cityStateZip={cityStateZip} phoneNumber={phoneNumber}/>
                    </div>
                </div>
            </div>
        </>
    )
}
