import logo from './logo.svg';
import './App.css';
import { styled } from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 114px;
  
  position: absolute;
  width: 1150px;
  height: 1967px;
  left: 200px;
  top: 93px;
`;

const ImgMF = styled.img`
  box-sizing: border-box;

  position: absolute;
  width: 266.84px;
  height: 190.5px;
  left: 596px;
  top: 59px;

  background: url("Site1Img.png");
  border: 1px solid #000000;
  border-radius: 0px 10px 10px 0px;
`;

const TextI = styled.div`
position: absolute;
width: 115px;
height: 60px;
left: 367px;
top: 319px;

font-family: 'Lato';
font-style: normal;
font-weight: 600;
font-size: 50px;
line-height: 60px;
color: #4ABB37;

`;

const ImgG = styled.img`
box-sizing: border-box;

position: absolute;
width: 267px;
height: 163px;
left: 596px;
top: 267px;

background: url("Game1Img.png");
border: 1px solid #000000;
border-radius: 0px 10px 10px 0px;
`;

const TextMF = styled.div`
position: absolute;
width: 267px;
height: 60px;
left: 291px;
top: 94px;

font-family: 'Lato';
font-style: normal;
font-weight: 600;
font-size: 50px;
line-height: 60px;  
color: #000000;


`;

const Location = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 20px;

position: absolute;
width: 279px;
height: 95px;
left: 11px;
top: 445px;

`;

const ImageLocation = styled.div`
width: 95px;
height: 95px;
background: url("LocationImg.png");
flex: none;
order: 0;
flex-grow: 0;
`;

const FrameTextLocation = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 10px;
width: 164px;
height: 46px;
flex: none;
order: 1;
flex-grow: 0;
`;

const TextLocation1 = styled.div`
width: 164px;
height: 17px;

font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #000000;
flex: none;
order: 0;
flex-grow: 0;
`;

const FrameMenu = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 35px;
width: 483px;
height: 17px;
flex: none;
order: 0;
flex-grow: 0;
`;

const Menu = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 80px;

position: absolute;
width: 584px;
height: 21px;
left: 603px;
top: 3px;
`;

const TextLocation2 = styled.div`
width: 41px;
height: 19px;
font-family: 'Lato';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #000000;
flex: none;
order: 1;
flex-grow: 0;
`;

const TextFrameMenu1 = styled.div`
width: 75px;
height: 17px;

font-family: 'Lato';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
/* identical to box height */

letter-spacing: 0.28em;
text-transform: capitalize;

color: #000000;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`;

const TextFrameMenu2 = styled.div`
width: 102px;
height: 17px;

font-family: 'Lato';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
/* identical to box height */

letter-spacing: 0.28em;
text-transform: capitalize;

color: #000000;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`;

const TextFrameMenu3 = styled.div`
width: 111px;
height: 17px;

font-family: 'Lato';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
/* identical to box height */

letter-spacing: 0.28em;
text-transform: capitalize;

color: #000000;


/* Inside auto layout */

flex: none;
order: 2;
flex-grow: 0;
`;

const TextFrameMenu4 = styled.div`
width: 90px;
height: 17px;

font-family: 'Lato';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
/* identical to box height */

letter-spacing: 0.28em;
text-transform: capitalize;

color: #000000;


/* Inside auto layout */

flex: none;
order: 3;
flex-grow: 0;
`;

const Head = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 528px;

position: absolute;
width: 145px;
height: 39px;
left: 11px;
top: -6px;

`;

const FrameHead = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
padding: 0px;
gap: 2px;

width: 145px;
height: 39px;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`;

const TextHead1 = styled.div`
width: 142px;
height: 17px;

font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 167.5%;
/* or 23px */

letter-spacing: 0.28em;

color: #000000;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`;

const LineHead = styled.div`
width: 144.09px;
height: 0px;

/* green */

border: 1px solid #4ABB37;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`;

