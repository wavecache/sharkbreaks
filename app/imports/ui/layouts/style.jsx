/* ----------- Constants ----------- */

export const blueColor = '#2196f3';

const standardFont = 'Comfortaa';

const backGroundColor = '#E9FFFD';

/* ----------- Global styles ----------- */

export const backgroundStyle = {
  backgroundColor: backGroundColor,
};

export const blueTextStyle = {
  color: blueColor,
  fontFamily: standardFont,
};

export const whiteTextStyle = {
  color: 'white',
  fontFamily: standardFont,
};

/* ----------- Navigation bar ----------- */

export const menuStyle = {
  marginBottom: '10px',
  backgroundColor: blueColor,
  fontFamily: standardFont,
};

export const subMenuStyle = {
  boxShadow: 'none',
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  borderBottom: 'solid',
  borderColor: blueColor,
  backgroundColor: backGroundColor,
  marginBottom: '20px',
  display: 'flex',
  justifyContent: 'center',
};

export const subMenuItemStyle = {
  color: blueColor,
  paddingRight: '2rem',
  paddingLeft: '2rem',
  fontFamily: 'Comfortaa',
};

/* ----------- Footer ----------- */

export const footerStyle = {
  backgroundColor: blueColor,
  paddingBottom: '10px',
  marginTop: '1rem',
};

/* ----------- Surf Break Card ----------- */

export const surfBreakCardStyle = {
  fontFamily: standardFont,
  color: blueColor,
};


/* ----------- Surf Break Page ----------- */

export const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
};

export const overlayStyle = {
  float: 'left',
  margin: '0em 3em 1em 0em',
};

export const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  top: '80px',
  zIndex: 10,
  borderColor: 'grey',
};

export const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease',
};

export const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: '800px',
};

/* ----------- Landing Page ----------- */

export const landingHeader = {
  fontSize: '50px',
  fontFamily: 'Julius Sans One',
};
