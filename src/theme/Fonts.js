const type = {
  base: 'Avenir-Book',
  emphasis: 'HelveticaNeue-Italic',
  Roboto: 'Roboto',
  normal: {
    fontFamily: 'Avenir-Book',
    fontWeight: 'normal',
  },
};

const size = {
  h1: 24,
  h2: 22,
  h3: 20,
  regular: 16,
};

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3,
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
};

const Fonts = {
  type,
  size,
  style,
};

export default Fonts;