const TextHead2 = styled.div`
width: 145px;
height: 18px;

font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 57%;
/* or 8px */

letter-spacing: 0.28em;

color: #000000;


/* Inside auto layout */

flex: none;
order: 2;
flex-grow: 0;
`;

const About = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 25px;

position: absolute;
width: 390px;
height: 88px;
left: 401px;
top: 445px;
`;

const TextAbout = styled.div`
width: 390px;
height: 88px;

/* параграф */

font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 135%;
/* or 22px */

letter-spacing: 0.03em;

color: #000000;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`;

const FirstScreen = styled.div`
  width: 1150px;
  height: 533px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;



const Servises2 = styled.div`
position: absolute;
width: 1150px;
height: 747px;
left: 0px;
margin-top: 74px;

`;

const SerMyWork = styled.div`
position: absolute;
width: 243px;
height: 42px;
left: 457px;
top: -74px;

/* заголовок н2 */

font-family: 'Lato';
font-style: normal;
font-weight: 600;
font-size: 35px;
line-height: 42px;
/* identical to box height */

letter-spacing: 0.03em;
text-transform: uppercase;

color: #000000;
`;
const SerLink = styled.div`
position: absolute;
width: 335px;
height: 22px;
left: 732px;
top: 536px;

/* заголовок н3 */

font-family: 'Lato';
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 26px;
letter-spacing: 0.03em;
text-transform: uppercase;

color: #000000;

`;
const SerAboutSite = styled.div`
position: absolute;
width: 348px;
height: 60px;
left: 6px;
top: 487px;

/* заголовок н3 */

font-family: 'Lato';
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 26px;
letter-spacing: 0.03em;
text-transform: uppercase;

color: #000000;
`;
const SerImgWeb = styled.image`
position: absolute;
width: 500px;
height: 199.59px;
left: 650px;
top: 292px;

background: url("SerImgWeb.png");
`;
const SerLine3 = styled.div`
position: absolute;
width: 1150px;
height: 0px;
left: 0px;
top: 625.01px;

/* Основной цвет текса */

border: 1px solid #000000;
transform: rotate(-0.05deg);
`;
const SerTextSite = styled.div`
position: absolute;
width: 633px;
height: 120px;
left: 0px;
top: 292px;

/* заголовок н1 */

font-family: 'Lato';
font-style: normal;
font-weight: 600;
font-size: 50px;
line-height: 60px;

/* green */

color: #4ABB37;
`;
const SerLine2 = styled.div`
position: absolute;
width: 1150px;
height: 0px;
left: 0px;
top: 270px;

/* Основной цвет текса */

border: 1px solid #000000;
`;
const SerImgGames = styled.image`
position: absolute;
width: 600px;
height: 206.05px;
left: 550px;
top: 32px;

background: url("SerImgGame.png");
border-radius: 10px 0px;
`;
const SerTextGame = styled.div`
position: absolute;
width: 400px;
height: 60px;
left: 0px;
top: 105px;

/* заголовок н1 */

font-family: 'Lato';
font-style: normal;
font-weight: 600;
font-size: 50px;
line-height: 60px;
/* identical to box height */


/* Основной цвет текса */

color: #000000;

`;
const SerLine1 = styled.div`
position: absolute;
width: 1150px;
height: 0px;
left: 0px;
top: 0px;

/* Основной цвет текса */

border: 1px solid #000000;
`;

const Servises = styled.div`
  width: 1150px;
  height: 821px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const ConFrame1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
padding: 0px;
gap: 2px;

position: absolute;
width: 145px;
height: 29px;
left: 988px;
margin-top: 112px;
`;

const ConFrame2 = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 177px;

position: absolute;
width: 201px;
height: 26px;
left: 0px;
margin-top: 112px;

`;

const MyContacts = styled.div`
position: absolute;
width: 297px;
height: 41px;
left: 440px;
margin-top: 0px;

/* заголовок н2 */

font-family: 'Lato';
font-style: normal;
font-weight: 600;
font-size: 35px;
line-height: 42px;
letter-spacing: 0.03em;
text-transform: uppercase;

color: #000000;

`;

const ConName = styled.div`
width: 142px;
height: 17px;

font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 167.5%;
/* or 23px */

letter-spacing: 0.28em;

color: #000000;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`;

const ConLine = styled.div`
width: 144.09px;
height: 0px;

/* green */

border: 1px solid #4ABB37;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`;

const ConSurename = styled.div`
width: 145px;
height: 8px;

font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 57%;
/* identical to box height, or 8px */

letter-spacing: 0.28em;

color: #000000;


/* Inside auto layout */

flex: none;
order: 2;
flex-grow: 0;
`;

const NumberPhone = styled.div`
width: 201px;
height: 26px;

/* заголовок н3 */

font-family: 'Lato';
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 26px;
letter-spacing: 0.03em;
text-transform: uppercase;

/* Основной цвет текса */

color: #000000;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`;


const Contacts = styled.div`
  width: 1150px;
  height: 252px;
  flex: none;
  order: 2;
  flex-grow: 0;
`;
const AllRulesAreProt = styled.div`
  width: 199px;
  height: 19px;
  flex: none;
  order: 3;
  flex-grow: 0;
`;

const Desctop = styled.div`
position: relative;
width: 1550px;
height: 2060px;

background: #FFFFFF;
`;

function App() {

  return (

    <Main>
      <FirstScreen>
        <ImgMF></ImgMF>
        <TextMF>ВЕБСАЙТИ</TextMF>
        <ImgG></ImgG>
        <TextI>ІГРИ</TextI>
        <Location>
          <ImageLocation />
          <FrameTextLocation>
            <TextLocation1>
              МІСЦЕ ПРОЖИВАННЯ
            </TextLocation1>
            <TextLocation2>
              КИЇВ
            </TextLocation2>
          </FrameTextLocation>
        </Location>
        <Menu>
          <FrameMenu>
            <TextFrameMenu1>
              Головна
            </TextFrameMenu1>
            <TextFrameMenu2>
              Портфоліо
            </TextFrameMenu2>
            <TextFrameMenu3>
              Мої роботи
            </TextFrameMenu3>
            <TextFrameMenu4>
              Контакти
            </TextFrameMenu4>
          </FrameMenu>
        </Menu>
        <Head>
          <FrameHead>
            <TextHead1>
              Володимир
            </TextHead1>
            <LineHead />
            <TextHead2>
              Ніколаєвський
            </TextHead2>
          </FrameHead>
        </Head>
        <About>
          <TextAbout>
            Привіт! Мене звати Володимир Ніколаєвський. Я поки, що тільки починаючий розробник вебсайтів та ігор. Буду радий написати вам сайт чи зробити, якусь малу 2д гру.
          </TextAbout>
        </About>
      </FirstScreen>
      <Servises>
        <Servises2>
          <SerMyWork>
            Мої роботи
          </SerMyWork>
          <SerLink>
            Посилання на сайт
          </SerLink>
          <SerAboutSite>
            Сайт для тренування множення, віднімання, додавання на швидкість
          </SerAboutSite>
          <SerImgWeb />
          <SerLine3 />
          <SerTextSite>
            Програмка для тренування базової математики
          </SerTextSite>
          <SerLine2 />
          <SerImgGames />
          <SerTextGame>
            Маленька 2Д гра
          </SerTextGame>
          <SerLine1 />
        </Servises2>
      </Servises>
      <Contacts>
        <ConFrame1>
        <ConName>
            Володимир
          </ConName>
          <ConLine />
          <ConSurename>
            Ніколаєвський
          </ConSurename>
          
        </ConFrame1>
        <ConFrame2>
        <NumberPhone>
            +380-63-0140-897
          </NumberPhone>
        </ConFrame2>
        <MyContacts>
          Мої Контакти
        </MyContacts>
      </Contacts>
      <AllRulesAreProt>
        2026 © Всі права захищені
      </AllRulesAreProt>
    </Main>

  );
}

export default App;
